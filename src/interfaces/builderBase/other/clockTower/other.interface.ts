import Building from '@ICommon/building.interface'
import Level from '@IBuilderBase/other/clockTower/level.interface'
import BuilderHallDetails from '@IBuilderBase/builderHall/details.interface'

interface ClockTower extends Building {
	maxCount: number
	ruinImgUrl: string
	levels: Level[]
	builderHallDetails: BuilderHallDetails[]

	getLevel(level: number): Level | undefined
	getBuilderHallLevel(level: number): BuilderHallDetails | undefined
}

export default ClockTower
