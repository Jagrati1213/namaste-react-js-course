import { Divider, Flex, Space, Collapse, Button } from 'antd';
import { useParams } from 'react-router-dom';
import Simmer from './Simmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import { useDispatch } from "react-redux";
import { addItem } from '../redux-store/slice/cartSlice';

const RestaurantMenu = () => {

    const { resId } = useParams();
    const resMenuList = useRestaurantMenu({ resId });
    const dispatch = useDispatch();

    console.log(resMenuList);
    // this condition, check if we have data or not then after it's start destructuring array;
    if (resMenuList === null) return <Simmer />;

    // get Details from the RestaurantMenuList
    const { name, costForTwoMessage, sla, areaName, avgRating } = resMenuList?.cards[0]?.card?.card?.info ?? {};
    const { cards } = resMenuList?.cards[resMenuList?.cards?.length - 1]?.groupedCard?.cardGroupMap?.REGULAR; //Menu List

    const handleAddToCart = (item) => {
        dispatch(addItem(item));
    }

    return (
        <div className='menu'>
            {/* Restaurant tag-details */}
            <Flex justify='space-between' className="restaurant-details ">
                <Space direction='vertical' className='res-heading'>
                    <h3>{name}</h3>
                    <p>{areaName}, {sla.lastMileTravelString}</p>
                </Space>
                <div className='ratings'>{avgRating} ratings  <Divider style={{ margin: '10px 0' }} /> 10 ratings</div>
            </Flex>
            <Divider />

            {/* Restaurant Price and time details */}
            <Space className='res-time-and-price'>
                <p>{sla.deliveryTime} Mins</p> | <p>{costForTwoMessage}</p>
            </Space>
            <Divider />
            {/* Restaurant MenuList details  */}
            <Space direction='vertical' style={{ display: 'flex' }}>

                {/* Display Menu List */}
                {
                    cards.slice(1).map((item) => {

                        if (item?.card?.card?.title !== undefined) {
                            return <Collapse key={item?.card?.card?.title + Math.random().toString()}
                                items={[{
                                    key: item?.card?.card?.title + (Math.random() * 5).toString(),
                                    label: item?.card?.card?.title,
                                    children: item?.card?.card?.itemCards?.map((childCard) => {

                                        return <ul key={childCard?.card?.info?.id} className='menu-items'>
                                            <li style={{ justifyContent: 'space-between', display: 'flex' }} data-testid='foodItem'>
                                                <div>
                                                    <h4>{childCard?.card?.info?.name}</h4>
                                                    <p>{childCard?.card?.info?.price / 100 || childCard?.card?.info?.defaultPrice / 100} price</p>
                                                </div>
                                                <Button color='lightGreen' onClick={() => { handleAddToCart(childCard) }} >Add</Button>
                                            </li>
                                        </ul>
                                    }),

                                }]}
                                defaultActiveKey={['1']} />
                        }
                    })
                }
            </Space>

        </div>
    )
}

export default RestaurantMenu;