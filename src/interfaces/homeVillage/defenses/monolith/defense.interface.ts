import HomeVillageDefense from '@IHomeVillage/defenses/defense.interface'
import Level from '@IHomeVillage/defenses/monolith/level.interface'

interface Defense extends HomeVillageDefense {
	levels: Level[]

	getLevel(level: number): Level | undefined
}

export default Defense
