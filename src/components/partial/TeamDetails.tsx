import React, {useState} from "react";
import {Avatar, BottomNavigation, Box, Grid, Typography} from "@mui/material";
import styled from "@emotion/styled";
import SettingsIcon from '@mui/icons-material/Settings';
import ShareIcon from '@mui/icons-material/Share';

const TeamDetail = () => {
    function stringAvatar() {
        return {
            sx: {
                bgcolor: '#97DDCC',
                color: '#4E9A87',
            }
        };
    }

    const UserAvatar = styled(Avatar)({
        width: 140,
        height: 140,
        fontSize: 30,
        margin: 'auto'
    });

    const BoxBackground = styled(Box)({
        position: 'relative',
        backgroundImage: 'url(/bg.jpeg)',
        backgroundSize: 'cover',
    });

    return (
        <BoxBackground textAlign={"center"} sx={{}} p={2}>
            <img src={"/bb.png"} width={"100%"} />
            <Typography variant={"h6"} component={"h6"} sx={{fontWeight: 'bold'}}>New Amazons</Typography>
            <UserAvatar {...stringAvatar()} />
            <Box sx={{position: 'absolute', right: 10, top: '50%'}}>
                <Grid direction={"column"} justifyContent={"center"} alignItems={"center"}>
                    <Grid item>
                        <Box mb={1} sx={{backgroundColor: 'white', width: 24, height: 24, borderRadius: '50%', padding: '2px', fontSize: 12}}>
                            <SettingsIcon />
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box sx={{backgroundColor: 'white', width: 24, height: 24, borderRadius: '50%', padding: '2px', fontSize: 12}}>
                            <ShareIcon />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </BoxBackground>
    );
}

export default TeamDetail;
