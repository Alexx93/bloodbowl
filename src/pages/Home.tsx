import React, {useState} from "react";
import TeamDetail from "../components/partial/TeamDetails";
import LatestNews from "../components/LatestNews";

const Home = () => {
    return (
        <>
            <TeamDetail />
            <LatestNews />
        </>

    );
}

export default Home;
