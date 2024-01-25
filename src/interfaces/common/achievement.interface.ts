import AchievementLevel from '../common/achievementLevel.interface'

interface Achievement {
	name: string
	village: string
	levels: AchievementLevel[]
}

export default Achievement
