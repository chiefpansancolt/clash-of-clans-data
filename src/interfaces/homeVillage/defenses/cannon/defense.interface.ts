import HomeVillageDefense from '@IHomeVillage/defenses/defense.interface'
import GearUp from '@ICommon/defenses/gearUp.interface'
import Level from '@IHomeVillage/defenses/cannon/level.interface'

interface Defense extends HomeVillageDefense {
	levels: Level[]
	gearUp: GearUp

	getLevel(levelNumber: number): Level | undefined
}

export default Defense
