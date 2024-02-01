import BaseResource from '@IHomeVillage/resources/resource.interface'
import Level from '@IHomeVillage/resources/goldMine/level.interface'

interface Resource extends BaseResource {
	levels: Level[]

	getLevel(level: number): Level | undefined
}

export default Resource
