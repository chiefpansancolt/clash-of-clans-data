import BaseResource from '@ICommon/resources/resource.interface'
import Level from '@IBuilderBase/resources/elixirCollector/level.interface'

interface Resource extends BaseResource {
	ruinImgUrl: string
	levels: Level[]

	getLevel(level: number): Level | undefined
}

export default Resource
