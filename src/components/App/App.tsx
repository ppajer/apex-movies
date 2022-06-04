import { Box } from '@mui/material';
import { 
  BrowserRouter, 
  Route, 
  Routes 
} from 'react-router-dom';
import Movies from '../../pages/movies';
import Movie from '../../pages/movie';
import Search from '../../pages/search';


function App() {
  return (
    <Box className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Search />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/movies/:year/:name/:id' element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App; 
