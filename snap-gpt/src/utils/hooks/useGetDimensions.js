import { useEffect, useState } from "react";
import { getDimensions } from "../helper/getDimensions";

export const useGetDimensions = () => {

    const [screenSize, setScreenSize] = useState(getDimensions());

    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getDimensions())
        }
        window.addEventListener('resize', updateDimension);
        return (() => {
            window.removeEventListener('resize', updateDimension);
        })
    }, [screenSize])

    return screenSize;
}