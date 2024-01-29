import TownHall from '@ICommon/townHall/townHall.interface'
import Level from '@IHomeVillage/townHall/level.interface'
import SubLevel from '@IHomeVillage/townHall/subLevel.interface'
import Achievement from '@ICommon/achievement/achievement.interface'

interface TH extends TownHall {
	levels: Level[]
	achievement: Achievement | Achievement[]

	getLevel(level: number): Level | undefined
	getSubLevel(level: number, subLevel: number): SubLevel | undefined
}

export default TH
