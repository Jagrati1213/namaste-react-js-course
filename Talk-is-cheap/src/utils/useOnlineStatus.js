import { useEffect, useState } from 'react';

const useOnlineStatus = () => {

    //state for status
    const [onlineStatus, setOnlineStatus] = useState(true);

    // render only once
    useEffect(() => {
        checkStatus();
    });

    // for checking status
    const checkStatus = () => {
        window.addEventListener('offline', () => {
            setOnlineStatus(false);
        });
        window.addEventListener('online', () => {
            setOnlineStatus(true);
        })
    }
    return onlineStatus;
}
export default useOnlineStatus;