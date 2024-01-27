import TownHallLevel from '@ICommon/townHallLevel.interface'

interface Level extends TownHallLevel {
	damagePerSecond: number
	damagePerShot: number
	capitalUpgradesRequired: number
	newCapitalUpgradesRequired: number
	activeImgUrl: string
}

export default Level
