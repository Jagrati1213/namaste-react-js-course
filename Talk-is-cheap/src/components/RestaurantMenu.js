import { Divider, Flex, Space, Collapse } from 'antd';
import { useParams } from 'react-router-dom';
import Simmer from './Simmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {

    const { resId } = useParams();
    const resMenuList = useRestaurantMenu({ resId });

    // this condition, check if we have data or not then after it's start destructuring array;
    if (!resMenuList) return <Simmer />;

    // get Details from the RestaurantMenuList
    const { name, costForTwoMessage, sla, areaName, avgRating } = resMenuList?.cards[2]?.card?.card?.info;
    const { cards } = resMenuList?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR; //Menu List

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
                                    label: `${item?.card?.card?.title} ( ${item?.card?.card?.itemCards?.length})`,
                                    children: item?.card?.card?.itemCards?.map((childCard) => {
                                        return <ul key={childCard?.card?.info?.id} className='menu-items'>
                                            <li >
                                                <h4>{childCard?.card?.info?.name}</h4>
                                                <p>{childCard?.card?.info?.price / 100 || childCard?.card?.info?.defaultPrice / 100} price</p>

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