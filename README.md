# 27th airpnp Frontend

- 에어비앤비 클론 프로젝트

### Introduce

- 서비스 소개

  - 지역에 내가 원하는 재능을 가진 사람의 시간을 빌리는 서비스

- 팀원

  - FE: 길도연, 김혜리, 이나은
  - BE: 이주명, 김은혜, 염기욱

- 기술 스택
  - FE: JavaScript, React.js, HTML5/CSS3(Styled-Components), react-router(v6), NAVER MAP API, kakao Social SDK, S3(배포)
  - BE: Back-End : Django, Python, MySQL, Docker, JWT, Bcrypt, AWS EC2, RDS, S3(이미지)

---

## 설치 및 실행

1. 레포지토리 클론
2. 터미널로 해당 레포지토리 디렉토리 접속 및 'npm install' 입력
3. 브라우저 localhost:3000

(네이버 지도 API 키가 작성되어있는 .env 환경변수가 없으면 작동하지 않습니다)

---

## 구현 기능

#### Nav

- 검색 버튼 클릭시 모달 애니메이션 구현 및 스타일링
- 회원 로직을 위한 드롭다운 메뉴 구현
- 커스텀 Datepicker를 통해 특정 날짜 사이의 호스트 검색기능 구현

#### 호스트 리스트 페이지

- 페이지네이션을 통해 다수의 데이터를 페이지로 분리
- 체크박스 및 네이버 맵을 이용한 카테고리/지역 필터링
- 슬릭슬라이더를 통한 이미지 미리보기 기능

#### 호스트 상세 페이지

- 전반적인 레이아웃 구현
- 더보기 버튼 클릭시 description 모달창 구현
- slick 라이브러리 사용하여 사진 캐러셀 기능 구현 및 스타일링

#### 호스트 등록 페이지

- 네스트 라우팅을 통한 호스트 등록절차 기능 구현
- 이미지 업로드 이후 미리보기 기능 구현
- FormData를 이용하여 데이터 서버 전송

#### 로그인

- 카카오 SDK를 이용한 카카오 소셜로그인 구현

---

### Resource

- [홈페이지](http://air-pnp.s3-website.ap-northeast-2.amazonaws.com)
- [Frontend Github](https://github.com/wecode-bootcamp-korea/27-2nd-AirPnP-frontend)
- [Backend Github](https://github.com/wecode-bootcamp-korea/27-2nd-AirPnP-backend)
- [백엔드 API 명세서](https://docs.google.com/spreadsheets/d/13lN96EICsWmgxzHQCBqDGXE2Bxc1LshyV1XEfqyjpXg/edit#gid=982449144)
- [Trello](https://trello.com/b/j5vWRW3R)
- [Notion](https://www.notion.so/c1835beb5b48420fad09622a1a5e5c67)

---

### Preview

[![airpnp](https://i.ytimg.com/an_webp/fRfMZ1xvpuI/mqdefault_6s.webp?du=3000&sqp=CODSlY4G&rs=AOn4CLB28N9pm0deOfdEAjqry821toWgvA)](https://youtu.be/fRfMZ1xvpuI)

---

#### Reference

Reference 이 프로젝트는 에어비앤비 사이트를 참조하여 학습목적으로 만들었습니다. 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다. 이 프로젝트에서 사용하고 있는 사진 대부분은 직접 촬영한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
