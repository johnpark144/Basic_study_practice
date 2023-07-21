// ######### 리마인더 #######################################################################################################################################
// expo-auth
// mongoDB같이쓰기

// https://www.youtube.com/watch?v=fWHiSuz-V68&list=PLiY8mHmShYeVLqydQGXfrF7-katOAT-Lg&index=24    // 요거 코드보고 정리해보기 (Gestures and Animations)
// https://www.youtube.com/watch?v=Ud_GWxu1_Xg&t=185s  // 요거 코드보고 정리해보기 (auth)

// 화면 height, scroll등 값 불러오기

// 달력
// Realm
// 얼굴 인식
// 알림 기능

// ######### 인덱스 (Ctrl + F) ########################################################### (-> 인덱스에 있는데 찾기 안되면 찾아서 인덱스 변경) ##################






// ######### 자주 쓰이는 라이브러리들 참고 #######################################################################################################################
// React Native Elements: 컴포넌트를 쉽게 스타일링하고 구성 (https://reactnativeelements.com/)
// AsyncStorage: 영구 저장소로, 로컬 스토리지에 앱 데이터를 저장할 때 용이 (@react-native-async-storage/async-storage)
// React Native Vector Icons: 다양한 아이콘을 제공해주는 패키지 (https://github.com/oblador/react-native-vector-icons)
// react-native-gesture-handler: 고급 터치 및 제스처 인식 기능을 사용하여 사용자 인터페이스를 구축 (https://github.com/software-mansion/react-native-gesture-handler).
// react-native-reanimated: 부드럽고 자연스러운 애니메이션 (https://github.com/software-mansion/react-native-reanimated)
// react-native-web: 웹 앱으로 변환하고 디버깅하기 위함 (https://github.com/necolas/react-native-web)
// react-native-svg: 안드로이드와 iOS에서 SVG 이미지를 사용하는 데 도움 (https://github.com/react-native-svg/react-native-svg)
// react-native-push-notification: 안드로이드와 iOS에서 푸시 알림 (https://github.com/zo0r/react-native-push-notification)
// Lottie-react-native: Lottie 애니메이션을 사용할 수 있도록 함 (https://github.com/lottie-react-native/lottie-react-native)
// react-native-firebase: Firebase와 쉽게 통합할 수 있도록(https://rnfirebase.io/)
// react-native-picker-select: 드롭다운 형태를 구현 (https://github.com/lawnstarter/react-native-picker-select)
// react-native-video: 비디오 재생을 위함
// react-native-maps: 지도를 사용하기 위함
// react-native-maps-directions는 구글 지도를 기반으로 경로, 길찾기 기능 제공
// react-native-camera: 카메라를 사용


// ######## 기본 참고 사이트 ############################################################################################################################
// https://reactnative.dev/docs/intro-react-native-components  // 리액트 네이티브 핵심 컴포넌트
// https://reactnavigation.org/docs/getting-started  // React Navigation 사이트
// https://expo.github.io/router/docs/  // Expo Router 사이트
// https://icons.expo.fyi     // 아이콘 사이트

// https://snack.expo.dev/?platform=ios  // Android, Ios 가상 환경으로 확인

// ######## Expo 기본 세팅 ############################################################################################################################
// npm i -g expo-cli   // Expo의 개발, 빌드 및 배포를 돕는 툴 설치

// npx create-expo-app@latest // 다른 라우터(React Navigation 등)용으로 네이티브 앱 만들기
// npx create-expo-app@latest -e with-router  // Expo-router용으로 리액트 네이티브 앱 만들기


// ######## Tailwind css ##################################################################################################################################
// 타입스크립트 사용하려면 홈페이지 참고
// https://www.nativewind.dev/

// npm i nativewind
// npm i -D tailwindcss@3.3.2    // 에러 고쳐질떄까지 이 버전으로
// npx tailwindcss init

// ############## tailwind.config.js
module.exports = {
  content: [
    // 사용하는 파일, 폴더 선택해서 적용
    './App.{js,jsx,ts,tsx}',
    './index.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './screen/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};


// ################ babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",    // -------> 기존에 내용에 이 부분만 추가
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin",
      require.resolve("expo-router/babel"),
    ],
  };
};


// ######## styled-components ##################################################################################################################################
// npm i styled-components
// 일반 리액트에서 사용한방법과 동일

// ################ 
import { Text, View } from 'react-native';
import { styled } from 'styled-components/native';    // native를 붙여야함

const HomeTitle = styled.Text`
  height: 90%;
  width: 100%;
  background-color: grey;
`;

const Home = () => {
  return (
    <View>
      <HomeTitle>스타일 컴포넌트</HomeTitle>
    </View>
  );
};

export default Home;



// ################################################################################################## eslint, prettier ############################
// https://bobbyhadz.com/blog/replace-double-quotes-with-single-in-vscode    // eslint, prettier 오류 시 참고

// ############## eslint 설정
// npm i eslint --save-dev  // eslint 다운
// npx eslint --init  // eslint 초기설정
// npm i @react-native-community/eslint-config --save-dev

// ############## .eslintrc.js
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    '@react-native-community',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'off',
      },
    ],
    semi: ['error', 'never'],
    'comma-dangle': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-use-before-define': [
      'error',
      { functions: true, classes: true, variables: false },
    ],
  },
};


// ############## prettier 설정
// npm i --save-dev --save-exact prettier  // prettier 다운
// .prettierrc.js 파일 생성
// package.json 안에 scripts에 "lint": "eslint ." 입력  // cli로 전체 문법 검사

// ############## .prettierrc (나중에 변경)
{
  "printWidth": 80,
  "singleQuote": true,
  "trailingComma": "all"
}


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@ Weather App @@@@@@@@ (React Navigation 이용) @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ######## 기본 컴포넌트 ##################################################################################################################################
import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
// View = Div 태그, Text = P 태그, 
// SafeAreaView 는 탐색 표시줄, 탭 표시줄, 툴바, 기타 상위 뷰에서 다루지 않는 뷰 부분을 반영하도록 패딩을 자동 적용시켜줌
// StyleSheet는 Css효과를 줄 수있는 객체

const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text>Current Weather</Text>
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <Text>High: 8 Low: 6</Text>
      </View>
    </SafeAreaView>
  );
};

// 스타일
const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 30,
    backgroundColor: "lightgray",
    flex: 1,
  },
  container: {
    backgroundColor: "pink",
    flex: 1,
    alignItems: "center",
  },
  temp: {
    color: "black",
    fontSize: 48,
  },
  feels: {
    color: "black",
    fontSize: 30,
  },
});

export default App;
// ######## 버튼(TouchableOpacity, Button) ##################################################################################################################################
import React from 'react';
import { Text, Button, TouchableOpacity, StyleSheet } from 'react-native';

function OurButton() {
  const onPress = () => {
    console.log('press');
  };

  return (
    <>
      <TouchableOpacity style={styles.container} onPress={onPress}>  // 스타일시트로 스타일 줄수있음, (더 자주쓰임)
        <Text style={styles.buttonText} numberOfLines={1}>Hello</Text>  {/* numberOfLines 으로 몇 줄까지 쓸지 작성하고 초과하면 ... 처리 */}
      </TouchableOpacity>
      <Button
        onPress={onPress}
        title='Hello'
        color='#841584'    // Props에 스타일 지정
        accessibilityLabel='Learn more about this purple button'
      />
    </>
  );
}

// ######## 아이콘 ############################################################################################################################
// https://icons.expo.fyi     // 아이콘 검색하여 사용하게 함

import { Feather } from "@expo/vector-icons";
<Feather name="sun" size={100} color="black" />

// ######## FlatList (리액트에서 map과 비슷, ScrollView와 마찬가지로 자동으로 스크롤 가능하게함) ###############################################################################
import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  StatusBar,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

// 배열식으로 된 데이터 (데이터를 펼치기 위해)
const DATA = [
  {
    dt_txt: '2022-08-30 16:00:00',
    main: {
      temp_min: 8.55,
      temp_max: 7.55,
    },
    weather: [
      {
        main: 'Clear',
      },
    ],
  },
  {
    dt_txt: '2022-08-30 18:00:00',
    main: {
      temp_min: 8.55,
      temp_max: 7.55,
    },
    weather: [
      {
        main: 'Clouds',
      },
    ],
  },
  {
    dt_txt: '2022-08-30 20:00:00',
    main: {
      temp_min: 8.55,
      temp_max: 7.55,
    },
    weather: [
      {
        main: 'Rain',
      },
    ],
  },
];

// 렌더 방식 컴포넌트
const Item = ({ dt_txt, min, max, condition }) => {
  return (
    <View style={styles.item}>
      <Feather name={'sun'} size={50} color={'white'} />
      <Text style={styles.date}>{dt_txt}</Text>
      <Text style={styles.temp}>{min}</Text>
      <Text style={styles.temp}>{max}</Text>
    </View>
  );
};

function UpcomingWeather() {
  // 렌더 방식
  const renderItem = ({ item }) => (
    <Item
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text>Upcoming Weather</Text>
      <FlatList
        data={DATA} // 배열식으로 된 데이터
        renderItem={renderItem} // 렌더 방식
        keyExtractor={(item) => item.dt_txt} // Key 값
      />
    </SafeAreaView>
  );
}

// 스타일
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0, // 상태바 크기만큼 마진 주기
    backgroundColor: 'red',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'pink',
  },
  temp: {
    color: 'white',
    fontSize: 20,
  },
  date: {
    color: 'white',
    fontSize: 15,
  },
});

export default UpcomingWeather;
// ######## Image, ImageBackground, 배열 스타일 ############################################################################################################################
import { Image, ImageBackground } from 'react-native';

function City() {
  const { cityName, countryName, cityText } = styles;
  return (
       // 이미지
      <Image
        source={require('../../assets/upcoming-background.jpg')}  // 이미지 위치 (import from형식으로 불러와도됨)
        style={styles.image}  // 스타일
      />
       // 이미지 배경
      <ImageBackground  // 배경은 셀프 클로징이 아닌 배경을 줄 컴포넌트들을 감쌈
        source={require('../../assets/upcoming-background.jpg')}
        style={styles.image}
      >
          // 스타일을 배열로 주기
        <Text style={[cityName, cityText]}>London</Text>
        <Text style={[countryName, cityText]}>UK</Text>
      </ImageBackground>
  );

const styles = StyleSheet.create({
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
});
// ######## 네비게이션, 라우팅 (React Navigation 위주) ############################################################################################################################
// 리액트 네이티브에서 가장 많이 사용되는 세 라이브러리
// React Navigation : 빠르게 시작하고 상대적으로 간단한 응용 프로그램을 개발
// Expo router : 폴더 라우팅 가능

// https://reactnavigation.org/docs/getting-started  // React Navigation 사이트
// https://github.com/react-navigation/react-navigation  // React Navigation 깃허브

// 필수 다운
// npm i @react-navigation/native      // React Navigation 다운
// npx expo install react-native-screens react-native-safe-area-context      // react-native-screens는 앱의 화면 전환과 탐색을 최적화 // react-native-safe-area-context는 앱이 안전 영역 안에서 표시되도록

// 종류에 따라 다르게 다운
// npm i @react-navigation/bottom-tabs  // 버텀 탭 종류(위 아래)로 사용하기 (이번 앱에 사용)
// npm i @react-navigation/native-stack  // 네이티브 스택 종류(only 위)로 사용하기

// ################ App.js
import React from 'react';
import CurrentWeather from './src/screens/CurrentWeather';
import UpcomingWeather from './src/screens/UpcomingWeather';
import City from './src/screens/City';
import { NavigationContainer } from '@react-navigation/native'; // 전체 네비게이션을 감싸줌
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Navigator, Screen 컴포넌트
import { Feather } from '@expo/vector-icons';

// Navigator는 네비게이션 정의할 부분을 감싸줌, Screen은 어디로 네비게이션 할지
// 리액트라우터와 비교 : NavigationContainer = BrowserRouter // Navigator = Routes // Screen = Route
const { Navigator, Screen } = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Navigator
      screenOptions={{
        tabBarActiveTintColor: 'tomato', // 네비게이션되 있을때 색깔
        tabBarInactiveTintColor: 'grey', // 그 외에 기존 색깔
        tabBarStyle: {
          // 버튼 누르는 부분 스타일
          backgroundColor: 'lightblue',
        },
        // 헤더의 배경색, 테두리, 그림자 등 헤더의 뒷 배경과 관련된 속성을 지정
        headerStyle: {
          backgroundColor: 'lightblue',
        },
        // 헤더의 제목의 글꼴, 크기, 색상, 줄 간격 등과 관련된 스타일 속성을 지정
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
          color: 'tomato',
        },
      }}
    >
        <Screen
          name={'Current'}
          component={CurrentWeather} // 네비게이션할 컴포넌트
          options={{
            tabBarIcon: (
              { focused } // 네비바 아이콘 지정, 함수 파라미터안에 active되있는지 안되있는지 "focused"라는 불린 값 존재
            ) => (
              <Feather
                name={'droplet'}
                size={25}
                color={focused ? 'tomato' : 'black'} // active되있을떄 tomato색 아이콘으로
              />
            ),
          }}
        />
        <Screen
          name={'Upcoming'}
          component={UpcomingWeather}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name={'clock'}
                size={25}
                color={focused ? 'tomato' : 'black'}
              />
            ),
          }}
        />
        <Screen
          name={'City'}
          component={City}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name={'home'}
                size={25}
                color={focused ? 'tomato' : 'black'}
              />
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;

// ######## 로딩 (ActivityIndicator, 스피너) ############################################################################################################################
import React, { useState } from 'react';
import { ActivityIndicator, View } from 'react-native'; // ActivityIndicator는 스피너를 제공해주는 컴포넌트

const App = () => {
  const [loading, setLoading] = useState(true);
  if (loading) {
    return (
      <View>
        <ActivityIndicator size={'large'} color={'blue'} />  // 스피너의 크기와 색을 지정 가능
      </View>
    );
  }
};
export default App;
// ######## 환경변수 ############################################################################################################################
// npm i -D react-native-dotenv  // 환경변수

// ################ babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          moduleName: 'react-native-dotenv',
        },
      ],
    ],
  };
};

// 위에거 안되면
// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: ['babel-preset-expo'],
//     plugins: [
//       [
//         'module:react-native-dotenv',
//         {
//           moduleName: '@env',
//           path: '.env',
//           blacklist: null,
//           whitelist: null,
//           safe: false,
//           allowUndefined: false,
//         },
//       ],
//     ],
//   };
// };
// ############### .env
WEATHER_API_KEY=ab68a116541f49e9ca4946c8bdf733b1

// ###############
import { WEATHER_API_KEY } from 'react-native-dotenv';
// import { WEATHER_API_KEY } from '@env';

console.log(WEATHER_API_KEY);

// ######## expo-location (위치 정보), 커스텀 훅(위치로 날씨API를 사용하여 날씨 불러옴) #######################################################################################################
// npx expo install expo-location  // 위치 정보에 관한 라이브러리

// ################ hooks/useGetWeather.js (커스텀 훅)
import { useState, useEffect } from 'react';
import * as Location from 'expo-location';  // 위치 정보 라이브러리
import { WEATHER_API_KEY } from 'react-native-dotenv';

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState([]);
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);

  // 위도, 경도를 이용하여 날씨정보 찾기
  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric` // 날씨정보 API
      );
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError('could not fetch weather');
    } finally {
      setLoading(false);
    }
  };

  // 경도, 위도 저장하기
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync(); // 위치정보 가져와도 되는지 요청

      // 위치정보 요청에 거절한경우
      if (status !== 'granted') {
        setError('permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({}); // 현재 위치 정보를 가져옴
      setLat(location.coords.latitude);
      setLon(location.coords.longitude);
      await fetchWeatherData();
    })();
  }, [lat, lon]);

  return [loading, error, weather];
};


// ################ App.js
import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import { useGetWeather } from './src/hooks/useGetWeather';

const App = () => {
  const { container } = styles;
  const [loading, error, weather] = useGetWeather(); // 현재 위치를 가져오고, 그위치의 날씨정보 가져오는 커스텀 훅

  if (weather && weather.list) {
    return (
      // 날씨정보를 네비게이션에 전달
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  }

  if (loading) {
    return (
      <View style={container}>
        <ActivityIndicator size={'large'} color={'blue'} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
});

export default App;

// ################ Components/Tabs.js
import React from 'react';
import CurrentWeather from '../screens/CurrentWeather';
import UpcomingWeather from '../screens/UpcomingWeather';
import City from '../screens/City';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

const { Navigator, Screen } = createBottomTabNavigator();

function Tabs({ weather }) {
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          backgroundColor: 'lightblue',
        },
        headerStyle: {
          backgroundColor: 'lightblue',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
          color: 'tomato',
        },
      }}
    >
      <Screen
        name={'Current'}
        options={{
          tabBarIcon: (
            { focused }
          ) => (
            <Feather
              name={'droplet'}
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          ),
        }}
      >
        {/* 네비게이션탭들에 props를 넘겨주고 싶을떄 component props대신에 사용 */}
        {() => <CurrentWeather weatherData={weather.list[0]} />}
      </Screen>
     // ... 생략 ...
    </Navigator>
  );
}

export default Tabs;

// ################ screens/CurrentWeather.js
import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';
import { weatherType } from '../utilities/weatherType';

//  받아온 날씨데이터 뿌리기
const CurrentWeather = ({ weatherData }) => {
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData;

  const weatherCondition = weather[0].main;

  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherCondition].backgroundColor },
      ]}
    >
      <View style={container}>
        <Feather
          name={weatherType[weatherCondition].icon}
          size={100}
          color='white'
        />
        <Text style={tempStyles}>{temp}</Text>
        <Text style={feels}>{`Feels like ${feels_like}`}</Text>
        <RowText
          messageOne={`High: ${temp_max}`}
          messageTwo={`Low: ${temp_min}`}
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>
      <RowText
        messageOne={weather[0].description}
        messageTwo={weatherType[weatherCondition].message}
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // ... 생략 ...
});

export default CurrentWeather;

// ######## 시간 관련 라이브러리 (시간을 어떤 포맷으로 변경할지) ####################################################################################################################
// npm i moment    // 라이브러리 다운
// https://momentjs.com/

// ################
import moment from 'moment/moment';
return (
  // ...생략...
      <View style={dateTextWrapper}>
        <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
        <Text style={date}>{moment(dt_txt).format('h:mm a')}</Text>
      </View>
  // ...생략...
  );


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@ JobSeeking App @@@@ (Expo router 이용) @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// npm i -g expo-cli   // Expo를 사용 가능하게 하는 것 설치
// npx create-expo-app@latest -e with-router  // Expo라우터를 이용하게
// npm i expo-font axios react-native-dotenv  // 폰트, axios, 환경변수 이용할 수 있도록


// ######## 기본세팅, 네비게이션, 라우팅 (Expo router 위주: 폴더위치로 라우팅) ############################################################################################################
// ################ app/_layout.js (공통으로 들어갈 layout을 담당)
import { Stack } from 'expo-router';

const Layout = () => {
  return <Stack />;  // 모든 스크린이 Stack을 거침
};

export default Layout;

// ################ app/index.js (Home)
import { useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Stack, useRouter } from 'expo-router';

const Home = () => {
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: 'lightblue' }, // 헤더 스타일
          headerShadowVisible: false, // 헤더와 컨텐츠 구분하는 선 보여줄지 여부
          headerLeft: () => (
            // 헤더에 왼쪽부븐에 들어갈 내용
            <ScreenHeaderBtn iconUrl={require("../assets/icons/menu.png")} dimension='60%' />
          ),
          headerRight: () => (
            // 헤더에 오른쪽부븐에 들어갈 내용
            <ScreenHeaderBtn iconUrl={require("../assets/images/kemal.jpg")} dimension='100%' />
          ),
          headerTitle: '', // 헤더 가운데 들어갈 말
          // headerShown: false,    // 헤더를 보일지 말지
        }}
      />

      {/* ScrollView는 스크롤 하는 View // showsVerticalScrollIndicator는 세로 스크롤 보일지 여부 cf) showsHorizontalScrollIndicator는 가로 스크롤 */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
         <Text>Home</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;


// ######## Redirect과 useRouter ######################################################################################################################################################
import { Redirect, useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  return <>
    <Redirect href='/home' />      // 이 컴포넌트를 발견했을 때 href에 링크로 이동시킴

    <TouchableOpacity
      onPress={() => {
        router.push(`/search/${item}`); // router.push가 실행될때 화면 이동시킴 (Nextjs와 비슷)
      }}
    >
      <Text>item</Text>
    </TouchableOpacity>
    </>
}

// ######## onChangeText, 이미지 resizeMode, contentContainerStyle #########################################################################################################################################
import { useState } from 'react';
import {
  View,
  Text,
  TextInput, // 텍스트 작성 하도록
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { useRouter } from 'expo-router';
import styles from './welcome.style';
import { icons, SIZES } from '../../../constants';

const jobTypes = ['Full-time', 'Part-time', 'Contractor'];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState('Full-time');

  return (
    <View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            // onChange대신 onChangeText이고, 첫 매개변수가 일반 event 대신 웹의 event.target.value와 같이 전달
            onChangeText={(text) => setSearchTerm(text)}
            placeholder='What are you looking for?'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search} // 이미지 src
            resizeMode='contain'
            // cover(디폴트) : 비율유지하되 View와 비율 일치 않으면 일부분 잘림
            // contain : 비율유지하되 모든 영역이 View안에 보이도록
            // stretch : View의 크기대로 리사이징하여 비율이 잘라질수있음
            // repeat : 바둑판식
            // center : 중앙에
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList // map같이 반복 출력 (ScrollView와 마찬가지로 자동으로 스크롤 가능하게 함)
          data={jobTypes}
          renderItem={(
            { item } // item에 data 안에 배열들의 값이 하나하나 전달됨
          ) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`); // 화면 이동시킴 (Nextjs와 비슷)
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }} // ScrollView와 FlatList의 스타일이라 보면됨
          horizontal // 수평으로 정렬
        />
      </View>
    </View>
  );
};

export default Welcome;


// ######## 폰트 ######################################################################################################################################################
// https://fonts.google.com/    // 구글 폰트

// ################ app/_layout.js
import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require('../assets/fonts/DMSans-Bold.ttf'), // assets에 있는 폰트를 불러옴
    DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
    DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
  });

  if (!fontsLoaded) return null;  // 폰트가 불려오자 않았으면 null

  return <Stack />;
};

export default Layout;


// ######## useFetch (직업 구하는 데이터 가져오는 커스텀훅) ##################################################################################################################################
import { useState, useEffect } from 'react';
import axios from 'axios';
import { RAPID_API_KEY } from '@env';

const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': rapidApiKey,
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);

      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;

// ################ Popularjobs.jsx
import useFetch from "../../../hook/useFetch";
// ... 생략 ...

const Popularjobs = () => {
  const { data, isLoading, error } = useFetch("search", {
    query: "React developer",
    num_pages: "1",
  });
// ... 생략 ...
  return (
    // ... 생략 ...
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item) => item.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
  );
};

export default Popularjobs;

// ######## 다이나믹 라우팅, useSearchParams, 스크롤 내려서 새로고침, 탭에 따라 다르게 컴포넌트 렌더링  #############################################################################################
// ################ PopularJobCard.jsx
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

const PopularJobCard = ({ item, selectedJob, setSelectedJob }) => {
  const router = useRouter();
  
  return (
    <TouchableOpacity
      onPress={() => {
        router.push(`/job-details/${item.job_id}`);  // job-detail 폴더에 SearchParams로써 다이나믹하게 적용
      }}
    >
      // ... 생략 ...
    </TouchableOpacity>
  );
};

export default PopularJobCard;

// ################ app/job-details/[id].js
import { Stack, useRouter, useSearchParams } from 'expo-router';
import { useCallback, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,  // 스크롤 새로고침을 위한
} from 'react-native';

import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from '../../components';
import { COLORS, icons, SIZES } from '../../constants';
import useFetch from '../../hook/useFetch';

const tabs = ['About', 'Qualifications', 'Responsibilities'];

const JobDetails = () => {
  const params = useSearchParams(); // id SearchParams 값을 가지고있음
  const router = useRouter();

  const { data, isLoading, error, refetch } = useFetch('job-details', {
    job_id: params.id,  // params에 id값 대입
  });

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [refreshing, setRefreshing] = useState(false); // 디폴트로 새로고침을 안하고잇음

  // 스크롤을 내리는 새로고침시 작동
  const onRefresh = useCallback(() => {
    setRefreshing(true); // 새로고침 화살표 등장
    refetch(); // 커스텀 훅에서 만들어논 refetch
    setRefreshing(false); // 새로고침 화살표 사라짐
  }, []);

  // Tab을 누를때 activeTab의 값이 Tab의 이름으로 바껴서 그에맞게 컴포넌트 출력
  const displayTabContent = () => {
    switch (activeTab) {
      case 'Qualifications':
        return (
          <Specifics
            title='Qualifications'
            points={data[0].job_highlights?.Qualifications ?? ['N/A']}
          />
        );

      case 'About':
        return (
          <JobAbout info={data[0].job_description ?? 'No data provided'} />
        );

      case 'Responsibilities':
        return (
          <Specifics
            title='Responsibilities'
            points={data[0].job_highlights?.Responsibilities ?? ['N/A']}
          />
        );

      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: 'lightblue' },
          headerShadowVisible: false, // 헤더 밑 그림자 존재 여부
          headerBackVisible: false, // 디폴트 뒤로가기 버튼 존재 여부
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension='60%'
              handlePress={() => router.back()} // 뒤로가기 기능을 handlePress라는 props로 전달
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension='60%' />
          ),
          headerTitle: '',
        }}
      />

      <>
        <ScrollView
          showsVerticalScrollIndicator={false} // 스크롤을 보여줄지 여부
          refreshControl={
            // refreshing=true는 스크롤을 내릴때 시계모양 화살표나오게함, onRefresh는 스크롤을 내릴때 함수 실행
            // 즉, 스크롤 내릴때 새로고침 하기위한 기능
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {isLoading ? (
            <ActivityIndicator size='large' color={COLORS.primary} />
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : data.length === 0 ? (
            <Text>No data available</Text>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              <Company
                companyLogo={data[0].employer_logo}
                jobTitle={data[0].job_title}
                companyName={data[0].employer_name}
                location={data[0].job_country}
              />

              <JobTabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />

              {displayTabContent()}
            </View>
          )}
        </ScrollView>

        <JobFooter
          url={
            data[0]?.job_google_link ??
            'https://careers.google.com/jobs/results/'
          }
        />
      </>
    </SafeAreaView>
  );
};

export default JobDetails;

// ######## url 연결 ######################################################################################################################################################
// ... 생략 ...
<TouchableOpacity
  style={styles.applyBtn}
  onPress={() => Linking.openURL(url)} // 클릭하면 그 url과 연결되도록
>
  <Text style={styles.applyBtnText}>Apply for job</Text>
</TouchableOpacity>
// ... 생략 ...
    
// ######## 정규표현식으로 판단 ######################################################################################################################################################
// ################ PopularJobCard.js
// ... 생략 ...
<TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
  <Image
    source={{
      uri: checkImageURL(item?.employer_logo) // 정규표현식으로 이미지 파일인지 확인하기
        ? item.employer_logo // 이미지가 있으면 그 이미지 사용, 없으면 기본사진
        : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg',
    }}
    resizeMode='contain'
    style={styles.logoImage}
  />
</TouchableOpacity>
// ... 생략 ...

// ################ utils/index.js
export const checkImageURL = (url) => {
    if (!url) return false
    else {
        const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$', 'i');    // 이미지 파일인지 아닌지
        return pattern.test(url);  // 정규표현식에 인한 결과를 불린 값으로 전달
    }
};


// ######## FlatList의 ListHeaderComponent와 ListFooterComponent ###############################################################################################################################
// ... 생략 ...
<FlatList
  data={searchResult}
  renderItem={({ item }) => (
    <NearbyJobCard
      job={item}
      handleNavigate={() => router.push(`/job-details/${item.job_id}`)}
    />
  )}
  keyExtractor={(item) => item.job_id}
  contentContainerStyle={{ padding: SIZES.medium, rowGap: SIZES.medium }}
  // ListHeaderComponent는 renderItem들이 렌더되기 이전 헤더로써 먼저 렌더할 것
  ListHeaderComponent={() => (
    <>
        // ... 생략 ...
    </>
  )}
  // ListFooterComponent 푸터로써 renderItem들 이후에 렌더할 것
  ListFooterComponent={() => (
    <View style={styles.footerContainer}>
        // ... 생략 ...
    </View>
  )}
/>
// ... 생략 ...

// ######## 페이지 네이션 ##################################################################################################################################################################
// ... 생략 ...
const JobSearch = () => {
  const params = useSearchParams();
  const router = useRouter();

  const [searchResult, setSearchResult] = useState([]);
  const [searchLoader, setSearchLoader] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [page, setPage] = useState(1);  // 페이지 디폴트 1
  
const handleSearch = async () => {
    setSearchLoader(true);
    setSearchResult([]);

    try {
      const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/search`,
        headers: {
          'X-RapidAPI-Key': rapidApiKey,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
        },
        params: {
          query: params.id,  // id params에 입력된 어떤 검색결과
          page: page.toString(),  // 그 검색결과의 몇 페이지 정보를 fetch 할지
        },
      };

      const response = await axios.request(options);
      setSearchResult(response.data.data);
    } catch (error) {
      setSearchError(error);
    } finally {
      setSearchLoader(false);
    }
  };

  // 페이지네이션 핸들러
const handlePagination = (direction) => {
    if (direction === 'left' && page > 1) {
      setPage(page - 1);
      handleSearch();
    } else if (direction === 'right') {
      setPage(page + 1);
      handleSearch();
    }
  };

// ... 생략 ...
<View style={styles.footerContainer}>
  <TouchableOpacity
    onPress={() => handlePagination('left')}  // handlePagination함수에 left 인자
  >
    <Image
      source={icons.chevronLeft}
      style={styles.paginationImage}
      resizeMode='contain'
    />
  </TouchableOpacity>
  <View style={styles.paginationTextBox}>
    <Text style={styles.paginationText}>{page}</Text>
  </View>
  <TouchableOpacity
    onPress={() => handlePagination('right')}  // handlePagination함수에 right 인자
  >
    <Image
      source={icons.chevronRight}
      style={styles.paginationImage}
      resizeMode='contain'
    />
  </TouchableOpacity>
</View>
// ... 생략 ...


// ######## deploy ##################################################################################################################################################################
// npm i -g expo-cli --force   // Expo의 개발, 빌드 및 배포를 돕는 툴 설치

// !!!! 곧 배포방법 바뀔 수도 있음 !!!!

// ################ index.js (package.json과 같은루트에 있는)
// expo-router 사용하는 경우
import { registerRootComponent } from "expo";
import { ExpoRoot } from "expo-router";

export function App() {
  const ctx = require.context("./app");
  return <ExpoRoot context={ctx} />;
}

registerRootComponent(App);

// ################
// expo publish    // 배포  // bash에서 작동 안되면 cmd 터미널에서



// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@ Deliveroo_clone @@@@ (React Navigation) @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// ######## React Navigation의 useNavigation, useRoute ################################################################################### useNavigation의 setOptions ##########################
// @react-navigation/native의 useNavigation의 메서드
  // "addListener": 
  // "canGoBack":
  // "dispatch": 
  // "getId":
  // "getParent": 
  // "getState": 
  // "goBack": 이전 스크린으로 이동합니다.
  // "isFocused":
  // "navigate": 지정된 스크린으로 이동합니다.
  // "pop": 스택에서 현재 스크린을 팝하여 이전 스크린으로 이동합니다.
  // "popToTop": 
  // "push": 새로운 스크린을 스택에 푸시하여 이동합니다.
  // "removeListener": 
  // "replace": 현재 스크린을 다른 스크린으로 대체합니다.
  // "reset": 스택 내의 모든 스크린을 교체하여 새로운 스크린으로 이동합니다.
  // "setOptions": 스크린 옵션을 바꿔줌
  // "setParams": 다른 스크린으로 매개변수를 전달합니다.

// ################
import { View, Text, StyleSheet } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const { container } = styles;
  const navigation = useNavigation(); // navigation 변수에

  // 첫 렌더링전
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'testing',  // 위 부분 타이틀 바꿔주기
      headerShown: false,   // 헤더 보일지 여부
    });
  }, []);

  return (
    <View>
      <Text style={container}>HomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    color: 'blue',
  },
});

export default HomeScreen;

// ################################################################################################################ useNavigation의 navigate (페이지 이동)과 useRoute (Params 가져오기) ###########
// ################ App.js
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen';
import RestaurantScreen from './screen/RestaurantScreen';

const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        {/* name은 navigate할때 사용됨 */}
        <Screen name='Home' component={HomeScreen} />
        <Screen name='Restaurant' component={RestaurantScreen} />
      </Navigator>
    </NavigationContainer>
  );
}

// ################ RestaurantCard.js (useNavigation으로 props전달하며 navigate시킴)
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
const navigation = useNavigation();  // navigate 하기위해 사용
return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Restaurant', {   // navigation기능으로 Restaurant으로 감, 2번째 인수로 props전달
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          short_description,
          dishes,
          long,
          lat,
        });
      }}
      style={card}
    >
        // ... 생략 ...
</TouchableOpacity>
  );
};

// ################ RestaurantScreen.js (navigate된곳과 params)
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';

const RestaurantScreen = () => {
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();    // navigate되며 전달된 props를 params로받음
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default RestaurantScreen;


// ######## Sanity.io ###################################################################################################################### sanity 서버 부분 #################################
// https://www.sanity.io/      // Sanity 사이트에서 프로젝트를 만들어야함
// npm create sanity@latest -- --template get-started --project [프로젝트ID] --dataset production --provider google  // 프로젝트와 sanity 연결  (폴더명을 sanity로 바꿔주는게 나음)
// cd [폴더명]  -->  npm start    // sanity 폴더안에 들어가서 작동시키기 (스키마 지정 후)


// ################ [폴더명]/schemas/index.ts 
import category from './category'
import dish from './dish'
import featured from './featured'
import restaurant from './restaurant'

export const schemaTypes = [restaurant, category, dish, featured]

// ################ [폴더명]/schemas/restaurant.ts 
export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Restaurant name',
      validation: (Rule: any) => Rule.required(), // 무조건 포함 되야 하는 항목
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short description',
      validation: (Rule: any) => Rule.max(200), // 200자 이내로
    },
    {
      name: 'image',
      type: 'image', // 이미지 첨부 가능
      title: 'Image of the Restraurant',
    },
    {
      name: 'lat',
      type: 'number',
      title: 'Latitude of the Restraurant',
    },
    {
      name: 'long',
      type: 'number',
      title: 'Latitude of the Restraurant',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Restaurant address',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Enter a Rating from (1-5 Stars)',
      validation: (Rule: any) =>
        Rule.required().min(1).max(5).error('Please enter a Valur between 1 and 5'), // 최소 1 최대 5까지 가능, 에러메세지
    },
    {
      name: 'type',
      type: 'reference',
      title: 'Category',
      validation: (Rule: any) => Rule.required(),
      to: [{type: 'category'}], // category 라는 파일을 세부 스키마로 지정
    },
    {
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [{type: 'reference', to: [{type: 'dish'}]}], // 배열 필드에서 사용(여러 개 타입 나열가능)  // dish 라는 파일을 세부 스키마로 지정
    },
  ],
}

// ################ [폴더명]/schemas/category.ts 
export default {
  name: 'category',
  type: 'document',
  title: 'Menu Category',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Categoty name',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of the Categoty',
    },
  ],
}
// ############################################################################################################################# sanity 클라이언트 연결하기 ##############################
// npm i @sanity/client @sanity/image-url
// npm install react-native-url-polyfill --save-dev  // 폴리필

// ################ sanity.js  // 클라이언트 쪽 package.json 과 동일경로애서
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import 'react-native-url-polyfill/auto';

const client = createClient({
  projectId: 'zpj6qd2o', // sanity.config.ts 혹은 sanity사이트에있음
  dataset: 'production',
  useCdn: true,
  apiVersion: '2021-10-21',
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;

// ################
// http://localhost:19006이랑 http://localhost:3000를 CORS origins 리스트에 적어두기
// 방법 1 ) https://www.sanity.io/manage/personal/project/(프로젝트ID)/api에 CORS origins 적기
// 방법 2 ) cd sanity --> sanity cors add http://localhost:19006

// ################################################################################################################################ sanity 배포하기 ##############################
// cd sanity --> sanity deploy    (로컬과 배포한 사이트가 이때부터 연동됨)

// ################################################################################################################################# graphQL 쿼리 예시 ############################
// sanity 배포한 사이트에 Vision에서 쿼리

*[_type == "featured"]{  // 여러가지 조건 넣을 수 있음
  ...,                  //  전체 불러오기
  restaurants[]->{  //  restaurants 배열에서
    ...,
    dishes[]->,
    type->{
      name  //  name만 불러오기
    }
  }
}

// ############################################################################################################################## sanity Fetch 하기, 다이나믹 쿼리, 이미지url ################
// fetch 하는데 오류가 있는 경우 sanity 데이터들이 publish가 잘 되었는지 확인해줘야함

// ################ HomeScreen.js
import React, { useState, useEffect } from 'react';
import sanityClient from '../sanity';  // projectId와 연결된 데이터 호출 하게 가능
// ... 생략 ...

const HomeScreen = () => {
// ... 생략 ...
const [featuredCategories, setFeaturedCategories] = useState([]);
useEffect(() => {
    sanityClient
      .fetch(    // GraphQL 쿼리에 맞춰서 Fetch함
       `
          *[_type == "featured"]{
            ...,
            restaurants[]->{
              ...,
              dishes[]->
              }
            }
        `
      )
      .then((data) => {
        setFeaturedCategories(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
// ... 생략 ...
return (
// ... 생략 ...
      {featuredCategories?.map((category) => (  // FlatList 사용해도 됨
        <FeaturedRow
          key={category._id}
          id={category._id}
          title={category.name}
          description={category.short_description}
        />
      ))}
  // ... 생략 ...
)}


// ################ FeaturedRow.js  (GraphQL 쿼리 다이나믹하게 적용)
import React, { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import sanityClient from '../sanity'; // projectId와 연결된 데이터 호출 하게 가능

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        // 2번째 인수로 id를 $id 부분에 다이나믹하게 적용
        `
            *[_type == "featured" && _id == $id]{
                ...,
                restaurants[]->{
                  ...,
                  dishes[]->,
                  type->{
                    name
                  }
                }
              }[0]
            `,
        { id } // { id:id }  // props id를 전달
      )
      .then((data) => {
        setRestaurants(data?.restaurants);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
        {/* 레스토랑카드.... */}
        {restaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
};
  // ... 생략 ...

// ################ RestaurantCard.js  (Sanity 이미지 Url사용)
import {
  Image,
} from 'react-native';
import { urlFor } from '../sanity'; // 이미지url 생성용
// ... 생략 ...
const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
    // ... 생략 ...
  return (
    // ... 생략 ...
      <Image
        source={{
          uri: urlFor(imgUrl).url(), // Sanity에서 Fetch해온 이미지를 Url로 전환하여 사용
        }}
        style={cardImage}
      />
    // ... 생략 ...
  );
};
  // ... 생략 ...

// ######## 애니메이션 효과 ######################################################################################################################################################
// npm i react-native-animatable -save    // 애니메이션 주기
// https://www.npmjs.com/package/react-native-animatable 

// ################ 
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';

const PreparingOrderScreen = () => {
  const { orderScreenContainer, PreparingOrderImage } = styles;
  return (
    <SafeAreaView style={orderScreenContainer}>
      <Animatable.Image // Text도 가능
        source={require('../assets/orderLoading.gif')}
        animation='slideInUp' // 애니메이션 종류
        iterationCount={1} // 반복 회수
        style={PreparingOrderImage}
      />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;

const styles = StyleSheet.create({
  orderScreenContainer: {
    backgroundColor: '#51B8CC',
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  PreparingOrderImage: {
    height: 150,
    width: 150,
  },
});

// ######## progress바 라이브러리 (로딩중, 스피너) #################################################################################################################################
// npm i react-native-progress    // progress Bar
// https://www.npmjs.com/package/react-native-progress

// npx expo install react-native-svg  // react-native-progress 사용 중 svg 오류뜰 경우 설치

// ################ 
import React from 'react';
import * as Progress from 'react-native-progress';

const PreparingOrderScreen = () => {
  return (
      <Progress.Circle size={60} indeterminate={true} color='white' />
  );
};


// ######## 그림자 효과 ######################################################################################################################################################
const styles = StyleSheet.create({
  etaContainer: {
    shadowColor: 'black', // 그림자 색
    elevation: 4, // 그림자 강도
  },
});

// ######## Map ######################################################################################################################################################
// expo install react-native-maps

// ################ 여기선 구현하지 않은 참고 사항
// 지도 주소 찾기 기능은 googlePlacesAutocpmplete 사용
// 지도 길찾기 기능은 react-native-maps-directions을 사용
// 두 지점 가는데 걸리시는 시간 및 거리 찾기 기능은 API인 googleapi의 distancematrix를 사용

// ################ 
import MapView, { MapMarker } from 'react-native-maps';

const DeliveryScreen = () => {
  return (
      {/* 지도 */}
      <MapView
        initialRegion={{   // 초기 지역 위도, 경도
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005, // 첫 화면 확대 정도(작을수록 확대)
          longitudeDelta: 0.005, // 첫 화면 확대 정도(작을수록 확대)
        }}
        mapType='mutedStandard' // 지도 종류
        style={MapContainer}
      >
        <MapMarker
          coordinate={{ latitude: restaurant.lat, longitude: restaurant.long }}
          title={restaurant.title}  // 마커 타이틀
          description={restaurant.short_description}    // 마커 설명
          identifier='origin'
          pinColor='#00CCBB'
        />
      </MapView>
  );
};

export default DeliveryScreen;

// ###############################################################################################################################
// ########## 기타 ReactNative 유용한것들 ###########################################################################################
// ###############################################################################################################################
// ######## 카메라 기능 ###############################################################################################################################
// npx expo install expo-camera expo-media-library

// ################ 
import { Camera, CameraType } from 'expo-camera';
import { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import { Entypo } from '@expo/vector-icons';

const CameraScreen = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);

  const cameraRef = useRef(null);

  // 카메라 허용 여부
  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync(); // 카메라 여부 창 띄우기
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted'); // 카메라 허용
    })();
  }, []);

  // 카메라 허용하지 않은경우
  if (hasCameraPermission === false) return <Text>No access to camera</Text>;

  // 사진 찍을 때
  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync(); // 사진 데이터
        setImage(data.uri);
      } catch (e) {
        console.log(e);
      }
    }
  };

  // 사진 저장
  const saveImage = async () => {
    if (image) {
      try {
        await MediaLibrary.createAssetAsync(image);
        alert('picture save!');
        setImage(null);
      } catch (e) {
        console.log(e);
      }
    }
  };

  // 버튼 생성  // 파라미터 : (아이콘, 클릭한경우 실행함수, 글씨, 색깔(디폴트: 하얀색))
  const Button = (icon, onPress, text, color = 'white') => {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Entypo name={icon} size={28} color={color} />
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {!image ? ( // 아직 찍은 사진이 없는 경우, 카메라 작동
        <Camera
          style={styles.camera}
          type={type}
          flashMode={flash}
          ref={cameraRef}
        >
          <View style={styles.cameraOption}>
            {/* 전면, 후면 카메라 여부 */}
            {Button('retweet', () => {
              setType(
                type === CameraType.back ? CameraType.front : CameraType.back
              );
            })}
            {/* 플래시 여부 */}
            {Button(
              'flash',
              () => {
                setFlash(
                  flash === Camera.Constants.FlashMode.off
                    ? Camera.Constants.FlashMode.on
                    : Camera.Constants.FlashMode.off
                );
              },
              null,
              flash === Camera.Constants.FlashMode.on ? 'white' : 'yellow'
            )}
          </View>
        </Camera>
      ) : (
        // 찍은 이미지
        <Image source={{ uri: image }} style={styles.camera} />
      )}
      <View>
        {image ? ( // 사진찍은 후 다시찍을지, 저장할지 여부 버튼
          <View style={styles.afterSnap}>
            {Button('retweet', () => setImage(null), 'Re-take')}
            {Button('save', saveImage, 'Save')}
          </View>
        ) : (
          // 사진찍기 버튼
          Button('camera', takePicture, 'Take a picture')
        )}
      </View>
    </View>
  );
};
export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  camera: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  afterSnap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
  },
  button: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#F1F1F1',
    marginLeft: 10,
  },
  cameraOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
  },
});

// ######## splash screen (비디오로), 비디오 ###############################################################################################################################
// npx expo install expo-splash-screen
// npx expo install expo-av

// ################ Splash.js
import { StyleSheet } from 'react-native';
import { ResizeMode, Video } from 'expo-av';
import { hideAsync } from 'expo-splash-screen';

const Splash = ({ setSplashComplete }) => {
  const onPlaybackStatusUpdate = (status) => {
    hideAsync();

    // 동영상이 종료되면
    if (status.didJustFinish) {
      setSplashComplete(true);
    }
  };
  return (
    <Video
      style={StyleSheet.absoluteFill} // absoluteFill은 absolute에 top,left,right,bottom에 0을 준것
      resizeMode={ResizeMode.COVER} // 이미지 resize와 비슷
      source={require('../assets/splash.mp4')}
      isLooping={false}
      onPlaybackStatusUpdate={onPlaybackStatusUpdate} // 해당 함수에 비디오 상태를 계속 업데이트해주는 인자를 전달함
      positionMillis={13000} // 재생시작부분
      shouldPlay={true}
    />
  );
};

export default Splash;

// ################ App.js
import { useState } from 'react';
import Home from './Screens/Home';
import Splash from './components/Splash';
import { preventAutoHideAsync } from 'expo-splash-screen';

preventAutoHideAsync();  // Splash를 가리지 않고 유지해 주고 hideAsync 호출때 까지 안전하게 실행됨

export default function App() {
  const [splahsComplete, setSplashComplete] = useState(false);

  return !splahsComplete ? (
    <Splash setSplashComplete={setSplashComplete} />
  ) : (
    <Home />
  );
}


// ######## splash screen (lottie로), lottie ###############################################################################################################################
// npm i --save lottie-react-native
// npm i --save lottie-ios

// https://github.com/lottie-react-native/lottie-react-native 

// ################ Splash.js
import { useNavigation } from '@react-navigation/native';
import AnimatedLottieView from 'lottie-react-native';
import { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('home');    // 3초뒤 Home으로
    }, 3000);
  }, []);

  return (
    <View style={styles.root}>
      {/* Lottie 사용 */}
      <AnimatedLottieView
        source={require('../assets/splash.json')}
        autoPlay
        loop={false}
        // resizeMode='contain'
        // onAnimationFinish={}    // 애니메이션 종료시 실행
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Splash;

// ################ App.js  (Bottom Tab없는 네비게이션 이용해야함)
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Screens/Home';
import Splash from './Screens/Splash';

export default function App() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Navigator initialRouteName='Splash'>
        <Screen
          name='splash'
          component={Splash}
          options={{ header: () => null }}
        />
        <Screen name='home' component={Home} />
      </Navigator>
    </NavigationContainer>
  );
}

// ######## KeyboardAvoidingView, Platform ###############################################################################################################################
// <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} > // 키보드가 올라오면 ios는 padding 을 줘서 TextInput을 가리지 않게함, android는 기본 내장되있고, 그외에 플랫폼은 height 유지하도록

// ################ 
import { useState } from 'react';
import { Text, TextInput, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Text>Hi there, Enter some text below:</Text>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={setInputValue}
        placeholder='Enter Text'
      />
    </KeyboardAvoidingView>
  );
};


// ######## AsyncStorage #############################################################################################################################################################
// npm i @react-native-async-storage/async-storage

// ################ AsyncStorage에 저장
import AsyncStorage from '@react-native-async-storage/async-storage';

// ... 생략 ...
  const subtract = () => {
    AsyncStorage.setItem('total', String(total - 1));     // 저장하기   // string만 들어가야함
    setTotal((prev) => prev - 1);
  };
// ... 생략 ...
  
// ################ AsyncStorage에서 불러오기
import AsyncStorage from '@react-native-async-storage/async-storage';

// ... 생략 ...
  useEffect(() => {
      (async () => {  // async를 붙이기 위한 자기선언함수(IIFE)
        const tempTotal = await AsyncStorage.getItem('total');   // 불러오기   // 웹과는 다르게 await를 붙여줌
        setTotal(tempTotal);
      })();
    }, []);
// ... 생략 ...

  

// ############ 제스쳐 인식, 애니메이션 #################################################################### PanResponder (제스쳐 인식), Animated (이동시키는 애니메이션을 구현)  ################
// ################ 예제 1) 중앙으로 되돌아오는 정사각형
import React from 'react';
import {
  StyleSheet,
  View,
  PanResponder,
  Animated,
} from 'react-native';
import { useRouter } from 'expo-router';

const Home = () => {
  const router = useRouter();
  const pan = new Animated.ValueXY();  // 원래있어야 할 곳에서 상대적 좌표 값

  const panResponder = PanResponder.create({
    // onStartShouldSetPanResponder: () => true, // 터치가 시작될 때 PanResponder를 활성화할지 여부(아래거랑 이것 중 택1)
    onMoveShouldSetPanResponderCapture: () => true, // 움직임이 시작될 때 PanResponder를 활성화할지 여부
    // 터치가 움직일 때 발생하는 콜백
    onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
      useNativeDriver: false,
    }),
    // 터치가 종료될 때 발생하는 콜백
    onPanResponderRelease: () => {
      Animated.spring(pan, {
        toValue: { x: 0, y: 0 }, // 터치 종료시 제자리로
        useNativeDriver: false,
      }).start();
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.square, // 기존 스타일로 초기 위치 지정
          { transform: [{ translateX: pan.x }, { translateY: pan.y }] }, // 이것 대신 pan.getLayout()을 사용 가능
        ]}
        {...panResponder.panHandlers} // 위 핸들러를 적용
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    width: 150,
    height: 150,
    backgroundColor: 'red',
  },
});

// ################ 예제 2) 옴겨진 곳에 지속적으로 머무는 원
import { Animated, PanResponder, StyleSheet, View } from 'react-native';

const VanillaAnimated = () => {
  const pan = new Animated.ValueXY(); // 원래있어야 할 곳에서 상대적 좌표 값

  const panResponder = PanResponder.create({
    // onStartShouldSetPanResponder: () => true, // 터치가 시작될 때 PanResponder를 활성화할지 여부(아래거랑 이것 중 택1)
    onMoveShouldSetPanResponderCapture: () => true, // 움직임이 시작될 때 PanResponder를 활성화할지 여부
    // 터지가 될때 콜백
    onPanResponderGrant: () => {
      // 현재 위치를 계산함(위치 초기화 방지)
      pan.setOffset({
        x: pan.x._value,
        y: pan.y._value,
      });
      pan.setValue({ x: 0, y: 0 });
    },
    // 터치가 움직일 때 발생하는 콜백
    onPanResponderMove: Animated.event(
      [null, { dx: pan.x, dy: pan.y }], // 터치하여 움직이는 만큼 움직임
      {
        useNativeDriver: false,
      }
    ),
    // 터치가 종료될 때 발생하는 콜백
    onPanResponderRelease: () => {
      pan.flattenOffset(); // 현재 위치값을 애니메이션 값에 반영
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.ball, pan.getLayout()]} // position.getLayout에는 상대적 top과 left값이 저장되어 있음
        {...panResponder.panHandlers} // 위 핸들러 적용
      />
    </View>
  );
};

export default VanillaAnimated;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ball: {
    backgroundColor: '#3884ff',
    height: 100,
    width: 100,
    borderRadius: 50,
  },
});


// ######### 제스쳐 인식, 애니메이션 2, + useWindowDimensions(모바일 크기) ##################################### react-native-gesture-handler(제스처를 인식), react-native-reanimated(이동시키는 애니메이션을 구현) ##########
// 기존 PanResponder, Animated는 자바스크립트 스레드기반으로 동작하고 gesture-handler와 reanimated는 UI스레드 기반으로 동작함
// 그리고 성능 향상에 도움, 코드 최적화, 더 많은 제스쳐지원

// npx expo install react-native-gesture-handler react-native-reanimated
// https://docs.swmansion.com/react-native-gesture-handler/docs/

// ################  
// useAnimatedGestureHandler에 onStart, onActive, onEnd의 이벤트 값 예시
// {
//   "absoluteX": 235.96873474121094,    // X축 절대값
//   "absoluteY": 704.5217895507812,     // Y축 절대값
//   "eventName": "47onGestureHandlerEvent",
//   "handlerTag": 1,
//   "numberOfPointers": 1,
//   "state": 4,
//   "translationX": -0.07243923842906952,  // X축 이동값
//   "translationY": -0.9007812738418579,  // Y축 이동값
//   "velocityX": -6.87349796295166,  // X축 속도  (정방향은 양수, 역방향은 음수, 절대값이 클수록 빠름)
//   "velocityY": -397.5526123046875,  // Y축 속도
//   "x": 235.9687042236328,
//   "y": 49.0102424621582
// }
// ################ 예제) 잠금화면 슬라이드용 직사각형 공간
import { View, useWindowDimensions, StyleSheet } from 'react-native';
import React from 'react';
import { PanGestureHandler } from 'react-native-gesture-handler'; // 터치 및 제스쳐 인식
import Animated, {
  Easing,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'; // 부드러운 애니메이션

const index = () => {
  const { height } = useWindowDimensions(); // 모바일폰의 width, height등의 값 가져옴
  const y = useSharedValue(height); // 메모리에서 상태를 공유 // y.value 에 초기값으로 height가 들어감

  // onGestureEvent를 통하여 제스쳐의 시작, 진행, 종료시 Event 전달
  const unlockGestureHandler = useAnimatedGestureHandler({
    onStart: () => {
      console.log('onStart');
    },
    onActive: (e) => {
      y.value = e.absoluteY + 50; // Y축 절대 값의 상태를 메모리에서 공유시킴 // 숫자 50은 붕 뜨는 효과 방지
    },
    onEnd: (e) => {
      // 속도를 빠르게 슬라이드한 경우도 적용
      if (e.velocityY < -500) {
        // withTiming은 앞에 값과 애니메이션 속성 적용 // withTiming(전달할 값, { duration, easing }, 커스텀easing)
        y.value = withTiming(150, { easing: Easing.linear });
      } else if (e.velocityY > 500) {
        y.value = withTiming(height, { easing: Easing.linear });
        // 슬라이드시 절반 넘었는지
      } else if (y.value < height / 2) {
        y.value = withTiming(150, { easing: Easing.linear });
      } else {
        y.value = withTiming(height, { easing: Easing.linear });
      }
    },
  });

  // 실시간 없데이트 되는 스타일
  const animatedContainerStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: y.value - height,
      },
    ],
  }));

  return (
    <View style={styles.container}>
      <PanGestureHandler // 제스쳐를 인식하며, 인식될때 onGestureEvent의 메소드 함수 실행
        onGestureEvent={unlockGestureHandler}
      >
        <Animated.View
          style={[
            animatedContainerStyle, // 실시간 스타일 적용
            {
              position: 'absolute',
              width: '100%',
              height: 100,
              borderColor: 'red',
              borderWidth: 50,
              bottom: 0,
              left: 0,
            },
          ]}
        />
      </PanGestureHandler>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// ######## 스크롤 위치 #############################################################################################################################################################
import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';

const MyScrollComponent = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (e) => {
    const positionY = e.nativeEvent.contentOffset.y;  // Y 좌표 스크롤 값
    setScrollPosition(positionY);
  };

  return (
    <ScrollView // FlatList에서도 onScroll가능
      onScroll={handleScroll} // 스크롤시 Event를 파라미터로 전달
      scrollEventThrottle={16} // 스크롤 이벤트 발생 빈도 설정
    >
      <Text>{`현재 스크롤 위치: ${scrollPosition}`}</Text>
    </ScrollView>
  );
};

export default MyScrollComponent;


// ########   #############################################################################################################################################################
// ################ 


