// import mockData from './mockData';
//
// const API_KEY = 'a07e22bc18f5cb106bfe4cc1f83ad8ed';
// const URL_PREFIX = 'https://api.themoviedb.org/3/movie';
// const NOW_PLAYING_URL = `${URL_PREFIX}/now_playing?api_key=${API_KEY}`;
//
// const isError = false;
// export const fetchMoviesMock = () => (
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isError) {
//         reject({ msg: 'network error happened' });
//       }
//       resolve(mockData.results);
//     }, 1000);
//   })
// );
//
// export const fetchMovies = () => (
//   fetch(NOW_PLAYING_URL)
//     .then(response => response.json())
//     .then(response => response.results)
// );
