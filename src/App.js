import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Home from './pages/Home';
import NewMovies from './pages/NewMovies'
import TrendingMovies from './pages/TrendingMovies';
import Watchlist from './pages/Watchlist';
import ComingSoon from './pages/ComingSoon';
import About from './pages/About';
import Footer from './components/Footer/Footer';
import SearchPage from './pages/SearchPage';

// import Error from './pages/Error';
// 3063e6beaffd5118bd176b35e99fee56

function App() {
  return (
      <Router>
         <Navbar />
         <Routes>
           <Route path='/' element={<Home />}/>
         </Routes>
         <Routes>
           <Route path='/new-movies' element={<NewMovies />}/>
         </Routes>
         <Routes>
           <Route path='/trending' element={<TrendingMovies />} />
         </Routes>
         <Routes>
           <Route path='/coming-soon' element={<ComingSoon />} />
         </Routes>
         <Routes>
           <Route path='/search' element={<SearchPage />} />
         </Routes>
         <Routes>
           <Route path='/watchlist' element={<Watchlist />} />
         </Routes>
         <Routes>
           <Route path='/about' element={<About />} />
         </Routes>
         {/* <Routes>
           <Route path='*' element={<Error />} />
         </Routes> */}
         <Footer />
      </Router>
  );
}

export default App;
