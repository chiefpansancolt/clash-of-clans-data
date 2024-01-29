import BuilderBaseDefense from '@IBuilderBase/defenses/defense.interface'
import Level from '@IBuilderBase/defenses/xbow/level.interface'

interface Defense extends BuilderBaseDefense {
	levels: Level[]

	getLevel(level: number): Level | undefined
}

export default Defense
