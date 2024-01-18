import { useState, useEffect } from 'react';
import { SWIGGY_API } from './constants';

const useSwiggyApi = () => {
    const [listOfRes, setListOfRes] = useState(null); //original
    const [filterListOfRes, setFilterListOfRes] = useState(null); //copy
    const [searchText, setSearchText] = useState('');

    const fetchData = async () => {
        try {
            const data = await fetch(SWIGGY_API);
            const response = await data.json();
            const fetchLists = response.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

            setListOfRes(fetchLists);
            setFilterListOfRes(fetchLists);
            console.log(fetchLists);
        } catch (error) {
            console.error('Error fetching data from Swiggy API:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const searchFilterResHandler = () => {
        // Perform search logic based on the searchText
        const filteredList = listOfRes.filter(item =>
            item.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilterListOfRes(filteredList);
    };

    const topRatedFilterHandler = () => {
        // Perform top-rated filter logic
        const topRatedList = listOfRes.filter(item => item.info.avgRating > 4.3);
        setFilterListOfRes(topRatedList);
    };


    return { listOfRes, filterListOfRes, fetchData, searchFilterResHandler, topRatedFilterHandler, searchText, setSearchText };
};

export default useSwiggyApi;
