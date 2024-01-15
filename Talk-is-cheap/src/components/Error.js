import { useRouteError } from "react-router-dom";

const Error = () => {

    const error = useRouteError(); //give error related details

    return (
        <div>
            <h1>Oops !!</h1>
            <p>Somethings went wrong..</p>
            <h2>{error.status} : {error.statusText}</h2>
        </div>
    )
}
export default Error;