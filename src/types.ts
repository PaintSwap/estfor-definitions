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
  MELEE,
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
  FEET,
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

export class Attire {
  head: i32 = 0
  neck: i32 = 0
  body: i32 = 0
  arms: i32 = 0
  legs: i32 = 0
  feet: i32 = 0
  ring: i32 = 0
  reserved1: i32 = 0
  queueId: i64 = 0
}

export enum ActionQueueStatus {
  NONE,
  APPEND,
  KEEP_LAST_IN_PROGRESS,
}

export enum CombatStyle {
  NONE,
  ATTACK,
  DEFENCE,
}

export class Equipment {
  itemTokenId: i32 = 0
  amount: i32 = 0
}

export class QueuedActionInput {
  attire: Attire = new Attire()
  actionId: i32 = 0
  regenerateId: i32 = 0 // Food (combat), maybe something for non-combat later
  choiceId: i32 = 0 // Melee/Arrow/Magic (combat), logs, ore (non-combat)
  choiceId1: i32 = 0 // Reserved (TBD)
  choiceId2: i32 = 0 // Reserved (TBD)
  combatStyle: CombatStyle = CombatStyle.NONE
  timespan: i32 = 0 // How long to queue the action for
  rightHandEquipmentTokenId: i32 = 0
  leftHandEquipmentTokenId: i32 = 0
  skill: Skill = Skill.NONE
}

export class ActionInfo {
  skill: Skill = Skill.NONE
  isAvailable: boolean = true
  isDynamic: boolean = false
  actionChoiceRequired: boolean = false
  xpPerHour: i32 = 0
  numSpawn: i32 = 0
  minXP: i32 = 0
  handItemTokenIdRangeMin: i32 = 0
  handItemTokenIdRangeMax: i32 = 0
  successPercent: i32 = 0
}

export class ActionReward {
  itemTokenId: i32 = 0
  rate: i32 = 0 // base 100, 2 decimal places
}

export class ActionInput {
  actionId: i32 = 0
  info: ActionInfo = new ActionInfo()
  guaranteedRewards: ActionReward[] = []
  randomRewards: ActionReward[] = []
  combatStats: CombatStats = new CombatStats()
}

// Contains everything you need to create an item
export class InputItem {
  combatStats: CombatStats = new CombatStats()
  nonCombatStats: NonCombatStats = new NonCombatStats()
  tokenId: i32 = 0
  equipPosition: EquipPosition = EquipPosition.NONE
  // Can this be transferred to another player?
  isTransferable: boolean = true
  // Minimum requirements in this skill
  skill: Skill = Skill.NONE
  minXP: i32 = 0
  // Food
  healthRestored: i32 = 0
  // Boost
  boostType: BoostType = BoostType.NONE
  boostValue: i32 = 0 // Varies, could be the % increase
  boostDuration: i32 = 0 // How long the effect of the boost last
  // uri
  metadataURI: string = ''
}

export class CombatStats {
  melee: i32 = 0
  magic: i32 = 0
  range: i32 = 0
  meleeDefence: i32 = 0
  magicDefence: i32 = 0
  rangeDefence: i32 = 0
  health: i32 = 0
}

export class NonCombatStats {
  skill: Skill = Skill.NONE
  diff: i32 = 0
}

export const emptyCombatStats = new CombatStats()
export const emptyNonCombatStats = new NonCombatStats()
export const defaultInputItem = new InputItem()
export const noAttire = new Attire()

export class PendingOutput {
  consumed: Equipment[] = []
  produced: Equipment[] = []
  producedPastRandomRewards: Equipment[] = []
  producedXPRewards: Equipment[] = []
  xpGained: u32 = 0
  died: boolean = false
}

export class PendingFlags {
  includeLoot: boolean = true // Guaranteed loot from actions, and random loot if claiming quite late
  includePastRandomRewards: boolean = true // This is random loot from previous actions
  includeXPRewards: boolean = true // Passing any xp thresholds gives you extra rewards
}

export class XPThresholdRewardInput {
  xpThreshold: i32 = 0
  equipments: Equipment[] = []
}

export class XPThresholdReward {
  id: string = '' // XP for the reward
  xp: string = '' // same as id
  rewardItemAmounts: string[] = []
  rewardItemTokenIds: string[] = []
}

export class Player {
  id: string = '0'
  tokenId: string = '0'
  avatarId: string = '1'
  owner: string = ''
  name: string = ''
  lastTimestamp: string = '0'
  mintedNumber: string = '0' // Will be unique, use for sorting
  mintedTimestamp: string = '0'
  isActive: boolean = false // Is this player the active one for the owner
  numActivities: i32 = 0 // Not used yet
  pendingRandomRewards: string[] = [] // Timestamps for any rewards which are waiting on the next seed
  speedMultiplier: i32 = 1

  /* Action XP */
  woodcuttingXP: i32 = 0
  firemakingXP: i32 = 0
  fishingXP: i32 = 0
  cookingXP: i32 = 0
  miningXP: i32 = 0
  smithingXP: i32 = 0
  craftingXP: i32 = 0
  thievingXP: i32 = 0
  totalXP: string = '0'

  /* Combat XP */
  healthXP: i32 = 0
  meleeXP: i32 = 0
  defenceXP: i32 = 0
  magicXP: i32 = 0
  rangeXP: i32 = 0

  /** Ranks */
  woodcuttingRank: i32 = 0
  firemakingRank: i32 = 0
  fishingRank: i32 = 0
  cookingRank: i32 = 0
  miningRank: i32 = 0
  smithingRank: i32 = 0
  craftingRank: i32 = 0
  thievingRank: i32 = 0
  meleeRank: i32 = 0
  magicRank: i32 = 0
  rangeRank: i32 = 0
  defenceRank: i32 = 0
  healthRank: i32 = 0
  combinedRank: i32 = 0

  /* Boost */
  boostStartTime: i32 = 0
  boostDuration: i32 = 0
  boostVal: i32 = 0
  boostType: BoostType
  boostItemTokenId: i32 = 0
}

export class User {
  id: string = '0'
  totalSold: string = '0'
  totalBought: string = '0'
  numPlayers: i32 = 0
}

export class GlobalPlayerStats {
  totalPlayers: string = '0'
}

export enum ActivityType {
  LevelUp,
  Buy,
  Sell,
  Died,
  Consumed,
  Rewards,
  ClaimedXPThresholdRewards,
  ActionPartiallyFinished,
  ActionsQueued,
  ActionFinished,
}

export class Activity {
  id: string = ''
  type: string = '' // ActivityType
  itemTokenIds: i32[] = []
  amounts: string[] = []
  prices: string[] = []
  queueId: string = ''
  timestamp: string = ''
  hash: string = ''
  playerId: string = '0'
  user: string = ''
}

export class ActivityInfo {
  id: string = ''
  numActivities: string = ''
}

export class LastFullEquipment {
  id: string = '0' // playerId
  playerId: string = '0'
  user: string = ''
  actionId: i32 = 0
  regenerateId: i32 = 0
  choiceId: i32 = 0
  choiceId1: i32 = 0
  choiceId2: i32 = 0
  rightHandEquipmentTokenId: i32 = 0
  leftHandEquipmentTokenId: i32 = 0
  startTime: string = ''
  timespan: i32 = 0
  isValid: boolean = true
  skill: Skill = Skill.NONE

  headEquipped: i32 = 0
  neckEquipped: i32 = 0
  bodyEquipped: i32 = 0
  armsEquipped: i32 = 0
  legsEquipped: i32 = 0
  feetEquipped: i32 = 0
  ringEquipped: i32 = 0
  timestamp: string = '0'
}

export class QueuedAction {
  id: string = '' // queueId
  actionId: i32 = 0
  playerId: string = ''
  regenerateId: i32 = 0
  choiceId: i32 = 0
  choiceId1: i32 = 0
  choiceId2: i32 = 0
  rightHandEquipmentTokenId: i32 = 0
  leftHandEquipmentTokenId: i32 = 0
  startTime: string = ''
  timespan: i32 = 0
  isValid: boolean = true
  skill: Skill = Skill.NONE

  headEquipped: i32 = 0
  neckEquipped: i32 = 0
  bodyEquipped: i32 = 0
  armsEquipped: i32 = 0
  legsEquipped: i32 = 0
  feetEquipped: i32 = 0
  ringEquipped: i32 = 0
}

export class Item {
  id: string = '0'
  tokenId: i32 = 0
  melee: i32 = 0
  magic: i32 = 0
  range: i32 = 0
  meleeDefence: i32 = 0
  magicDefence: i32 = 0
  rangeDefence: i32 = 0
  health: i32 = 0
  totalQuantity: string = '0'
  equipPosition: i32 = 0
  healthRestored: i32 = 0
  skill1: Skill = Skill.NONE
  skillDiff1: i32 = 0
  boostType: BoostType = BoostType.NONE
  boostValue: i32 = 0
  boostDuration: i32 = 0
  // Minimum requirements for equipping
  skill: Skill = Skill.NONE
  minXP: string = '0'
}

export class UserItemNFT {
  id: string = ''
  user: string = ''
  tokenId: i32 = 0
  amount: string = ''
  item: Item = new Item()
}

export class ShopItem {
  id: string = ''
  tokenId: i32 = 0
  price: string = '0'
}

export class ActionChoice {
  id: string = ''
  actionId: i32 = 0
  skill: Skill = Skill.NONE
  diff: i32 = 0
  rate: i32 = 0
  xpPerHour: i32 = 0
  minXP: i32 = 0
  inputTokenId1: i32 = 0
  num1: i32 = 0
  inputTokenId2: i32 = 0
  num2: i32 = 0
  inputTokenId3: i32 = 0
  num3: i32 = 0
  outputTokenId: i32 = 0
  outputNum: i32 = 1
  successPercent: i32 = 100
}

export class Action {
  id: string = ''
  actionId: i32 = 0
  skill: Skill = Skill.NONE
  xpPerHour: i32 = 0
  numSpawn: i32 = 0
  minXP: string = '0'

  guaranteedRewardItemTokenIds: i32[] = []
  guaranteedRewardRates: i32[] = []
  randomChanceItemTokenIds: i32[] = []
  randomChanceRates: i32[] = []

  handItemTokenIdRangeMin: i32 = 0
  handItemTokenIdRangeMax: i32 = 0
  isAvailable: boolean = false
  isDynamic: boolean = false
  actionChoiceRequired: boolean = false
  successPercent: i32 = 100

  /* Combat Stats */
  melee: i32 = 0
  magic: i32 = 0
  range: i32 = 0
  rangeDefence: i32 = 0
  meleeDefence: i32 = 0
  magicDefence: i32 = 0
  health: i32 = 0
}
