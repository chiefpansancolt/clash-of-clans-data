import Mode from '@ICommon/army/troops/mode.interface'

interface Troop {
	level: number
    damagePerSecond: number
    damagePerAttack: number
	hitpoints: number
	mode: Mode | Mode[]
	baseImgUrl: string
}

export default Troop
