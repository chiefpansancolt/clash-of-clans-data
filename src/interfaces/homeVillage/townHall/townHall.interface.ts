import TownHall from '@ICommon/townHall.interface'
import Level from '@IHomeVillage/townHall/level.interface'
import SubLevel from '@IHomeVillage/townHall/subLevel.interface'

interface TH extends TownHall {
	levels: Level[]

	getLevel(level: number): Level | undefined
	getSubLevel(level: number, subLevel: number): SubLevel | undefined
}

export default TH
