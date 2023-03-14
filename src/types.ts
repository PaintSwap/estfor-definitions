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
  NO_POSITION,
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

export enum ActionQueueStatus {
  NONE,
  APPEND,
  KEEP_LAST_IN_PROGRESS,
}

export enum CombatStyle {
  NONE,
  MELEE,
  RANGE,
  MAGIC,
  MELEE_DEFENCE,
  RANGE_DEFENCE,
  MAGIC_DEFENCE,
}

export type Equipment = {
  itemTokenId: number
  amount: number
}

export type QueuedAction = {
  attire: Attire
  actionId: number
  regenerateId: number // Food (combat), maybe something for non-combat later
  choiceId: number // Melee/Arrow/Magic (combat), logs, ore (non-combat)
  choiceId1: number // Reserved (TBD)
  choiceId2: number // Reserved (TBD)
  combatStyle: CombatStyle
  timespan: number // How long to queue the action for
  rightHandEquipmentTokenId: number
  leftHandEquipmentTokenId: number
  startTime: string // Filled in by the smart contract, can be "0"
  isValid: boolean // If we still have the item, TODO: Not used yet
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
}

export type ActionReward = {
  itemTokenId: number
  rate: number // base 100, 2 decimal places
}

export type Action = {
  actionId: number
  info: ActionInfo
  guaranteedRewards: ActionReward[]
  randomRewards: ActionReward[]
  combatStats: CombatStats
}

export type ActionChoice = {
  skill: Skill
  diff: number
  rate: number
  xpPerHour: number
  minSkillPoints: number
  inputTokenId1: number
  num1: number
  inputTokenId2: number
  num2: number
  inputTokenId3: number
  num3: number
  outputTokenId: number
  outputNum: number // Not used yet, always 1
}

// Contains everything you need to create an item
export type InputItem = {
  combatStats: CombatStats
  nonCombatStats: NonCombatStats
  tokenId: number
  equipPosition: EquipPosition
  // Can this be transferred to another player?
  isTransferable: boolean
  // Minimum requirements in this skill
  skill: Skill
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

export type NonCombatStats = {
  skill: Skill
  diff: number
}

export const emptyCombatStats: CombatStats = {
  melee: 0,
  magic: 0,
  range: 0,
  meleeDefence: 0,
  magicDefence: 0,
  rangeDefence: 0,
  health: 0,
}

export const emptyNonCombatStats: NonCombatStats = {
  skill: Skill.NONE,
  diff: 0,
}

export const defaultInputItem = {
  combatStats: emptyCombatStats,
  nonCombatStats: emptyNonCombatStats,
  isTransferable: true,
  skill: Skill.NONE,
  minSkillPoints: 0,
  healthRestored: 0,
  boostType: BoostType.NONE,
  boostValue: 0,
  boostDuration: 0,
}

export const noAttire = {
  helmet: 0,
  amulet: 0,
  armor: 0,
  gauntlets: 0,
  tassets: 0,
  boots: 0,
  ring: 0, // Always NONE for now
  reserved1: 0, // Always NONE for now
  queueId: 0, // Doesn't matter
}

export type PendingOutput = {
  consumed: Equipment[]
  produced: Equipment[]
  producedPastRandomRewards: Equipment[]
  producedXPRewards: Equipment[]
  died: boolean
}

export type PendingFlags = {
  includeLoot: boolean // Guaranteed loot from actions, and random loot if claiming quite late
  includePastRandomRewards: boolean // This is random loot from previous actions
  includeXPRewards: boolean // Passing any xp thresholds gives you extra rewards
}

export type XPThresholdReward = {
  xpThreshold: number
  equipments: Equipment[]
}
