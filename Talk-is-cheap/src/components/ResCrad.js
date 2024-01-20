import { CDN_URL } from "../utils/constants";
import { Tag } from 'antd';

const ResCard = ({ data }) => {
    // object destructuring
    const { avgRating, name, cuisines, cloudinaryImageId, sla, costForTwo } = data?.info;
    return (
        <div className='res-card'>
            <img src={`${CDN_URL}/${cloudinaryImageId}`} alt="res-logo" className='res-logo' />
            <h2>{name}</h2>
            <p>{cuisines.join(', ')}</p>
            <h4>{avgRating} ratings | {sla?.deliveryTime} minutes</h4>
            <p>{costForTwo}</p>
        </div>
    )
}

export default ResCard;

// Higher Order Component --> take a component and return a component
export const withLabelOfOpen = (RestaurantCard) => {
    return (props) => {
        return <div>
            <Tag color="magenta"> Open</Tag>
            <RestaurantCard {...props} />
        </div>
    }
}