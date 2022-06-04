import { Box, Typography } from '@mui/material';
import { ReactElement } from 'react';
import SearchForm from '../components/SearchForm/SearchForm';
import { TEXT } from '../config';

import './search.scss';

function Search(): ReactElement {

  return (
    <Box className='search__wrap'>
      <Typography className='search__title' variant='h1'>
          { TEXT.SEARCH.TITLE }
      </Typography>
      <SearchForm />
    </Box>
  );
}

export default Search;