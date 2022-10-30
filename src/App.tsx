import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Layout } from "./pages/Layout";

export const App: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Layout /> }>
                    <Route index element={<Home />} />
                </Route>                
            </Routes>
        </BrowserRouter>
    );
}

export default App;