// import the data from another js
import { useState } from 'react';
import { resList } from '../utils/reslist';
import ResCard from './ResCrad';

const Body = () => {

    // state for Restaurants list
    const [listOfRes, setListOfRes] = useState(resList.length > 0 ? resList : []);
    return (
        <div className="body">
            {/* <div className="search-container">
                <input type="search" name="food-search" id="search" placeholder='search your favorite meal...' />
                <button type='submit'>search</button>
            </div> */}
            <div className="filter-container">
                <button className='filter-btn' onClick={() => {
                    // filter logic
                    const filterResList = listOfRes.filter((item) => {
                        return item.info.avgRating > 4;
                    });
                    setListOfRes(filterResList);

                }}>Top Rated Restaurants</button>
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
        </div>
    )
}

export default Body;