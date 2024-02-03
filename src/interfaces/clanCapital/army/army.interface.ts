import Building from '@ICommon/building.interface'
import Level from '@IClanCapital/army/level.interface'
import DistrictHallDetails from '@IClanCapital/hall/details.interface'
import Details from '@IClanCapital/hall/hallDetails.interface'

interface ArmyBuilding extends Building {
	ruinImgUrl: string
	levels: Level[]
	districtHallDetails: DistrictHallDetails[]

	getLevel(level: number): Level | undefined
	getDistrictHallLevel(name: string, level: number): Details | undefined
}

export default ArmyBuilding
