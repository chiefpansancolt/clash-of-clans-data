import Mode from '@ICommon/army/troops/mode.interface'

interface Troop {
	name: string
	description: string
	level: number
    damagePerSecond: number
    damagePerAttack: number
	hitpoints: number
	mode: Mode | Mode[]
	maxLevel: number
	baseImgUrl: string
}

export default Troop
