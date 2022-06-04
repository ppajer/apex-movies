import { useSearchParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { Box, Typography } from "@mui/material";
import { ReactElement } from "react";

import { TEXT } from "../config";
import Error from "../components/Error/Error";
import Spinner from "../components/Spinner/Spinner";
import MovieList from "../components/MovieList/MovieList";


function Movies(): ReactElement {
  const [ searchParams ] = useSearchParams(); 
  const search = searchParams.get('query');
  
  const query = gql(`
    query SearchMovies {
      searchMovies(query: "${search}") {
        id
        name
        releaseDate
      }
    }
  `);
  const { data, loading, error } = useQuery(query);

  return (
    <Box>
      <Typography variant='h3' component='h1'>
        { `${TEXT.MOVIES.TITLE} "${search}"` }
      </Typography>
      { error ? <Error text={error.message} /> : null }
      { loading ? <Spinner text={TEXT.MOVIES.LOADING} /> : <MovieList data={data.searchMovies} /> }
    </Box>
  );
}

export default Movies;