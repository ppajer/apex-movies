import { ReactElement } from 'react';
import { Alert } from '@mui/material';

import './Error.scss';

function Error({ text }:any): ReactElement {
  return (
    <Alert severity='error' className='error-alert'>
      Error: {text}
    </Alert>
  );
}

export default Error;