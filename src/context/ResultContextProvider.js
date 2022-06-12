import React, {createContext, useContext, useState} from 'react';
const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';


export const ResultContextProvider = ({ children }) => {
    const [results,setResults] = useState([]);
    const [isloading,setIsLoading] = useState(false);
    const [searchTerm,setSearchTerm] = useState('JS+Mastery');

    const getResults  = async (type) => {
        setIsLoading(true);

        const response = await fetch(`${baseUrl}${type}`,{
            method:'GET',
            headers: {
                'X-User-Agent': 'desktop',
                'X-RapidAPI-Key': '8061d6f548msh2e0346697ec92ffp137b75jsnf4aae41b26e5',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
            }    
        });

        const data = await response.json();

        console.log(data);

        setResults(data);
        setIsLoading(false);

    }

    return (
        <ResultContext.Provider value={{ getResults,results,searchTerm,setSearchTerm,isloading}}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext);

