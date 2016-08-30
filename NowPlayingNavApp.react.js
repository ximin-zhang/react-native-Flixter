import React, { PropTypes } from 'react';
import {
  Navigator,
  TouchableOpacity,
  BackAndroid,
  Platform,
  Text,
} from 'react-native';
import NowPlayingMoviesView from './NowPlayingMoviesView.react';
import MovieDetailView from './MovieDetailView.react';

const routes = [
  { name: 'movies', title: 'Now Playing Movies', index: 0, component: NowPlayingMoviesView },
  { name: 'movieDetail', title: 'Movie Detail', index: 1, component: MovieDetailView },
];

const routeMapper = {
  LeftButton: (route, navigator) => {
    if (navigator.getCurrentRoutes().length > 1) {
      return (
        <TouchableOpacity //eslint-disable-line
          onPress={() => navigator.pop()}
        >
          <Text
            style={{
              marginLeft: 5,
              fontSize: 15,
              color: 'black',
            }}
          >
            Back
          </Text>
        </TouchableOpacity>
      );
    }
    return null;
  },
  RightButton: () => null,
  Title: (route) => <Text>{route.title}</Text>,
};

class NowPlayingNavApp extends React.Component {
  constructor(props) {
    super(props);

    this.navigator = null;
  }
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
  render() {
    return (
      <Navigator
        initialRoute={routes[0]}
        renderScene={(route, navigator) => {
          this.navBackAndroid = navigator;
          if (route.name === 'movieDetail') {
            return <MovieDetailView movie={route.movie} />;
          } else if (route.name === 'movies') {
            return (
              <NowPlayingMoviesView
                navigator={navigator}
                onMoviePress={
                  movie => navigator.push({
                    ...routes[1],
                    title: movie.title,
                    movie,
                  })
                }
              />
            );
          }
          else return <MovieDetailView movie={route.movie} />;
        }}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={routeMapper}
            style={{ backgroundColor: 'white', height: 45, }}
          />
        }
      />
    );
  }
 }

export default NowPlayingNavApp;
