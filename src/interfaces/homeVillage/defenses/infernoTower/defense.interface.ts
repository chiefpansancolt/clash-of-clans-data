import HomeVillageModeDefense from '@IHomeVillage/modeDefense.interface'
import Mode from '@IHomeVillage/defenses/infernoTower/mode.interface'
import ModeLevel from '@IHomeVillage/defenses/infernoTower/modeLevel.interface'
import Level from '@IHomeVillage/defenses/infernoTower/level.interface'

interface Defense extends HomeVillageModeDefense {
	modes: Mode[]
	levels: ModeLevel[]

	getLevel(number: string, level: number): Level | undefined
}

export default Defense
