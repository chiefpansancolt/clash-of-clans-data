import * as Constants from '@/constants'
import Defense from '@IBuilderBase/defenses/defense.interface'
import Level from '@IBuilderBase/defenses/level.interface'
import BuilderHallDetails from '@IBuilderBase/builderHall/details.interface'

const nameHere: Defense = {
	name: 'Mega Tesla',
	description:
		'What happens when a Tesla goes Mega? Its powerful jolts deal heavy damage to even the toughest units!',
	maxCount: 1,
	width: 3,
	height: 3,
	maxLevel: 10,
	mode: {
		name: Constants.mainMode,
		damageType: Constants.chainLightning,
		unitTypeTarget: Constants.groundAndAir,
		minRange: 0,
		maxRange: 7.5,
		attackSpeed: 4,
	},
	builderHallDetails: [
		{
			builderHallLevel: 1,
			availableCount: 0,
			maxLevel: 0,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 2,
			availableCount: 0,
			maxLevel: 0,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 3,
			availableCount: 0,
			maxLevel: 0,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 4,
			availableCount: 0,
			maxLevel: 0,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 5,
			availableCount: 0,
			maxLevel: 0,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 6,
			availableCount: 0,
			maxLevel: 0,
			stage1MaxCount: 1,
			stage2MaxCount: 1,
		},
		{
			builderHallLevel: 7,
			availableCount: 0,
			maxLevel: 0,
			stage1MaxCount: 1,
			stage2MaxCount: 1,
		},
		{
			builderHallLevel: 8,
			availableCount: 1,
			maxLevel: 8,
			stage1MaxCount: 1,
			stage2MaxCount: 1,
		},
		{
			builderHallLevel: 9,
			availableCount: 1,
			maxLevel: 9,
			stage1MaxCount: 1,
			stage2MaxCount: 1,
		},
		{
			builderHallLevel: 10,
			availableCount: 1,
			maxLevel: 10,
			stage1MaxCount: 1,
			stage2MaxCount: 1,
		},
	],
	achievement: [],
	levels: [
		{
			level: 1,
			hitpoints: 700,
			damagePerSecond: 95,
			damagePerShot: 380,
			buildCost: 3000000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 2,
			exp: 415,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/ed/Mega_Tesla1.png/revision/latest/scale-to-width-down/100?cb=20170527182000',
		},
		{
			level: 2,
			hitpoints: 800,
			damagePerSecond: 104,
			damagePerShot: 416,
			buildCost: 3100000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 3,
			exp: 509,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fd/Mega_Tesla2.png/revision/latest/scale-to-width-down/100?cb=20180929013650',
		},
		{
			level: 3,
			hitpoints: 950,
			damagePerSecond: 115,
			damagePerShot: 460,
			buildCost: 3200000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 4,
			exp: 587,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/ed/Mega_Tesla3.png/revision/latest/scale-to-width-down/100?cb=20170527182001',
		},
		{
			level: 4,
			hitpoints: 1100,
			damagePerSecond: 126,
			damagePerShot: 504,
			buildCost: 3300000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 5,
			exp: 657,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/43/Mega_Tesla4.png/revision/latest/scale-to-width-down/100?cb=20170527182001',
		},
		{
			level: 5,
			hitpoints: 1300,
			damagePerSecond: 139,
			damagePerShot: 556,
			buildCost: 3400000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 6,
			exp: 720,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/71/Mega_Tesla5.png/revision/latest/scale-to-width-down/100?cb=20180929013702',
		},
		{
			level: 6,
			hitpoints: 1500,
			damagePerSecond: 153,
			damagePerShot: 612,
			buildCost: 3600000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 7,
			exp: 777,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/42/Mega_Tesla6.png/revision/latest/scale-to-width-down/100?cb=20170527182002',
		},
		{
			level: 7,
			hitpoints: 1700,
			damagePerSecond: 168,
			damagePerShot: 672,
			buildCost: 3800000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 8,
			exp: 831,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c6/Mega_Tesla7.png/revision/latest/scale-to-width-down/100?cb=20180929013713',
		},
		{
			level: 8,
			hitpoints: 1900,
			damagePerSecond: 185,
			damagePerShot: 740,
			buildCost: 4000000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 10,
			exp: 929,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/32/Mega_Tesla8.png/revision/latest/scale-to-width-down/100?cb=20180929013724',
		},
		{
			level: 9,
			hitpoints: 2150,
			damagePerSecond: 204,
			damagePerShot: 816,
			buildCost: 4800000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 11,
			exp: 974,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/39/Mega_Tesla9.png/revision/latest/scale-to-width-down/100?cb=20190616234612',
		},
		{
			level: 10,
			hitpoints: 2400,
			damagePerSecond: 224,
			damagePerShot: 896,
			buildCost: 5800000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 12,
			exp: 1018,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/42/Mega_Tesla10.png/revision/latest/scale-to-width-down/100?cb=20230517050242',
		},
	],
	getSize(): string {
		return `${this.width}x${this.height}`
	},
	getLevel(level: number): Level | undefined {
		if (level >= 1 && level <= this.levels.length) {
			return this.levels[level - 1]
		} else {
			console.error(`Invalid ${this.name} level: ${level}`)
			return undefined
		}
	},
	getBuilderHallLevel(level: number): BuilderHallDetails | undefined {
		if (level >= 1 && level <= this.builderHallDetails.length) {
			return this.builderHallDetails[level - 1]
		} else {
			console.error(`Invalid Town Hall level: ${level}`)
			return undefined
		}
	},
}

export default nameHere
