import AchievementLevel from '@ICommon/achievement/level.interface'

interface Achievement {
	name: string
	village: string
	levels: AchievementLevel[]
}

export default Achievement
