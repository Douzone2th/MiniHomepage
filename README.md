# MiniHomepage

---

<a href="#bottom" style= " font-size:35px">과제 확인 click</a>

- git 명령어 
```
- 깃 초기 셋팅(원하는 본인의 디렉토리에서)
git init

- 프로젝트 clone
git clone 주소

- 원격 연결 확인
git remote -v

- 원격 연결
git remote add upstream 조직주소
git remote add origin 개인주소

- pull : 원격 저장소의 정보를 가져오면서 자동으로 로컬 브랜치에 병합(Merge)까지 수행해주는 명령어 
git pull upstream main

- 원격 개인저장소 및 원격 조직 저장소에 올리기
- 올리기전에 pull이나 fetch로 변경점 확인
첫번째 방법. 
git pull upstream main

두번째 방법. 
git fetch upstream
git rebase upstream/main

1. add : 변경된 파일 스테이징

. 모든 파일 스테이징
git add .

원하는 파일만 스테이징
git add web/css/main.css

2. commit : 변경된 파일 추가 및 삭제 및 변경 사항, 변경점 기록 
git commit -m "커밋 메시지"

3. push : 원격저장소에 변경된 파일 올리기
git push origin main
```
- team4 git commit 컨벤션
```
추가시
feat:3/18, add news menu 
feat:3/18, add index.html  
feat:3/18, 메인페이지 추가
feat:3/18, 장소 메뉴 추가
fix:3/19, fix location.html
docs:3/20, add web/js
refator:3/21, refactor web/js/main.js
```
---
## 4팀 미니홈페이지 과제

<a id="bottom"></a>
- 4팀을 소개하는 미니홈페이지를 제작해주세요.
- 백엔드 없이 정적 웹페이지만 만들어 주세요.
- 기간 3/21 ~ 3/22
---
## 회의

- 소스 공유
  - 깃
- 메인 페이지
  - header(공통)
  
  - nav(메뉴 - english)
    - 팀 소개
      - 소개
      - 발자취
    - 뉴스
      - 팀 뉴스(최근 근황)
      - 일정 및 계획
    - 갤러리
      - 사진첩 
      - 알고리즘 스터디
      - 팀과제(지금까지 서로 해왔었던 팀과제 - 카페 참조)
    - 장소
      - 교육장소
        - 교육장소 찾아오는길   
      - 맛집장소
        - 맛집장소 공유
        - 음식 사진(인스타 감성 맛집)
      
  - side var(제외)
  - footer(공통)
    
--- 
## 역할 분담
- 정재빈
  - 장소, 찾아오는길 
    - 지도 API, 이미지
    - 맛집 장소 찾기, 음식 사진 
    - 메인 페이지 보조
- 윤우형
  - 갤러리,사진첩
    - 팀원들 사진 
    - 지금까지 한 알고리즘 데이터  
    - 지금까지 한 팀 발표 자료
    - 메인 페이지 보조
- 김희수
  - <메인페이지>
  - 팀 뉴스
    - 팀원들 소식
    - 팀 일정(노션느낌)
    - 팀 계획
- 이상윤
  - 팀 소개
    - 팀명, 팀 간략한 소개, 시(하상욱)
    - 발자취, 이력, 경력
---
##### font
- 다양한 google Fonts 및 kopub체 , 배달의 민족체, 엘리스체
##### icon
- [material](https://material.io/search.html?q=filled)

<hr>

##### 최종 수정 : 220319 정재빈 
