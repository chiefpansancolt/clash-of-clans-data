import * as Constants from '@/constants'
import TownHall from '@IHomeVillage/townHall/townHall.interface'
import { getSize, getLevel, getSubLevel } from '@Utils/buildings.utility'

const building: TownHall = {
	name: 'Town Hall',
	description:
		'This is the heart of your village. Upgrading the Town Hall unlocks new defenses, buildings, traps and much more.',
	width: 4,
	height: 4,
	maxLevel: 16,
	levels: [
		{
			level: 1,
			hitpoints: 450,
			buildCost: 0,
			buildCostResource: Constants.gold,
			goldCapacity: 1000,
			elixirCapacity: 1000,
			darkElixirCapacity: 0,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 0,
			maximumNumberOfBuildingsAvailable: 14,
			maximumNumberOfTrapsAvailable: 0,
			townHallLevelRequired: 1,
			mode: null,
			subLevels: [],
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fd/Town_Hall1.png/revision/latest/scale-to-width-down/100?cb=20170827034930',
		},
		{
			level: 2,
			hitpoints: 1600,
			buildCost: 1000,
			buildCostResource: Constants.gold,
			goldCapacity: 2500,
			elixirCapacity: 2500,
			darkElixirCapacity: 0,
			buildTimeSec: 10,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 3,
			maximumNumberOfBuildingsAvailable: 18,
			maximumNumberOfTrapsAvailable: 0,
			townHallLevelRequired: 2,
			mode: null,
			subLevels: [],
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/7d/Town_Hall2.png/revision/latest/scale-to-width-down/100?cb=20170827050036',
		},
		{
			level: 3,
			hitpoints: 1850,
			buildCost: 4000,
			buildCostResource: Constants.gold,
			goldCapacity: 10000,
			elixirCapacity: 10000,
			darkElixirCapacity: 0,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 1,
			buildTimeDay: 0,
			exp: 60,
			maximumNumberOfBuildingsAvailable: 25,
			maximumNumberOfTrapsAvailable: 2,
			townHallLevelRequired: 3,
			mode: null,
			subLevels: [],
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/dd/Town_Hall3.png/revision/latest/scale-to-width-down/100?cb=20170827050050',
		},
		{
			level: 4,
			hitpoints: 2100,
			buildCost: 25000,
			buildCostResource: Constants.gold,
			goldCapacity: 50000,
			elixirCapacity: 50000,
			darkElixirCapacity: 0,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 3,
			buildTimeDay: 0,
			exp: 103,
			maximumNumberOfBuildingsAvailable: 29,
			maximumNumberOfTrapsAvailable: 4,
			townHallLevelRequired: 4,
			mode: null,
			subLevels: [],
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e7/Town_Hall4.png/revision/latest/scale-to-width-down/100?cb=20170827050104',
		},
		{
			level: 5,
			hitpoints: 2400,
			buildCost: 150000,
			buildCostResource: Constants.gold,
			goldCapacity: 100000,
			elixirCapacity: 100000,
			darkElixirCapacity: 0,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 6,
			buildTimeDay: 0,
			exp: 146,
			maximumNumberOfBuildingsAvailable: 36,
			maximumNumberOfTrapsAvailable: 8,
			townHallLevelRequired: 5,
			mode: null,
			subLevels: [],
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a3/Town_Hall5.png/revision/latest/scale-to-width-down/100?cb=20170827050118',
		},
		{
			level: 6,
			hitpoints: 2800,
			buildCost: 750000,
			buildCostResource: Constants.gold,
			goldCapacity: 300000,
			elixirCapacity: 300000,
			darkElixirCapacity: 0,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 0,
			exp: 207,
			maximumNumberOfBuildingsAvailable: 42,
			maximumNumberOfTrapsAvailable: 11,
			townHallLevelRequired: 6,
			mode: null,
			subLevels: [],
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/52/Town_Hall6.png/revision/latest/scale-to-width-down/100?cb=20170827050220',
		},
		{
			level: 7,
			hitpoints: 3300,
			buildCost: 1000000,
			buildCostResource: Constants.gold,
			goldCapacity: 500000,
			elixirCapacity: 500000,
			darkElixirCapacity: 2500,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 18,
			buildTimeDay: 0,
			exp: 254,
			maximumNumberOfBuildingsAvailable: 54,
			maximumNumberOfTrapsAvailable: 15,
			townHallLevelRequired: 7,
			mode: null,
			subLevels: [],
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/75/Town_Hall7.png/revision/latest/scale-to-width-down/100?cb=20170827051024',
		},
		{
			level: 8,
			hitpoints: 3900,
			buildCost: 2000000,
			buildCostResource: Constants.gold,
			goldCapacity: 750000,
			elixirCapacity: 750000,
			darkElixirCapacity: 5000,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 1,
			exp: 293,
			maximumNumberOfBuildingsAvailable: 64,
			maximumNumberOfTrapsAvailable: 23,
			townHallLevelRequired: 8,
			mode: null,
			subLevels: [],
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fa/Town_Hall8.png/revision/latest/scale-to-width-down/100?cb=20170827051039',
		},
		{
			level: 9,
			hitpoints: 4600,
			buildCost: 3000000,
			buildCostResource: Constants.gold,
			goldCapacity: 1000000,
			elixirCapacity: 1000000,
			darkElixirCapacity: 10000,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 2,
			exp: 415,
			maximumNumberOfBuildingsAvailable: 77,
			maximumNumberOfTrapsAvailable: 26,
			townHallLevelRequired: 9,
			mode: null,
			subLevels: [],
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e0/Town_Hall9.png/revision/latest/scale-to-width-down/100?cb=20170827045259',
		},
		{
			level: 10,
			hitpoints: 5500,
			buildCost: 3500000,
			buildCostResource: Constants.gold,
			goldCapacity: 1500000,
			elixirCapacity: 1500000,
			darkElixirCapacity: 20000,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 2,
			exp: 464,
			maximumNumberOfBuildingsAvailable: 84,
			maximumNumberOfTrapsAvailable: 30,
			townHallLevelRequired: 10,
			mode: null,
			subLevels: [],
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/5c/Town_Hall10.png/revision/latest/scale-to-width-down/110?cb=20170827040043',
		},
		{
			level: 11,
			hitpoints: 6800,
			buildCost: 4000000,
			buildCostResource: Constants.gold,
			goldCapacity: 2000000,
			elixirCapacity: 2000000,
			darkElixirCapacity: 20000,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 18,
			buildTimeDay: 2,
			exp: 487,
			maximumNumberOfBuildingsAvailable: 90,
			maximumNumberOfTrapsAvailable: 31,
			townHallLevelRequired: 11,
			mode: null,
			subLevels: [],
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/96/Town_Hall11.png/revision/latest/scale-to-width-down/105?cb=20210410001514',
		},
		{
			level: 12,
			hitpoints: 7500,
			buildCost: 6000000,
			buildCostResource: Constants.gold,
			goldCapacity: 2000000,
			elixirCapacity: 2000000,
			darkElixirCapacity: 20000,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 6,
			buildTimeDay: 4,
			exp: 605,
			maximumNumberOfBuildingsAvailable: 93,
			maximumNumberOfTrapsAvailable: 36,
			townHallLevelRequired: 12,
			mode: {
				name: 'Giga Tesla',
				description:
					'Your enemies are in for a big surprise with the Giga Tesla, the foul-tempered big brother of the Tesla family. When an enemy so much as scratches the paint on your Town Hall, sizzling Electrickery will blast them away leaving the air tasting faintly like coconut... and metal.',
				minRange: 0,
				maxRange: 10,
				attackSpeed: 0.5,
				damageType: Constants.multipleTargets,
				unitTypeTarget: Constants.groundAndAir,
			},
			subLevels: [
				{
					level: 1,
					damagePerSecondPerTarget: 120,
					damagePerShotPerTarget: 60,
					numberOfTargets: 2,
					damageWhenDestroyed: 0,
					slowdownTimeWhenDestroyed: 0,
					speedDecrease: 0,
					attackRateDecrease: 0,
					poisonMaxDPS: 0,
					poisonDurationWhenDestroyed: 0,
					deathDamageRadius: 0,
					buildCost: 0,
					buildCostResource: Constants.gold,
					buildTimeSec: 0,
					buildTimeMin: 0,
					buildTimeHour: 0,
					buildTimeDay: 0,
					exp: 0,
					townHallLevelRequired: 12,
					baseImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/9/94/Giga_Tesla1.png/revision/latest/scale-to-width-down/120?cb=20180606163756',
				},
				{
					level: 2,
					damagePerSecondPerTarget: 140,
					damagePerShotPerTarget: 70,
					numberOfTargets: 2,
					damageWhenDestroyed: 0,
					buildCost: 3000000,
					buildCostResource: Constants.gold,
					slowdownTimeWhenDestroyed: 0,
					speedDecrease: 0,
					attackRateDecrease: 0,
					poisonMaxDPS: 0,
					poisonDurationWhenDestroyed: 0,
					deathDamageRadius: 0,
					buildTimeSec: 0,
					buildTimeMin: 0,
					buildTimeHour: 12,
					buildTimeDay: 1,
					exp: 360,
					townHallLevelRequired: 12,
					baseImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/5/59/Giga_Tesla2.png/revision/latest/scale-to-width-down/120?cb=20180606163808',
				},
				{
					level: 3,
					damagePerSecondPerTarget: 140,
					damagePerShotPerTarget: 70,
					numberOfTargets: 3,
					damageWhenDestroyed: 0,
					buildCost: 4200000,
					buildCostResource: Constants.gold,
					slowdownTimeWhenDestroyed: 0,
					speedDecrease: 0,
					attackRateDecrease: 0,
					poisonMaxDPS: 0,
					poisonDurationWhenDestroyed: 0,
					deathDamageRadius: 0,
					buildTimeSec: 0,
					buildTimeMin: 0,
					buildTimeHour: 18,
					buildTimeDay: 2,
					exp: 487,
					townHallLevelRequired: 12,
					baseImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/5/59/Giga_Tesla3.png/revision/latest/scale-to-width-down/120?cb=20180606163819',
				},
				{
					level: 4,
					damagePerSecondPerTarget: 160,
					damagePerShotPerTarget: 80,
					numberOfTargets: 3,
					damageWhenDestroyed: 0,
					buildCost: 5600000,
					buildCostResource: Constants.gold,
					slowdownTimeWhenDestroyed: 0,
					speedDecrease: 0,
					attackRateDecrease: 0,
					poisonMaxDPS: 0,
					poisonDurationWhenDestroyed: 0,
					deathDamageRadius: 0,
					buildTimeSec: 0,
					buildTimeMin: 0,
					buildTimeHour: 6,
					buildTimeDay: 4,
					exp: 605,
					townHallLevelRequired: 12,
					baseImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/6/69/Giga_Tesla4.png/revision/latest/scale-to-width-down/120?cb=20180606163833',
				},
				{
					level: 5,
					damagePerSecondPerTarget: 160,
					damagePerShotPerTarget: 80,
					numberOfTargets: 4,
					damageWhenDestroyed: 1000,
					buildCost: 7000000,
					buildCostResource: Constants.gold,
					slowdownTimeWhenDestroyed: 0,
					speedDecrease: 0,
					attackRateDecrease: 0,
					poisonMaxDPS: 0,
					poisonDurationWhenDestroyed: 0,
					deathDamageRadius: 0,
					buildTimeSec: 0,
					buildTimeMin: 0,
					buildTimeHour: 12,
					buildTimeDay: 5,
					exp: 689,
					townHallLevelRequired: 12,
					baseImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/0/06/Giga_Tesla5.png/revision/latest/scale-to-width-down/120?cb=20180606163859',
				},
			],
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c7/Town_Hall12-1.png/revision/latest/scale-to-width-down/110?cb=20180603203226',
		},
		{
			level: 13,
			hitpoints: 8200,
			buildCost: 9000000,
			buildCostResource: Constants.gold,
			goldCapacity: 2000000,
			elixirCapacity: 2000000,
			darkElixirCapacity: 20000,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 7,
			exp: 804,
			maximumNumberOfBuildingsAvailable: 96,
			maximumNumberOfTrapsAvailable: 39,
			townHallLevelRequired: 13,
			mode: {
				name: 'Giga Inferno',
				description:
					'The Giga Inferno makes your enemies feel like marshmallows trying to mount an attack on a bonfire. When destroyed, it will blast the Town Hall to bits in a freezing explosion that slows everything around it for a time.',
				minRange: 0,
				maxRange: 10,
				attackSpeed: 0.128,
				damageType: Constants.multipleTargets,
				unitTypeTarget: Constants.groundAndAir,
			},
			subLevels: [
				{
					level: 1,
					damagePerSecondPerTarget: 160,
					damagePerShotPerTarget: 20.48,
					slowdownTimeWhenDestroyed: 0,
					numberOfTargets: 4,
					damageWhenDestroyed: 1000,
					speedDecrease: 50,
					attackRateDecrease: 50,
					poisonMaxDPS: 0,
					poisonDurationWhenDestroyed: 0,
					deathDamageRadius: 0,
					buildCost: 0,
					buildCostResource: Constants.gold,
					buildTimeSec: 0,
					buildTimeMin: 0,
					buildTimeHour: 0,
					buildTimeDay: 0,
					exp: 0,
					townHallLevelRequired: 13,
					baseImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/0/0e/Giga_Inferno1.png/revision/latest/scale-to-width-down/120?cb=20200831024428',
				},
				{
					level: 2,
					damagePerSecondPerTarget: 180,
					damagePerShotPerTarget: 23.04,
					slowdownTimeWhenDestroyed: 0,
					numberOfTargets: 4,
					damageWhenDestroyed: 1000,
					speedDecrease: 50,
					attackRateDecrease: 50,
					poisonMaxDPS: 0,
					poisonDurationWhenDestroyed: 0,
					deathDamageRadius: 0,
					buildCost: 7500000,
					buildCostResource: Constants.gold,
					buildTimeSec: 0,
					buildTimeMin: 0,
					buildTimeHour: 12,
					buildTimeDay: 4,
					exp: 623,
					townHallLevelRequired: 13,
					baseImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/5/5d/Giga_Inferno2.png/revision/latest/scale-to-width-down/120?cb=20200831024429',
				},
				{
					level: 3,
					damagePerSecondPerTarget: 200,
					damagePerShotPerTarget: 25.6,
					slowdownTimeWhenDestroyed: 4,
					numberOfTargets: 4,
					damageWhenDestroyed: 1000,
					speedDecrease: 50,
					attackRateDecrease: 50,
					poisonMaxDPS: 0,
					poisonDurationWhenDestroyed: 0,
					deathDamageRadius: 0,
					buildCost: 9000000,
					buildCostResource: Constants.gold,
					buildTimeSec: 0,
					buildTimeMin: 0,
					buildTimeHour: 0,
					buildTimeDay: 6,
					exp: 720,
					townHallLevelRequired: 13,
					baseImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/1/10/Giga_Inferno3.png/revision/latest/scale-to-width-down/120?cb=20200831024429',
				},
				{
					level: 4,
					damagePerSecondPerTarget: 220,
					damagePerShotPerTarget: 28.16,
					slowdownTimeWhenDestroyed: 6,
					numberOfTargets: 4,
					damageWhenDestroyed: 1000,
					speedDecrease: 50,
					attackRateDecrease: 50,
					poisonMaxDPS: 0,
					poisonDurationWhenDestroyed: 0,
					deathDamageRadius: 0,
					buildCost: 11200000,
					buildCostResource: Constants.gold,
					buildTimeSec: 0,
					buildTimeMin: 0,
					buildTimeHour: 18,
					buildTimeDay: 6,
					exp: 763,
					townHallLevelRequired: 13,
					baseImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/3/35/Giga_Inferno4.png/revision/latest/scale-to-width-down/120?cb=20200831024430',
				},
				{
					level: 5,
					damagePerSecondPerTarget: 240,
					damagePerShotPerTarget: 30.72,
					slowdownTimeWhenDestroyed: 8,
					numberOfTargets: 4,
					damageWhenDestroyed: 1000,
					speedDecrease: 50,
					attackRateDecrease: 50,
					poisonMaxDPS: 0,
					poisonDurationWhenDestroyed: 0,
					deathDamageRadius: 0,
					buildCost: 13500000,
					buildCostResource: Constants.gold,
					buildTimeSec: 0,
					buildTimeMin: 0,
					buildTimeHour: 6,
					buildTimeDay: 8,
					exp: 844,
					townHallLevelRequired: 13,
					baseImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/0/0f/Giga_Inferno5.png/revision/latest/scale-to-width-down/120?cb=20200831024430',
				},
			],
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/98/Town_Hall13-1.png/revision/latest/scale-to-width-down/120?cb=20200831024426',
		},
		{
			level: 14,
			hitpoints: 8900,
			buildCost: 15000000,
			buildCostResource: Constants.gold,
			goldCapacity: 2000000,
			elixirCapacity: 2000000,
			darkElixirCapacity: 20000,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 6,
			buildTimeDay: 13,
			exp: 1069,
			maximumNumberOfBuildingsAvailable: 97,
			maximumNumberOfTrapsAvailable: 44,
			townHallLevelRequired: 14,
			mode: {
				name: 'Giga Inferno',
				description:
					'The Giga Inferno makes your enemies feel like marshmallows trying to mount an attack on a bonfire. Now upgraded even further, it unleashes a poisonous cloud upon destruction that hurts and slows down nearby attackers.',
				minRange: 0,
				maxRange: 10,
				attackSpeed: 0.128,
				damageType: Constants.multipleTargets,
				unitTypeTarget: Constants.groundAndAir,
			},
			subLevels: [
				{
					level: 1,
					damagePerSecondPerTarget: 240,
					damagePerShotPerTarget: 30.72,
					slowdownTimeWhenDestroyed: 0,
					numberOfTargets: 4,
					damageWhenDestroyed: 1000,
					speedDecrease: 30,
					attackRateDecrease: 30,
					poisonMaxDPS: 100,
					poisonDurationWhenDestroyed: 12,
					deathDamageRadius: 0,
					buildCost: 0,
					buildCostResource: Constants.gold,
					buildTimeSec: 0,
					buildTimeMin: 0,
					buildTimeHour: 0,
					buildTimeDay: 0,
					exp: 0,
					townHallLevelRequired: 14,
					baseImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/3/3b/Giga_Inferno14-1.png/revision/latest/scale-to-width-down/120?cb=20210413000557',
				},
				{
					level: 2,
					damagePerSecondPerTarget: 250,
					damagePerShotPerTarget: 32,
					slowdownTimeWhenDestroyed: 0,
					numberOfTargets: 4,
					damageWhenDestroyed: 1000,
					speedDecrease: 35,
					attackRateDecrease: 35,
					poisonMaxDPS: 120,
					poisonDurationWhenDestroyed: 12,
					deathDamageRadius: 0,
					buildCost: 8500000,
					buildCostResource: Constants.gold,
					buildTimeSec: 0,
					buildTimeMin: 0,
					buildTimeHour: 12,
					buildTimeDay: 8,
					exp: 856,
					townHallLevelRequired: 14,
					baseImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/a/a5/Giga_Inferno14-2.png/revision/latest/scale-to-width-down/120?cb=20210413000558',
				},
				{
					level: 3,
					damagePerSecondPerTarget: 260,
					damagePerShotPerTarget: 33.28,
					slowdownTimeWhenDestroyed: 0,
					numberOfTargets: 4,
					damageWhenDestroyed: 1000,
					speedDecrease: 40,
					attackRateDecrease: 40,
					poisonMaxDPS: 140,
					poisonDurationWhenDestroyed: 12,
					deathDamageRadius: 0,
					buildCost: 10500000,
					buildCostResource: Constants.gold,
					buildTimeSec: 0,
					buildTimeMin: 0,
					buildTimeHour: 12,
					buildTimeDay: 10,
					exp: 952,
					townHallLevelRequired: 14,
					baseImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/e/ec/Giga_Inferno14-3.png/revision/latest/scale-to-width-down/120?cb=20210413000559',
				},
				{
					level: 4,
					damagePerSecondPerTarget: 270,
					damagePerShotPerTarget: 34.56,
					slowdownTimeWhenDestroyed: 0,
					numberOfTargets: 4,
					damageWhenDestroyed: 1000,
					speedDecrease: 45,
					attackRateDecrease: 45,
					poisonMaxDPS: 160,
					poisonDurationWhenDestroyed: 12,
					deathDamageRadius: 0,
					buildCost: 12300000,
					buildCostResource: Constants.gold,
					buildTimeSec: 0,
					buildTimeMin: 0,
					buildTimeHour: 6,
					buildTimeDay: 12,
					exp: 1028,
					townHallLevelRequired: 14,
					baseImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/1/1f/Giga_Inferno14-4.png/revision/latest/scale-to-width-down/120?cb=20210413000601',
				},
				{
					level: 5,
					damagePerSecondPerTarget: 280,
					damagePerShotPerTarget: 35.84,
					slowdownTimeWhenDestroyed: 0,
					numberOfTargets: 4,
					damageWhenDestroyed: 1000,
					speedDecrease: 50,
					attackRateDecrease: 50,
					poisonMaxDPS: 180,
					poisonDurationWhenDestroyed: 12,
					deathDamageRadius: 0,
					buildCost: 14200000,
					buildCostResource: Constants.gold,
					buildTimeSec: 0,
					buildTimeMin: 0,
					buildTimeHour: 6,
					buildTimeDay: 13,
					exp: 1069,
					townHallLevelRequired: 14,
					baseImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/4/48/Giga_Inferno14-5.png/revision/latest/scale-to-width-down/120?cb=20210413000602',
				},
			],
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e0/Town_Hall14-1.png/revision/latest/scale-to-width-down/110?cb=20210413000722',
		},
		{
			level: 15,
			hitpoints: 9600,
			buildCost: 18000000,
			buildCostResource: Constants.gold,
			goldCapacity: 2000000,
			elixirCapacity: 2000000,
			darkElixirCapacity: 20000,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 13,
			exp: 1080,
			maximumNumberOfBuildingsAvailable: 100,
			maximumNumberOfTrapsAvailable: 44,
			townHallLevelRequired: 15,
			mode: {
				name: 'Giga Inferno',
				description:
					'The Giga Inferno makes your enemies feel like marshmallows trying to mount an attack on a bonfire. Now upgraded even further, it unleashes a poisonous cloud upon destruction that hurts and slows down nearby attackers.',
				minRange: 0,
				maxRange: 10,
				attackSpeed: 0.128,
				damageType: Constants.multipleTargets,
				unitTypeTarget: Constants.groundAndAir,
			},
			subLevels: [
				{
					level: 1,
					damagePerSecondPerTarget: 280,
					damagePerShotPerTarget: 35.84,
					slowdownTimeWhenDestroyed: 0,
					numberOfTargets: 4,
					damageWhenDestroyed: 1000,
					speedDecrease: 50,
					attackRateDecrease: 50,
					poisonMaxDPS: 180,
					poisonDurationWhenDestroyed: 12,
					deathDamageRadius: 4,
					buildCost: 0,
					buildCostResource: Constants.gold,
					buildTimeSec: 0,
					buildTimeMin: 0,
					buildTimeHour: 0,
					buildTimeDay: 0,
					exp: 0,
					townHallLevelRequired: 15,
					baseImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/c/c8/Giga_Inferno15-1.png/revision/latest/scale-to-width-down/120?cb=20221120065549',
				},
				{
					level: 2,
					damagePerSecondPerTarget: 290,
					damagePerShotPerTarget: 37.12,
					slowdownTimeWhenDestroyed: 0,
					numberOfTargets: 4,
					damageWhenDestroyed: 1000,
					speedDecrease: 50,
					attackRateDecrease: 50,
					poisonMaxDPS: 180,
					poisonDurationWhenDestroyed: 12,
					deathDamageRadius: 4,
					buildCost: 10000000,
					buildCostResource: Constants.gold,
					buildTimeSec: 0,
					buildTimeMin: 0,
					buildTimeHour: 0,
					buildTimeDay: 9,
					exp: 881,
					townHallLevelRequired: 15,
					baseImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/8/85/Giga_Inferno15-2.png/revision/latest/scale-to-width-down/120?cb=20221120065558',
				},
				{
					level: 3,
					damagePerSecondPerTarget: 290,
					damagePerShotPerTarget: 37.12,
					slowdownTimeWhenDestroyed: 0,
					numberOfTargets: 4,
					damageWhenDestroyed: 1100,
					speedDecrease: 50,
					attackRateDecrease: 50,
					poisonMaxDPS: 180,
					poisonDurationWhenDestroyed: 12,
					deathDamageRadius: 4,
					buildCost: 12000000,
					buildCostResource: Constants.gold,
					buildTimeSec: 0,
					buildTimeMin: 0,
					buildTimeHour: 0,
					buildTimeDay: 11,
					exp: 974,
					townHallLevelRequired: 15,
					baseImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/e/e6/Giga_Inferno15-3.png/revision/latest/scale-to-width-down/120?cb=20221120070349',
				},
				{
					level: 4,
					damagePerSecondPerTarget: 300,
					damagePerShotPerTarget: 38.4,
					slowdownTimeWhenDestroyed: 0,
					numberOfTargets: 4,
					damageWhenDestroyed: 1100,
					speedDecrease: 50,
					attackRateDecrease: 50,
					poisonMaxDPS: 180,
					poisonDurationWhenDestroyed: 12,
					deathDamageRadius: 4,
					buildCost: 14000000,
					buildCostResource: Constants.gold,
					buildTimeSec: 0,
					buildTimeMin: 0,
					buildTimeHour: 0,
					buildTimeDay: 13,
					exp: 1059,
					townHallLevelRequired: 15,
					baseImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/6/6b/Giga_Inferno15-4.png/revision/latest/scale-to-width-down/120?cb=20221120070105',
				},
				{
					level: 5,
					damagePerSecondPerTarget: 300,
					damagePerShotPerTarget: 38.4,
					slowdownTimeWhenDestroyed: 0,
					numberOfTargets: 4,
					damageWhenDestroyed: 1100,
					speedDecrease: 50,
					attackRateDecrease: 50,
					poisonMaxDPS: 180,
					poisonDurationWhenDestroyed: 12,
					deathDamageRadius: 4.5,
					buildCost: 16000000,
					buildCostResource: Constants.gold,
					buildTimeSec: 0,
					buildTimeMin: 0,
					buildTimeHour: 0,
					buildTimeDay: 14,
					exp: 1099,
					townHallLevelRequired: 15,
					baseImgUrl:
						'https://static.wikia.nocookie.net/clashofclans/images/1/1d/Giga_Inferno15-5.png/revision/latest/scale-to-width-down/120?cb=20221120065633',
				},
			],
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/5b/Town_Hall15-1.png/revision/latest/scale-to-width-down/115?cb=20221120065403',
		},
		{
			level: 16,
			hitpoints: 10000,
			buildCost: 20000000,
			buildCostResource: Constants.gold,
			goldCapacity: 2000000,
			elixirCapacity: 2000000,
			darkElixirCapacity: 20000,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 14,
			exp: 1099,
			maximumNumberOfBuildingsAvailable: 96,
			maximumNumberOfTrapsAvailable: 44,
			townHallLevelRequired: 16,
			mode: {
				name: 'Giga Inferno',
				description:
					'The Giga Inferno makes your enemies feel like marshmallows trying to mount an attack on a bonfire. Now upgraded even further, it unleashes a poisonous cloud upon destruction that hurts and slows down nearby attackers.',
				minRange: 0,
				maxRange: 10,
				attackSpeed: 0.128,
				damageType: Constants.multipleTargets,
				unitTypeTarget: Constants.groundAndAir,
			},
			subLevels: [],
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/53/Town_Hall16.png/revision/latest/scale-to-width-down/105?cb=20231211062744',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getSubLevel: (level: number, subLevel: number) => getSubLevel(building.levels, level, subLevel),
}

export default building
