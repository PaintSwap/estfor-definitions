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
  RESERVED_COMBAT,
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
  amount: u32 = 0
}

export class QueuedActionInput {
  attire: Attire = new Attire()
  actionId: u32 = 0
  regenerateId: u16 = 0 // Food (combat), maybe something for non-combat later
  choiceId: u32 = 0 // Melee/Arrow/Magic (combat), logs, ore (non-combat)
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
  numSpawned: u32 = 0 // Base 10000
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
  itemTokenId: u32 = 0
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

export const emptyCombatStats = new CombatStats()
export const defaultInputItem = new InputItem()
export const noAttire = new Attire()

export class PastRandomRewardInfo {
  actionId: u16 = 0
  queueId: u64 = 0
  itemTokenId: u16 = 0
  amount: u32 = 0
}

export class PendingQueuedActionEquipmentState {
  consumed: Equipment[] = []
  produced: Equipment[] = []
}

export class PendingQueuedActionMetadata {
  xpGained: u32 = 0 // total xp gained
  rolls: u32 = 0
  died: boolean = false
  actionId: u16 = 0
  queueId: u64 = 0
  elapsedTime: u32 = 0
  xpElapsedTime: i32 = 0
}

class PendingQueuedActionXPGained {
  // The amount of XP that the queued action has already gained
  // XP gained during this session
  skills: Skill[] = []
  xpGainedSkills: u32[] = []
  alreadyProcessedSkill: Skill = Skill.NONE
  alreadyProcessedXPGained: u32 = 0
  alreadyProcessedSkill1: Skill = Skill.NONE
  alreadyProcessedXPGained1: u32 = 0
}

export class QuestState {
  consumedItemTokenIds: string[] = []
  consumedAmounts: string[] = []
  rewardItemTokenIds: string[] = []
  rewardAmounts: u32[] = []
  activeQuestInfo: PlayerQuestOutput[] = []
  actionIds: string[] = []
  actionAmounts: string[] = []
  choiceIds: u32[] = []
  choiceAmounts: u32[] = []
  questsCompleted: u32[] = []
  skills: Skill[] = [] // Skills gained XP in
  xpGainedSkills: u32[] = [] // XP gained in these skills
}

export class PendingQueuedActionState {
  // First 2 are in sync
  equipmentStates: PendingQueuedActionEquipmentState[] = []
  actionMetadatas: PendingQueuedActionMetadata[] = []
  xpGained: PendingQueuedActionXPGained = new PendingQueuedActionXPGained()
  producedPastRandomRewards: PastRandomRewardInfo[] = []
  xpRewardItemTokenIds: string[] = []
  xpRewardAmounts: string[] = []
  dailyRewardItemTokenIds: string[] = []
  dailyRewardAmounts: string[] = []
  quests: QuestState = new QuestState()
}

export class XPThresholdRewardInput {
  xpThreshold: u32 = 0
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
  activeQuest: PlayerQuest = new PlayerQuest()

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
  totalLevel: number = 0

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
  lastQueuedActions: QueuedAction[] = []
  lastQueuedActionTimestamp: string = '0'
}

export class GlobalUserStats {
  totalUsers: string = '0'
  totalSold: string = '0'
  totalBought: string = '0'
  totalBrushBurned: string = '0'
}

export class GlobalClanStats {
  totalClans: string = '0'
  totalClanMembers: string = '0'
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
  firstMintedTimestamp: string = '' // Timestamp of the first minted one, can reset if all burned
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
  nextNewAllocationTimestamp: string = '0'
}

export class ActionChoiceInput {
  skill: Skill = Skill.NONE
  minXP: u32 = 0
  skillDiff: i16 = 0
  rate: u16 = 0
  xpPerHour: u32 = 0
  inputTokenId1: u16 = 0
  inputAmount1: u16 = 0
  inputTokenId2: u16 = 0
  inputAmount2: u16 = 0
  inputTokenId3: u16 = 0
  inputAmount3: u16 = 0
  outputTokenId: u16 = 0
  outputAmount: u8 = 1
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
  inputAmount1: u16 = 0
  inputTokenId2: u16 = 0
  inputAmount2: u16 = 0
  inputTokenId3: u16 = 0
  inputAmount3: u16 = 0
  outputTokenId: u16 = 0
  outputAmount: u8 = 1
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
  createdTimestamp: string = ''
}

export class PlayerQuestOutput {
  questId: string = ''
  actionCompletedNum: u32 = 0
  actionCompletedNum1: u32 = 0
  actionChoiceCompletedNum: u32 = 0
  burnCompletedAmount: u32 = 0
}

export class PlayerQuest {
  id: string = '' // playerId_questId
  playerId: string = ''
  quest: Quest = new Quest()

  createdTimestamp: string = ''
  lastUpdatedTimestamp: string = ''

  // Progression in this quest
  actionCompletedNum: u32 = 0
  actionCompletedNum1: u32 = 0
  actionChoiceCompletedNum: u32 = 0
  burnCompletedAmount: u32 = 0

  completed: boolean = false
}

export class ClanTier {
  id: string = ''
  maxMemberCapacity: u32 = 0
  maxBankCapacity: u32 = 0
  maxImageId: u32 = 0
  price: string = '0'
  minimumAge: string = '0'
}

export class Clan {
  id: string = ''
  owner: Player = new Player()
  name: string = ''
  imageId: u16 = 0
  tier: ClanTier = new ClanTier()
  createdTimestamp: string = ''
  createdCount: string = ''
  memberCount: u32 = 0
  bankAddress: string = ''
  totalLevel: number = 0
  combinedRank: number = 0
  bankValue: string = '0'
}

export class ClanMember {
  id: string = '' // playerId
  player: Player = new Player()
  clan: Clan = new Clan()
  requestedClan: Clan = new Clan()
  requestedClanTimestamp: string = ''
  rank: ClanRank = ClanRank.NONE
  joinedTimestamp: string = ''
}

export class ClanInvite {
  id: string = '' // playerId_clanId
  member: ClanMember = new ClanMember()
  clan: Clan = new Clan()
  invitedBy: ClanMember = new ClanMember()
  invitedTimestamp: string = ''
}

export enum ClanRank {
  NONE, // Not in a clan
  COMMONER, // Member of the clan
  SCOUT, // Invite and kick commoners
  TREASURER, // Can withdraw from bank
  LEADER, // Can edit clan details
}
