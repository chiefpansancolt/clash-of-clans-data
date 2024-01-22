import * as Constants from '../../Constats'
import {
  TownHallDefense,
  AchievementLevel,
  HomeVillageLevel,
  HomeVillageDefense,
  GearUp,
} from '../../CommonInterfaces'

interface ArcherTowerLevel extends HomeVillageLevel {
  gearImgUrl: string
  burstImgUrl: string
}

interface ArcherTower extends HomeVillageDefense {
  levels: ArcherTowerLevel[]
  gearUp: GearUp

  getLevel(levelNumber: number): ArcherTowerLevel | undefined
}

const archerTower: ArcherTower = {
  name: 'Archer Tower',
  description:
    'Archer Towers have longer range than Cannons, and unlike Cannons they can attack flying enemies.',
  maxCount: 8,
  minRange: 10,
  maxRange: 10,
  tiles: 0,
  attackSpeed: 0.5,
  width: 3,
  height: 3,
  damageType: Constants.singleTarget,
  unitTypeTarget: Constants.groundAndAir,
  maxLevel: 21,
  gearUp: {
    buildCost: 4000000,
    buildTimeSec: 0,
    buildTimeMin: 0,
    buildTimeHour: 0,
    buildTimeDay: 7,
    homeVillageLevelRequired: 10,
    builderBaseDefenseLevelRequired: 6,
  },
  townHallDetails: [
    { townHall: 1, availableCount: 0, maxLevel: 0 },
    { townHall: 2, availableCount: 1, maxLevel: 2 },
    { townHall: 3, availableCount: 1, maxLevel: 3 },
    { townHall: 4, availableCount: 2, maxLevel: 4 },
    { townHall: 5, availableCount: 3, maxLevel: 6 },
    { townHall: 6, availableCount: 3, maxLevel: 7 },
    { townHall: 7, availableCount: 4, maxLevel: 8 },
    { townHall: 8, availableCount: 5, maxLevel: 10 },
    { townHall: 9, availableCount: 6, maxLevel: 11 },
    { townHall: 10, availableCount: 7, maxLevel: 13 },
    { townHall: 11, availableCount: 8, maxLevel: 15 },
    { townHall: 12, availableCount: 8, maxLevel: 17 },
    { townHall: 13, availableCount: 8, maxLevel: 19 },
    { townHall: 14, availableCount: 8, maxLevel: 20 },
    { townHall: 15, availableCount: 8, maxLevel: 21 },
    { townHall: 16, availableCount: 8, maxLevel: 21 },
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
      damagePerSecond: 11,
      damagePerShot: 5.5,
      hitpoints: 380,
      buildCost: 1000,
      buildCostResource: Constants.gold,
      buildTimeSec: 0,
      buildTimeMin: 1,
      buildTimeHour: 0,
      buildTimeDay: 0,
      exp: 7,
      townHallLevelRequired: 2,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/6/6e/Archer_Tower1.png/revision/latest/scale-to-width-down/100?cb=20221223035901',
      gearImgUrl: '',
      burstImgUrl: '',
    },
    {
      level: 2,
      damagePerSecond: 15,
      damagePerShot: 7.5,
      hitpoints: 420,
      buildCost: 2000,
      buildCostResource: Constants.gold,
      buildTimeSec: 0,
      buildTimeMin: 15,
      buildTimeHour: 0,
      buildTimeDay: 0,
      exp: 30,
      townHallLevelRequired: 2,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/e/e0/Archer_Tower2.png/revision/latest/scale-to-width-down/100?cb=20221223035914',
      gearImgUrl: '',
      burstImgUrl: '',
    },
    {
      level: 3,
      damagePerSecond: 19,
      damagePerShot: 9.5,
      hitpoints: 460,
      buildCost: 5000,
      buildCostResource: Constants.gold,
      buildTimeSec: 0,
      buildTimeMin: 45,
      buildTimeHour: 0,
      buildTimeDay: 0,
      exp: 51,
      townHallLevelRequired: 3,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/9/9e/Archer_Tower3.png/revision/latest/scale-to-width-down/100?cb=20221223035926',
      gearImgUrl: '',
      burstImgUrl: '',
    },
    {
      level: 4,
      damagePerSecond: 25,
      damagePerShot: 12.5,
      hitpoints: 500,
      buildCost: 20000,
      buildCostResource: Constants.gold,
      buildTimeSec: 0,
      buildTimeMin: 0,
      buildTimeHour: 3,
      buildTimeDay: 0,
      exp: 103,
      townHallLevelRequired: 4,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/b/b8/Archer_Tower4.png/revision/latest/scale-to-width-down/100?cb=20221223035936',
      gearImgUrl: '',
      burstImgUrl: '',
    },
    {
      level: 5,
      damagePerSecond: 30,
      damagePerShot: 15,
      hitpoints: 540,
      buildCost: 80000,
      buildCostResource: Constants.gold,
      buildTimeSec: 0,
      buildTimeMin: 0,
      buildTimeHour: 4,
      buildTimeDay: 0,
      exp: 120,
      townHallLevelRequired: 5,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/e/e8/Archer_Tower5.png/revision/latest/scale-to-width-down/100?cb=20221223035947',
      gearImgUrl: '',
      burstImgUrl: '',
    },
    {
      level: 6,
      damagePerSecond: 35,
      damagePerShot: 17.5,
      hitpoints: 580,
      buildCost: 150000,
      buildCostResource: Constants.gold,
      buildTimeSec: 0,
      buildTimeMin: 0,
      buildTimeHour: 5,
      buildTimeDay: 0,
      exp: 134,
      townHallLevelRequired: 5,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/7/70/Archer_Tower6.png/revision/latest/scale-to-width-down/100?cb=20221223035958',
      gearImgUrl: '',
      burstImgUrl: '',
    },
    {
      level: 7,
      damagePerSecond: 42,
      damagePerShot: 21,
      hitpoints: 630,
      buildCost: 300000,
      buildCostResource: Constants.gold,
      buildTimeSec: 0,
      buildTimeMin: 0,
      buildTimeHour: 8,
      buildTimeDay: 0,
      exp: 169,
      townHallLevelRequired: 6,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/1/1f/Archer_Tower7.png/revision/latest/scale-to-width-down/100?cb=20221223040010',
      gearImgUrl: '',
      burstImgUrl: '',
    },
    {
      level: 8,
      damagePerSecond: 48,
      damagePerShot: 24,
      hitpoints: 690,
      buildCost: 480000,
      buildCostResource: Constants.gold,
      buildTimeSec: 0,
      buildTimeMin: 0,
      buildTimeHour: 10,
      buildTimeDay: 0,
      exp: 189,
      townHallLevelRequired: 7,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/e/e2/Archer_Tower8.png/revision/latest/scale-to-width-down/100?cb=20221223040025',
      gearImgUrl: '',
      burstImgUrl: '',
    },
    {
      level: 9,
      damagePerSecond: 56,
      damagePerShot: 28,
      hitpoints: 750,
      buildCost: 580000,
      buildCostResource: Constants.gold,
      buildTimeSec: 0,
      buildTimeMin: 0,
      buildTimeHour: 12,
      buildTimeDay: 0,
      exp: 207,
      townHallLevelRequired: 8,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/4/4a/Archer_Tower9.png/revision/latest/scale-to-width-down/100?cb=20221223040036',
      gearImgUrl: '',
      burstImgUrl: '',
    },
    {
      level: 10,
      damagePerSecond: 63,
      damagePerShot: 31.5,
      hitpoints: 810,
      buildCost: 760000,
      buildCostResource: Constants.gold,
      buildTimeSec: 0,
      buildTimeMin: 0,
      buildTimeHour: 12,
      buildTimeDay: 0,
      exp: 207,
      townHallLevelRequired: 8,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/4/45/Archer_Tower10.png/revision/latest/scale-to-width-down/100?cb=20221223040047',
      gearImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/6/67/Archer_Tower10Up.png/revision/latest/scale-to-width-down/100?cb=20221223040106',
      burstImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/2/27/Archer_Tower10G.png/revision/latest/scale-to-width-down/100?cb=20221223040101',
    },
    {
      level: 11,
      damagePerSecond: 70,
      damagePerShot: 35,
      hitpoints: 890,
      buildCost: 1000000,
      buildCostResource: Constants.gold,
      buildTimeSec: 0,
      buildTimeMin: 0,
      buildTimeHour: 14,
      buildTimeDay: 0,
      exp: 224,
      townHallLevelRequired: 9,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/0/03/Archer_Tower11.png/revision/latest/scale-to-width-down/100?cb=20221223040107',
      gearImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/a/a8/Archer_Tower11Up.png/revision/latest/scale-to-width-down/100?cb=20221223040128',
      burstImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/0/09/Archer_Tower11G.png/revision/latest/scale-to-width-down/100?cb=20221223040123',
    },
    {
      level: 12,
      damagePerSecond: 75,
      damagePerShot: 37.5,
      hitpoints: 970,
      buildCost: 1100000,
      buildCostResource: Constants.gold,
      buildTimeSec: 0,
      buildTimeMin: 0,
      buildTimeHour: 18,
      buildTimeDay: 0,
      exp: 254,
      townHallLevelRequired: 10,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/f/f0/Archer_Tower12.png/revision/latest/scale-to-width-down/100?cb=20221223040130',
      gearImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/0/0a/Archer_Tower12Up.png/revision/latest/scale-to-width-down/100?cb=20221223040150',
      burstImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/e/e1/Archer_Tower12G.png/revision/latest/scale-to-width-down/100?cb=20221223040143',
    },
    {
      level: 13,
      damagePerSecond: 80,
      damagePerShot: 40,
      hitpoints: 1050,
      buildCost: 2000000,
      buildCostResource: Constants.gold,
      buildTimeSec: 0,
      buildTimeMin: 0,
      buildTimeHour: 18,
      buildTimeDay: 0,
      exp: 254,
      townHallLevelRequired: 10,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/f/fb/Archer_Tower13.png/revision/latest/scale-to-width-down/100?cb=20221223040151',
      gearImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Archer_Tower13Up.png/revision/latest/scale-to-width-down/100?cb=20221223040213',
      burstImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/8/85/Archer_Tower13G.png/revision/latest/scale-to-width-down/100?cb=20221223040206',
    },
    {
      level: 14,
      damagePerSecond: 90,
      damagePerShot: 45,
      hitpoints: 1130,
      buildCost: 2200000,
      buildCostResource: Constants.gold,
      buildTimeSec: 0,
      buildTimeMin: 0,
      buildTimeHour: 6,
      buildTimeDay: 1,
      exp: 328,
      townHallLevelRequired: 11,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/2/2c/Archer_Tower14.png/revision/latest/scale-to-width-down/100?cb=20221223040215',
      gearImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/4/49/Archer_Tower14Up.png/revision/latest/scale-to-width-down/100?cb=20221223040235',
      burstImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/a/ab/Archer_Tower14G.png/revision/latest/scale-to-width-down/100?cb=20221223040226',
    },
    {
      level: 15,
      damagePerSecond: 100,
      damagePerShot: 50,
      hitpoints: 1230,
      buildCost: 2500000,
      buildCostResource: Constants.gold,
      buildTimeSec: 0,
      buildTimeMin: 0,
      buildTimeHour: 6,
      buildTimeDay: 1,
      exp: 328,
      townHallLevelRequired: 11,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/4/44/Archer_Tower15.png/revision/latest/scale-to-width-down/100?cb=20221223040236',
      gearImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/f/fa/Archer_Tower15Up.png/revision/latest/scale-to-width-down/100?cb=20221225041139',
      burstImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/c/cd/Archer_Tower15G.png/revision/latest/scale-to-width-down/100?cb=20221223040252',
    },
    {
      level: 16,
      damagePerSecond: 105,
      damagePerShot: 52.5,
      hitpoints: 1330,
      buildCost: 4700000,
      buildCostResource: Constants.gold,
      buildTimeSec: 0,
      buildTimeMin: 0,
      buildTimeHour: 0,
      buildTimeDay: 3,
      exp: 509,
      townHallLevelRequired: 12,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/7/73/Archer_Tower16.png/revision/latest/scale-to-width-down/100?cb=20221223040301',
      gearImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/e/ee/Archer_Tower16Up.png/revision/latest/scale-to-width-down/100?cb=20221223040313',
      burstImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/1/11/Archer_Tower16G.png/revision/latest/scale-to-width-down/100?cb=20221223040308',
    },
    {
      level: 17,
      damagePerSecond: 110,
      damagePerShot: 55,
      hitpoints: 1410,
      buildCost: 6100000,
      buildCostResource: Constants.gold,
      buildTimeSec: 0,
      buildTimeMin: 0,
      buildTimeHour: 0,
      buildTimeDay: 3,
      exp: 509,
      townHallLevelRequired: 12,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/f/fd/Archer_Tower17.png/revision/latest/scale-to-width-down/100?cb=20221223040314',
      gearImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/1/19/Archer_Tower17Up.png/revision/latest/scale-to-width-down/100?cb=20221223040327',
      burstImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/4/4f/Archer_Tower17G.png/revision/latest/scale-to-width-down/100?cb=20221223040322',
    },
    {
      level: 18,
      damagePerSecond: 120,
      damagePerShot: 60,
      hitpoints: 1510,
      buildCost: 6800000,
      buildCostResource: Constants.gold,
      buildTimeSec: 0,
      buildTimeMin: 0,
      buildTimeHour: 0,
      buildTimeDay: 7,
      exp: 777,
      townHallLevelRequired: 13,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/6/6f/Archer_Tower18.png/revision/latest/scale-to-width-down/100?cb=20221223040329',
      gearImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/2/26/Archer_Tower18Up.png/revision/latest/scale-to-width-down/100?cb=20221223040348',
      burstImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/0/0b/Archer_Tower18G.png/revision/latest/scale-to-width-down/100?cb=20221223040342',
    },
    {
      level: 19,
      damagePerSecond: 130,
      damagePerShot: 65,
      hitpoints: 1600,
      buildCost: 8000000,
      buildCostResource: Constants.gold,
      buildTimeSec: 0,
      buildTimeMin: 0,
      buildTimeHour: 0,
      buildTimeDay: 7,
      exp: 777,
      townHallLevelRequired: 13,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/4/49/Archer_Tower19.png/revision/latest/scale-to-width-down/100?cb=20221223040350',
      gearImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/8/81/Archer_Tower19Up.png/revision/latest/scale-to-width-down/100?cb=20221223040401',
      burstImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/5/5d/Archer_Tower19G.png/revision/latest/scale-to-width-down/100?cb=20221223040357',
    },
    {
      level: 20,
      damagePerSecond: 138,
      damagePerShot: 69,
      hitpoints: 1700,
      buildCost: 11600000,
      buildCostResource: Constants.gold,
      buildTimeSec: 0,
      buildTimeMin: 0,
      buildTimeHour: 12,
      buildTimeDay: 9,
      exp: 905,
      townHallLevelRequired: 14,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/3/34/Archer_Tower20.png/revision/latest/scale-to-width-down/100?cb=20221223040402',
      gearImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/1/1f/Archer_Tower20Up.png/revision/latest/scale-to-width-down/100?cb=20221223040420',
      burstImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/4/48/Archer_Tower20G.png/revision/latest/scale-to-width-down/100?cb=20221223040417',
    },
    {
      level: 21,
      damagePerSecond: 145,
      damagePerShot: 72.5,
      hitpoints: 1800,
      buildCost: 16000000,
      buildCostResource: Constants.gold,
      buildTimeSec: 0,
      buildTimeMin: 0,
      buildTimeHour: 6,
      buildTimeDay: 13,
      exp: 1069,
      townHallLevelRequired: 15,
      baseImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/f/fa/Archer_Tower21.png/revision/latest/scale-to-width-down/100?cb=20221223040422',
      gearImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/b/b4/Archer_Tower21Up.png/revision/latest/scale-to-width-down/100?cb=20221223040441',
      burstImgUrl:
        'https://static.wikia.nocookie.net/clashofclans/images/2/29/Archer_Tower21G.png/revision/latest/scale-to-width-down/100?cb=20221223040437',
    },
  ],
  getSize(): string {
    return `${this.width}x${this.height}`
  },
  getLevel(level: number): ArcherTowerLevel | undefined {
    if (level >= 1 && level <= this.levels.length) {
      return this.levels[level - 1]
    } else {
      console.error(`Invalid ${this.name} level: ${level}`)
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

export default archerTower