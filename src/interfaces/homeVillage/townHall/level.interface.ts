import TownHallLevel from '@ICommon/hall/level.interface'
import Mode from '@IHomeVillage/townHall/mode.interface'
import SubLevel from '@IHomeVillage/townHall/subLevel.interface'

interface Level extends TownHallLevel {
	maximumNumberOfTrapsAvailable: number
	goldCapacity: number
	elixirCapacity: number
	darkElixirCapacity: number
	buildTimeSec: number
	buildTimeMin: number
	buildTimeHour: number
	buildTimeDay: number
	exp: number
	townHallLevelRequired: number
	mode: Mode | null
	subLevels: SubLevel[]
}

export default Level
