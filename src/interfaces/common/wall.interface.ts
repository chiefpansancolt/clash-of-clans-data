import Achievement from './achievement.interface'
import WallLevel from './wallLevel.interface'
import TownHallDefense from './townHallDefense.interface'
import AchievementLevel from './achievementLevel.interface'

interface Wall {
	name: string
	description: string
	width: number
	height: number
	maxLevel: number
	maxCount: number
	townHallDetails: TownHallDefense[]
	levels: WallLevel[]
	achievements: Achievement[]

	getSize(): string
	getLevel(level: number): WallLevel | undefined
	getTownHallLevel(level: number): TownHallDefense | undefined
	getAchievementLevel(level: number, count: number): AchievementLevel | undefined
}

export default Wall
