## 예약 손님 확인

예약 손님을 날짜에 맞게 조회할 수 있고, 조회된 손님 중 정보(이름, 전화번호, 생년월일)을 이용해 검색할 수 있는 사이트입니다.
조회된 간단한 정보를 눌러 해당 손님의 자세한 정보를 확인할 수 있습니다.
손님 정보 외에도 광고를 확인하고 간단한 메모를 작성, 조회, 삭제, 수정할 수 있습니다.
(1920px(width) * 1080px(height) 사이즈에 맞춰 제작되었습니다)

</br></br>

##프로젝트 구조

src
 ┣ Header<br/>
 ┃ ┣ Header.tsx
 ┃ ┗ styled.ts
 ┣ component
 ┃ ┣ AdList
 ┃ ┃ ┣ AdList.tsx -> 광고(image, title)들을 볼 수 있도록 구현된 컴포넌트 
 ┃ ┃ ┗ styled.ts
 ┃ ┗ Memo
 ┃ ┃ ┣ memo.tsx -> 메모를 입력, 조회, 수정, 삭제할 수 있도록 구현된 컴포넌트
 ┃ ┃ ┗ styled.ts
 ┣ page
 ┃ ┣ Detail
 ┃ ┃ ┣ Detail.tsx -> Main 화면에서 조회된 예약손님 중 손님 각각의 detail정보를 볼 수 있는 페이지
 ┃ ┃ ┗ styled.ts
 ┃ ┗ Main
 ┃ ┃ ┣ Main.tsx -> 해당 프로젝트의 main 화면을 담당하는 페이지
 ┃ ┃ ┗ styled.ts
 ┣ App.css
 ┣ App.tsx
 ┣ index.css
 ┣ index.tsx
 ┗ reportWebVitals.ts
 
 프로젝트 구조는 위와 같으며, route로 연결되는 두 페이지 (detail, main)는 page폴더 안에, 컴포넌트로 사용되는 (memo, adList)는 컴포넌트 파일안으로 분리하였습니다.
 또한 각각의 스타일을 담당하는 css(style-componnt) 코드를 styled 파일로 분리하여 코드 가독성을 높였습니다.
 

## 🗓️ 프로젝트 기간
- 2023.04.28 ~ 2023.04.29
</br></br>

## 👨‍👩‍👧‍👦 Member

| 장한나(FE) |
|       :-: |
| [jhn221](https://github.com/jhn221) |
</br></br>

## :low_brightness: 기술 스텍

### Front

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=black"> <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=React_Router&logoColor=white"/> <img src="https://img.shields.io/badge/Axios-181717?style=for-the-badge&logo=Axios&logoColor=white"> <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/TypeScript-FFC000?style=for-the-badge&logo=typeScript&logoColor=black"/> 


## 프로젝트 실행 방법
해당 파일을 clone 받은 후 ```npm install``` 작업을 통해서 프로젝트에 포함된 라이브러리를 설치하는 작업을 우선 진행해야 합니다.

intall이 완료되었다면 ```npm start``` 명령어를 통해서 development mode안([http://localhost:3000](http://localhost:3000))에서의 구동 화면을 확인할 수 있습니다.
