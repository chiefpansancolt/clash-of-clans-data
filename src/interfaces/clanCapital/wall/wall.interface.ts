import Wall from '@ICommon/walls/wall.interface'
import Level from '@IClanCapital/wall/level.interface'
import DistrictHallDetails from '@IClanCapital/hall/details.interface'
import Details from '@IClanCapital/hall/hallDetails.interface'

interface CapitalWall extends Wall {
	levels: Level[]
	districtHallDetails: DistrictHallDetails[]

	getLevel(level: number): Level | undefined
	getDistrictHallLevel(name: string, level: number): Details | undefined
}

export default CapitalWall
