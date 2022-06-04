import { List } from '@mui/material';
import { ReactElement } from 'react';

import MovieListItem from '../MovieListItem/MovieListItem';

function MovieList({ data }:any): ReactElement {
  return (
    <List className='movies-list'>
      { data.map((movie:any, i:number) => <MovieListItem key={i} movie={movie} />) }
    </List>
  );
}

export default MovieList;