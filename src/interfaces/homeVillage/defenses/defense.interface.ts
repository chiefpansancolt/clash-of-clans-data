import Defense from '@ICommon/defenses/defense.interface'
import Level from '@IHomeVillage/defenses/level.interface'
import ModeLevel from '@IHomeVillage/defenses/modeLevel.interface'
import TownHallDetails from '@IHomeVillage/townHall/details.interface'
import Achievement from '@ICommon/achievement/achievement.interface'
import GearUp from '@ICommon/defenses/gearUp.interface'
import Cost from '@ICommon/cost.interface'
import Mode from '@IHomeVillage/defenses/mode.interface'

interface HomeVillageDefense extends Defense {
	maxCount: number
	levels?: Level[]
	modeLevels?: ModeLevel[]
	townHallDetails: TownHallDetails[]
	achievement?: Achievement | Achievement[]
	gearUp?: GearUp
	costs?: Cost[]
	mode?: Mode | Mode[]

	getLevel?(level: number): Level | undefined
	getModeLevel?(name: string, level: number): Level | undefined
	getTownHallLevel(level: number): TownHallDetails | undefined
}

export default HomeVillageDefense
