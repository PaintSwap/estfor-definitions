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
}

export class Attire {
  head: u16 = 0
  neck: u16 = 0
  body: u16 = 0
  arms: u16 = 0
  legs: u16 = 0
  feet: u16 = 0
  ring: u16 = 0
  reserved1: u16 = 0
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
  itemTokenId: u16 = 0
  amount: u16 = 0
}

export class QueuedActionInput {
  attire: Attire = new Attire()
  actionId: u32 = 0
  regenerateId: u16 = 0 // Food (combat), maybe something for non-combat later
  choiceId: u32 = 0 // Melee/Arrow/Magic (combat), logs, ore (non-combat)
  choiceId1: u32 = 0 // Reserved (TBD)
  choiceId2: u32 = 0 // Reserved (TBD)
  combatStyle: CombatStyle = CombatStyle.NONE
  timespan: u32 = 0 // How long to queue the action for
  rightHandEquipmentTokenId: u16 = 0
  leftHandEquipmentTokenId: u16 = 0
}

export class ActionInfo {
  skill: Skill = Skill.NONE
  isAvailable: boolean = true
  isDynamic: boolean = false
  actionChoiceRequired: boolean = false
  xpPerHour: u32 = 0
  numSpawned: u32 = 0
  minXP: u32 = 0
  handItemTokenIdRangeMin: u16 = 0
  handItemTokenIdRangeMax: u16 = 0
  successPercent: u8 = 0
}

export class GuaranteedReward {
  itemTokenId: u16 = 0
  rate: u32 = 0 // base 100, 2 decimal places
}

export class RandomReward {
  itemTokenId: i32 = 0
  chance: u16 = 0 // out of 65335
  amount: u8 = 0
}

export class ActionInput {
  actionId: u32 = 0
  info: ActionInfo = new ActionInfo()
  guaranteedRewards: GuaranteedReward[] = []
  randomRewards: RandomReward[] = []
  combatStats: CombatStats = new CombatStats()
}

// Contains everything you need to create an item
export class InputItem {
  combatStats: CombatStats = new CombatStats()
  nonCombatStats: NonCombatStats = new NonCombatStats()
  tokenId: u16 = 0
  equipPosition: EquipPosition = EquipPosition.NONE
  // Can this be transferred to another player?
  isTransferable: boolean = true
  // Minimum requirements in this skill
  skill: Skill = Skill.NONE
  minXP: u32 = 0
  // Food
  healthRestored: u32 = 0
  // Boost
  boostType: BoostType = BoostType.NONE
  boostValue: u16 = 0 // Varies, could be the % increase
  boostDuration: u32 = 0 // How long the effect of the boost last
  // uri
  metadataURI: string = ''
  // name of the item
  name: string = ''
}

export class CombatStats {
  melee: i16 = 0
  magic: i16 = 0
  range: i16 = 0
  meleeDefence: i16 = 0
  magicDefence: i16 = 0
  rangeDefence: i16 = 0
  health: i16 = 0
}

export class NonCombatStats {
  skill: Skill = Skill.NONE
  diff: u8 = 0
}

export const emptyCombatStats = new CombatStats()
export const emptyNonCombatStats = new NonCombatStats()
export const defaultInputItem = new InputItem()
export const noAttire = new Attire()

export class EquipmentInfo {
  actionId: u16 = 0
  queueId: string = '0'
  elapsedTime: u32 = 0
  itemTokenId: u16 = 0
  amount: u32 = 0
}

export class XPInfo {
  actionId: u16 = 0
  queueId: string = '0'
  elapsedTime: u32 = 0
  xp: u32 = 0
}

export class DiedInfo {
  actionId: u16 = 0
  queueId: string = '0'
  elapsedTime: u32 = 0
}

export class RollInfo {
  actionId: u16 = 0
  queueId: string = '0'
  elapsedTime: u32 = 0
  numRolls: number = 0
}

export class PastRandomRewardInfo {
  actionId: u16 = 0
  queueId: string = '0'
  itemTokenId: u16 = 0
  amount: u32 = 0
}

export class PendingQueuedActionState {
  consumed: EquipmentInfo[] = []
  produced: EquipmentInfo[] = []
  producedPastRandomRewards: PastRandomRewardInfo[] = []
  producedXPRewards: Equipment[] = []
  questRewards: Equipment[] = []
  questConsumed: Equipment[] = []
  activeQuestInfo: QuestWithCompletionInfo[] = []
  died: DiedInfo[] = []
  rolls: RollInfo[] = []
  xpGained: XPInfo[] = []
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
  numActivities: u32 = 0
  pendingRandomRewards: string[] = [] // Timestamps for any rewards which are waiting on the next seed
  speedMultiplier: u32 = 1

  /* Skill XP */
  woodcuttingXP: string = '0'
  firemakingXP: string = '0'
  fishingXP: string = '0'
  cookingXP: string = '0'
  miningXP: string = '0'
  smithingXP: string = '0'
  craftingXP: string = '0'
  thievingXP: string = '0'
  totalXP: string = '0'

  /* Combat XP */
  healthXP: string = '0'
  meleeXP: string = '0'
  defenceXP: string = '0'
  magicXP: string = '0'
  rangeXP: string = '0'

  /** Ranks */
  woodcuttingRank: u32 = 0
  firemakingRank: u32 = 0
  fishingRank: u32 = 0
  cookingRank: u32 = 0
  miningRank: u32 = 0
  smithingRank: u32 = 0
  craftingRank: u32 = 0
  thievingRank: u32 = 0
  meleeRank: u32 = 0
  magicRank: u32 = 0
  rangeRank: u32 = 0
  defenceRank: u32 = 0
  healthRank: u32 = 0
  combinedRank: u32 = 0

  /* Boost */
  boostStartTime: u64 = 0
  boostDuration: u32 = 0
  boostVal: u8 = 0
  boostType: BoostType
  boostItemTokenId: u16 = 0
}

export class User {
  id: string = '0'
  numPlayers: u32 = 0
  numUniqueItems: u32 = 0
  numActivities: u32 = 0
  totalSold: string = '0'
  totalBought: string = '0'
  activePlayerId: string = '0'
}

export class GlobalPlayerStats {
  totalPlayers: string = '0'
  totalAvatars: string[] = []
  lastMintedPlayer: Player = new Player()
  lastQueuedActionPlayer: Player = new Player()
  lastQueuedActions: i32[] = []
  lastQueuedQueuedActions: QueuedAction[] = []
  lastQueuedActionTimestamp: string = '0'
}

export class GlobalUserStats {
  totalUsers: string = '0'
  totalSold: string = '0'
  totalBought: string = '0'
  totalBrushBurned: string = '0'
}

export enum ActivityType {
  Buy,
  Sell,
  ActionPartiallyFinished,
  ActionFinished,
  XPThresholdReward,
  DailyReward,
  WeeklyReward,
  PendingRandomRewardsClaimed,
}

export enum Direction {
  Consumed,
  Produced,
}

export enum ActivityUndertaker {
  Player,
  User,
}

export class Activity {
  id: string = ''
  type: string = '' // ActivityType
  itemTokenIds: u16[] = []
  amounts: string[] = []
  directions: string[] = [] // Direction
  prices: string[] = []
  timestamp: string = ''
  hash: string = ''
  playerId: string = '0'
  user: string = ''
  undertaker: string = '' // ActivityUndertaker
  queuedAction: QueuedAction = new QueuedAction()
}

export class LastFullEquipment {
  id: string = '0' // playerId
  playerId: string = '0'
  user: string = ''
  queuedAction: QueuedAction = new QueuedAction()
  skill: Skill = Skill.NONE
  combatStyle: CombatStyle = CombatStyle.NONE
  timestamp: string = '0'
}

export class QueuedAction {
  id: string = '' // queueId
  actionId: u32 = 0
  playerId: string = ''
  regenerateId: u16 = 0
  choice: ActionChoice = new ActionChoice()
  choice1: ActionChoice = new ActionChoice()
  choice2: ActionChoice = new ActionChoice()
  rightHandEquipmentTokenId: u16 = 0
  leftHandEquipmentTokenId: u16 = 0
  startTime: string = ''
  timespan: u32 = 0
  originalStartTime: string = ''
  originalTimespan: u32 = 0
  isValid: boolean = true
  isActive: boolean = true
  skill: Skill = Skill.NONE
  combatStyle: CombatStyle = CombatStyle.NONE

  headEquipped: u16 = 0
  neckEquipped: u16 = 0
  bodyEquipped: u16 = 0
  armsEquipped: u16 = 0
  legsEquipped: u16 = 0
  feetEquipped: u16 = 0
  ringEquipped: u16 = 0
}

export class Item {
  id: string = '0'
  tokenId: u16 = 0
  melee: i16 = 0
  magic: i16 = 0
  range: i16 = 0
  meleeDefence: i16 = 0
  magicDefence: i16 = 0
  rangeDefence: i16 = 0
  health: i16 = 0
  totalQuantity: string = '0'
  equipPosition: u16 = 0
  healthRestored: u32 = 0
  skill1: Skill = Skill.NONE
  skillDiff1: u8 = 0
  boostType: BoostType = BoostType.NONE
  boostValue: u16 = 0
  boostDuration: u32 = 0
  // Minimum requirements for equipping
  skill: Skill = Skill.NONE
  minXP: string = '0'
  name: string = ''
  isTransferable: boolean = true
  firstMinted: string = '' // Timestamp of the first mintied one, can reset if all burned
}

export class UserItemNFT {
  id: string = ''
  user: string = ''
  tokenId: u16 = 0
  amount: string = ''
  item: Item = new Item()
}

export class ShopItem {
  id: string = ''
  tokenId: u16 = 0
  price: string = '0'
  allocationRemaining: string = '0'
}

export class ActionChoiceInput {
  skill: Skill = Skill.NONE
  diff: u32 = 0
  rate: u16 = 0
  xpPerHour: u32 = 0
  minXP: u32 = 0
  inputTokenId1: u16 = 0
  num1: u16 = 0
  inputTokenId2: u16 = 0
  num2: u16 = 0
  inputTokenId3: u16 = 0
  num3: u16 = 0
  outputTokenId: u16 = 0
  outputNum: u8 = 1
  successPercent: u8 = 100
}

export class ActionChoice {
  id: string = ''
  actionId: u32 = 0
  skill: Skill = Skill.NONE
  diff: u16 = 0
  rate: u16 = 0
  xpPerHour: u32 = 0
  minXP: u32 = 0
  inputTokenId1: u16 = 0
  num1: u16 = 0
  inputTokenId2: u16 = 0
  num2: u16 = 0
  inputTokenId3: u16 = 0
  num3: u16 = 0
  outputTokenId: u16 = 0
  outputNum: u8 = 1
  successPercent: u8 = 100
}

export class Action {
  id: string = ''
  actionId: u32 = 0
  skill: Skill = Skill.NONE
  xpPerHour: u32 = 0
  numSpawned: u32 = 0
  minXP: string = '0'

  guaranteedRewardItemTokenIds: u32[] = []
  guaranteedRewardRates: u32[] = []
  randomChanceItemTokenIds: u32[] = []
  randomChanceRates: u32[] = []

  handItemTokenIdRangeMin: u32 = 0
  handItemTokenIdRangeMax: u32 = 0
  isAvailable: boolean = false
  isDynamic: boolean = false
  actionChoiceRequired: boolean = false
  successPercent: i8 = 100

  /* Combat Stats */
  melee: i16 = 0
  magic: i16 = 0
  range: i16 = 0
  rangeDefence: i16 = 0
  meleeDefence: i16 = 0
  magicDefence: i16 = 0
  health: i16 = 0
}

export class RandomWords {
  lastRequestId: string = ''
  lastRequestedBy: string = ''
  lastRequestedPlayer: Player = new Player()
  lastRequestedTimestamp: string = ''
  lastRandomWordsReceived: string = '' // Bytes
  hasLastRequestedRandomWordsBeenReceived: boolean = false
}

export class PlayerDayData {
  date: string = ''
  playersActive: i32 = 0
}

export class Quest {
  id: string = '' // quest id

  dependentQuest: Quest = new Quest() // The quest that must be completed before this one can be started
  action: Action = new Action() // action to do
  actionNum: u16 = 0 // how many (up to 65535)
  action1: Action = new Action() // another action to do
  actionNum1: u16 = 0 // how many (up to 65535)
  actionChoice: ActionChoice = new ActionChoice() // actionChoice to perform
  actionChoiceNum: u16 = 0 // how many to do (base number), (up to 65535)
  skillReward: Skill = Skill.NONE // The skill to reward XP to
  skillXPGained: u16 = 0 // The amount of XP to give (up to 65535)
  rewardItem: Item = new Item() // Reward an item
  rewardAmount: u16 = 0 // amount of the reward (up to 65535)
  rewardItem1: Item = new Item() // Reward another item
  rewardAmount1: u16 = 0 // amount of the reward (up to 65535)
  burnItem: Item = new Item() // Burn an item
  burnAmount: u16 = 0 // amount of the burn (up to 65535)

  isActive: boolean = false
  isFixed: boolean = false
}

export class QuestFromPending {
  questId: u32 = 0 // Unique id for this quest
  dependentQuestId: u16 = 0 // The quest that must be completed before this one can be started
  actionId: u16 = 0 // action to do
  actionNum: u16 = 0 // how many (up to 65535)
  actionId1: u16 = 0 // another action to do
  actionNum1: u16 = 0 // how many (up to 65535)
  actionChoiceId: u16 = 0 // actionChoice to perform
  actionChoiceNum: u16 = 0 // how many to do (base number), (up to 65535)
  skillReward: Skill = Skill.NONE // The skill to reward XP to
  skillXPGained: u16 = 0 // The amount of XP to give (up to 65535)
  rewardItemTokenId: u16 = 0 // Reward an item
  rewardAmount: u16 = 0 // amount of the reward (up to 65535)
  rewardItemTokenId1: u16 = 0 // Reward another item
  rewardAmount1: u16 = 0 // amount of the reward (up to 65535)
  burnItemTokenId: u16 = 0 // Burn an item
  burnAmount: u16 = 0 // amount of the burn (up to 65535)
}

export class QuestWithCompletionInfo {
  quest: QuestFromPending = new QuestFromPending()
  actionCompletedNum: u32 = 0
  actionCompletedNum1: u32 = 0
  actionChoiceCompletedNum: u32 = 0
}

export class PlayerQuest {
  id: string = '' // playerId_questId
  playerId: string = ''
  quest: Quest = new Quest()

  // Progression in this quest
  actionNum: u32 = 0
  actionNum1: u32 = 0
  actionChoiceNum: u32 = 0

  completed: boolean = false
}

export class ClanTier {
  id: string = ''
  maxMemberCapacity: i32 = 0
  maxBankCapacity: i32 = 0
  maxImageId: i32 = 0
  price: string = '0'
  minimumAge: string = '0'
}

export class Clan {
  id: string = ''
  owner: string = ''
  name: string = ''
  imageId: i32 = 0
  tier: ClanTier = new ClanTier()
  createdTimestamp: string = ''
  createdCount: string = ''
  memberCount: i32 = 0
  adminCount: i32 = 0
}

export class ClanMember {
  id: string = '' // playerId
  clan: Clan = new Clan()
  requestedClan: Clan = new Clan()
  status: ClanStatus = ClanStatus.NOT_MEMBER
}

export class ClanInvite {
  id: string = '' // playerId_clanId
  playerId: string = ''
  clan: Clan = new Clan()
  invitedBy: string = ''
  invitedTimestamp: string = ''
}

export enum ClanStatus {
  NOT_MEMBER = 0,
  MEMBER = 1,
  ADMIN = 2,
  OWNER = 3,
}
