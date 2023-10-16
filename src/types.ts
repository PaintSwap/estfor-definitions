export enum BoostType {
  NONE,
  ANY_XP,
  COMBAT_XP,
  NON_COMBAT_XP,
  GATHERING,
  ABSENCE,
  PASSIVE_SKIP_CHANCE,
}

export enum Skill {
  NONE,
  COMBAT, // Helper skill
  MELEE,
  RANGED,
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
  AGILITY,
  ALCHEMY,
  FLETCHING,
  FORGING,
  RESERVED2,
  RESERVED3,
  RESERVED4,
  RESERVED5,
  RESERVED6,
  RESERVED7,
  RESERVED8,
  RESERVED9,
  RESERVED10,
  RESERVED11,
  RESERVED12,
  RESERVED13,
  RESERVED14,
  RESERVED15,
  RESERVED16,
  RESERVED17,
  RESERVED18,
  RESERVED19,
  RESERVED20,
  TRAVELING, // Helper Skill
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
  QUIVER,
  MAGIC_BAG,
  FOOD,
  AUX, // wood, seeds etc..
  BOOST_VIAL,
  EXTRA_BOOST_VIAL,
  GLOBAL_BOOST_VIAL,
  CLAN_BOOST_VIAL,
  PASSIVE_BOOST_VIAL,
}

export enum WorldLocation {
  STARTING_AREA,
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
  choiceId: u32 = 0 // Melee/Ranged/Magic (combat), logs, ore etc (non-combat)
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
  worldLocation: u8 = 0
  isFullModeOnly: boolean = false
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
export class ItemInput {
  combatStats: CombatStats = new CombatStats()
  tokenId: u16 = 0
  equipPosition: EquipPosition = EquipPosition.NONE
  // Can this be transferred to another player?
  isTransferable: boolean = true
  isFullModeOnly: boolean = false
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
  ranged: i16 = 0
  meleeDefence: i16 = 0
  magicDefence: i16 = 0
  rangedDefence: i16 = 0
  health: i16 = 0
}

export class PastRandomRewardInfo {
  queueId: u64 = 0
  itemTokenId: u16 = 0
  amount: u32 = 0
}

export class PendingQueuedActionEquipmentState {
  consumedItemTokenIds: string[] = []
  consumedAmounts: string[] = []
  producedItemTokenIds: string[] = []
  producedAmounts: string[] = []
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

export class PendingQueuedActionProcessed {
  // XP gained during this session
  skills: Skill[] = []
  xpGainedSkills: u32[] = []
}

export class QuestState {
  consumedItemTokenIds: string[] = []
  consumedAmounts: string[] = []
  rewardItemTokenIds: string[] = []
  rewardAmounts: u32[] = []
  activeQuestInfo: PlayerQuestOutput[] = []
  questsCompleted: u32[] = []
  skills: Skill[] = [] // Skills gained XP in
  xpGainedSkills: u32[] = [] // XP gained in these skills
}

export class LotteryWinnerInfo {
  lotteryId: u16 = 0
  raffleId: u32 = 0
  itemTokenId: u16 = 0
  amount: u16 = 0
  instantConsume: bool = false
  playerId: u64 = 0
}

export class PendingQueuedActionState {
  // First 2 are in sync
  equipmentStates: PendingQueuedActionEquipmentState[] = []
  actionMetadatas: PendingQueuedActionMetadata[] = []
  processedData: PendingQueuedActionProcessed = new PendingQueuedActionProcessed()
  producedPastRandomRewards: PastRandomRewardInfo[] = []
  xpRewardItemTokenIds: string[] = []
  xpRewardAmounts: string[] = []
  dailyRewardItemTokenIds: string[] = []
  dailyRewardAmounts: string[] = []
  quests: QuestState = new QuestState()
  lotteryWinner: LotteryWinnerInfo = new LotteryWinnerInfo()
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

export class PassiveActionInfoInput {
  durationDays: u32 = 1
  inputTokenId1: u16 = 0
  inputAmount1: u16 = 0
  inputTokenId2: u16 = 0
  inputAmount2: u16 = 0
  inputTokenId3: u16 = 0
  inputAmount3: u16 = 0
  minSkill1: Skill = Skill.NONE
  minXP1: u32 = 0
  minSkill2: Skill = Skill.NONE
  minXP2: u32 = 0
  minSkill3: Skill = Skill.NONE
  minXP3: u32 = 0
  skipSuccessPercent: u8 = 0
  worldLocation: u8 = 0
  isFullModeOnly: boolean = false
}

export class PassiveActionInput {
  actionId: u32 = 0
  info: PassiveActionInfoInput = new PassiveActionInfoInput()
  guaranteedRewards: GuaranteedReward[] = []
  randomRewards: RandomReward[] = []
}

export class PassiveAction {
  id: string = '' // actionId
  actionId: u16 = 0
  durationDays: u8 = 0
  guaranteedRewardItemTokenIds: u32[] = []
  guaranteedRewardRates: u32[] = []
  randomChanceItemTokenIds: u32[] = []
  randomChanceRates: u32[] = []
  randomChanceAmounts: u32[] = []
  inputTokenIds: u32[] = []
  inputAmounts: u32[] = []
  minSkills: u32[] = []
  minXPs: string[] = []
  skipSuccessPercent: u8 = 0
  worldLocation: u8 = 0
  isFullModeOnly: boolean = false
}

export class QueuedPassiveAction {
  id: string = '' // queueId
  queueId: string = ''
  action: PassiveAction = new PassiveAction()
  playerId: string = ''
  startTime: string = ''
  boostItem: Item = new Item()
}

export enum InstantActionType {
  NONE,
  FORGING_COMBINE,
  GENERIC,
}

export class InstantActionInput {
  actionId: u32 = 0
  minSkills: Skill[] = []
  minXPs: string[] = []
  inputTokenIds: u16[] = []
  inputAmounts: u16[] = []
  outputTokenId: u16 = 0
  outputAmount: u16 = 0
  isFullModeOnly: boolean = false
  actionType: InstantActionType = InstantActionType.NONE
}

export class InstantAction {
  id: string = '' // actionId
  actionId: u32 = 0
  minSkills: Skill[] = []
  minXPs: string[] = []
  inputTokenIds: u16[] = []
  inputAmounts: u16[] = []
  outputTokenId: u16 = 0
  outputAmount: u16 = 0
  isFullModeOnly: boolean = false
  actionType: InstantActionType = InstantActionType.NONE
}

export class QueuedInstantAction {
  id: string = '' // queueId
  player: Player = new Player()
  actions: InstantAction[] = []
  amounts: string[] = []
  timestamp: string = ''
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
  firstToReachMaxSkill: Skill = Skill.NONE
  activeQuest: PlayerQuest = new PlayerQuest()
  activePassiveAction: QueuedPassiveAction = new QueuedPassiveAction()
  lastInstantAction: QueuedInstantAction = new QueuedInstantAction()
  numFixedQuestsCompleted: u32 = 0
  isBurnt: boolean = false // Whether the NFT associated with this player has been burnt
  worldLocation: WorldLocation = WorldLocation.STARTING_AREA
  lastDailyRewardClaimedItemTokenId: number = 0
  lastWeeklyRewardClaimedItemTokenId: number = 0
  totalDonated: string = '0'
  isFullMode: boolean = false

  /* Skill XP */
  woodcuttingXP: string = '0'
  firemakingXP: string = '0'
  fishingXP: string = '0'
  cookingXP: string = '0'
  miningXP: string = '0'
  smithingXP: string = '0'
  craftingXP: string = '0'
  thievingXP: string = '0'
  agilityXP: string = '0'
  alchemyXP: string = '0'
  fletchingXP: string = '0'
  forgingXP: string = '0'
  totalXP: string = '0'
  totalLevel: number = 0

  /* Combat XP */
  healthXP: string = '0'
  meleeXP: string = '0'
  defenceXP: string = '0'
  magicXP: string = '0'
  rangedXP: string = '0'

  /** Ranks */
  woodcuttingRank: u32 = 0
  firemakingRank: u32 = 0
  fishingRank: u32 = 0
  cookingRank: u32 = 0
  miningRank: u32 = 0
  smithingRank: u32 = 0
  craftingRank: u32 = 0
  thievingRank: u32 = 0
  alchemyRank: u32 = 0
  fletchingRank: u32 = 0
  forgingRank: u32 = 0
  meleeRank: u32 = 0
  magicRank: u32 = 0
  rangedRank: u32 = 0
  defenceRank: u32 = 0
  healthRank: u32 = 0
  combinedRank: u32 = 0

  /* Boost */
  boostStartTime: u64 = 0
  boostDuration: u32 = 0
  boostVal: u8 = 0
  boostType: BoostType
  boostItemTokenId: u16 = 0

  /* Extra Boost */
  extraBoostStartTime: u64 = 0
  extraBoostDuration: u32 = 0
  extraBoostVal: u8 = 0
  extraBoostType: BoostType
  extraBoostItemTokenId: u16 = 0

  /* Socials */
  discord: string = ''
  twitter: string = ''
  telegram: string = ''
}

export class User {
  id: string = '0'
  numPlayers: u32 = 0
  numPlayersDonated: u32 = 0
  numUniqueItems: u32 = 0
  numActivities: u32 = 0
  totalSold: string = '0'
  totalBought: string = '0'
  totalDonated: string = '0'
  activePlayerId: string = '0'
}

export class GlobalPlayerStats {
  totalPlayers: string = '0'
  totalAvatars: string[] = []
  lastMintedPlayer: Player = new Player()
  lastQueuedActionPlayer: Player = new Player()
  lastQueuedActions: QueuedAction[] = []
  lastQueuedActionTimestamp: string = '0'
  lastQueuedPassiveActionPlayer: Player = new Player()
  lastQueuedPassiveAction: QueuedPassiveAction = new QueuedPassiveAction()
  lastQueuedInstantActionPlayer: Player = new Player()
  lastQueuedInstantAction: QueuedInstantAction = new QueuedInstantAction()
  numActivities: string = '0'
}

export class GlobalUserStats {
  totalUsers: string = '0'
  totalSold: string = '0'
  totalBought: string = '0'
  totalBrushBurned: string = '0'
  numActivities: string = '0'
}

export class GlobalClanStats {
  totalClans: string = '0'
  totalClanMembers: string = '0'
}

export class GlobalDonationStats {
  numUsersDonated: string = '0'
  numPlayersDonated: string = '0'
  totalDonatedAmount: string = '0'
  numDonations: string = '0'
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
  PromotionRedeemed,
  QuestCompleted,
  ConsumeBoostVial,
  ConsumeExtraBoostVial,
  ConsumeGlobalBoostVial,
  ConsumeClanBoostVial,
  Donation,
  LevelUp,
  NewPlayer,
  SetActionQueue,
  QuestActivated,
  RequestedOracle,
  TransferPlayer,
  ReceivedPlayer,
  TransferItems,
  ReceivedItems,
  Gift,
  ReceivedGift,
  GiftToBank,

  BankDepositOnMaker,
  BankDepositOnClan,
  BankDistributeOnMaker,
  BankDistributeOnReceiver,
  BankDistributeOnClan,

  ClanCreatedOnMaker,
  ClanRankUpdatedOnMaker,
  ClanDeletedInviteByPlayerOnMaker,
  ClanDeletedInviteByClanOnMaker,
  ClanInviteSentOnMaker,
  ClanJoinRequestSentOnMaker,
  ClanJoinRequestAcceptedOnMaker,
  ClanOwnershipTransferredOnMaker,
  ClanEditedOnMaker,
  ClanUpgradedOnMaker,
  ClanMemberLeftOnMaker,
  ClanKickedOnMaker,

  ClanRankUpdatedOnReceiver,
  ClanDeletedInviteByPlayerOnReceiver,
  ClanDeletedInviteByClanOnReceiver,
  ClanInviteSentOnReceiver,
  ClanJoinRequestAcceptedOnReceiver,
  ClanOwnershipTransferredOnReceiver,
  ClanKickedOnReceiver,

  ClanCreatedOnClan,
  ClanRankUpdatedOnClan,
  ClanDeletedInviteByPlayerOnClan,
  ClanDeletedInviteByClanOnClan,
  ClanInviteSentOnClan,
  ClanJoinRequestSentOnClan,
  ClanJoinRequestAcceptedOnClan,
  ClanOwnershipTransferredOnClan,
  ClanOwnerLeftOnClan,
  ClanEditedOnClan,
  ClanUpgradedOnClan,
  ClanMemberLeftOnClan,
  ClanKickedOnClan,

  DonationOnClan,
  ConsumeClanBoostVialOnClan,

  ClanJoinRequestRemovedByClanOnMaker,
  ClanJoinRequestRemovedByClanOnReceiver,
  ClanJoinRequestRemovedByClanOnClan,
  ClanJoinRequestsEnabledOnMaker,
  ClanJoinRequestsEnabledOnClan,
  ClanInviteAcceptedOnMaker,
  ClanInviteAcceptedOnReceiver,
  ClanInviteAcceptedOnClan,
  ClanGateKeepNFTsOnMaker,
  ClanGateKeepNFTsOnClan,
  ClanPinMessageOnMaker,
  ClanPinMessageOnClan,

  EditPlayer,
  StartPassiveAction,
  EndPassiveAction,
  ConsumePassiveBoostVial,
  InstantAction,
}

export enum Direction {
  Consumed,
  Produced,
  ProducedAndConsumed,
}

export enum ActivityUndertaker {
  Player,
  User,
}

export class Activity {
  id: string = ''
  activityId: string = '' // Ascending numberic id for each Activity, unique only for each ActivityUndertaker
  type: string = '' // ActivityType
  itemTokenIds: u16[] = []
  amounts: string[] = []
  directions: string[] = []
  prices: string[] = []
  gainedSkills: Skill[] = []
  gainedXPs: string[] = []
  miscs: string[] = [] // Various BigInts specific to the activity type
  skill: Skill = Skill.NONE
  otherAddress: string = ''
  thirdAddress: string = ''
  timestamp: string = ''
  hash: string = ''
  blockNumber: string = ''
  playerId: string = '0'
  player: Player = new Player()
  otherPlayer: Player = new Player() // Only used for Clan things currently
  user: string = ''
  undertaker: string = '' // ActivityUndertaker
  queuedAction: QueuedAction = new QueuedAction()
  queuedActions: QueuedAction[] = [] // Only used for SetActionQueue
  playerQuest: PlayerQuest = new PlayerQuest() // Only set for QuestsCompleted
  clanId: string = '0' // Id if this is a clan activity
  clanName: string = '' // Name of the clan if this is a clan activity
  isLastInSameTransaction: boolean = false // Is this the last activity for all activities with the same hash
  uniqueTransactionId: string = '0' // Unique id for all activities with the same hash
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
  ranged: i16 = 0
  meleeDefence: i16 = 0
  magicDefence: i16 = 0
  rangedDefence: i16 = 0
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
  // When selling the item
  allocationRemaining: string = '0'
  nextNewAllocationTimestamp: string = '0'
}

export class UserItemNFT {
  id: string = ''
  user: string = ''
  tokenId: u16 = 0
  amount: string = ''
  item: Item = new Item()
  selfMade: boolean = false
}

export class ShopItem {
  id: string = ''
  tokenId: u16 = 0
  price: string = '0'
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
  handItemTokenIdRangeMin: u32 = 0
  handItemTokenIdRangeMax: u32 = 0
  isFullModeOnly: boolean = false
  minSkill1: Skill
  minXP1: number
  minSkill2: Skill
  minXP2: number
}

export class ActionChoice {
  id: string = ''
  actionId: u32 = 0
  skill: Skill = Skill.NONE
  skillDiff: u16 = 0
  rate: u16 = 0
  xpPerHour: u32 = 0
  minXP: u32 = 0
  // TODO: Remove all these inputTokenIds and inputAmounts
  inputTokenId1: u16 = 0
  inputAmount1: u16 = 0
  inputTokenId2: u16 = 0
  inputAmount2: u16 = 0
  inputTokenId3: u16 = 0
  inputAmount3: u16 = 0
  outputTokenId: u16 = 0
  outputAmount: u8 = 1
  successPercent: u8 = 100
  handItemTokenIdRangeMin: u32 = 0
  handItemTokenIdRangeMax: u32 = 0
  inputTokenIds: u16[] = []
  inputAmounts: u16[] = []
  minSkills: Skill[] = []
  minXPs: string[] = []
  isFullModeOnly: boolean = false
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
  worldLocation: WorldLocation = WorldLocation.STARTING_AREA

  /* Combat Stats */
  melee: i16 = 0
  magic: i16 = 0
  ranged: i16 = 0
  rangedDefence: i16 = 0
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
  questId: u32 = 0 // quest id

  dependentQuest: Quest = new Quest() // The quest that must be completed before this one can be started
  action1: Action = new Action() // action to do
  actionNum1: u16 = 0 // how many (up to 65535)
  action2: Action = new Action() // another action to do
  actionNum2: u16 = 0 // how many (up to 65535)
  actionChoice: ActionChoice = new ActionChoice() // actionChoice to perform
  actionChoiceNum: u16 = 0 // how many to do (base number), (up to 65535)
  skillReward: Skill = Skill.NONE // The skill to reward XP to
  skillXPGained: u16 = 0 // The amount of XP to give (up to 65535)
  rewardItem1: Item = new Item() // Reward an item
  rewardAmount1: u16 = 0 // amount of the reward (up to 65535)
  rewardItem2: Item = new Item() // Reward another item
  rewardAmount2: u16 = 0 // amount of the reward (up to 65535)
  burnItem: Item = new Item() // Burn an item
  burnAmount: u16 = 0 // amount of the burn (up to 65535)
  requireActionsCompletedBeforeBurning: boolean // Whether we can start burning before other things are completed

  isActive: boolean = false
  isFixed: boolean = false
  createdTimestamp: string = ''

  minRequirementSkills: Skill[] = [] // Minimum requirements in these skills
  minRequirementXPs: string[] = [] // Minimum requirements in these skills
}

export class PlayerQuestOutput {
  questId: string = ''
  actionCompletedNum1: u32 = 0
  actionCompletedNum2: u32 = 0
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
  actionCompletedNum1: u32 = 0
  actionCompletedNum2: u32 = 0
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
  discord: string | null = ''
  telegram: string | null = ''
  imageId: u16 = 0
  tier: ClanTier = new ClanTier()
  createdTimestamp: string = ''
  createdCount: string = ''
  memberCount: u32 = 0
  bankAddress: string = ''
  totalLevel: number = 0
  combinedRank: number = 0
  bankValue: string = '0'
  joinRequestsEnabled: boolean = false

  boostStartTime: u64 = 0
  boostDuration: u32 = 0
  boostVal: u8 = 0
  boostType: BoostType
  boostItemTokenId: u16 = 0

  totalDonated: string = '0'
  lastDonationThreshold: string = '0'
  nextDonationThresholdRewardItemTokenId: u16 = 0

  lastDonationTimestamp: u64 = 0
  gateKeepNFTs: string[] = []
  pinnedMessage: string = ''
  pinnedMessagePlayer: Player = new Player()
  pinnedMessageTimestamp: string = ''
}

export class ClanMember {
  id: string = '' // playerId
  player: Player = new Player()
  clan: Clan = new Clan()
  requestedClan: Clan = new Clan()
  requestedClanTimestamp: string = ''
  rank: ClanRank = ClanRank.NONE
  joinedTimestamp: string = ''
  // Only applies to the current clan, and gets reset when leaving the clan
  totalDonated: string = '0'
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

// An individual donation
export class ClanDonation {
  id: string = '0' // clanId_playerId_timestamp
  playerId: string = '0'
  clanId: string = '0'
  amount: string = '0'
  timestamp: u64 = 0
}

export class Donation {
  id: string = '' // user or player id
  user: string | null = null
  player: Player | null = new Player()
  amount: string = '0'
  lastDonatedAmount: string = '0'
  lastUpdatedTimestamp: string = ''
  donationAmountRank: string = ''
}

export class Lottery {
  id: string = '' // lotteryId
  raffleIdWinner: string = '' // 0 means no winner yet
  hasClaimed: bool = false
  rewardItemTokenId: number = 0
  rewardAmount: string = '0'
  timestamp: string = '0'
}

export class RaffleEntry {
  id: string = '' // lotteryId_raffleId
  lotteryId: string = '0'
  raffleId: string = '0'
  playerId: string = '0'
  user: string = ''
  timestamp: string = '0'
}

export class DonationDayData {
  id: string = '' // date
  date: string = ''
  totalDonated: string = '0' // in brush
  numDonators: u32 = 0
  numLotteryEntries: u32 = 0
}

export class CoreData {
  clanEditNameCost: string = '0'
  playerEditNameCost: string = '0'
  playerUpgradeCost: string = '0'
  gamePaused: boolean = false

  // Global Donations
  lastGlobalDonationThreshold: string = '0'
  globalDonationThresholdRewardIncrement: string = '0'
  nextGlobalDonationThresholdRewardItemTokenId: u16 = 0
  // Clan donations
  clanDonationThresholdRewardIncrement: string = '0'
  startClanDonationThresholdRewardItemTokenId: u16 = 0

  raffleEntryCost: string = '0'

  globalBoostStartTime: string = '0'
  globalBoostDuration: u32 = 0
  globalBoostVal: u8 = 0
  globalBoostType: BoostType = BoostType.NONE
  globalBoostItemTokenId: u16 = 0
}

export class FirstToReachMaxSkills {
  id: string = '0'
  skill: Skill = Skill.NONE
  user: string = ''
  player: Player = new Player()
}

class Reaction {
  id: string = ''
  names: string[] = []
  playerIds: string[] = []
}

export class ClanMessage {
  text: string = ''
  name: string = ''
  playerId: string = '0'
  avatarId: string = '0'
  rank: ClanRank = ClanRank.NONE
  id: string = '' // Random uuid to make messages unique
  timestamp: string = '0'
  isEdited: boolean = false
  isDeleted: boolean = false
  deletedByPlayerId: string = '0'
  deletedByName: string = ''
  replyId: string = '' // If replying to a message this is the id
  reactions: Reaction[] = [] // Emoji reactions
}

export enum Referrer {
  ESTFOR,
  SECRET,
}

export enum Promotion {
  NONE,
  STARTER,
}

export const emptyCombatStats = new CombatStats()
export const defaultItemInput = new ItemInput()
export const defaultActionChoice = new ActionChoiceInput()
export const defaultActionInfo = new ActionInfo()
export const defaultPassiveActionInput = new PassiveActionInput()
export const defaultInstantActionInput = new InstantActionInput()
export const noAttire = new Attire()
