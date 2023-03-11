export enum BoostType {
  NONE,
  ANY_XP,
  COMBAT_XP,
  NON_COMBAT_XP,
  GATHERING,
  ABSENCE,
}

export enum Skill {
  NONE,
  COMBAT,
  ATTACK,
  RANGE,
  MAGIC,
  DEFENCE,
  HEALTH,
  MINING,
  WOODCUTTING,
  FISHING,
  SMITHING,
  THIEVING,
  CRAFTING,
  COOKING,
  FIREMAKING,
}

export enum EquipPosition {
  NONE,
  HEAD,
  NECK,
  BODY,
  ARMS,
  LEGS,
  BOOTS,
  SPARE1,
  SPARE2,
  LEFT_HAND,
  RIGHT_HAND,
  BOTH_HANDS,
  ARROW_SATCHEL,
  MAGIC_BAG,
  FOOD,
  AUX, // wood, seeds etc..
  BOOST_VIAL,
}

export type Attire = {
  helmet: number
  amulet: number
  armor: number
  gauntlets: number
  tassets: number
  boots: number
  ring: number
  reserved1: number
  queueId: number
}

export type ActionInfo = {
  skill: Skill
  isAvailable: boolean
  isDynamic: boolean
  actionChoiceRequired: boolean
  xpPerHour: number
  numSpawn: number
  minSkillPoints: number
  handItemTokenIdRangeMin: number
  handItemTokenIdRangeMax: number
};

export type ActionReward = {
  itemTokenId: number;
  rate: number // base 100, 2 decimal places
};

export type Action = {
  info: ActionInfo;
  guaranteedRewards: ActionReward[]
  randomRewards: ActionReward[]
  combatStats: CombatStats
}

// Contains everything you need to create an item
export type InputItem = {
  combatStats: CombatStats
  nonCombatStats: NonCombatStat[]
  tokenId: number
  equipPosition: EquipPosition
  // Can this be transferred to another player?
  isTransferable: boolean
  // Minimum requirements in this skill
  skill: Skill;
  minSkillPoints: number
  // Food
  healthRestored: number
  // Boost
  boostType: BoostType
  boostValue: number // Varies, could be the % increase
  boostDuration: number // How long the effect of the boost last
  // uri
  metadataURI: string
}

export type CombatStats = {
  melee: number
  magic: number
  range: number
  meleeDefence: number
  magicDefence: number
  rangeDefence: number
  health: number
}

export type NonCombatStat = {
  skill: Skill;
  diff: number;
}

export const emptyStats: CombatStats = {
  melee: 0,
  magic: 0,
  range: 0,
  meleeDefence: 0,
  magicDefence: 0,
  rangeDefence: 0,
  health: 0,
}

export const defaultInputItem = {
  combatStats: emptyStats,
  nonCombatStats: [],
  isTransferable: true,
  skill: Skill.NONE,
  minSkillPoints: 0,
  healthRestored: 0,
  boostType: BoostType.NONE,
  boostValue: 0,
  boostDuration: 0,
}