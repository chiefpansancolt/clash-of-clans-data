import BuilderBaseDefense from '@IBuilderBase/defenses/defense.interface'
import Mode from '@IBuilderBase/defenses/lavaLauncher/mode.interface'

interface Defense extends BuilderBaseDefense {
	mode?: Mode | Mode[]
}

export default Defense
