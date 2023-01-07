import React, {useState} from "react";
import {BottomNavigation, Grid, Typography} from "@mui/material";
import styled from "@emotion/styled";

const PreviewNewsBox = styled(Grid)({
    backgroundColor: '#f7f7f7',
    borderRadius: 8,
    height: 80,
    margin: '10px 0',
    '& img': {
        borderRadius: 8,
        height: 80,
        objectFit: 'cover'
    }
});

const LatestNews = () => {
    return (
        <PreviewNewsBox container direction={"row"} justifyContent={"flex-start"} alignItems={"stretch"}>
            <Grid item xs={3}>
                <img src={"/news1.jpeg"} width={'100%'} height={"100%"} />
            </Grid>
            <Grid item xs={9} p={1} pr={3}>
                <Typography component={"p"} sx={{fontSize: 12}}>The Blood Bowl Matched Play Guide is Here – But What Is It? Find Out Now</Typography>
                <Typography component={"span"} sx={{fontSize: 10, color: 'red'}}>04 jan 23</Typography>
            </Grid>
        </PreviewNewsBox>
    )
}
export default LatestNews
