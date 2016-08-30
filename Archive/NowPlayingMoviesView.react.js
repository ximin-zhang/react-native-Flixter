import React from 'react';
import {
  ListView,
  Text,
  Navigator,
  TouchableOpacity,
} from 'react-native';
import MovieCellView from './MovieCellView.react';
import { fetchNowPlayingMovies } from './api';

class NowPlayingMoviesView extends React.Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.state = {
      dataSource: ds,
    };
  }
  componentDidMount() {
    fetchNowPlayingMovies()
    .then(movies => {
        this.setState({ // eslint-disable-line
          dataSource: this.state.dataSource.cloneWithRows(movies),
          loading: false,
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
  renderRow(movies) {
    return (
      <MovieCellView movie={movies} />
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
        style={{ marginTop: 20 }}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

export default NowPlayingMoviesView;
