
# 🚀 Redis 설치 & 기본 실습 교육자료

## 1. 목표

* Redis를 **설치**하고, `redis-server`/`redis-cli`로 **기본 동작**을 확인한다.
* 핵심 \*\*데이터 구조(문자열, 해시, 리스트, 셋, 정렬셋)\*\*를 명령어로 익힌다.
* \*\*만료/TTL, 트랜잭션(MULTI/EXEC), Pub/Sub, Streams, 퍼시스턴스(RDB/AOF)\*\*를 실습한다.
* **보안/운영 기본**(비밀번호/ACL, 메모리 정책, 모니터링)을 점검한다.

---

## 2. 설치(옵션별)

### ✅ 2-1. Docker(권장: 환경 격리)

```bash
# 최신 Redis 7 실행
docker run -d --name redis -p 6379:6379 redis:7

# 로그 확인
docker logs redis | head

# CLI 접속(컨테이너 내부)
docker exec -it redis redis-cli
```

### 2-2. macOS(Homebrew)

```bash
brew install redis
brew services start redis
redis-cli ping   # PONG
```

### 2-3. Ubuntu/Debian

```bash
sudo apt-get update
sudo apt-get install -y redis-server
sudo systemctl enable --now redis-server
redis-cli ping   # PONG
```

### 2-4. Windows

* **WSL2 + Docker** 권장(네이티브 포트 충돌/서비스 관리가 편함)

---

## 3. 첫 실행 & 설정 빠르게 보기

### 3-1. 서버/클라이언트

```bash
# 서버(직접)
redis-server

# 클라이언트
redis-cli
```

### 3-2. 비밀번호(데모용)

> 실습 편의를 위해 커맨드라인 인자 사용(운영은 **redis.conf** 권장)

```bash
# 비밀번호 설정 서버 구동(데모)
docker run -d --name redis-auth -p 6380:6379 redis:7 \
  redis-server --requirepass "mypw" --appendonly yes

# 접속
redis-cli -p 6380 -a mypw ping   # PONG
```

### 3-3. redis.conf로 실행(운영/학습 겸용)

```bash
cat > redis.conf <<'CONF'
bind 0.0.0.0
port 6379
protected-mode yes
requirepass mypw
appendonly yes
appendfsync everysec
# RDB 스냅샷: 60초 동안 1000개 키 변경 시 저장
save 60 1000
CONF

docker run -d --name redis-conf -p 6379:6379 \
  -v "$PWD/redis.conf":/usr/local/etc/redis/redis.conf \
  -v "$PWD/data":/data \
  redis:7 redis-server /usr/local/etc/redis/redis.conf
```

---

## 4. 기본 명령 실습(핵심만)

### 4-1. 연결/기본 상태

```bash
redis-cli ping                         # PONG
redis-cli info server | head
redis-cli info memory | head
```

### 4-2. 문자열 + 만료

```bash
SET greeting "hello"
GET greeting                           # "hello"
INCR counter                           # 1 (문자열을 정수로 취급)
INCRBY counter 10                      # 11
EXPIRE greeting 10                     # 10초 후 만료
TTL greeting                           # 남은 TTL 확인
PERSIST greeting                       # 만료 제거
```

### 4-3. 키 탐색(실무 팁: KEYS 대신 SCAN)

```bash
SET demo:1 a
SET demo:2 b
SCAN 0 MATCH demo:* COUNT 100          # 순회 스캔(반복 호출)
# KEYS demo:*  # (주의) 운영 환경에서 비권장: 블로킹
```

### 4-4. 해시(Hash)

```bash
HSET user:1 name "Alice" email "a@ex.com"
HGETALL user:1
HGET user:1 email
HINCRBY user:1 loginCount 1
```

### 4-5. 리스트(List)

```bash
LPUSH tasks "A" "B" "C"               # 왼쪽으로 삽입
LRANGE tasks 0 -1
RPOP tasks
LPOP tasks
```

### 4-6. 셋(Set)

```bash
SADD tags "redis" "nosql" "cache"
SMEMBERS tags
SISMEMBER tags "redis"                 # 1
SADD tags2 "cache" "db"
SINTER tags tags2                      # 교집합
SUNION tags tags2                      # 합집합
```

### 4-7. 정렬셋(Sorted Set)

```bash
ZADD ranking 100 "alice" 80 "bob" 120 "cathy"
ZRANGE ranking 0 -1 WITHSCORES         # 오름차순
ZREVRANGE ranking 0 -1 WITHSCORES      # 내림차순
ZINCRBY ranking 15 "bob"               # bob 점수 +15
ZRANK ranking "alice"                  # 순위(0-based)
```

---

## 5. 트랜잭션, Pub/Sub, Streams

### 5-1. 트랜잭션(MULTI/EXEC, WATCH)

```bash
# 원자적 묶음
MULTI
INCR account:alice
INCR account:bob
EXEC

# 낙관적 락: 값이 바뀌면 실패
WATCH stock:item42
GET stock:item42
# (다른 세션이 stock 변경한다고 가정)
MULTI
DECR stock:item42
EXEC         # 값이 바뀌었다면 null(실패)
UNWATCH
```

### 5-2. Pub/Sub

터미널 1:

```bash
redis-cli SUBSCRIBE news
```

터미널 2:

```bash
redis-cli PUBLISH news "hello world"
```

### 5-3. Streams(간단 맛보기)

```bash
XADD mystream * message "hi"
XREAD COUNT 10 STREAMS mystream 0-0
# 실시간 구독 느낌으로는:
# XREAD BLOCK 0 STREAMS mystream $
```

---

## 6. 퍼시스턴스(RDB/AOF) 실습

### 6-1. RDB 스냅샷

```bash
SAVE            # 동기(작은 DB에서만)
BGSAVE          # 비동기(권장)
# dump.rdb 생성 확인(컨테이너: /data/dump.rdb)
```

### 6-2. AOF(Append Only File)

* `appendonly yes`, `appendfsync everysec` 권장(성능/내구성 균형)

```bash
BGREWRITEAOF    # AOF 리라이트(용량 최적화)
```

> 혼합 모드(AOF + RDB)를 통해 빠른 재시작 + 내구성 균형을 노릴 수 있음(실습은 `appendonly yes`로 충분).

---

## 7. 성능/운영 체크

### 7-1. 메모리/슬로우로그/모니터

```bash
INFO memory | head
SLOWLOG GET 10
# MONITOR  # (주의) 실시간 전체 트래픽 출력 – 실운영 금지 수준
```

### 7-2. 메모리 정책(Out-of-Memory)

```bash
CONFIG SET maxmemory 100mb
CONFIG SET maxmemory-policy allkeys-lru
# noeviction / volatile-lru / allkeys-lru / volatile-ttl 등
```

---

## 8. 보안 베스트 프랙티스(요약)

* **외부 노출 금지**: 보안그룹/방화벽/프록시 뒤에 배치
* **인증 활성화**: `requirepass` 또는 **ACL** 사용

```bash
# ACL 맛보기
ACL SETUSER alice on >StrongPw ~* +@all
AUTH alice StrongPw
ACL LIST
```

* **TLS 종단**(필요 시 프록시/Redis TLS 이미지)
* **백업/모니터링**: dump.rdb/AOF, Export, Metrics 수집(Prometheus Exporter 등)

---

## 9. Docker Compose 예시(학습용)

```yaml
# docker-compose.yml
services:
  redis:
    image: redis:7
    command: ["redis-server", "/usr/local/etc/redis/redis.conf"]
    ports:
      - "6379:6379"
    volumes:
      - ./data:/data
      - ./redis.conf:/usr/local/etc/redis/redis.conf
    restart: unless-stopped
```

```bash
docker compose up -d
```

---

## 10. 미니 과제(체크리스트 포함)

1. **세션 키 TTL 실험**

   * `SET session:alice token123 EX 30` → `TTL session:alice`로 감소 확인
   * 만료 후 `GET` 결과 확인(존재 X)

2. **정렬셋 랭킹 구현**

   * `ZADD game:s1 120 "u1" 300 "u2" 260 "u3"`
   * 상위 2명 출력: `ZREVRANGE game:s1 0 1 WITHSCORES`

3. **Pub/Sub으로 알림 브로드캐스트**

   * `SUBSCRIBE notice` / `PUBLISH notice "deploy at 18:00"`

4. **트랜잭션으로 은행 이체 시뮬레이션**

   * `WATCH balance:a balance:b` → 잔액 확인 → `MULTI`로 `DECR/INCR` → `EXEC`

5. **AOF 리라이트 체험**

   * 대량 `INCR` 후 `BGREWRITEAOF` → 파일 용량 변화 확인

**제출 체크**

* [ ] PING/PONG
* [ ] TTL 동작 스크린샷
* [ ] ZSET 상위 N 쿼리 결과
* [ ] Pub/Sub 메시지 수신 캡처
* [ ] AOF 리라이트 전/후 용량 비교

---

## 11. 트러블슈팅 빠른 표

| 증상                                | 원인 후보                           | 해결                                    |
| --------------------------------- | ------------------------------- | ------------------------------------- |
| `NOAUTH Authentication required.` | 비밀번호/ACL 설정됨                    | `AUTH <pw>` 또는 `AUTH <user> <pw>`     |
| 연결 실패                             | 포트 미개방, 컨테이너 다운                 | `docker ps`, `docker logs`, 방화벽/포트 확인 |
| 키가 사라짐                            | 만료(EXPIRE) 또는 재시작/퍼시스턴스 미설정     | 만료/퍼시스턴스 설정 점검(AOF/RDB)               |
| 메모리 오류(OOM)                       | `maxmemory` 초과, 정책 `noeviction` | `maxmemory-policy`를 LRU/TTL 등으로 변경    |
| CPU 급등                            | `MONITOR/KEYS` 남용, 큰 SCAN       | 운영에서 `KEYS` 금지, 샤딩/SCAN 튜닝            |

---
