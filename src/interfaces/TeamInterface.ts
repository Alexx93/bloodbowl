export interface IPlayerInfo {
    position: string;
    cost: number;
    qty: string;
    skills: string[];
    stats: IPlayerStats[];
}

export interface IPlayerStats {
    ag: string;
    av: string;
    ma: number;
    pa: string;
    st: number;
}
