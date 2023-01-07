import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {BottomNavigation, BottomNavigationAction} from "@mui/material";

import HomeIcon from '@mui/icons-material/Home';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SportsFootballIcon from '@mui/icons-material/SportsFootball';
import ListAltIcon from '@mui/icons-material/ListAlt';
import GavelIcon from '@mui/icons-material/Gavel';
import styled from "@emotion/styled";

const StickyBottomNavigation = styled(BottomNavigation)({
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: 0,
    height: 80,
    overflow: 'hidden',
    boxShadow: '#00000017 0 -1px 16px',
    zIndex: 1
});

const NavBar = () => {

    const [value, setValue] = useState('');
    const navigate = useNavigate();

    return (
        <StickyBottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
                navigate("/"+ newValue)
                setValue(newValue);
            }}
        >
            <BottomNavigationAction label="Dashboard" icon={<HomeIcon />} value={""} />
            <BottomNavigationAction label="Manual" icon={<AutoStoriesIcon />} value={"manual"} />
            <BottomNavigationAction label="Team" icon={<SportsFootballIcon />} value={"team"} />
            <BottomNavigationAction label="Roster" icon={<ListAltIcon />} value={"roster"} />
            <BottomNavigationAction label="Rules" icon={<GavelIcon />} value={"rules"} />
        </StickyBottomNavigation>
    );
}

export default NavBar;
