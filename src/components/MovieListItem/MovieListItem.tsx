import { ListItem, ListItemText } from '@mui/material';
import { useAtom } from 'jotai';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { TEXT } from '../../config';
import { movieTabState } from '../../data/movie';

import './MovieListItem.scss';

function MovieListItem({ movie }:any): ReactElement {
    const [ tabState, setTabState ] = useAtom(movieTabState);
    const displayDate = (): string => {
        if (movie.releaseDate) {
            let tmpDate = new Date(movie.releaseDate);
            let year = tmpDate.getUTCFullYear();
            
            return year.toString();
        }
        return TEXT.MOVIES.ERROR.NO_DATE;
    }
    const resetTabs = () => setTabState('0');
    
    return (
        <ListItem className='movie-list__item' key={movie.id}>
            <Link   className='movie-list__link' 
                    to={`/movies/${displayDate()}/${encodeURIComponent(movie.name)}/${movie.id}`}
                    onClick={resetTabs}>
                <ListItemText className='movie-list__text' primary={movie.name} secondary={displayDate()} />
            </Link>
        </ListItem>
    );
}

export default MovieListItem;