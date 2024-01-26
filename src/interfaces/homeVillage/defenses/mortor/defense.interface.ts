import HomeVillageDefense from '@IHomeVillage/defense.interface'
import GearUp from '@ICommon/gearUp.interface'
import Mode from '@IHomeVillage/defenses/mortor/mode.interface'
import Level from '@IHomeVillage/defenses/mortor/level.interface'

interface Defense extends HomeVillageDefense {
	levels: Level[]
	gearUp: GearUp
	modes: Mode[]

	getLevel(levelNumber: number): Level | undefined
}

export default Defense
