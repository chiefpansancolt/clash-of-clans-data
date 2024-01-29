import HomeVillageDefense from '@IHomeVillage/defenses/defense.interface'
import Level from '@IHomeVillage/defenses/archerTower/level.interface'
import GearUp from '@ICommon/defenses/gearUp.interface'

interface Defense extends HomeVillageDefense {
	levels: Level[]
	gearUp: GearUp

	getLevel(levelNumber: number): Level | undefined
}

export default Defense
