import Defense from '@ICommon/defenses/defense.interface'
import HomeVillageModeLevel from '@IHomeVillage/defenses/modeLevel.interface'
import HomeVillageLevel from '@IHomeVillage/defenses/level.interface'
import TownHallDetails from '@IHomeVillage/townHall/details.interface'
import Achievement from '@ICommon/achievement/achievement.interface'

interface HomeVillageModeDefense extends Defense {
	maxCount: number
	levels: HomeVillageModeLevel[]
	townHallDetails: TownHallDetails[]
	achievement: Achievement | Achievement[]

	getLevel(mode: string, level: number): HomeVillageLevel | undefined
	getTownHallLevel(level: number): TownHallDetails | undefined
}

export default HomeVillageModeDefense
