import DefenseMode from '@ICommon/defenseMode.interface'

interface Mode extends DefenseMode {
	tiles: number
	activationHousingSpace: number
	shotsPerBurst: number
	tilesShockwave: number
	favoriteTarget: string
	numberOfRounds: number
}

export default Mode
