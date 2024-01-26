import HomeVillageDefense from '@IHomeVillage/defense.interface'
import GearUp from '@ICommon/gearUp.interface'
import Level from '@IHomeVillage/defenses/cannon/level.interface'

interface Defense extends HomeVillageDefense {
	levels: Level[]
	gearUp: GearUp

	getLevel(levelNumber: number): Level | undefined
}

export default Defense
