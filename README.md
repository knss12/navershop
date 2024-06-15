# React, Html, Css 연습용 프로젝트

## 1. 개요

- 프로젝트 이름 : NaverShop
- 개발 기간 : 2024.06.12 ~ 2024.06.15
- 개발 환경 : React, Redux
- 작업 관리 : Git
- #### 설치 라이브 러리

        npm install react-ShoeShop
        npm install react-router-dom@6
        npm install react-bootstrap
        npm install react-redux
        npm install axios

- #### 파일 구성

```
   📦 src
   ┣ 📂 routes
   ┃ ┗ 📜Accessory.js
   ┃ ┗ 📜Cart.js
   ┃ ┗ 📜Detail.js
   ┃ ┗ 📜Home.js
   ┣ 📜App.js
   ┣ 📜App.css
   ┣ 📜index.css
   ┣ 📜index.js
   ┣ 📜logo.svg
   ┣ 📜reportWebVitals.js
   ┣ 📜data.js
   ┣ 📜store.js
   ┗ 📜setupTests.js
```

## 2. 프로젝트 설명

- #### React와 Redux를 사용하여 장바구니 기능 구현

## 3. 주요 기능

## Home 화면

- #### 메인상품 보여주는 화면

  <div align="center">
    <img src="https://github.com/knss12/navershop/assets/121605903/986e92c9-d54e-4e8f-834e-0420ceaa7802"> 
  </div>

- 간단히 Html, Css 연습용 프로젝트

- #### Navbar에 Home, Accessory, Cart 링크 나열

  <div align="center">
    <img src="https://github.com/knss12/navershop/assets/121605903/3210289e-9bd8-4ee3-955e-0a7bffe3feb5"> 
  </div>

- 각각의 배너 클릭 시 해당 화면으로 이동한다.

## Accessory 화면

- #### 악세서리 아이템을 나열

  <div align="center">
    <img src="https://github.com/knss12/navershop/assets/121605903/c98905c6-3acc-4348-9e13-085aeecabb02"> 
  </div>

- data.js에 저장된 데이터를 가져와서 나열해준다.

## Detail 화면

- #### 악세서리 데이터 info 관련

  <div align="center">
      <img src = "https://github.com/knss12/navershop/assets/121605903/6521611b-9961-47ae-be0f-b27ed3d7345e"> 
  </div>

- 각 악세서리 상품명 클릭 시 해당 상품의 Detail 화면으로 이동
- useParams를 사용하여 id를 가져온다.
- Detail 페이지의 데이터는 props와 id를 이용하여 사용한다.
- useDispatch를 이용하여 '바로구매' 버튼 누르면 Cart 화면에 아이템이 추가된다.

## Cart 화면

- #### 장바구니 화면

  <div align="center">
      <img src = "https://github.com/knss12/navershop/assets/121605903/2fe1b925-4806-4d2d-be3f-b39622ac393e"> 
  </div>

- '+' 버튼을 누르면 수량이 추가된다.
