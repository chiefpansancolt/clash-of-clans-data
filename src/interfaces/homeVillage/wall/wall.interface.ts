import Wall from '@ICommon/walls/wall.interface'
import Achievement from '@ICommon/achievement.interface'
import TownHallDefense from '@ICommon/townHallDefense.interface'
import AchievementLevel from '@ICommon/achievementLevel.interface'
import Level from '@IHomeVillage/wall/level.interface'

interface HomeWall extends Wall {
	levels: Level[]
	townHallDetails: TownHallDefense[]
	achievements: Achievement[]

	getLevel(level: number): Level | undefined
	getTownHallLevel(level: number): TownHallDefense | undefined
	getAchievementLevel(level: number, count: number): AchievementLevel | undefined
}

export default HomeWall
