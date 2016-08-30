import React, { PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import MovieShape from './MovieShape.react'

const styles = StyleSheet.create({
  rowContainer: {
    padding: 10,
    paddingLeft: 0,
    flexDirection: 'row',
    // borderWidth: 3,
    // borderColor: 'rgb(99,8,25)',
  },
  image: {
    height: 100,
    width: 100,
    // borderWidth: 3,
    // borderColor: 'rgb(191,34,117)',
  },
  textContainer: {
    // padding: 10,
    flex: 1,
    // justifyContent: 'flex-end',
    // justifyContent: 'space-around',
    justifyContent: 'space-between',
    // borderWidth: 3,
    // borderColor: 'rgb(39,232,184)',
  },
  text: {
    color: 'rgb(9,22,7)',
    fontSize: 12,
    // borderWidth: 2,
    // borderColor: 'rgb(20,161,166)',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const imageURIPrefix = 'https://image.tmdb.org/t/p/original'; // use https instead of http
const getPosterURI = movie => `${imageURIPrefix}/${movie.poster_path}`;
// movie is a parameter here

class MovieCellView extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <View style={styles.rowContainer}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={{ uri: getPosterURI(movie) }}
        />
        <View style={styles.textContainer}>
          <Text
            style={[styles.text, styles.title]}
            numberOfLines={1}
          >
            {movie.title}
          </Text>
          <Text
            style={styles.text}
            numberOfLines={3}
          >
            {movie.overview}
          </Text>
        </View>
      </View>
    );
  }
}

MovieCellView.propTypes = {
  // movie: PropTypes.shape({
  //   id: PropTypes.number.isRequired,
  //   title: PropTypes.string.isRequired,
  //   overview: PropTypes.string.isRequired,
  //   poster_path: PropTypes.string.isRequired,
  //   backdrop_path: PropTypes.string.isRequired,
  //   release_date: PropTypes.instanceOf(Date),
  //   vote_average: PropTypes.number.isRequired,
  // }).isRequired,
  movie: MovieShape.isRequired,
};

export default MovieCellView;
