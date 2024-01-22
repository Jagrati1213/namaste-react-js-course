import { Avatar, Button, List, Skeleton } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, removeItem } from '../redux-store/slice/cartSlice';

function Cart() {
    const cartItem = useSelector((store) => store.cart.item);
    const dispatch = useDispatch();

    const handleAllClear = () => {
        dispatch(clearCart());
    }
    const handleDeleteCardItem = (id) => {
        dispatch(removeItem(id));
    }
    return (
        <>
            {
                cartItem.length === 0 ? '' : <div style={{ padding: '2rem', width: '100%', display: 'flex', justifyContent: 'center' }}><Button style={{ background: 'brown', color: 'white' }} onClick={handleAllClear}>Clear All</Button></div>
            }
            <List
                style={{ padding: '2rem' }}
                itemLayout="horizontal"
                dataSource={cartItem}
                renderItem={(cartItem) => (

                    <List.Item
                        actions={[<Button onClick={() => handleDeleteCardItem(cartItem?.card?.info?.id)}>Delete</Button>]}
                    >
                        <Skeleton title={false} loading={cartItem.loading} active>
                            <List.Item.Meta
                                title={cartItem?.card?.info?.name}
                                description={cartItem?.card?.info?.price / 100}
                            />
                        </Skeleton>
                    </List.Item>
                )}
            />
        </>

    )
}

export default Cart