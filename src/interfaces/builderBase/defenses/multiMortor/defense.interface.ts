import BuilderBaseDefense from '@IBuilderBase/defense.interface'
import Level from '@IBuilderBase/defenses/multiMortor/level.interface'
import Mode from '@IBuilderBase/defenses/multiMortor/mode.interface'

interface Defense extends BuilderBaseDefense {
	modes: Mode[]
	levels: Level[]

	getLevel(level: number): Level | undefined
}

export default Defense
