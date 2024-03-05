import ResourceBase from '@ICommon/resources/resource.interface'
import BuilderHallDetails from '@IBuilderBase/builderHall/details.interface'
import Level from '@IBuilderBase/resources/level.interface'

interface Resource extends ResourceBase {
	ruinImgUrl?: string
	levels: Level[]
	builderHallDetails: BuilderHallDetails[]

	getLevel(level: number): Level | undefined
	getBuilderHallLevel(level: number): BuilderHallDetails | undefined
}

export default Resource
