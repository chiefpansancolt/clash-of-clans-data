import BaseResource from '@IBuilderBase/resources/resource.interface'
import Level from '@IBuilderBase/resources/gemMine/level.interface'

interface Resource extends BaseResource {
	ruinImgUrl: string
	levels: Level[]

	getLevel(level: number): Level | undefined
}

export default Resource
