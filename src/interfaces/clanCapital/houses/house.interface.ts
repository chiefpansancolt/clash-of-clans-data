import Level from '@ICommon/level.interface'
import Building from '@ICommon/building.interface'
import DistrictHallDetails from '@IClanCapital/hall/details.interface'
import Details from '@IClanCapital/hall/hallDetails.interface'

interface House extends Building {
	ruinImgUrl?: string
	levels: Level[]
	districtHallDetails: DistrictHallDetails[]

	getLevel(level: number): Level | undefined
	getDistrictHallLevel(name: string, level: number): Details | undefined
}

export default House
