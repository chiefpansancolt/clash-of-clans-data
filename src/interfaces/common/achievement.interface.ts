import AchievementLevel from '@ICommon/achievementLevel.interface'

interface Achievement {
	name: string
	village: string
	levels: AchievementLevel[]
}

export default Achievement
