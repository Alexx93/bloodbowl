import React, {useState} from "react";
import {Box, Grid, Typography} from "@mui/material";
import SingleNewsPreview from "./partial/SingleNewsPreview";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const LatestNews = () => {
    return (
        <Box pt={3} pb={2} p={2}>

            <Grid container direction={"row"} justifyContent={"flex-start"} alignItems={"center"}>
                <Grid item xs={6}>
                    <Typography component={"p"}>Latest News</Typography>
                </Grid>
                <Grid item xs={6} sx={{textAlign: 'right'}}>
                    <Typography component={"p"} sx={{fontSize: 10}}>Vedi tutto</Typography>
                </Grid>
            </Grid>

            <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}>
                <Grid item xs={12}>
                    <SingleNewsPreview />
                    <SingleNewsPreview />
                    <SingleNewsPreview />
                </Grid>
            </Grid>
        </Box>
    )
}
export default LatestNews
