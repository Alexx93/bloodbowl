import React, {useEffect, useRef, useState} from "react";
import {getAllTeams, getTeam} from "../utils/helpers";
import {FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {IPlayerInfo} from "../interfaces/TeamInterface";

const Team = () => {

    const [total, setTotal] = useState<number>(0);
    const [team, setTeam] = useState<string>('');
    const [player, setPlayer] = useState<IPlayerInfo[]>([
        {
            "position": "",
            "qty": "",
            "cost": 0,
            "stats": [
                {
                    "ma": 0,
                    "st": 0,
                    "ag": "",
                    "pa": "",
                    "av": ""
                }
            ],
            "skills": []
        }
    ]);

    const [qty, setQty] = useState<number>();

    const handleTotal = (e: any) => {
        setTotal(e.target.value)
    }

    const handleTeamChange = (event: SelectChangeEvent) => {
        setTeam(event.target.value);
    };

    const handlePlayerChange = (event: SelectChangeEvent, index: number) => {
        player[index] = getTeam(team).players.find((p:IPlayerInfo) => p.position === event.target.value);
        setPlayer([...player]);
    };

    useEffect(() => {
        console.log(player)
    }, [player])

    useEffect(() => {
        setRemaining(total)
    }, [total])

    let [remaining, setRemaining] = useState<number>(total);

    const handleQty = (e: any, index: number) => {

        const pCost: any = player.find((p: IPlayerInfo) => p.position === e.target.name)?.cost;
        if(pCost){
            remaining = remaining - (pCost * e.target.value);
        }

        const playerQuantity = player.find((p: IPlayerInfo) => p.position === e.target.name)?.qty.split('-')[1];

        if(playerQuantity){
            if (Number(e.target.value) > Number(playerQuantity)) {
                setQty(Number(playerQuantity));
            }else{
                setQty(e.target.value);
            }
        }

        setRemaining(remaining);
    }

    const addPlayer = () => {
        setPlayer(player => [...player, {
            "position": "",
            "qty": "",
            "cost": 0,
            "stats": [
                {
                    "ma": 0,
                    "st": 0,
                    "ag": "",
                    "pa": "",
                    "av": ""
                }
            ],
            "skills": []
        }])
    }

    const handlQtyChange = (e: any, index: number) => {}

    return (
        <>
            <Typography component={"h6"}>Inserisci il valore di partenza</Typography>
            <TextField id="filled-basic" label="Filled" variant="filled" type="number" value={total} onChange={handleTotal}  />

            <Typography component={"h6"}>Seleziona il team</Typography>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-filled-label">Team</InputLabel>
                <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={team}
                    onChange={handleTeamChange}
                >
                    {
                        getAllTeams().map((t: any) => (
                            <MenuItem value={t.name} key={t.name}>{t.name}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>

            <Typography component={"h6"}>Inserisci la formazione</Typography>

            {
                team && (
                    <>
                        {
                            player.map((p: IPlayerInfo, index: number) => (
                                <Grid container direction={"row"} alignItems={"center"} justifyContent={"flex-start"} key={index}>
                                    <Grid item xs={1}>{index}°</Grid>
                                    <Grid item xs={7}>
                                        <FormControl variant="filled" sx={{ minWidth: '100%' }}>
                                            <InputLabel id="demo-simple-select-filled-label">Player</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-filled-label"
                                                id="demo-simple-select-filled"
                                                value={player[index].position || ''}
                                                onChange={(e: any) => handlePlayerChange(e, index)}
                                            >
                                                {getTeam(team).players.map((pl: any) => (
                                                    <MenuItem value={pl.position} key={pl.position}>{pl.position}</MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3}>
                                        {
                                            player[index].position && (

                                                <FormControl variant="filled" sx={{ minWidth: '100%' }}>
                                                    <InputLabel id="demo-simple-select-filled-label">Qty</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-filled-label"
                                                        id="demo-simple-select-filled"
                                                        value={player[index].qty.split('-')[1]}
                                                        onChange={(e: any) => handlQtyChange(e, index)}
                                                    >
                                                        <MenuItem value={player[index].qty} key={1}>1</MenuItem>
                                                        {/*{getTeam(team).players.map((pl: any) => (
                                                            <MenuItem value={pl.qty} key={pl.position}>{pl.qty}</MenuItem>
                                                        ))}*/}
                                                    </Select>
                                                </FormControl>

                                                //<TextField id="filled-basic" label="qty" variant="filled" type="number" name={player[index].position} inputProps={{ min: player[index]?.qty.split('-')[0], max: player[index]?.qty.split('-')[1], step: "1"}} onChange={(e: any) => handleQty(e, index)} value={qty} />
                                            )
                                        }
                                    </Grid>
                                    <Grid item xs={1} onClick={addPlayer}>
                                        <AddIcon />
                                    </Grid>
                                </Grid>
                            ))
                        }
                    </>
                )
            }

            <Typography component={"h6"}>Totale rimasto: {remaining}</Typography>

        </>
    );
}

export default Team;
