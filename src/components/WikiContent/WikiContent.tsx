import { Box, Button, Divider, Typography } from '@mui/material';
import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { LINK_URLS, TEXT } from '../../config';

import './WikiContent.scss';

function WikiContent({ data }:any): ReactElement {
  const navigate = useNavigate();

  const openWiki = () => window.open(`${LINK_URLS.WIKI}${data.wikiId}`, '_blank');
  const openTmdb = () => window.open(`${LINK_URLS.TMDB}${data.tmdbId}`, '_blank');
  const home = () => navigate('/');
  
  return (
    <Box className='wiki-content__wrap'>
      <Typography variant='h1' className='wiki-content__heading'>
        { data.title }
      </Typography>
      <Divider className='wiki-content__divider' variant='inset' />
      { data.html.map((element:HTMLElement, i:number) => <Typography className='wiki-content__text' key={i}>{element.innerText}</Typography>)}
      <Divider className='wiki-content__divider' variant='inset' />
      <Box className='wiki-content__links'>
        <Button className='wiki-content__btn' variant='outlined' onClick={openWiki} key='0'>
          { TEXT.MOVIE_SINGLE.LINKS.WIKI }
        </Button>
        <Button className='wiki-content__btn' variant='outlined' onClick={openTmdb} key='1'>
          { TEXT.MOVIE_SINGLE.LINKS.TMDB }
        </Button>
        <Button className='wiki-content__btn' variant='text' onClick={home} key='2'>
          { TEXT.MOVIE_SINGLE.LINKS.HOME }
        </Button>
      </Box>
    </Box>
  )
}

export default WikiContent;