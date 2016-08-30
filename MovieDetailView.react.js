import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import MovieShape from './MovieShape.react';

const styles = StyleSheet.create({
  container: {
    marginTop: 45,
    flex: 1,
    backgroundColor: '#DFE5E9FF',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  detailsContainer: {
    margin: 10,
    flex: 1,
    justifyContent: 'space-around',
  },
  image: {
    flex: 1,
  },
  overlayView: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.7,
    height: 200,
    backgroundColor: 'black',
  },
  overlayViewTextTitle: {
    marginTop: 20,
    left: 5,
    marginLeft: 5,
    color: 'rgb(235,228,240)',
    fontSize: 15,
    // fontWeight: 'bold',
    fontFamily: 'Verdana',
  },
  overlayViewTextContent: {
    marginTop: 20,
    left: 5,
    right: 5,
    marginLeft: 5,
    marginRight: 5,
    color: 'rgb(235,228,240)',
    fontSize: 12,
    // fontWeight: 'bold',
    fontFamily: 'Verdana',
  },
});

const imageURIPrefix = 'https://image.tmdb.org/t/p/original';
const getPosterURI = movie => `${imageURIPrefix}/${movie.poster_path}`;
const getBackDropURI = movie => `${imageURIPrefix}/${movie.backdrop_path}`;

class MovieDetailView extends React.Component{
  render() {
    return (
      <View style={styles.container} onLayout={this.onLayout}>
        <Image
          style={styles.image}
          source={{ uri: getPosterURI(this.props.movie) || getBackDropURI(this.props.movie) }}
          resizeMode="cover"
        />
        <View style={styles.overlayView}>
          <Text style={styles.overlayViewTextTitle}>
            Title: {this.props.movie.title}
          </Text>
          <Text style={styles.overlayViewTextContent}>
            Release Date: {this.props.movie.release_date}
          </Text>
          <Text style={styles.overlayViewTextContent}>
            Overview: {this.props.movie.overview}
          </Text>
        </View>

      </View>
    );
  }
}

MovieDetailView.propTypes = {
  movie: MovieShape.isRequired,
};

export default MovieDetailView;
