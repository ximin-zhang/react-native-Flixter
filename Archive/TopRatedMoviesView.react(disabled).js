// import React, { PropTypes } from 'react';
// import {
//   ListView,
//   Text,
//   TouchableOpacity,
//   Navigator,
// } from 'react-native';
// import MovieCellView from './MovieCellView.react';
// import { fetchTopRatedMovies } from './api';
// import TopRatedMoviesView from './TopRatedMoviesView.react';
//
// const routes = [
//   { title: 'Movies', index: 0 },
//   { title: 'Movie', index: 1 },
// ];
//
// const routeMapper = {
//   LeftButton: (route, navigator) => {
//     if (navigator.getCurrentRoutes().length > 1) {
//       return (
//         <TouchableOpacity //eslint-disable-line
//           onPress={() => navigator.pop()}
//         >
//           <Text>Back</Text>
//         </TouchableOpacity>
//       );
//     }
//     return null;
//   },
//   RightButton: () => null,
//   Title: (route) => <Text>{route.title}</Text>,
// };
//
// class TopRatedMoviesView extends React.Component {
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
//     fetchTopRatedMovies()
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
//   renderRow(movie, route, navigator) {
//     // const renderScene = (route, navigator) => {
//     //   // let RouteComponent = route.component;
//     //   this.navBackAndroid = navigator;
//     //   const onPress = () => {
//     //     if (route.id === 0) {
//     //       navigator.push(routes[1]);
//     //     }
//     //     navigator.pop();
//     //   };
//     //   return (
//     //     // <TouchableOpacity onPress={onPress} style={{ flex: 1 }}>
//     //     <RouteComponent navigator={navigator} {...route.passProps} />
//     //     // </TouchableOpacity>
//     //   );
//     // };
//     // const onPress = () => {
//     //   if (route.index === 0) {
//     //     this.navigator.push(routes[1]);
//     //   } else {
//     //     this.navigator.push(routes[0]);
//     //   }
//     // };
//
//     // return (
//     //   <TouchableOpacity onPress={() => {
//     //     if (route.index === 0) {
//     //       navigator.push(routes[1]);
//     //     } else {
//     //       navigator.pop();
//     //     }
//     //     return <MovieCellView movie={movie} />;
//     //   }}>
//     //   </TouchableOpacity>
//     // );
//
//     return <MovieCellView movie={movie} />;
//     // return (
//     //   <TouchableOpacity>
//     //     <MovieCellView movie={movie} />
//     //   </TouchableOpacity>
//     // );
//   }
//
//   render() {
//     return (
//       <Navigator
//         initialRoute={routes[0]}
//         initialRouteStack={routes}
//         renderScene={(route, navigator) => {
//           if (route.index === 0) {
//             return (
//               <ListView
//                 style={{ marginTop: 20 }}
//                 dataSource={this.state.dataSource}
//                 renderRow={this.renderRow}
//               />
//             );
//           }
//           navigator.pop();
//         }
//         }
//         navigationBar={
//           <Navigator.NavigationBar
//             routeMapper={routeMapper} // must have
//             style={{ backgroundColor: 'rgb(188,188,189)', height: 45 }}
//           />
//         }
//       />
//   );
//   }
// }
//
//
// // TopRatedMoviesView.propTypes = {
// //   navigator: PropTypes.navigator.isRequired,
// // };
//
// export default TopRatedMoviesView;
