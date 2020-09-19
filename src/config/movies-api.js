const moviesApi = "c693e20d7a9ddc211375097779bfdc8b";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${moviesApi}&language=en-US`,
  fetchNetflixOrginals: `/discover/tv?api_key=${moviesApi}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${moviesApi}&with_genres=28`,
  fetchActionMovies: `/discover/movie?api_key=${moviesApi}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${moviesApi}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${moviesApi}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${moviesApi}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${moviesApi}&with_genres=99`,
};

export default requests;

// https://api.themoviedb.org/3/trending/all/week?api_key=c693e20d7a9ddc211375097779bfdc8b&language=en-US
