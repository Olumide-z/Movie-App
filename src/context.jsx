import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const API_URL = `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=`;

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [searchMovie, setSearchMovie] = useState("");
  const [movie, setMovie] = useState([]);
  const [input, setInput] = useState("");
  const [watchlist, setWatchlist] = useState(
    localStorage.getItem("watchlist")
      ? JSON.parse(localStorage.getItem("watchlist"))
      : []
  );

  const addToWatchlist = (singleMovie) => {
    const index = watchlist.findIndex(
      (element) => element.id === singleMovie.id
    );

    if (index === -1) {
      return setWatchlist([...watchlist, singleMovie]);
    } else {
      return setWatchlist([...watchlist]);
    }
  };

  const removeWatchlist = (singleMovie) => {
    const newWatchlist = watchlist.filter((item) => item.id !== singleMovie.id);
    setWatchlist(newWatchlist);
  };

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const fetchMoviesData = async (searchMovie) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}${searchMovie}`);
      const data = await response.json();
      setLoading(false);

      if (data.results) {
        setMovie(data.results);
      }
      // console.log(data.results)
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMoviesData(input);
  }, [searchMovie]);

  return (
    <AppContext.Provider
      value={{
        searchMovie,
        setSearchMovie,
        movie,
        setMovie,
        loading,
        setLoading,
        loading2,
        setLoading2,
        input,
        setInput,
        watchlist,
        addToWatchlist,
        setWatchlist,
        removeWatchlist,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
