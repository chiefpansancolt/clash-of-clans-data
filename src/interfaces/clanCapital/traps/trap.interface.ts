import Level from '@IClanCapital/traps/level.interface'
import Trap from '@ICommon/traps/trap.interface'
import Mode from '@IClanCapital/traps/mode.interface'
import DistrictHallDetails from '@IClanCapital/hall/details.interface'
import Details from '@IClanCapital/hall/hallDetails.interface'

interface ClanCapitalTrap extends Trap {
	ruinImgUrl: string
	levels: Level[]
	mode?: Mode | Mode[]
	districtHallDetails: DistrictHallDetails[]

	getLevel(level: number): Level | undefined
	getDistrictHallLevel(name: string, level: number): Details | undefined
}

export default ClanCapitalTrap
