import BuilderBaseDefense from '@IBuilderBase/defenses/defense.interface'
import Level from '@IBuilderBase/defenses/multiMortor/level.interface'
import Mode from '@IBuilderBase/defenses/multiMortor/mode.interface'

interface Defense extends BuilderBaseDefense {
	mode?: Mode | Mode[]
	levels: Level[]

	getLevel(level: number): Level | undefined
}

export default Defense
