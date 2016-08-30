// import React, { PropTypes } from 'react';
// import {
//   ListView,
//   Text,
// } from 'react-native';
// import MovieCellView from './MovieCellView.react';
// import { fetchNowPlayingMovies, fetchTopRatedMovies } from './api';
//
// class MoviesView extends React.Component {
//   constructor(props) {
//     super(props);
//     const ds = new ListView.DataSource({
//       rowHasChanged: (r1, r2) => r1 !== r2,
//     });
//     this.state = {
//       dataSource: ds,
//     };
//   }
//   componentDidMount() {
//     fetchMovies()
//     .then(movies => {
//         this.setState({ // eslint-disable-line
//           dataSource: this.state.dataSource.cloneWithRows(movies),
//           loading: false,
//         });
//     })
//     .catch(error => {
//       console.log(error.msg)
//       this.setState({
//         loading: false,
//       });
//     });
//     // this.setState({  // eslint-disable-line
//     //   loading: true,
//     // });
//     // setTimeout(() => {
//     //   const movies = mockData.results;
//     // }, 1000);
//   }
//
//
//
//   renderRow(movie) {
//     return (
//       <MovieCellView movie={movie} onPress={() => onPress(movie)} /> // eslint-disable-line
//     );
//   }
//
//   render() {
//     if (this.state.loading) {
//       return (
//         <Text style={{ marginTop: 20 }}>
//           Loading...
//         </Text> // eslint-disable-line
//       );
//     }
//     // const renderRow = rowData => <Text>{rowData}</Text>;
//     // const renderRow = movie => <Text>{movie.title}</Text>; // eslint-disable-line
//     return (
//       <ListView
//         style={{ marginTop: 20 }}
//         dataSource={this.state.dataSource}
//         renderRow={this.renderRow}
//       />
//     );
//   }
// }
//
// MoviesView.propTypes = {
//   endpoint: PropTypes.oneOf([NOW_PLAYING, TOP_RATED]),
//   onPress: PropTypes.func.isRequired,
// };
//
// const defaultProps = {
//   endpoint: NOW_PLAYING,
// };
//
// export default MoviesView;
