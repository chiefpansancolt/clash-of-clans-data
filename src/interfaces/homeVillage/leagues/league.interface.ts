import LeagueBase from '@ICommon/leagues/league.interface'
import Level from '@IHomeVillage/leagues/level.interface'

interface League extends LeagueBase {
	levels: Level[]
}

export default League
