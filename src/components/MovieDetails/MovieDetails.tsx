import axios, { AxiosResponse } from 'axios';
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { API, TEXT, WIKI_PARAGRAPHS_LIMIT } from '../../config';
import Error from '../Error/Error';
import Spinner from '../Spinner/Spinner';
import WikiContent from '../WikiContent/WikiContent';

function MovieDetails({ name, year, id }:any) {
  const [ errors ] = useState<string[]>([]);
  const [ tmdbId ] = useState<number>(id);
  const [ isLoading, setIsLoading ] = useState<boolean>(true);
  const [ movieData, setMovieData ] = useState<any>(null);  

  const searchWiki = (): Promise<AxiosResponse> => {
    return axios.get(API.WIKI, {
      params: {
        action: 'query',
        list: 'search',
        origin: '*',
        format: 'json',
        srsearch: `${name} ${year} movie`,
      }
    })
  };

  const readWiki = (response:AxiosResponse):Promise<AxiosResponse> => {
    const pageId = response.data.query.search[0].pageid;
    
    return axios.get(API.WIKI, {
      params: {
        action: 'parse',
        origin: '*',
        format: 'json',
        pageid: pageId
      }
    });
  };

  const parseText = (html:string): HTMLElement[] => {
    const buffer = document.createElement('div') as HTMLElement;
    buffer.innerHTML = html;
    const textElements = Array.from(buffer.querySelectorAll('p'));

    return textElements.slice(0, WIKI_PARAGRAPHS_LIMIT);
  }

  const loadWikiData = (response:AxiosResponse): void => {
    const data = response.data.parse;
    const extracted = {
      title: data.title,
      html: parseText(data.text['*']),
      wikiId: data.pageid,
      tmdbId: tmdbId

    };
    setMovieData(extracted);
    setIsLoading(false);
  }

  useEffect(() => {
    searchWiki()
      .then(readWiki)
      .then(loadWikiData);
  }, []);
  
  return (
    <Box className='movie-details'>
        { errors.length ? <Error text={errors.join('\r\n')} /> : null }
        { (isLoading) ? <Spinner text={TEXT.MOVIE_SINGLE.LOADING} /> : <WikiContent data={movieData} /> }
    </Box>
  );
}

export default MovieDetails;