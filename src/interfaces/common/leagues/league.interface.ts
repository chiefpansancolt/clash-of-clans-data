import Level from '@ICommon/leagues/level.interface'

interface League {
	levels: Level[]

	getLeagueByName(name: string): Level | undefined
	getLeagueByTrophy(trophy: number): Level | undefined
}

export default League
