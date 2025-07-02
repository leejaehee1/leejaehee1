
# 🖥️ Shell 기본 명령어

## 🎯 수업 목표

* 터미널 환경에 익숙해지고, Shell 명령어로 파일과 디렉토리를 다루는 방법을 익힌다.
* 실무에서 자주 사용하는 기본 명령어를 익힌다.

---

## 1️⃣ Shell이란?

* **Shell**: 운영체제와 사용자 사이의 인터페이스
* CLI(Command Line Interface)를 통해 명령어 기반으로 작업 수행

---

## 2️⃣ 기본 명령어 소개

| 명령어     | 설명                  | 예시                             |
| ------- | ------------------- | ------------------------------ |
| `pwd`   | 현재 디렉토리 경로 출력       | `pwd`                          |
| `ls`    | 현재 디렉토리 내 파일 목록 보기  | `ls`, `ls -l`, `ls -a`         |
| `cd`    | 디렉토리 이동             | `cd Documents`, `cd ..`        |
| `mkdir` | 새 디렉토리 만들기          | `mkdir my_folder`              |
| `touch` | 새 파일 만들기            | `touch file.txt`               |
| `cp`    | 파일/디렉토리 복사          | `cp file.txt backup.txt`       |
| `mv`    | 파일/디렉토리 이동 또는 이름 변경 | `mv file.txt folder/`          |
| `rm`    | 파일/디렉토리 삭제          | `rm file.txt`, `rm -r folder/` |
| `cat`   | 텍스트 파일 내용 출력        | `cat file.txt`                 |
| `echo`  | 문자열 출력              | `echo "Hello World"`           |
| `clear` | 화면 내용 지우기           | `clear`                        |

---

## 3️⃣ 실습 예제

```bash
# 1. 연습용 폴더 만들기
mkdir shell_practice
cd shell_practice

# 2. 텍스트 파일 만들기
touch memo.txt

# 3. 내용 쓰기
echo "오늘 shell 명령어를 배웠다!" > memo.txt

# 4. 내용 확인
cat memo.txt

# 5. 복사 및 이름 변경
cp memo.txt memo_backup.txt
mv memo_backup.txt memo_old.txt

# 6. 폴더로 이동
mkdir logs
mv memo_old.txt logs/

# 7. 삭제하기
rm memo.txt
```

---

## 4️⃣ 자주 쓰는 옵션 정리

| 명령어     | 옵션               | 설명 |
| ------- | ---------------- | -- |
| `ls -l` | 길게 보기 (파일 정보 포함) |    |
| `ls -a` | 숨김 파일 포함         |    |
| `rm -r` | 폴더까지 삭제 (재귀적 삭제) |    |
| `cp -r` | 폴더 복사            |    |

---

## 5️⃣ 보너스 명령어

| 명령어       | 설명                        |
| --------- | ------------------------- |
| `history` | 이전에 입력한 명령어 목록 보기         |
| `whoami`  | 현재 사용자 이름 출력              |
| `date`    | 현재 날짜와 시간 출력              |
| `man`     | 명령어의 매뉴얼 보기 (예: `man ls`) |
| `grep`    | 문자열 검색                    |
| `find`    | 파일 찾기                     |

---

## 🧠 마무리 퀴즈 (예시)

1. 현재 위치를 확인하려면 어떤 명령어를 사용하나요? → `pwd`
2. 숨겨진 파일까지 보려면? → `ls -a`
3. `folderA`를 삭제하려면? → `rm -r folderA`

---

## 📂 추천 실습 주제

* 나만의 파일 정리 스크립트 만들기
* 디렉토리 구조 시각화 도전
* 반복 명령어 자동화 연습 (다음 단계: `for`, `bash script` 등)

---

# 🛠 Shell 기본 명령어 실습 예제

## 📁 실습 목표

* 디렉토리 생성, 이동
* 파일 생성, 보기, 복사, 이동, 삭제
* 명령어 옵션 사용
* 실습용 프로젝트 구조 구성

---

## ✅ Step 1. 실습용 디렉토리 만들기

```bash
# 데스크탑에 연습용 디렉토리 만들기
cd ~/Desktop
mkdir shell_practice
cd shell_practice
```

---

## ✅ Step 2. 텍스트 파일 생성 및 내용 쓰기

```bash
# 파일 생성
touch diary.txt

# 내용 추가
echo "2025-07-01: 쉘 공부 시작!" > diary.txt

# 줄 추가
echo "오늘은 pwd, ls, cd 명령어를 배움." >> diary.txt
```

---

## ✅ Step 3. 파일 확인

```bash
# 파일 내용 출력
cat diary.txt

# ls 옵션 확인
ls
ls -l
ls -a
```

---

## ✅ Step 4. 디렉토리 작업

```bash
# logs 폴더 만들고 이동
mkdir logs
cd logs

# 다시 상위로
cd ..

# 파일 복사 및 이동
cp diary.txt diary_backup.txt
mv diary_backup.txt logs/
```

---

## ✅ Step 5. 파일 삭제 및 디렉토리 삭제

```bash
# diary.txt 삭제
rm diary.txt

# logs 폴더 삭제
rm -r logs
```

---

## ✅ Step 6. 환경 정보 출력

```bash
# 현재 위치 확인
pwd

# 현재 사용자 확인
whoami

# 현재 날짜/시간 보기
date
```

---

## 🔁 추가 실습 (자율)

```bash
# 여러 개의 파일 만들기
touch memo1.txt memo2.txt memo3.txt

# 하나의 폴더에 모두 이동
mkdir memos
mv memo*.txt memos/

# 숨김 파일 만들기
touch .hidden.txt
ls -a
```

---

## 📦 실습 후 디렉토리 구조 예시

```
shell_practice/
├── memos/
│   ├── memo1.txt
│   ├── memo2.txt
│   └── memo3.txt
└── .hidden.txt
```

---

### 🧠 Shell 기본 명령어 마무리 퀴즈 (10문제)

1. 현재 작업 중인 디렉토리 경로를 출력하는 명령어는 무엇인가요?
   A. `ls`
   B. `pwd` ✅
   C. `cd`
   D. `mkdir`

---

2. 숨김 파일(.으로 시작하는 파일)까지 모두 보려면 어떤 명령어를 사용해야 하나요?
   A. `ls -l`
   B. `ls -h`
   C. `ls -a` ✅
   D. `ls -d`

---

3. 디렉토리 상위 폴더로 이동하려면 어떤 명령어를 쓰나요?
   A. `cd /`
   B. `cd .`
   C. `cd ..` ✅
   D. `cd ~`

---

4. 새로운 빈 텍스트 파일을 만드는 명령어는?
   A. `cat`
   B. `makefile`
   C. `touch` ✅
   D. `nano`

---

5. `memo.txt` 파일을 `memo_backup.txt`로 복사하는 올바른 명령어는?
   A. `cp memo_backup.txt memo.txt`
   B. `copy memo.txt memo_backup.txt`
   C. `cp memo.txt memo_backup.txt` ✅
   D. `mv memo.txt memo_backup.txt`

---

6. 파일이나 디렉토리를 삭제할 때 사용하는 명령어는?
   A. `delete`
   B. `rm` ✅
   C. `remove`
   D. `erase`

---

7. 파일의 내용을 터미널에 출력하고 싶을 때 사용하는 명령어는?
   A. `touch`
   B. `cat` ✅
   C. `echo`
   D. `nano`

---

8. 다음 중 폴더를 생성하는 명령어는?
   A. `mkdir` ✅
   B. `make`
   C. `mkfile`
   D. `cd`

---

9. `rm -r folder` 명령어의 의미로 알맞은 것은?
   A. 폴더 안에 있는 파일만 삭제
   B. 폴더를 강제로 이동
   C. 폴더 및 그 안의 모든 내용 삭제 ✅
   D. 폴더를 압축

---

10. `echo "Hello"` 명령어는 어떤 결과를 출력하나요?
    A. `Hello` ✅
    B. `echo Hello`
    C. 빈 파일 생성
    D. 아무 일도 일어나지 않음

