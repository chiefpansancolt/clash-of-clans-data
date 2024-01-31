import Defense from '@ICommon/defenses/defense.interface'
import Level from '@IHomeVillage/defenses/airSweeper/level.interface'
import TownHallDefense from '@ICommon/hall/details.interface'
import Achievement from '@ICommon/achievement/achievement.interface'

interface HomeVillagePushDefense extends Defense {
	maxCount: number
	levels: Level[]
	townHallDetails: TownHallDefense[]
	achievement: Achievement | Achievement[]

	getLevel(level: number): Level | undefined
	getTownHallLevel(level: number): TownHallDefense | undefined
}

export default HomeVillagePushDefense
