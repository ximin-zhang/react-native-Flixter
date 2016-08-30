// import React, { PropTypes } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   Navigator,
// } from 'react-native';
// import
//
// const styles = StyleSheet.create({
//   rowContainer: {
//     padding: 10,
//     paddingLeft: 0,
//     flexDirection: 'row',
//     // borderWidth: 3,
//     // borderColor: 'rgb(99,8,25)',
//   },
//   image: {
//     height: 100,
//     width: 100,
//     // borderWidth: 3,
//     // borderColor: 'rgb(191,34,117)',
//   },
//   textContainer: {
//     // padding: 10,
//     flex: 1,
//     // justifyContent: 'flex-end',
//     // justifyContent: 'space-around',
//     justifyContent: 'space-between',
//     // borderWidth: 3,
//     // borderColor: 'rgb(39,232,184)',
//   },
//   text: {
//     color: 'rgb(9,22,7)',
//     fontSize: 12,
//     // borderWidth: 2,
//     // borderColor: 'rgb(20,161,166)',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
// });
//
// const imageURIPrefix = 'https://image.tmdb.org/t/p/original'; // use https instead of http
// const getPosterURI = movie => `${imageURIPrefix}/${movie.poster_path}`;
// // movie is a parameter here
// const routes = [
//   { title: 'Movie list', color: 'rgb(54,79,142)', id: 0 },
//   { title: 'Movie detail', color: 'rgb(224,230,174)', id: 1 },
// ];
// const routeMapper = {
//   LeftButton: (route, navigator) => {
//     if (navigator.getCurrentRoutes().length > 1) {
//       return (
//         <TouchableOpacity
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
// class MovieCellView extends React.Component {
//   render() {
//     const { movie } = this.props;
//     return (
//       <TouchableOpacity onPress={}>
//         <View style={styles.rowContainer}>
//             <Image
//               resizeMode="contain"
//               style={styles.image}
//               source={{ uri: getPosterURI(movie) }}
//             />
//             <View style={styles.textContainer}>
//               <Text
//                 style={[styles.text, styles.title]}
//                 numberOfLines={1}
//               >
//                 {movie.title}
//               </Text>
//               <Text
//                 style={styles.text}
//                 numberOfLines={3}
//               >
//                 {movie.overview}
//               </Text>
//             </View>
//         </View>
//       </TouchableOpacity>
//     );
//   }
//
// }
//
// MovieCellView.propTypes = {
//   movie: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     overview: PropTypes.string.isRequired,
//   }).isRequired,
// };
//
// export default MovieCellView;
