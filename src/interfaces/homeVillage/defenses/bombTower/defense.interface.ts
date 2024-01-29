import HomeVillageDefense from '@IHomeVillage/defenses/defense.interface'
import Mode from '@IHomeVillage/defenses/bombTower/mode.interface'
import Level from '@IHomeVillage/defenses/bombTower/level.interface'

interface Defense extends HomeVillageDefense {
	levels: Level[]
	mode: Mode | Mode[]

	getLevel(level: number): Level | undefined
}

export default Defense
