import { 
  Box,
  Button,
  TextField
} from '@mui/material';
import { ReactElement, useState } from 'react';
import { TEXT } from '../../config';
import Error from '../Error/Error';

import './SearchForm.scss';

function SearchForm(): ReactElement {
    
  const [ error, setError ] = useState<string>('');
  const [ input, setInput ] = useState<string>('');

  // Improvement: use a validation library
  const validate = (): boolean => {
    if (!input.length) {
      setError(TEXT.SEARCH.ERROR.NO_INPUT);
    }
    if (!input.trim().length) {
      setError(TEXT.SEARCH.ERROR.EMPTY);
    }

    return error === '';
  }
  const update = (event: any): void => {
    setInput(event.target.value);
  }
  const submit = (event: any): boolean => {
    if (validate()) {
      event.preventDefault();
      return false;
    }
    // Let it submit normally if no errors are found
    return true;
  }

  return (
    <Box className='search-form' component='form' action='movies' method='GET' onSubmit={submit}>
      <Box className='search-form__inputs'>
        <TextField className='search-form__input' 
                    id='query' 
                    name='query' 
                    variant='outlined' 
                    label={TEXT.SEARCH.LABEL}
                    onKeyUp={update}
                    onChange={update} />
        <Button href='' className='search-form__btn' type='submit' variant='text' component='button'>
          { TEXT.SEARCH.SUBMIT }
        </Button>
      </Box>
      { error ? <Error text={error} /> : null }
    </Box>
  );
}

export default SearchForm;