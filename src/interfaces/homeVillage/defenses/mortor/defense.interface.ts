import HomeVillageDefense from '@IHomeVillage/defenses/defense.interface'
import GearUp from '@ICommon/defenses/gearUp.interface'
import Mode from '@IHomeVillage/defenses/mortor/mode.interface'
import Level from '@IHomeVillage/defenses/mortor/level.interface'

interface Defense extends HomeVillageDefense {
	levels: Level[]
	gearUp: GearUp
	mode: Mode | Mode[]

	getLevel(levelNumber: number): Level | undefined
}

export default Defense
