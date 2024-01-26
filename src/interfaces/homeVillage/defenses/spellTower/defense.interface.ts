import HomeVillageDefense from '@IHomeVillage/defense.interface'
import Mode from '@IHomeVillage/defenses/spellTower/mode.interface'
import Level from '@IHomeVillage/defenses/spellTower/level.interface'

interface Defense extends HomeVillageDefense {
	modes: Mode[]
	levels: Level[]

	getLevel(level: number): Level | undefined
}

export default Defense
