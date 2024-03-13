import Mode from '@ICommon/army/mode.interface'
import Level from '@ICommon/army/level.interface'

interface Army {
	name: string
	description: string
	maxLevel: number
	mode?: Mode | Mode[]
	levels: Level[]
	avatarImgUrl?: string

	getLevel(level: number): Level | undefined
}

export default Army
