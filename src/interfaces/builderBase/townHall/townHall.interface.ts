import TownHall from '@ICommon/townHall/townHall.interface'
import Level from '@IBuilderBase/townHall/level.interface'
import Achievement from '@ICommon/achievement/achievement.interface'

interface TH extends TownHall {
	levels: Level[]
	achievement: Achievement | Achievement[]

	getLevel(level: number): Level | undefined
}

export default TH
