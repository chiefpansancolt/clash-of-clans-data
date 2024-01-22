import * as Constants from '../../Constats'
import {
  TownHallDefense,
  AchievementLevel,
  GearUp,
  HomeVillageLevel,
  HomeVillageDefense,
} from '../../CommonInterfaces'

interface CannonLevel extends HomeVillageLevel {
  gearImgUrl: string
  burstImgUrl: string
}

interface Cannon extends HomeVillageDefense {
  levels: CannonLevel[]
  gearUp: GearUp

  getLevel(levelNumber: number): CannonLevel | undefined
}

const cannon: Cannon = {
  name: 'Cannon',
  description:
    'Cannons are great for point defense. Upgrade cannons to increase their firepower, but beware that your defensive turrets cannot shoot while being upgraded!',
  maxCount: 7,
  minRange: 9,
  maxRange: 9,
  tiles: 0,
  attackSpeed: 0.8,
  width: 3,
  height: 3,
  damageType: Constants.singleTarget,
  unitTypeTarget: Constants.ground,
  maxLevel: 21,
  gearUp: {
    buildCost: 1500000,
    buildTimeSec: 0,
    buildTimeMin: 0,
    buildTimeHour: 0,
    buildTimeDay: 2,
    homeVillageLevelRequired: 7,
    builderBaseDefenseLevelRequired: 4,
  },
  townHallDetails: [
    { townHall: 1, availableCount: 2, maxLevel: 2 },
    { townHall: 2, availableCount: 2, maxLevel: 3 },
    { townHall: 3, availableCount: 2, maxLevel: 4 },
    { townHall: 4, availableCount: 2, maxLevel: 5 },
    { townHall: 5, availableCount: 3, maxLevel: 6 },
    { townHall: 6, availableCount: 3, maxLevel: 7 },
    { townHall: 7, availableCount: 5, maxLevel: 8 },
    { townHall: 8, availableCount: 5, maxLevel: 10 },
    { townHall: 9, availableCount: 5, maxLevel: 11 },
    { townHall: 10, availableCount: 6, maxLevel: 13 },
    { townHall: 11, availableCount: 7, maxLevel: 15 },
    { townHall: 12, availableCount: 7, maxLevel: 17 },
    { townHall: 13, availableCount: 7, maxLevel: 19 },
    { townHall: 14, availableCount: 7, maxLevel: 20 },
    { townHall: 15, availableCount: 7, maxLevel: 21 },
    { townHall: 16, availableCount: 7, maxLevel: 21 },
  ],
  achievements: [
    {
      name: 'High Gear',
      village: Constants.builderBase,
      levels: [
        {
          info: 'Gear up 1 building using the Master Builder',
          exp: 20,
          gems: 10,
          stars: 1,
          target: 1,
        },
        {
          info: 'Gear up 2 building using the Master Builder',
          exp: 200,
          gems: 30,
          stars: 2,
          target: 2,
        },
        {
          info: 'Gear up 3 building using the Master Builder',
          exp: 2000,
          gems: 50,
          stars: 3,
          target: 3,
        },
      ],
    },
  ],
  levels: [
    {
      level: 1,
      damagePerSecond: 9,
      damagePerShot: 7.2,
      hitpoints: 420,
      buildCost: 250,
      buildCostResource: Constants.gold,
      buildTimeSec: 10,
      buildTimeMin: 0,
      buildTimeHour: 0,
      buildTimeDay: 0,
      exp: 3,
      townHallLevelRequired: 1,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/a/a1/Cannon1.png/revision/latest/scale-to-width-down/100?cb=20230521100552',
      gearImgUrl: '',
      burstImgUrl: '',
    },
    {
      level: 2,
      damagePerSecond: 11,
      damagePerShot: 8.8,
      hitpoints: 470,
      buildCost: 1000,
      buildCostResource: Constants.gold,
      buildTimeSec: 0,
      buildTimeMin: 2,
      buildTimeHour: 0,
      buildTimeDay: 0,
      exp: 10,
      townHallLevelRequired: 1,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/d/dc/Cannon2.png/revision/latest/scale-to-width-down/100?cb=20230521100606',
      gearImgUrl: '',
      burstImgUrl: '',
    },
    {
      level: 3,
      damagePerSecond: 15,
      damagePerShot: 12,
      hitpoints: 520,
      buildCost: 4000,
      buildCostResource: Constants.gold,
      buildTimeSec: 0,
      buildTimeMin: 10,
      buildTimeHour: 0,
      buildTimeDay: 0,
      exp: 24,
      townHallLevelRequired: 2,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/1/10/Cannon3.png/revision/latest/scale-to-width-down/100?cb=20230521100615',
      gearImgUrl: '',
      burstImgUrl: '',
    },
    {
      level: 4,
      damagePerSecond: 19,
      damagePerShot: 15.2,
      hitpoints: 570,
      buildCost: 16000,
      buildCostResource: Constants.gold,
      buildTimeSec: 0,
      buildTimeMin: 45,
      buildTimeHour: 0,
      buildTimeDay: 0,
      exp: 51,
      townHallLevelRequired: 3,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/a/a5/Cannon4.png/revision/latest/scale-to-width-down/100?cb=20230521100624',
      gearImgUrl: '',
      burstImgUrl: '',
    },
    {
      level: 5,
      damagePerSecond: 25,
      damagePerShot: 20,
      hitpoints: 620,
      buildCost: 50000,
      buildCostResource: Constants.gold,
      buildTimeSec: 0,
      buildTimeMin: 0,
      buildTimeHour: 1,
      buildTimeDay: 0,
      exp: 60,
      townHallLevelRequired: 4,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/e/ea/Cannon5.png/revision/latest/scale-to-width-down/100?cb=20230521100633',
      gearImgUrl: '',
      burstImgUrl: '',
    },
    {
      level: 6,
      damagePerSecond: 31,
      damagePerShot: 24.8,
      hitpoints: 670,
      buildCost: 100000,
      buildCostResource: Constants.gold,
      buildTimeSec: 0,
      buildTimeMin: 0,
      buildTimeHour: 2,
      buildTimeDay: 0,
      exp: 84,
      townHallLevelRequired: 5,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/9/93/Cannon6.png/revision/latest/scale-to-width-down/100?cb=20230521100644',
      gearImgUrl: '',
      burstImgUrl: '',
    },
    {
      level: 7,
      damagePerSecond: 40,
      damagePerShot: 32,
      hitpoints: 730,
      buildCost: 150000,
      buildCostResource: Constants.gold,
      buildTimeSec: 0,
      buildTimeMin: 0,
      buildTimeHour: 4,
      buildTimeDay: 0,
      exp: 120,
      townHallLevelRequired: 6,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/1/16/Cannon7B.png/revision/latest/scale-to-width-down/100?cb=20230521100706',
      gearImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/6/60/Cannon7.png/revision/latest/scale-to-width-down/100?cb=20230521100654',
      burstImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/3/36/Cannon7G.png/revision/latest/scale-to-width-down/100?cb=20230521100710',
    },
    {
      level: 8,
      damagePerSecond: 48,
      damagePerShot: 38.4,
      hitpoints: 800,
      buildCost: 240000,
      buildCostResource: Constants.gold,
      buildTimeSec: 0,
      buildTimeMin: 0,
      buildTimeHour: 8,
      buildTimeDay: 0,
      exp: 169,
      townHallLevelRequired: 7,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/e/e6/Cannon8B.png/revision/latest/scale-to-width-down/100?cb=20230521100727',
      gearImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/2/27/Cannon8.png/revision/latest/scale-to-width-down/100?cb=20230521100715',
      burstImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/b/bc/Cannon8G.png/revision/latest/scale-to-width-down/100?cb=20230521100731',
    },
    {
      level: 9,
      damagePerSecond: 56,
      damagePerShot: 44.8,
      hitpoints: 880,
      buildCost: 360000,
      buildCostResource: Constants.gold,
      buildTimeSec: 0,
      buildTimeMin: 0,
      buildTimeHour: 10,
      buildTimeDay: 0,
      exp: 189,
      townHallLevelRequired: 8,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/9/9b/Cannon9B.png/revision/latest/scale-to-width-down/100?cb=20230521100746',
      gearImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/3/36/Cannon9.png/revision/latest/scale-to-width-down/100?cb=20230521100737',
      burstImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/b/b1/Cannon9G.png/revision/latest/scale-to-width-down/100?cb=20230521100754',
    },
    {
      level: 10,
      damagePerSecond: 64,
      damagePerShot: 51.2,
      hitpoints: 960,
      buildCost: 500000,
      buildCostResource: Constants.gold,
      buildTimeSec: 0,
      buildTimeMin: 0,
      buildTimeHour: 10,
      buildTimeDay: 0,
      exp: 189,
      townHallLevelRequired: 8,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/7/74/Cannon10B.png/revision/latest/scale-to-width-down/100?cb=20230521100811',
      gearImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/4/48/Cannon10.png/revision/latest/scale-to-width-down/100?cb=20230521100759',
      burstImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/f/fa/Cannon10G.png/revision/latest/scale-to-width-down/100?cb=20230521100820',
    },
    {
      level: 11,
      damagePerSecond: 74,
      damagePerShot: 59.2,
      hitpoints: 1060,
      buildCost: 800000,
      buildCostResource: Constants.gold,
      buildTimeSec: 0,
      buildTimeMin: 0,
      buildTimeHour: 12,
      buildTimeDay: 0,
      exp: 207,
      townHallLevelRequired: 9,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/8/8c/Cannon11B.png/revision/latest/scale-to-width-down/100?cb=20230521100835',
      gearImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/d/d2/Cannon11.png/revision/latest/scale-to-width-down/100?cb=20230521100825',
      burstImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/5/50/Cannon11G.png/revision/latest/scale-to-width-down/100?cb=20230521100836',
    },
    {
      level: 12,
      damagePerSecond: 85,
      damagePerShot: 68,
      hitpoints: 1160,
      buildCost: 900000,
      buildCostResource: Constants.gold,
      buildTimeSec: 0,
      buildTimeMin: 0,
      buildTimeHour: 18,
      buildTimeDay: 0,
      exp: 254,
      townHallLevelRequired: 10,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/5/5e/Cannon12B.png/revision/latest/scale-to-width-down/100?cb=20230521100855',
      gearImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/2/20/Cannon12.png/revision/latest/scale-to-width-down/100?cb=20230521100841',
      burstImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/4/44/Cannon12G.png/revision/latest/scale-to-width-down/100?cb=20230521100856',
    },
    {
      level: 13,
      damagePerSecond: 95,
      damagePerShot: 76,
      hitpoints: 1260,
      buildCost: 1700000,
      buildCostResource: Constants.gold,
      buildTimeSec: 0,
      buildTimeMin: 0,
      buildTimeHour: 18,
      buildTimeDay: 0,
      exp: 254,
      townHallLevelRequired: 10,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/f/fb/Cannon13B.png/revision/latest/scale-to-width-down/100?cb=20230521100916',
      gearImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/f/fe/Cannon13.png/revision/latest/scale-to-width-down/100?cb=20230521100901',
      burstImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/1/19/Cannon13G.png/revision/latest/scale-to-width-down/100?cb=20230521100917',
    },
    {
      level: 14,
      damagePerSecond: 105,
      damagePerShot: 84,
      hitpoints: 1380,
      buildCost: 2000000,
      buildCostResource: Constants.gold,
      buildTimeSec: 0,
      buildTimeMin: 0,
      buildTimeHour: 6,
      buildTimeDay: 1,
      exp: 328,
      townHallLevelRequired: 11,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/6/64/Cannon14B.png/revision/latest/scale-to-width-down/100?cb=20230521100931',
      gearImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/5/5e/Cannon14.png/revision/latest/scale-to-width-down/100?cb=20230521100922',
      burstImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/1/13/Cannon14G.png/revision/latest/scale-to-width-down/100?cb=20230521100932',
    },
    {
      level: 15,
      damagePerSecond: 115,
      damagePerShot: 92,
      hitpoints: 1500,
      buildCost: 2500000,
      buildCostResource: Constants.gold,
      buildTimeSec: 0,
      buildTimeMin: 0,
      buildTimeHour: 6,
      buildTimeDay: 1,
      exp: 328,
      townHallLevelRequired: 11,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/4/4f/Cannon15B.png/revision/latest/scale-to-width-down/100?cb=20230521100945',
      gearImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/8/8d/Cannon15.png/revision/latest/scale-to-width-down/100?cb=20230521100937',
      burstImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/b/bd/Cannon15G.png/revision/latest/scale-to-width-down/100?cb=20230521100946',
    },
    {
      level: 16,
      damagePerSecond: 120,
      damagePerShot: 96,
      hitpoints: 1620,
      buildCost: 4400000,
      buildCostResource: Constants.gold,
      buildTimeSec: 0,
      buildTimeMin: 0,
      buildTimeHour: 0,
      buildTimeDay: 3,
      exp: 509,
      townHallLevelRequired: 12,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/1/18/Cannon16B.png/revision/latest/scale-to-width-down/100?cb=20230521101005',
      gearImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/0/09/Cannon16.png/revision/latest/scale-to-width-down/100?cb=20230521100951',
      burstImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/7/73/Cannon16G.png/revision/latest/scale-to-width-down/100?cb=20230521101007',
    },
    {
      level: 17,
      damagePerSecond: 125,
      damagePerShot: 100,
      hitpoints: 1740,
      buildCost: 5600000,
      buildCostResource: Constants.gold,
      buildTimeSec: 0,
      buildTimeMin: 0,
      buildTimeHour: 0,
      buildTimeDay: 3,
      exp: 509,
      townHallLevelRequired: 12,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/1/17/Cannon17B.png/revision/latest/scale-to-width-down/100?cb=20230521101015',
      gearImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/8/86/Cannon17.png/revision/latest/scale-to-width-down/100?cb=20230521101011',
      burstImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/5/55/Cannon17G.png/revision/latest/scale-to-width-down/100?cb=20230521101016',
    },
    {
      level: 18,
      damagePerSecond: 130,
      damagePerShot: 104,
      hitpoints: 1870,
      buildCost: 6500000,
      buildCostResource: Constants.gold,
      buildTimeSec: 0,
      buildTimeMin: 0,
      buildTimeHour: 0,
      buildTimeDay: 7,
      exp: 777,
      townHallLevelRequired: 13,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/8/87/Cannon18B.png/revision/latest/scale-to-width-down/100?cb=20230521101027',
      gearImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/4/40/Cannon18.png/revision/latest/scale-to-width-down/100?cb=20230521101020',
      burstImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/6/6d/Cannon18G.png/revision/latest/scale-to-width-down/100?cb=20230521101028',
    },
    {
      level: 19,
      damagePerSecond: 140,
      damagePerShot: 112,
      hitpoints: 2000,
      buildCost: 7800000,
      buildCostResource: Constants.gold,
      buildTimeSec: 0,
      buildTimeMin: 0,
      buildTimeHour: 0,
      buildTimeDay: 7,
      exp: 777,
      townHallLevelRequired: 13,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/9/9d/Cannon19B.png/revision/latest/scale-to-width-down/100?cb=20230521101044',
      gearImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/2/23/Cannon19.png/revision/latest/scale-to-width-down/100?cb=20230521101033',
      burstImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/8/83/Cannon19G.png/revision/latest/scale-to-width-down/100?cb=20230521101046',
    },
    {
      level: 20,
      damagePerSecond: 150,
      damagePerShot: 120,
      hitpoints: 2150,
      buildCost: 11600000,
      buildCostResource: Constants.gold,
      buildTimeSec: 0,
      buildTimeMin: 0,
      buildTimeHour: 12,
      buildTimeDay: 9,
      exp: 905,
      townHallLevelRequired: 14,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/7/71/Cannon20B.png/revision/latest/scale-to-width-down/100?cb=20230521101105',
      gearImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/a/a6/Cannon20.png/revision/latest/scale-to-width-down/100?cb=20230521101050',
      burstImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/7/71/Cannon20G.png/revision/latest/scale-to-width-down/100?cb=20230521101107',
    },
    {
      level: 21,
      damagePerSecond: 160,
      damagePerShot: 128,
      hitpoints: 2250,
      buildCost: 16000000,
      buildCostResource: Constants.gold,
      buildTimeSec: 0,
      buildTimeMin: 0,
      buildTimeHour: 6,
      buildTimeDay: 13,
      exp: 1069,
      townHallLevelRequired: 15,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/8/85/Cannon21B.png/revision/latest/scale-to-width-down/100?cb=20230521101125',
      gearImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/8/8d/Cannon21.png/revision/latest/scale-to-width-down/100?cb=20230521101110',
      burstImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/d/d8/Cannon21G.png/revision/latest/scale-to-width-down/100?cb=20230521101127',
    },
  ],
  getSize(): string {
    return `${this.width}x${this.height}`
  },
  getLevel(level: number): CannonLevel | undefined {
    if (level >= 1 && level <= this.levels.length) {
      return this.levels[level - 1]
    } else {
      console.error(`Invalid cannon level: ${level}`)
      return undefined
    }
  },
  getTownHallLevel(level: number): TownHallDefense | undefined {
    if (level >= 1 && level <= this.townHallDetails.length) {
      return this.townHallDetails[level - 1]
    } else {
      console.error(`Invalid Town Hall level: ${level}`)
      return undefined
    }
  },
  getAchievementLevel(
    level: number,
    count: number
  ): AchievementLevel | undefined {
    if (level && level >= 1 && level <= this.achievements[0].levels.length) {
      return this.achievements[0].levels[level - 1]
    } else if (count) {
      for (const achievementLevel of this.achievements[0].levels) {
        if (count < achievementLevel.target) {
          return achievementLevel
        }
      }

      return this.achievements[0].levels[this.achievements[0].levels.length - 1]
    } else {
      console.error(
        `Invalid Achievement level: ${level} or Invalid Count used: ${count}`
      )
      return undefined
    }
  },
}

export default cannon
