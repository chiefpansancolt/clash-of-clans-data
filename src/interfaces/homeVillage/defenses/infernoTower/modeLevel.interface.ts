import HomeVillageModeLevel from '@IHomeVillage/modeLevel.interface'
import Level from '@IHomeVillage/defenses/infernoTower/level.interface'

interface ModeLevel extends HomeVillageModeLevel {
	levels: Level[]
}

export default ModeLevel
