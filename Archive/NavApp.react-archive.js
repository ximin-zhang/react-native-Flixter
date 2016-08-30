import React, { Component } from 'react';
import {
  Navigator,
  TouchableOpacity,
  BackAndroid,
  Platform,
  Text,
} from 'react-native';
import ColorView from './ColorView.react';

const routes = [
  { title: 'Purple', color: 'rgb(54,79,142)', id: 0 },
  { title: 'Orange', color: 'rgb(224,230,174)', id: 1 },
];

const routeMapper = {
  LeftButton: (route, navigator) => {
    if (navigator.getCurrentRoutes().length > 1) {
      return (
        <TouchableOpacity
          onPress={() => navigator.pop()}
        >
          <Text>Back</Text>
        </TouchableOpacity>
      );
    }
    return null;
  },
  RightButton: () => null,
  Title: (route) => <Text>{route.title}</Text>,
};

class NavApp extends React.Component {
  componentDidMount() {
    if (Platform.OS === 'android') {
      BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }
  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }
  // onBackAndroid = () {
  //   if(this.navBackAndroid && this.navBackAndroid.getCurrentRoutes().)
  // }
  // navBackAndroid = null
  render() {
    const renderScene = (route, navigator) => {
      this.navBackAndroid = navigator;
      const onPress = () => {
        if (route.id === 0) {
          navigator.push(routes[1]);
        } else {
          navigator.pop();
        }
      };
      return (
        <TouchableOpacity
          onPress={onPress}
          style={{ flex: 1 }}
        >
          <ColorView color={route.color} />
        </TouchableOpacity>
      );
    };
    return (
      <Navigator
        initialRoute={routes[0]}
        renderScene={renderScene}
        /*
        configureScene={() => Navigator.SceneConfigs.FloatFromRight}
        */
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={routeMapper}
            style={{ backgroundColor: 'rgb(10,94,8)' }}
          />
        }
      />
    );
  }
 }

export default NavApp;
