// import React from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   TouchableOpacity,
// } from 'react-native';
// import NavApp from './NavApp.react'
// import MoviesView from './MoviesView.react'
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     borderColor: 'rgb(6,144,106)',
//     borderWidth: 2,
//   },
//   scene: {
//     flex: 1,
//   },
//   tabBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center', // vertical center
//     height: 50,
//     backgroundColor: 'rgb(63,65,69)',
//   },
//   tabBarText: {
//     color: 'white',
//     fontSize: 20,
//   },
// });
//
// class TabBar extends React.Component {
//   state = {
//     currentTab: 'color',
//   }
//   renderTabBar() {
//     const selectedStyle = tabName => {
//       if(tabName !== this.state.currentTab) {
//         return {color: 'rgba(252,250,254,.5)'}
//       }
//       return {color: 'white'}
//     }
//     return (
//       <View style={styles.tabBar}>
//         <TouchableOpacity onPress={() => this.setState({currentTab: 'color'})}>
//           <Text style={[styles.tabBarText, selectedStyle('color')]}>Color</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => this.setState({currentTab: 'movies'})}>
//           <Text style={[styles.tabBarText, selectedStyle('movies')]}>Movies</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
//   renderScene() {
//     if(this.state.currentTab === 'color'){
//       return (
//         <View style={styles.scene}>
//           <NavApp />
//         </View>
//       )
//     }
//     return (
//       <View style={styles.scene}>
//         <MoviesView />
//       </View>
//     )
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         {this.renderScene()}
//         {this.renderTabBar()}
//       </View>
//     );
//   }
// }
// export default TabBar;
