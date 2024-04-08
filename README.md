## 비포리벤지 프로젝트 소개 👊
![BeforeRevenge feature graphic](https://github.com/WaokE/Before_Revenge/assets/128684924/83ddc42b-526d-4804-9353-a3f41211289e)
  
비포리벤지는 비디오 게임 철권 8 플레이어들을 위해 각 캐릭터별 기술 정보를 제공해주는 어플리케이션입니다. 

유사 서비스를 이용하던 중 불편함을 느끼게 되었고, 직접 이를 개선하고자 프로젝트를 기획, 개발하게 되었습니다.

느꼈던 문제점들과 기획 단계에서 고려했던 점들이 궁금하시다면 [좌충우돌 모바일 앱 개발기 - 기획](https://velog.io/@dlgudwns1207/%EC%A2%8C%EC%B6%A9%EC%9A%B0%EB%8F%8C-%EB%AA%A8%EB%B0%94%EC%9D%BC-%EC%95%B1-%EA%B0%9C%EB%B0%9C%EA%B8%B0-%EA%B8%B0%ED%9A%8D) 포스트를 참조해 주세요!

## 프로젝트 타임라인 ⏱️
<div align="center">
  
![image](https://github.com/WaokE/Before_Revenge/assets/128684924/b7c94026-4eec-4b2d-bc0a-72abf3fd416c)

</div>

## 사용한 기술 스택 🔧
<div align="center">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white">
  <img src="https://img.shields.io/badge/React Native-61DAFB?style=for-the-badge&logo=React&logoColor=white">
  <img src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=Expo&logoColor=white">
  <img src="https://img.shields.io/badge/Play Console-414141?style=for-the-badge&logo=Google Play&logoColor=white">
</div>

## 핵심 기능 ⭐
<div align="center">

### 캐릭터별 무브리스트 조회 기능

  
![KakaoTalk_20240408_040819084_04](https://github.com/WaokE/Before_Revenge/assets/128684924/7d201c1b-efe5-4ea2-8cc2-087349f0a8d3)

캐릭터 선택 화면입니다. 각 캐릭터 아이콘을 클릭하여 해당 캐릭터의 무브리스트를 조회 가능합니다.

![KakaoTalk_20240408_040819084](https://github.com/WaokE/Before_Revenge/assets/128684924/bbabed8d-d017-4ada-b00e-ae4ec2fa112c)

무브리스트 화면. 번역된 기술명, 기술 특징 등 유사 서비스와 차별화 된 질의 데이터를 제공합니다.

![KakaoTalk_20240408_040819084_01](https://github.com/WaokE/Before_Revenge/assets/128684924/9002c58b-1601-4c72-b671-4be8a3bdfebc)

필터 추가 화면. 기술명, 노트 검색 외에 다양한 필터를 추가하여 원하는 기술들의 정보를 검색할 수 있습니다. [필터 사용법](https://continuous-hearing-7ca.notion.site/a38540d97a73454986f1b4c56c5ec163?pvs=74)
  
![KakaoTalk_20240408_040819084_03](https://github.com/WaokE/Before_Revenge/assets/128684924/c600fa40-5d98-4591-a1df-84fa64efaed9)![KakaoTalk_20240408_042709350](https://github.com/WaokE/Before_Revenge/assets/128684924/7128dd00-a1f6-4531-ba3c-8e39a0490a61)

원하는 기술들을 다양한 필터링 기능을 통해 검색한 모습

</div>

### 추후 유저를 위한 다양한 기능이 추가 예정입니다.

## 해결한 문제 ❓

**`Lazy-loading`과 `React.memo()`를 이용한 어플리케이션 성능 개선**

🚨 문제 발생

어플리케이션 특성 상 **다량의 이미지, 텍스트를 포함한 데이터 컴포넌트를 최소 100여개 ~ 300개** 가량 한 스크린에 렌더링해야 합니다. 이를 단순 스크롤 뷰 형태로 렌더링했을 때, 큰 부하가 발생하여 어플리케이션 동작 속도가 느려지는 문제가 발생하였습니다.

✅ 문제 해결

`Lazy-loading`이 적용된 리액트 네이티브의 내장 컴포넌트 `FlatList`, `SectionList` 를 이용하여 한 번에 모든 데이터를 렌더링하지 않고 유저 화면에 보여지는 부분만을 렌더링하도록 변경하였으며, 리액트의 `memo()`를 이용하여 불필요한 상황에서의 컴포넌트 리렌더링을 방지하였습니다. 이러한 개선을 통해 유저가 원하는 데이터를 화면에 렌더링하는 데 걸리는 시간을 약 80%가량 단축할 수 있었습니다.

[커밋1](https://github.com/WaokE/Before_Revenge/commit/6ea272bc1e25e48ee38288a1f68e7b4809c97363) 
[커밋2](https://github.com/WaokE/Before_Revenge/commit/5d61d9a8144a989886057e58356b0b9b18167af7)
