import React, { PropTypes, } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import NowPlayingMoviesView from './NowPlayingMoviesView.react';
import TopRatedMoviesView from './TopRatedMoviesView.react';
import TopRatedNavApp from './TopRatedNavApp.react';
import NowPlayingNavApp from './NowPlayingNavApp.react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'rgb(6,144,106)',
    borderWidth: 2,
  },
  scene: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center', // vertical center
    height: 50,
    backgroundColor: 'rgb(63,65,69)',
  },
  tabBarText: {
    color: 'white',
    fontSize: 20,
  },
  tabBarImage: {
    height: 100,
    width: 100,
  },
});

class TabBar extends React.Component {
  state = {
    currentTab: 'color',
  }
  renderTabBar() {
    const selectedStyle = tabName => {
      if(tabName !== this.state.currentTab) {
        return {color: 'rgba(252,250,254,.5)'}
      }
      return {color: 'white'}
    }
    return (
      <View style={styles.tabBar}>
        <TouchableOpacity onPress={() => this.setState({ currentTab: 'now_playing' })}>
          <View>
            <Image
              resizeMode="contain"
              source={require('./img/now_playing.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.setState({currentTab: 'top_rated'})}>
          <Image
            resizeMode="contain"
            source={require('./img/top_rated.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
  renderScene() {
    if (this.state.currentTab === 'now_playing') {
      return (
        <View style={styles.scene}>
          <NowPlayingNavApp
          />
        </View>
      );
    }
    return (
      <View style={styles.scene}>
        <TopRatedNavApp />
      </View>
    );
  }
  render() {
    const { navigator } = this.props;
    return (
      <View style={styles.container}>
        {this.renderScene()}
        {this.renderTabBar()}
      </View>
    );
  }
}

export default TabBar;
