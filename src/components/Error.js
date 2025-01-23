import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div className="grid place-items-center h-screen">
            <h1 className='text-xl'>{error.status}</h1>
            <p>{error.statusText}</p>
        </div>
    )
}
export default Error;