import HomeVillageDefense from '@IHomeVillage/defense.interface'
import Level from '@IHomeVillage/defenses/archerTower/level.interface'
import GearUp from '@ICommon/gearUp.interface'

interface Defense extends HomeVillageDefense {
	levels: Level[]
	gearUp: GearUp

	getLevel(levelNumber: number): Level | undefined
}

export default Defense
