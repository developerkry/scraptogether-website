import {
    createBrowserRouter,
} from "react-router-dom";

import Layout from "../components/layout/Layout/Layout";

import Home from "../pages/Home/Home";
import FindPlayers from "../pages/FindPlayers/FindPlayers";
import PartyBrowser from "../pages/PartyBrowser/PartyBrowser";
import Community from "../pages/Community/Community";
import NotFound from "../pages/NotFound/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "find-players",
                element: <FindPlayers />,
            },
            {
                path: "party-browser",
                element: <PartyBrowser />,
            },
            {
                path: "community",
                element: <Community />,
            },
        ],
    },
]);