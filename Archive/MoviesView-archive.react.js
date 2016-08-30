// import React from 'react';
// import {
//   ListView,
//   Text,
// } from 'react-native';
// import MovieCellView from './MovieCellView.react';
// import { fetchMovies } from './api';
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
//   renderNowPlayingRow(nowPlayingMovies) {
//     return (
//       <MovieCellView movie={nowPlayingMovies} /> // eslint-disable-line
//     );
//   }
//   renderTopRatedRow(movies) {
//     return (
//       <MovieCellView movie={movies} /> // eslint-disable-line
//     );
//   }
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
// export default MoviesView;
