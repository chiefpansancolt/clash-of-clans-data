export function getSize(width: number, height: number): string {
	return `${width}x${height}`
}

export function getLevel<T>(
	levelsArray: T[],
	level: number,
	levelProperty: keyof T
): T | undefined {
	const foundLevel = levelsArray.find((obj) => obj[levelProperty] === level)

	if (foundLevel) {
		return foundLevel
	} else {
		console.error(`Invalid level: ${level}`)
		return undefined
	}
}

export function getHallLevel<T>(
	hallLevelArray: T[],
	level: number,
	levelProperty: keyof T
): T | undefined {
	const foundHallLevel = hallLevelArray.find((obj) => obj[levelProperty] === level)

	if (foundHallLevel) {
		return foundHallLevel
	} else {
		console.error(`Invalid Town Hall Level: ${level}`)
		return undefined
	}
}
