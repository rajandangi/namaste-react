import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Loading from "./components/Loading";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";

// Chunking/Code Splitting/ Dynamic Bundling/Lazy Loading/ On Demand Loading
// See @https://react.dev/reference/react/lazy
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const appRoute = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/about',
                element: (<Suspense fallback={<Loading />}><About /></Suspense>),
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantMenu />,
            }
        ],
        errorElement: <Error />,
    }
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);