import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout/Layout";

import Home from "./pages/Home/Home";
import FindPlayers from "./pages/FindPlayers/FindPlayers";
import PartyBrowser from "./pages/PartyBrowser/PartyBrowser";
import Community from "./pages/Community/Community";
import NotFound from "./pages/NotFound/NotFound";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route
                        path="/"
                        element={<Home />}
                    />

                    <Route
                        path="/find-players"
                        element={<FindPlayers />}
                    />

                    <Route
                        path="/party-browser"
                        element={<PartyBrowser />}
                    />

                    <Route
                        path="/community"
                        element={<Community />}
                    />
                </Route>

                <Route
                    path="*"
                    element={<NotFound />}
                />
            </Routes>
        </BrowserRouter>
    );
}