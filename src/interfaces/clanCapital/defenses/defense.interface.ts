import Level from '@IClanCapital/defenses/level.interface'
import Defense from '@ICommon/defenses/defense.interface'
import DistrictHallDetails from '@IClanCapital/hall/details.interface'
import Details from '@IClanCapital/hall/hallDetails.interface'

interface ClanCapitalDefense extends Defense {
	ruinImgUrl: string
	levels: Level[]
	districtHallDetails: DistrictHallDetails[]

	getLevel(level: number): Level | undefined
	getDistrictHallLevel(name: string, level: number): Details | undefined
}

export default ClanCapitalDefense
