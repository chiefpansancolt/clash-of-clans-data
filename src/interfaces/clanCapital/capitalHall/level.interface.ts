import TownHallLevel from '@ICommon/townHall/level.interface'

interface Level extends TownHallLevel {
	damagePerSecond: number
	damagePerShot: number
	capitalUpgradesRequired: number
	newCapitalUpgradesRequired: number
	activeImgUrl: string
}

export default Level
