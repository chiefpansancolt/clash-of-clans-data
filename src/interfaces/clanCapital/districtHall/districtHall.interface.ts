import Hall from '@ICommon/hall/hall.interface'
import DistrictHallDetails from '@IClanCapital/districtHall/details.interface'
import DistrictHallLevel from '@IClanCapital/districtHall/detailLevel.interface'
import Level from '@ICommon/level.interface'

interface DistrictHall extends Hall {
	districtHallDetails: DistrictHallDetails[]
	levels: Level[]

	getLevel(level: number): Level | undefined
	getDistrictHallLevel(name: string, level: number): DistrictHallLevel | undefined
}

export default DistrictHall
