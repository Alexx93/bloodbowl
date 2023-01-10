import React from "react";
import TeamsData from "../data/teams.json";

export const getAllTeams = (): any[] => {
    return TeamsData
}

export const getTeam = (name: string) => {
    return getAllTeams().find((t: any) => t.name === name)
}
