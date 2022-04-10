import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Home from './pages/HomePage/Home';
import NewMoviesPage from './pages/NewMoviesPage'
import TrendingMovies from './pages/TrendingMovies';
import Watchlist from './pages/WatchlistPage/Watchlist';
import About from './pages/About';
import Footer from './components/Footer/Footer';
import SearchPage from './pages/SearchPage';

import Error from './pages/Error';
import SingleMovie from './pages/SingleMovie/SingleMovie';
import SingleTv from './pages/SingleTv/SingleTv';
import TopRatedPage from './pages/TopRatedPage';
// 3063e6beaffd5118bd176b35e99fee56

function App() {
  return (
      <Router>
         <Navbar />
         <Routes>
           <Route path='/' element={<Home />}/>
           <Route path='/new-movies' element={<NewMoviesPage />}/>
           <Route path='/trending' element={<TrendingMovies />} />
           <Route path='/top-rated' element={<TopRatedPage />} />
           <Route path='/search' element={<SearchPage />} />
           <Route path='/watchlist' element={<Watchlist />} />
           <Route path='/about' element={<About />} />
           <Route path='*' element={<Error />} />
           <Route path='/movie/:id' element={<SingleMovie/>} />
           <Route path='/tv/:id' element={<SingleTv />} />
         </Routes>
         
         <Footer />
      </Router>
  );
}

export default App;
