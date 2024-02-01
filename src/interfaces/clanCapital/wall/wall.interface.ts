import Wall from '@ICommon/walls/wall.interface'
import Level from '@IClanCapital/wall/level.interface'
import ClanCapitalDetails from '@IClanCapital/hall/details.interface'
import Details from '@IClanCapital/hall/hallDetails.interface'

interface CapitalWall extends Wall {
	levels: Level[]
	clanCapitalDetails: ClanCapitalDetails[]

	getLevel(level: number): Level | undefined
	getHallLevel(name: string, level: number): Details | undefined
}

export default CapitalWall
