import { Box } from '@mui/material';
import { ReactElement } from 'react';
import { gql, useQuery } from '@apollo/client';
import Error from '../Error/Error';
import MovieList from '../MovieList/MovieList';
import Spinner from '../Spinner/Spinner';
import { TEXT } from '../../config';

function RelatedMovies({ id }:any): ReactElement {
  const query = gql(`
    query getMovie {
        movie(id: "${id}") {
        similar(limit:5) {
          id,
          name,
          releaseDate
        }
      }
    }
  `);
  const { data, loading, error } = useQuery(query);

  return (
    <Box className='related-movies'>
      { error ? <Error text={error.message} /> : null }
      { loading ? <Spinner text={TEXT.MOVIE_SINGLE.RELATED.LOADING} /> : <MovieList data={data.movie.similar} /> }
    </Box>
  );
}

export default RelatedMovies;