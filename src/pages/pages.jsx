import React from "react";
import Home from "./home";
import Cuisine from "./cuisine";
import SearchResults from "./searchResults";
import Recipe from "./recipe";
import { Route, Routes } from "react-router-dom";

function Pages(){
    return(
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cuisine/:type" element={<Cuisine />} />
                <Route path="/searchResults/:search" element={<SearchResults />} />
                <Route path="/recipe/:name" element={<Recipe />} />
            </Routes>
    )
}

export default Pages;