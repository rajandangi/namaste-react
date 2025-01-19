import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div className="error">
            <h1>{error.status}</h1>
            <p>{error.statusText}</p>
        </div>
    )
}
export default Error;