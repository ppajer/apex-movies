import { Box, Typography } from '@mui/material';
import { ReactElement } from 'react';

import './Spinner.scss';

function Spinner({ text }:any): ReactElement {
    return (
        <Box className='spinner__wrap'>
            <Box className='spinner__body'></Box>
            <Box className='spinner__text'>
                <Typography>{text}</Typography>
            </Box>
        </Box>
    );
}

export default Spinner;