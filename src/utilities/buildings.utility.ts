import DistrictHallDetails from '@IClanCapital/hall/details.interface'
import HallDetails from '@IClanCapital/hall/hallDetails.interface'
import Treasury from '@IHomeVillage/resources/clanCastle/treasury.interface'
import TreasuryCapacity from '@IHomeVillage/resources/clanCastle/treasuryCapacity.interface'
import TownHallLevel from '@IHomeVillage/townHall/level.interface'
import TownHallSubLevel from '@IHomeVillage/townHall/subLevel.interface'
import ModeLevel from '@IHomeVillage/defenses/modeLevel.interface'
import Level from '@IHomeVillage/defenses/level.interface'

export function getSize(width: number, height: number): string {
	return `${width}x${height}`
}

export function getLevel<T>(levelsArray: T[] | undefined, level: number, levelProperty: keyof T): T | undefined {
	const foundLevel = levelsArray?.find((obj) => obj[levelProperty] === level)

	if (foundLevel) {
		return foundLevel
	} else {
		console.error(`Invalid level: ${level}`)
		return undefined
	}
}

export function getModeLevel(levelsArray: ModeLevel[] | undefined, modeName: string, level: number): Level | undefined {
	const foundMode = levelsArray?.find((obj) => obj.name === modeName)

	if (foundMode && level >= 1 && level <= foundMode.levels.length) {
		return foundMode.levels[level - 1]
	} else {
		console.error(`Invalid Mode and/or Mode Name: ${modeName} and Level: ${level}`)
		return undefined
	}
}

export function getHallLevel<T>(hallLevelArray: T[], level: number, levelProperty: keyof T): T | undefined {
	const foundHallLevel = hallLevelArray.find((obj) => obj[levelProperty] === level)

	if (foundHallLevel) {
		return foundHallLevel
	} else {
		console.error(`Invalid Town Hall Level: ${level}`)
		return undefined
	}
}

export function getDistrictHallLevel(
	hallDetailsArray: DistrictHallDetails[],
	name: string,
	level: number
): HallDetails | undefined {
	const foundHallDetails = hallDetailsArray.find((detail) => detail.name === name)

	if (foundHallDetails && level >= 1 && level <= foundHallDetails.levels.length) {
		return foundHallDetails.levels[level - 1]
	} else {
		console.error(`Invalid District Hall Name or Level: ${name} or ${level}`)
		return undefined
	}
}

export function getTreasuryLevel(
	treasuryDetailsArray: Treasury[],
	clanLevel: number,
	townHallLevel: number
): TreasuryCapacity | undefined {
	let effectiveClanLevel = 1
	if (clanLevel >= 2 && clanLevel <= 3) {
		effectiveClanLevel = 2
	} else if (clanLevel >= 4 && clanLevel <= 5) {
		effectiveClanLevel = 4
	} else if (clanLevel >= 6 && clanLevel <= 7) {
		effectiveClanLevel = 6
	} else if (clanLevel >= 8 && clanLevel <= 9) {
		effectiveClanLevel = 8
	} else if (clanLevel >= 10) {
		effectiveClanLevel = 10
	}

	const capacityDetails = treasuryDetailsArray.find((capacity) => capacity.level === effectiveClanLevel)

	const levelDetails = capacityDetails?.capacityLevels.find((level) => level.townHallLevel === townHallLevel)

	if (levelDetails) {
		return levelDetails
	} else {
		console.error('Treasury capacity details not found for the given levels.')
		return undefined
	}
}

export function getSubLevel(
	levelsArray: TownHallLevel[],
	level: number,
	subLevel: number
): TownHallSubLevel | undefined {
	if (level < 12) {
		console.error('Town Hall must be 12 or higher to have sub Levels Available')
		return undefined
	}

	const foundLevel = levelsArray.find((details) => details.level === level)

	if (foundLevel && subLevel >= 1 && subLevel <= foundLevel.subLevels.length) {
		return foundLevel.subLevels[level - 1]
	} else {
		console.error(`Invalid Town Hall level: ${level} and subLevel: ${subLevel}`)
		return undefined
	}
}
