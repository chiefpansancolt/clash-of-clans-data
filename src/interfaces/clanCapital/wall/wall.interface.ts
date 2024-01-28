import Wall from '@ICommon/walls/wall.interface'
import Level from '@IClanCapital/wall/level.interface'
import CapitalHallDefense from '@IClanCapital/capitalHallDefense.interface'
import TownHallDefense from '@ICommon/townHallDefense.interface'

interface CapitalWall extends Wall {
	levels: Level[]
	capitalHallDetails: CapitalHallDefense[]

	getLevel(level: number): Level | undefined
	getCapitalHallLevel(name: string, level: number): TownHallDefense | undefined
}

export default CapitalWall
