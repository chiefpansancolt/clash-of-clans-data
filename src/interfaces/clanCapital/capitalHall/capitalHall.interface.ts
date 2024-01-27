import TownHall from '@ICommon/townHall.interface'
import Level from '@/interfaces/clanCapital/capitalHall/level.interface'
import Mode from '@ICommon/defenseMode.interface'

interface TH extends TownHall {
	mode: Mode
	levels: Level[]

	getLevel(level: number): Level | undefined
}

export default TH
