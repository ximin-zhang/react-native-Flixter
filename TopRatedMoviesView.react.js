import React, { PropTypes } from 'react';
import {
  ListView,
  Text,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import MovieCellView from './MovieCellView.react';
import { fetchTopRatedMovies } from './api';

class TopRatedMoviesView extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.state = {
      dataSource: ds,
      movies: [],
      loading: true,
      refreshing: false,
    };

    this.loadMovies = this.loadMovies.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this.onMoviePress = this.onMoviePress.bind(this); // Important
  }
  componentDidMount() {
    this.loadMovies();
  }
  onMoviePress(movie) {
    const { navigator } = this.props;
    navigator.push({
      title: movie.title,
      movie,
    });
  }
  loadMovies() {
    fetchTopRatedMovies()
    .then(movies => {
        this.setState({ // eslint-disable-line
          dataSource: this.state.dataSource.cloneWithRows(movies),
          loading: false,
          movies,
          refreshing: false,
        });
    })
    .catch(error => {
      console.log(error.msg)
      this.setState({
        loading: false,
      });
    });
    // this.setState({  // eslint-disable-line
    //   loading: true,
    // });
    // setTimeout(() => {
    //   const movies = mockData.results;
    // }, 1000);
  }
  renderRow(movie) {
    return (
      <TouchableOpacity
        onPress={() => this.onMoviePress(movie)}
      >
        <MovieCellView movie={movie} />
      </TouchableOpacity>
    );
  }
  render() {
    if (this.state.loading) {
      return (
        <Text style={{ marginTop: 20 }}>
          Loading...
        </Text> // eslint-disable-line
      );
    }
    return (
      <ListView
        refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.loadMovies.bind(this)}
            />
        }
        style={{ marginTop: 20 }}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

TopRatedMoviesView.propTypes = {
  navigator: PropTypes.object.isRequired,
};

export default TopRatedMoviesView;
