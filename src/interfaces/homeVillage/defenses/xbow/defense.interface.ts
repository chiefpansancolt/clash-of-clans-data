import HomeVillageDefense from '@IHomeVillage/defense.interface'
import Mode from '@IHomeVillage/defenses/xbow/mode.interface'
import Level from '@IHomeVillage/defenses/xbow/level.interface'

interface Defense extends HomeVillageDefense {
	modes: Mode[]
	levels: Level[]

	getLevel(level: number): Level | undefined
}

export default Defense
