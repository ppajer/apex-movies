import { ReactElement, useState } from "react";
import { useParams } from "react-router-dom";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab } from "@mui/material";
import { useAtom } from 'jotai';
import MovieDetails from "../components/MovieDetails/MovieDetails";
import RelatedMovies from "../components/RelatedMovies/RelatedMovies";
import { TEXT } from "../config";
import { movieTabState } from '../data/movie';

function Movie(): ReactElement {
  const { year, name, id } = useParams();
  const [ activeTab, setActiveTab ] = useAtom(movieTabState);
  
  const handleTab = (event:any, value:any) => setActiveTab(value);

  return (
    <TabContext value={activeTab}>
      <TabList value={activeTab} onChange={handleTab}>
          <Tab label={TEXT.MOVIE_SINGLE.TABS.WIKI} value={'0'} />
          <Tab label={TEXT.MOVIE_SINGLE.TABS.RELATED} value={'1'} />
      </TabList>
      <TabPanel value={'0'}>
          <MovieDetails name={name} year={year} id={id} />
      </TabPanel>
      <TabPanel value={'1'}>
          <RelatedMovies id={id} />
      </TabPanel>
  </TabContext>
  )
}

export default Movie;