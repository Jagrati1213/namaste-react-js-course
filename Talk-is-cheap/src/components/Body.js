// import the data from another js
import { useEffect, useState } from 'react';
// import { resList } from '../utils/reslist';
import ResCard from './ResCrad';
import Simmer from './Simmer';
import { SWIGGY_API } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import useSwiggyApi from '../utils/useSwiggyApi';

const Body = () => {

    // state for Restaurants list from custom Hook
    const {
        listOfRes,
        filterListOfRes,
        fetchData,
        topRatedFilterHandler,
        searchFilterResHandler,
        searchText,
        setSearchText } = useSwiggyApi();

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) return <h1>Looks you are offline, please check your connection</h1>

    return listOfRes === null ?
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
                <button className='filter-btn' onClick={topRatedFilterHandler}>
                    Top Rated Restaurants
                </button>
            </div>

            {/* Restaurant container */}
            <div className="res-container">
                {
                    filterListOfRes === null ? <h1 style={{ color: 'black' }}>Not found</h1> :
                        filterListOfRes?.map((item) => {
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