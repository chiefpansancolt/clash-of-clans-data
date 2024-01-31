import Wall from '@ICommon/walls/wall.interface'
import Level from '@IClanCapital/wall/level.interface'
import CapitalHallDetails from '@IClanCapital/defenses/capitalHallDetails.interface'
import TownHallDetails from '@ICommon/hall/details.interface'

interface CapitalWall extends Wall {
	levels: Level[]
	capitalHallDetails: CapitalHallDetails[]

	getLevel(level: number): Level | undefined
	getCapitalHallLevel(name: string, level: number): TownHallDetails | undefined
}

export default CapitalWall
