import { ReactElement } from 'react';
import { ErrorOutline } from '@mui/icons-material';
import './Error.scss';

function Error({ text }:any): ReactElement {
    return (
        <div className='error__wrap'>
            <div className='error__icon'>
                <ErrorOutline />
            </div>
            <div className='error__text'>
                <p>Error: {text}</p>
            </div>
        </div>
    );
}

export default Error;