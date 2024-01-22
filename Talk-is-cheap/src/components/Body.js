// import the data from another js
// import { resList } from '../utils/reslist';
import ResCard, { withLabelOfOpen } from './ResCrad';
import Simmer from './Simmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import useSwiggyApi from '../utils/useSwiggyApi';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';


const Body = () => {

    // Take Context api
    const { name, setName } = useContext(AuthContext);
    // state for Restaurants list from custom Hook
    const {
        listOfRes,
        filterListOfRes,
        topRatedFilterHandler,
        searchFilterResHandler,
        searchText,
        setSearchText } = useSwiggyApi();

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) return <h1>Looks you are offline, please check your connection</h1>

    const RestaurantIsOpen = withLabelOfOpen(ResCard);



    return !listOfRes ?
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

                <input placeholder='enter user name...' value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            {/* Restaurant container */}
            <div className="res-container">
                {
                    filterListOfRes === null ? <h1 style={{ color: 'black' }}>Not found</h1> :
                        filterListOfRes?.map((item) => {
                            return (
                                <Link key={item?.info.id} to={`/restaurants/${item?.info.id}`}>
                                    {
                                        item?.info?.isOpen ? <RestaurantIsOpen data={item} /> : <ResCard data={item} />
                                    }
                                </Link>
                            )
                        })
                }
            </div>
        </div >)
}
export default Body;