export const TEXT = {
    SEARCH: {
      TITLE: 'Search movie:',
      SUBMIT: 'Search',
      LABEL: 'Enter movie title.',
      ERROR: {
        NO_INPUT: 'No input detected',
        EMPTY: 'Query must not be empty',
      }
    },
    MOVIES: {
      TITLE: 'TMDb Results for ',
      LOADING: 'Loading TMDb data...',
      ERROR: {
        NO_QUERY: 'No query detected',
        NO_RESULTS: 'No results found',
        NO_DATE: 'Unknown release date'
      }
    },
    MOVIE_SINGLE: {
      LOADING: 'Loading Wikipedia data...',
      ERROR: {
        NO_CONTENT: 'No content found on Wikipedia'
      },
      RELATED: {
        LOADING: 'Loading related movies...'
      },
      TABS: {
        WIKI: 'Wikipedia Result',
        RELATED: 'Related Movies'
      },
      LINKS: {
        TMDB: 'Open on TMDb',
        WIKI: 'Open on Wikipedia',
        HOME: 'Search again'
      }
    }
};

export const API = {
  GQL: 'https://tmdb.sandbox.zoosh.ie/dev/graphql',
  WIKI: 'https://en.wikipedia.org/w/api.php'
};

export const LINK_URLS = {
  TMDB: 'https://www.themoviedb.org/movie/',
  WIKI: 'https://en.wikipedia.org/?curid='
};

export const WIKI_PARAGRAPHS_LIMIT = 5;