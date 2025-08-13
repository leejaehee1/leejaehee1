## GitHub Pages로 HTML 호스팅하는 방법

### 1. **저장소 준비**

GitHub 저장소를 만들고, 그 안에 `public` 폴더를 생성하여 그 안에 HTML 파일을 넣습니다.

* 예를 들어, `join.html` 파일을 `public` 폴더 안에 넣을 수 있습니다.
* 저장소 구조 예시:

  ```
  my-project/
  ├── public/
  │   └── join.html
  └── README.md
  ```

### 2. **GitHub Pages 설정**

GitHub Pages를 설정하여 `/ (root)` 폴더에 있는 HTML 파일을 서비스하려면, GitHub 저장소의 **Settings** 페이지에서 GitHub Pages를 활성화해야 합니다.

1. **저장소의 Settings 페이지 열기**

   * GitHub 저장소의 **Settings** 탭으로 이동합니다.

2. **Pages 메뉴 선택**

   * 좌측 메뉴에서 **Pages**를 선택합니다.

3. **Source 선택**

   * **Source**에서 배포할 브랜치를 선택해야 합니다.

     * 보통 `main` 브랜치를 선택합니다.

   * **Folder** 옵션에서 **`/ (root)`** 을 선택할 수 있습니다.

4. **저장**

   * **Save** 버튼을 클릭하여 변경 사항을 저장합니다.

### 3. **배포 URL 확인**

GitHub Pages 설정이 완료되면, 페이지가 배포될 URL이 나타납니다.

* 기본적으로 `https://username.github.io/repository-name/` 형식으로 제공됩니다.
* `public` 폴더 안에 있는 `index.html`은 `https://username.github.io/repository-name/` 주소에서 바로 접근할 수 있습니다.

### 4. **배포 후 확인**

배포가 완료되면, GitHub Pages는 `public` 폴더에서 HTML 파일을 자동으로 제공하게 됩니다. `index.html`이 `public` 폴더 안에 있으면, URL을 통해 바로 확인할 수 있습니다.

---

### 추가 : dothome 무료 호스팅 사용
1. https://www.dothome.co.kr/
2. 웹호스팅 -> 무료호스팅 신청
3. FTP 프로그램(winscp, filezila 등) 서버 접속하기
4. 서버에 내가 만든 파일 올리기
5. 웹 브라우저에서 인터넷에 접속하여 domain 주소로 확인하기