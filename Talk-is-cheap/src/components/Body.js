// import the data from another js
import { useEffect, useState } from 'react';
import { resList } from '../utils/reslist';
import ResCard from './ResCrad';
import Simmer from './Simmer';

const Body = () => {

    // state for Restaurants list
    const [listOfRes, setListOfRes] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        // swiggy API calling
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7199008&lng=75.857383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const response = await data.json();
        const FetchLists = response.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRes(FetchLists);
    }

    return listOfRes.length === 0 ?
        (<Simmer />) : (
            <div className="body">
                <div className="header_of_body">
                    <div className="search-container">
                        <input type="search" name="food-search" id="search" placeholder='search your favorite meal...' />
                        <button type='submit'>search</button>
                    </div>
                    <div className="filter-container">
                        <button className='filter-btn' onClick={() => {
                            // filter logic
                            const filterResList = listOfRes.filter((item) => {
                                return item.info.avgRating > 4.3;
                            });
                            setListOfRes(filterResList);

                        }}>Top Rated Restaurants</button>
                    </div>
                </div>
                <div className="res-container">
                    {
                        listOfRes.map((item) => {
                            return (
                                <ResCard data={item} key={item?.info.id} />
                            )
                        })
                    }
                </div>
            </div >)
}
export default Body;