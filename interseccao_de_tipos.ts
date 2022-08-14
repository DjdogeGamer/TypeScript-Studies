type User2 = {
    id: number,
    name: string,
}

type Char = {
    nickname: string,
    level: number
}

type PlayerInfo = User2 & Char;

let info: PlayerInfo = {
    id: 1,
    name: 'João Inácio',
    nickname: 'birobirobiro',
    level: 50
}