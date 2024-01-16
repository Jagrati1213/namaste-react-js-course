import UserClass from "./UserClass";
import { Row } from "antd";
const About = () => {
    return (
        <div className="about">
            <h1 style={{ textAlign: 'center' }}>About</h1>
            <Row justify={'center'} className="user-card-container">
                <UserClass />
            </Row>
        </div>
    )
}

export default About;