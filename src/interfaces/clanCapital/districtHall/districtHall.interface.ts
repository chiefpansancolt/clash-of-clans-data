import TownHall from '@ICommon/hall/hall.interface'
import Details from '@IClanCapital/districtHall/details.interface'
import DetailLevel from '@IClanCapital/districtHall/detailLevel.interface'
import Level from '@ICommon/level.interface'

interface DistrictHall extends TownHall {
	capitalHallDetails: Details[]
	levels: Level[]

	getLevel(level: number): Level | undefined
	getCapitalHallLevel(name: string, level: number): DetailLevel | undefined
}

export default DistrictHall
