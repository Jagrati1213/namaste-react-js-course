import React from 'react';
import { Card, Col } from 'antd';

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        /* 
        * this - indicate the current object
        * State - contains all state just like we use in functional based component (useState), and it's a reserve keyword as well.
        */
        this.state = {
            userInfo: {
                name: 'dummy',
                location: 'default'
            }
        }
    }

    async componentDidMount() {
        // console.log(this.props.title + " ComponentDidMount");
        // Api Call
        const data = await fetch(' https://api.github.com/users/Jagrati1213');
        const response = await data.json();
        this.setState({
            userInfo: response
        })
    }

    componentWillUnmount() {
        // console.log('called after you move to another page');
    }

    render() {

        const { userInfo } = this.state;
        return (
            <Col xs={24} md={5}>
                <Card bordered={false} cover={<img alt="example" src={userInfo.avatar_url} width={70} height={200} />}>
                    {userInfo.name} <br />{userInfo.bio}
                </Card>
            </Col>
        )
    }
}

export default UserClass;