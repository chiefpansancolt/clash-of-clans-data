import TownHall from '@ICommon/townHall.interface'
import Level from '@IBuilderBase/townHall/level.interface'

interface TH extends TownHall {
	levels: Level[]

	getLevel(level: number): Level | undefined
}

export default TH
