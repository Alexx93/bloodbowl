import React, {useEffect, useRef, useState} from "react";
import {getAllTeams, getTeam} from "../utils/helpers";
import {FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography} from "@mui/material";

const Team = () => {

    const [total, setTotal] = useState<number>(0);
    const [team, setTeam] = useState<string>('');
    const [player, setPlayer] = useState<any>();

    let [remaining, setRemaining] = useState<number>(0);

    const handleTotal = (e: any) => {
        setTotal(e.target.value)
    }

    const handleTeamChange = (event: SelectChangeEvent) => {
        setTeam(event.target.value);
    };

    const handlePlayerChange = (event: SelectChangeEvent) => {
        setPlayer(getTeam(team).players.filter((p: any) => p.position === event.target.value));
        console.log(getTeam(team).players.find((p: any) => p.position === event.target.value).cost);
    };

    const [qty, setQty] = useState<number>();

    const handleQty = (e: any) => {
        if (Number(e.target.value) > player[0].qty.split('-')[1]) {
            setQty(player[0].qty.split('-')[1]);
        }else{
            setQty(e.target.value);
        }
    }

    useEffect(() => {
        if(qty){
            remaining = total - (player[0].cost * qty);
            setRemaining(remaining)
        }
    }, [qty])

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

          <Grid container direction={"row"} alignItems={"center"} justifyContent={"flex-start"}>
              {
                  team && (
                      <>
                        <Grid item xs={1}>1°</Grid>
                        <Grid item xs={5}>
                              <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                                  <InputLabel id="demo-simple-select-filled-label">Player</InputLabel>
                                  <Select
                                      labelId="demo-simple-select-filled-label"
                                      id="demo-simple-select-filled"
                                      value={player}
                                      onChange={handlePlayerChange}
                                  >
                                      {getTeam(team).players.map((p: any) => (
                                          <MenuItem value={p.position} key={p.position}>{p.position}</MenuItem>
                                      ))}
                                  </Select>
                              </FormControl>
                        </Grid>
                        <Grid item xs={3}>
                            {
                                player && (
                                    <TextField id="filled-basic" label="qty" variant="filled" type="number" inputProps={{ min: player[0].qty.split('-')[0], max: player[0].qty.split('-')[1], step: "1"}} onChange={handleQty} value={qty} />
                                )
                            }
                        </Grid>
                      </>
                  )
              }
          </Grid>

          <Typography component={"h6"}>Totale rimasto: {remaining}</Typography>

      </>
    );
}

export default Team;
