## 프로젝트 소개 👊
![feature graphics](https://github.com/WaokE/Before_Revenge/assets/128684924/bc53fc08-3476-4480-868c-22b969590113)

TF8은 비디오 게임 철권 8 플레이어들을 위해 각 캐릭터별 기술 정보를 제공해주는 어플리케이션입니다. 

유사 서비스를 이용하던 중 불편함을 느끼게 되었고, 직접 이를 개선하고자 프로젝트를 기획, 개발하게 되었습니다.

느꼈던 문제점들과 기획 단계에서 고려했던 점, 트러블슈팅 등이 궁금하시다면 
[앱 개발기-기획](https://velog.io/@dlgudwns1207/%EC%A2%8C%EC%B6%A9%EC%9A%B0%EB%8F%8C-%EB%AA%A8%EB%B0%94%EC%9D%BC-%EC%95%B1-%EA%B0%9C%EB%B0%9C%EA%B8%B0-%EA%B8%B0%ED%9A%8D)을 포함한 블로그의 포스트들을 참조해 주세요!

## 프로젝트 타임라인 ⏱️
<div align="center">
  
![TimelineCycle](https://github.com/WaokE/TF8/assets/128684924/d1ef0cd1-6a9f-4bc1-b7c5-a9070f12f921)

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

### 캐릭터별 무브리스트 조회, 필터링 기능

![TF 8](https://github.com/WaokE/TF8/assets/128684924/5003e7b2-b2d8-42e7-bbf7-7b709c7048e7)


</div>

## 해결한 문제 ❓

**`Lazy-loading`과 `React.memo()`를 이용한 어플리케이션 성능 개선**

🚨 문제 발생

어플리케이션 특성 상 **다량의 이미지, 텍스트를 포함한 데이터 컴포넌트를 최소 100여개 ~ 300개** 가량 한 스크린에 렌더링해야 합니다. 이를 단순 스크롤 뷰 형태로 렌더링했을 때, 큰 부하가 발생하여 어플리케이션 동작 속도가 느려지는 문제가 발생하였습니다.

✅ 문제 해결

`Lazy-loading`이 적용된 리액트 네이티브의 내장 컴포넌트 `FlatList`, `SectionList` 를 이용하여 한 번에 모든 데이터를 렌더링하지 않고 유저 화면에 보여지는 부분만을 렌더링하도록 변경하였으며, 리액트의 `memo()`를 이용하여 불필요한 상황에서의 컴포넌트 리렌더링을 방지하였습니다. 이러한 개선을 통해 유저가 원하는 데이터를 화면에 렌더링하는 데 걸리는 시간을 약 80%가량 단축할 수 있었습니다.

[커밋1](https://github.com/WaokE/Before_Revenge/commit/6ea272bc1e25e48ee38288a1f68e7b4809c97363) 
[커밋2](https://github.com/WaokE/Before_Revenge/commit/5d61d9a8144a989886057e58356b0b9b18167af7)

**`React Native`의 `PixelRatio API`를 이용한 일관성 있는 UI/UX 제공**

🚨 문제 발생

어플리케이션 런칭 후, **몇몇 사용자에게서 특정 UI가 잘려서 보이는 문제가 있다는 제보**를 받았습니다. 에러을 처음 발견했을 때에는 단순한 사이즈 변경을 통해 해결할 수 있는 문제라고 판단하였고, 수치를 조정하습니다. 하지만 업데이트 배포 후에도 아래와 같이 동일한 문제가 반복되었습니다.

![에러 제보 리뷰](https://github.com/WaokE/TF8/assets/128684924/46062c6a-a161-495b-870a-b809944a48f0)

✅ 문제 해결

다양한 환경에서의 테스트를 거친 후에, 해당 이슈가 **기기의 네이티브 폰트 사이즈 설정값**에 따라 발생한다는 것을 알게 되었습니다.  컨테이너의 단순 사이즈 조정을 통해서는 해당 이슈의 발생을 피할 수 없다는 것을 알 수 있었고, 이를 해결하기 위해 `React Native` 의 `PixelRatio.getFontScale()` API를 이용하여 사용자 기기의 `Font Scaling` 값에 접근한 후, `{Font Size} * {Font Scailing}` 값을 폰트 크기로 사용하였습니다. 이를 통해 사용자 기기의 설정값에 관계없이 일관된 UI/UX를 제공할 수 있었습니다.
