Clean Architecture는 **소프트웨어 구조의 안정성과 유연성을 높이기 위한 설계 원칙**입니다. 로버트 C. 마틴(Uncle Bob)이 제안했으며, **의존성 방향을 명확히 정하고, 관심사를 분리해 유지보수성과 테스트 용이성을 높이는 것**이 핵심입니다.

---

## 📌 핵심 개념 요약

### 🎯 목표

* **비즈니스 로직**을 UI, DB, 프레임워크에 **의존하지 않도록** 설계
* 변경에 강하고, 테스트 가능하고, 재사용 가능한 구조 만들기

---

## 🏛️ 계층 구조 (원형 구조로 표현)

```
[외부] ▶▶▶ [프레임워크 & 드라이버]  
            ▶ [인터페이스 어댑터]  
               ▶ [유스케이스]  
                  ▶ [엔티티]  
[내부]
```


![클린 아키텍처](https://blog.kakaocdn.net/dna/51iMQ/btroQ6XHN7M/AAAAAAAAAAAAAAAAAAAAAPQdI9PqpaAbC4__F2uNg14kTBc7j8-kOlgp-eVIz4yj/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1753973999&allow_ip=&allow_referer=&signature=fLsx39mDoYw7MOy%2F1sjYy3uCSWg%3D)


![클린 아키텍처 + MVVM](https://user-images.githubusercontent.com/41438361/122940567-8c35b680-d3af-11eb-9ef8-f780e999495b.png)

![alt text](image.png)

---

## 🔄 계층별 역할

| 계층                          | 역할                 | 예시                                |
| --------------------------- | ------------------ | --------------------------------- |
| **Entities (도메인 모델)**       | 비즈니스 규칙, 핵심 객체     | `User`, `Order`, `Product` 등      |
| **Use Cases (Application)** | 애플리케이션 규칙, 프로세스 흐름 | `RegisterUser`, `PlaceOrder`      |
| **Interface Adapters**      | 데이터 변환 & 입출력       | Controller, Presenter, DTO Mapper |
| **Frameworks & Drivers**    | 외부 기술, UI, DB 등    | React, Express, MySQL, Firebase   |

> **의존성은 바깥에서 안쪽으로만 향해야 합니다.**
> 즉, UseCase는 Entity에 의존 가능하지만, 반대는 ❌

---

## 🔄 의존성 규칙 (Dependency Rule)

> **“안쪽은 바깥을 모른다.”**

* UI가 바뀌어도 유스케이스는 그대로
* DB가 MySQL → MongoDB로 바뀌어도 엔티티는 영향 없음
* 외부는 내부를 호출할 수 있어도, 내부는 외부를 몰라야 함

---

## ✏️ 간단 예시 (User 등록 기능)

* **Entity**: `User { id, name, email }`
* **UseCase**: `RegisterUser(input): Result`
* **Interface Adapter**: `UserController`, `UserDTO`
* **Framework/Driver**: Express, PostgreSQL

---

## ✅ 장점

| 항목          | 설명                    |
| ----------- | --------------------- |
| **독립성**     | UI, DB, 프레임워크로부터 자유로움 |
| **테스트 용이성** | 유스케이스와 엔티티는 테스트하기 쉬움  |
| **변경 용이성**  | UI, DB 변경 시 영향 최소화    |
| **유지보수성**   | 관심사 분리 덕분에 각 레이어가 명확  |

---

## 🚫 주의할 점

* **초기 설계가 복잡해 보일 수 있음**
* **과도한 계층 분리는 작은 프로젝트엔 부담**
* 너무 형식적으로 적용하면 **오히려 생산성이 떨어질 수 있음**

---

## 📚 관련 개념

* **SOLID 원칙**
* **Hexagonal Architecture (Ports & Adapters)**
* **Onion Architecture**
* **DDD (Domain-Driven Design)**

---

## 📌 한 문장 정리

> **Clean Architecture는 "변경에 강한 소프트웨어"를 위한 설계법이며, 핵심 비즈니스 로직을 외부 변화로부터 보호하는 것을 목표로 합니다.**
