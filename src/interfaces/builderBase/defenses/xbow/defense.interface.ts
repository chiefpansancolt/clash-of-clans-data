import BuilderBaseDefense from '../../defense.interface'
import Level from './level.interface'

interface Defense extends BuilderBaseDefense {
	levels: Level[]

	getLevel(level: number): Level | undefined
}

export default Defense
