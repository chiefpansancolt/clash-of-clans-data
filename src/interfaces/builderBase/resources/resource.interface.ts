import ResourceBase from '@ICommon/resources/resource.interface'
import BuilderHallDetails from '@IBuilderBase/builderHall/details.interface'

interface Resource extends ResourceBase {
	builderHallDetails: BuilderHallDetails[]

	getBuilderHallLevel(level: number): BuilderHallDetails | undefined
}

export default Resource
