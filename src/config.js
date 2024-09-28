export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "7a8d51511cc5e3deceece37dc4824e3f";
export const tmdbEndpoint = "https://api.themoviedb.org/3/movie";
export const tmdbAPI = {
  getMovieList: (type) => `${tmdbEndpoint}/${type}?api_key=${apiKey}`,
  getMovieDetails: (id) => `${tmdbEndpoint}/${id}?api_key=${apiKey}`,
  getMovieCredits: (id) => `${tmdbEndpoint}/${id}/credits?api_key=${apiKey}`,
  getMovieVideos: (id) => `${tmdbEndpoint}/${id}/videos?api_key=${apiKey}`,
  getMovieSimilar: (id) => `${tmdbEndpoint}/${id}/similar?api_key=${apiKey}`,
  imageOriginal: (fileName) => `https://image.tmdb.org/t/p/original${fileName}`,

  getMovieMeta: (id, type) => `${tmdbEndpoint}/${id}/${type}?api_key=${apiKey}`,
};
