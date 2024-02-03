import HomeVillageDefense from '@IHomeVillage/defenses/defense.interface'
import Mode from '@IHomeVillage/defenses/scattershots/mode.interface'
import Level from '@IHomeVillage/defenses/scattershots/level.interface'

interface Defense extends HomeVillageDefense {
	mode?: Mode | Mode[]
	levels: Level[]

	getLevel(level: number): Level | undefined
}

export default Defense
