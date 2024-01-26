import BuilderBaseDefense from '@IBuilderBase/defense.interface'
import Mode from '@IBuilderBase/defenses/firecrackers/mode.interface'

interface Defense extends BuilderBaseDefense {
	modes: Mode[]
}

export default Defense