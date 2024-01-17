// import the data from another js
import { useEffect, useState } from 'react';
// import { resList } from '../utils/reslist';
import ResCard from './ResCrad';
import Simmer from './Simmer';
import { SWIGGY_API } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {

    // state for Restaurants list 
    const [listOfRes, setListOfRes] = useState(null); //original
    const [FilterListOfRes, setFilterListOfRes] = useState(null); //copy
    const [searchText, setSearchText] = useState('');
    const onlineStatus = useOnlineStatus();

    useEffect(() => {
        fetchData();
    }, []);

    // Fetch Restaurant from swiggy api
    const fetchData = async () => {

        try {
            const data = await fetch(SWIGGY_API);
            const response = await data.json();
            const fetchLists = response.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

            setListOfRes(fetchLists);
            setFilterListOfRes(fetchLists);
        } catch (error) {
            console.error('Error fetching data from Swiggy API:', error);
        }
    }

    // Filter out search restaurant
    /*
    * item.info?.name.includes() : returns all the restaurant data that includes the search text.
    * item.info?.name == searchText = return only that data match full name with search value.
    */

    const searchFilterResHandler = () => {
        const searchRes = listOfRes.filter((item) => item.info?.name.toLowerCase().includes(searchText.toLowerCase()));
        return setFilterListOfRes(searchRes);
    }

    if (onlineStatus === false) return <h1>Looks you are offline, please check your connection</h1>

    return listOfRes?.length === 0 ?
        (<Simmer />) :
        (<div className="body">
            <div className="header_of_body">
                {/* Search Box */}
                <div className="search-container">
                    <input type="search" value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value)
                        }}
                        id="search"
                        placeholder='search your favorite meal...' />
                    <button onClick={searchFilterResHandler}>search</button>
                </div>

                {/* Filter Button */}
                <button className='filter-btn' onClick={() => {
                    // filter logic
                    const filterResList = listOfRes.filter((item) => {
                        return item.info.avgRating > 4.3;
                    });
                    setFilterListOfRes(filterResList);

                }}>
                    Top Rated Restaurants
                </button>
            </div>

            {/* Restaurant container */}
            <div className="res-container">
                {
                    FilterListOfRes?.length == 0 ? <h1 style={{ color: 'black' }}>Not found</h1> :
                        FilterListOfRes?.map((item) => {
                            return (
                                <Link key={item?.info.id} to={`/restaurants/${item?.info.id}`}>
                                    <ResCard data={item} />
                                </Link>
                            )
                        })
                }
            </div>
        </div >)
}
export default Body;