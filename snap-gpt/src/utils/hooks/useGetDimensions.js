import { useEffect, useState } from "react";
import { getDimensions } from "../helper/getDimensions";

/**
*  A function return width and height as object.Whenever screen size change.

* @return `screenSize` : return object
 */
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