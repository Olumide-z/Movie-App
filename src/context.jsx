import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const API_URL = 'https://api.themoviedb.org/3/search/multi?api_key=3063e6beaffd5118bd176b35e99fee56&language=en-US&query='


const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [searchMovie, setSearchMovie] = useState('');
    const [movie, setMovie] = useState([])
    const [input, setInput] = useState('');
    
    const fetchMoviesData = async (searchMovie) => {
        setLoading(true)
        const response = await fetch(`${API_URL}${searchMovie}`);
        const data = await response.json();
      
        if(data.results){
            setMovie(data.results)
        };
        console.log(data.results)
      }
      
      useEffect(() => {
        fetchMoviesData(input);
      }, [searchMovie])
    

    return <AppContext.Provider 
        value={{
            searchMovie,
            setSearchMovie,
            movie,
            setMovie,
            loading,
            setLoading,
            input,
            setInput
        }}
    >
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }