export enum BoostType {
  NONE,
  ANY_XP,
  COMBAT_XP,
  NON_COMBAT_XP,
  GATHERING,
  ABSENCE, // Not used yet
  PASSIVE_SKIP_CHANCE, // Not used yet
  // Clan wars
  PVP_BLOCK,
  PVP_REATTACK,
  PVP_SUPER_ATTACK,
  // Combat stats
  COMBAT_FIXED,
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
  FARMING,
  ALCHEMY,
  FLETCHING,
  FORGING,
  AGILITY,
  HUNTING,
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
  INCUBATION, // Helper Skill
}

export enum EquipPosition {
  NONE,
  HEAD,
  NECK,
  BODY,
  ARMS,
  LEGS,
  FEET,
  RING,
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
  LOCKED_VAULT,
  TERRITORY,
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

export enum ActionQueueStrategy {
  OVERWRITE,
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

export class Meta {
  startBlock: u32 = 0
  endBlock: u32 | null = null
  readyAt: string = ''
  progressBlock: u32 = 0
}

export class MetaBase {
  _meta: Meta[] = []
}

export class QueuedActionInput {
  attire: Attire = new Attire()
  actionId: u16 = 0
  regenerateId: u16 = 0 // Food (combat), maybe something for non-combat later
  choiceId: u32 = 0 // Melee/Ranged/Magic (combat), logs, ore etc (non-combat)
  combatStyle: CombatStyle = CombatStyle.NONE
  timespan: u32 = 0 // How long to queue the action for
  rightHandEquipmentTokenId: u16 = 0
  leftHandEquipmentTokenId: u16 = 0
  petId: u32 = 0
}

export class ActionInfo {
  skill: Skill = Skill.NONE
  isAvailable: boolean = true
  actionChoiceRequired: boolean = false
  xpPerHour: u32 = 0
  numSpawned: u32 = 0 // Base 10000
  minXP: u32 = 0
  handItemTokenIdRangeMin: u16 = 0
  handItemTokenIdRangeMax: u16 = 0
  successPercent: u8 = 0
  worldLocation: u8 = 0
  isFullModeOnly: boolean = false
  questPrerequisiteId: u16 = 0
}

export class GuaranteedReward {
  itemTokenId: u16 = 0
  rate: u32 = 0 // base 100, 2 decimal places
}

export class RandomReward {
  itemTokenId: u16 = 0
  chance: u16 = 0 // out of 65535
  amount: u8 = 0
}

export class ActionInput {
  actionId: u16 = 0
  info: ActionInfo = new ActionInfo()
  guaranteedRewards: GuaranteedReward[] = []
  randomRewards: RandomReward[] = []
  combatStats: CombatStats = new CombatStats()
}

export class CombatStats {
  meleeAttack: i16 = 0
  magicAttack: i16 = 0
  rangedAttack: i16 = 0
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
  durationDays: u8 = 1
  inputTokenIds: u16[] = []
  inputAmounts: u16[] = []
  minSkills: Skill[] = []
  minLevels: u8[] = []
  skipSuccessPercent: u8 = 0
  worldLocation: u8 = 0
  isFullModeOnly: boolean = false
  isAvailable: boolean = true
  questPrerequisiteId: u16 = 0
}

export class PassiveActionInput {
  actionId: u16 = 0
  info: PassiveActionInfoInput = new PassiveActionInfoInput()
  guaranteedRewards: GuaranteedReward[] = []
  randomRewards: RandomReward[] = []
}

export class PassiveAction {
  id: string = '' // actionId
  actionId: u16 = 0
  durationDays: u8 = 0
  guaranteedRewardItemTokenIds: u16[] = []
  guaranteedRewardRates: u32[] = []
  randomChanceItemTokenIds: u16[] = []
  randomChanceRates: u32[] = []
  randomChanceAmounts: u32[] = []
  inputTokenIds: u16[] = []
  inputAmounts: u32[] = []
  minSkills: Skill[] = []
  minLevels: u16[] = []
  skipSuccessPercent: u8 = 0
  worldLocation: u8 = 0
  isFullModeOnly: boolean = false
  isAvailable: boolean = true
  questPrerequisiteId: u16 = 0
}

export class QueuedPassiveAction {
  id: string = '' // queueId
  queueId: string = ''
  action: PassiveAction = new PassiveAction()
  playerId: string = ''
  startTime: string = ''
  boostItem: Item = new Item()
}

export class PendingPassiveActionState {
  producedItemTokenIds: string[] = []
  producedAmounts: string[] = []
  producedRandomRewardItemTokenIds: string[] = [] // Oracle loot
  producedRandomRewardAmounts: string[] = []
  numDaysSkipped: u32 = 0
  skippedToday: bool = false
  isReady: bool = false
}

export enum InstantActionType {
  NONE,
  FORGING_COMBINE,
  GENERIC,
}

export class InstantActionInput {
  actionId: u16 = 0
  minSkills: Skill[] = []
  minXPs: u32[] = []
  inputTokenIds: u16[] = []
  inputAmounts: u32[] = []
  outputTokenId: u16 = 0
  outputAmount: u16 = 0
  isFullModeOnly: boolean = false
  isAvailable: boolean = true
  actionType: InstantActionType = InstantActionType.NONE
  questPrerequisiteId: u16 = 0
}

export class InstantAction {
  id: string = '' // actionId
  actionId: u16 = 0
  minSkills: Skill[] = []
  minXPs: string[] = []
  inputTokenIds: u16[] = []
  inputAmounts: u16[] = []
  outputTokenId: u16 = 0
  outputAmount: u16 = 0
  isFullModeOnly: boolean = false
  actionType: InstantActionType = InstantActionType.NONE
  questPrerequisiteId: u16 = 0
}

export class QueuedInstantAction {
  id: string = '' // queueId
  player: Player = new Player()
  actions: InstantAction[] = []
  amounts: string[] = []
  timestamp: string = ''
}

export enum InstantVRFActionType {
  NONE,
  GENERIC,
  FORGING,
  EGG,
}

export class InstantVRFActionInput {
  actionId: u16 = 0
  inputTokenIds: u16[] = []
  inputAmounts: u16[] = []
  data: string = ''
  actionType: InstantVRFActionType = InstantVRFActionType.NONE
  isFullModeOnly: boolean = true
  isAvailable: boolean = true
  questPrerequisiteId: u16 = 0
}

export class InstantVRFAction {
  id: string = '' // actionId
  actionId: u16 = 0
  inputTokenIds: u16[] = []
  inputAmounts: u16[] = []
  //  data: string = '' // Unsure if we need this, can be quite large
  actionType: InstantVRFActionType = InstantVRFActionType.NONE
  isFullModeOnly: boolean = false
  isAvailable: boolean = true
  questPrerequisiteId: u16 = 0
}

export class QueuedInstantVRFAction {
  id: string = '' // requestId
  queueId: string = '' // requestId
  playerId: string = ''
  actions: InstantVRFAction[] = []
  amounts: string[] = []
  ongoing: boolean = false
  producedItems: string[] = []
  producedAmounts: string[] = []
  timestamp: string = ''
}

export class Player {
  id: string = '0'
  tokenId: string = '0'
  avatarId: string = '1'
  originalAvatarId: string = '1'
  owner: string = ''
  name: string = ''
  lastTimestamp: string = '0' // Updated for different events
  lastActiveTimestamp: string = '0' // Updated only at normal actions
  mintedNumber: string = '0' // Will be unique, use for sorting
  mintedTimestamp: string = '0'
  isActive: boolean = false // Is this player the active one for the owner
  numActivities: u32 = 0
  pendingRandomRewards: string[] = [] // Timestamps for any rewards which are waiting on the next seed
  firstToReachMaxSkill: Skill = Skill.NONE
  queuedActions: QueuedAction[] = []
  activeQuest: PlayerQuest = new PlayerQuest()
  activePassiveAction: QueuedPassiveAction = new QueuedPassiveAction()
  lastInstantAction: QueuedInstantAction = new QueuedInstantAction()
  lastInstantVRFAction: QueuedInstantVRFAction = new QueuedInstantVRFAction()
  numFixedQuestsCompleted: u32 = 0
  isBurnt: boolean = false // Whether the NFT associated with this player has been burnt
  worldLocation: WorldLocation = WorldLocation.STARTING_AREA
  lastDailyRewardClaimedItemTokenId: u16 = 0
  lastWeeklyRewardClaimedItemTokenId: u16 = 0
  totalDonated: string = '0'
  numRaffleEntries: u32 = 0
  isFullMode: boolean = false
  lockCooldownTimestamp: string = '0'

  /* Skill XP */
  woodcuttingXP: string = '0'
  firemakingXP: string = '0'
  fishingXP: string = '0'
  cookingXP: string = '0'
  miningXP: string = '0'
  smithingXP: string = '0'
  craftingXP: string = '0'
  thievingXP: string = '0'
  farmingXP: string = '0'
  alchemyXP: string = '0'
  fletchingXP: string = '0'
  forgingXP: string = '0'
  huntingXP: string = '0'
  totalXP: string = '0'
  totalLevel: u16 = 0

  /* Combat XP */
  healthXP: string = '0'
  meleeXP: string = '0'
  defenceXP: string = '0'
  magicXP: string = '0'
  rangedXP: string = '0'

  /* Ranks */
  woodcuttingRank: u32 = 0
  firemakingRank: u32 = 0
  fishingRank: u32 = 0
  cookingRank: u32 = 0
  miningRank: u32 = 0
  smithingRank: u32 = 0
  craftingRank: u32 = 0
  thievingRank: u32 = 0
  farmingRank: u32 = 0
  alchemyRank: u32 = 0
  fletchingRank: u32 = 0
  forgingRank: u32 = 0
  huntingRank: u32 = 0
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
  boostType: BoostType = BoostType.NONE
  boostItemTokenId: u16 = 0
  lastBoostStartTime: u64 = 0
  lastBoostDuration: u32 = 0
  lastBoostVal: u8 = 0
  lastBoostType: BoostType = BoostType.NONE
  lastBoostItemTokenId: u16 = 0

  /* Extra Boost */
  extraBoostStartTime: u64 = 0
  extraBoostDuration: u32 = 0
  extraBoostVal: u8 = 0
  extraBoostType: BoostType
  extraBoostItemTokenId: u16 = 0
  lastExtraBoostStartTime: u64 = 0
  lastExtraBoostVal: u8 = 0
  lastExtraBoostDuration: u32 = 0
  lastExtraBoostType: BoostType = BoostType.NONE
  lastExtraBoostItemTokenId: u16 = 0

  /* Socials */
  discord: string = ''
  twitter: string = ''
  telegram: string = ''

  /* Clan wars */
  isTerritoryCombatant: boolean = false
  isLockedVaultCombatant: boolean = false
  clanWarCombatantCooldownTimestamp: string = '0'
  territoryWins: string = '0'
  territoryLosses: string = '0'
  territorySkillDraws: string = '0'
  territorySkillWins: string = '0'
  territorySkillLosses: string = '0'
  lockedVaultWins: string = '0'
  lockedVaultLosses: string = '0'
  lockedVaultSkillDraws: string = '0'
  lockedVaultSkillWins: string = '0'
  lockedVaultSkillLosses: string = '0'
  totalWins: string = '0'
  totalLosses: string = '0'
  totalSkillDraws: string = '0'
  totalSkillWins: string = '0'
  totalSkillLosses: string = '0'
  battlePoints: u32 = 0
}

export class PlayerSimplified {
  id: string = '0'
  tokenId: string = '0'
  owner: string = ''
  name: string = ''
  avatarId: string = '1'
  lastTimestamp: string = '0'
  lastActiveTimestamp: string = '0'
  mintedTimestamp: string = '0'
  isActive: boolean = false
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
  farmingXP: string = '0'
  alchemyXP: string = '0'
  fletchingXP: string = '0'
  forgingXP: string = '0'
  huntingXP: string = '0'
  totalXP: string = '0'
  totalLevel: u16 = 0

  /* Combat XP */
  healthXP: string = '0'
  meleeXP: string = '0'
  defenceXP: string = '0'
  magicXP: string = '0'
  rangedXP: string = '0'

  /* Socials */
  discord: string = ''
  twitter: string = ''
  telegram: string = ''

  /* Clan Wars */
  isTerritoryCombatant: boolean = false
  isLockedVaultCombatant: boolean = false
  clanWarCombatantCooldownTimestamp: string = '0'
  territoryWins: string = '0'
  territoryLosses: string = '0'
  territorySkillDraws: string = '0'
  territorySkillWins: string = '0'
  territorySkillLosses: string = '0'
  lockedVaultWins: string = '0'
  lockedVaultLosses: string = '0'
  lockedVaultSkillDraws: string = '0'
  lockedVaultSkillWins: string = '0'
  lockedVaultSkillLosses: string = '0'
  totalWins: string = '0'
  totalLosses: string = '0'
  totalSkillDraws: string = '0'
  totalSkillWins: string = '0'
  totalSkillLosses: string = '0'
  battlePoints: u16 = 0
}

export class User {
  id: string = '0'
  numPlayers: u32 = 0
  numPlayersDonated: u32 = 0
  numUniqueItems: u32 = 0
  numActivities: u32 = 0
  numPets: u32 = 0
  shopTotalSold: string = '0'
  shopTotalBought: string = '0'
  totalDonated: string = '0'
  activePlayerId: string = '0'
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

  // Clan wars territories
  AssignCombatantsTerritoryOnMaker,
  AssignCombatantsLockedVaultOnReceiver,
  AssignCombatantsTerritoryOnClan,
  AttackTerritoryOnMaker,
  AssignCombatantsTerritoryOnReceiver,
  AttackTerritoryAttackingOnClan,
  AttackTerritoryDefendingOnClan, // Not used atm
  BattleResultTerritoryAttackingOnClan,
  BattleResultTerritoryDefendingOnClan,
  ClaimUnoccupiedTerritoryOnMaker,
  ClaimUnoccupiedTerritoryOnClan,
  BlockAttacksTerritoryOnMaker,
  BlockAttacksTerritoryOnClan,

  // Clan wars locked vaults
  AssignCombatantsLockedVaultOnMaker,
  AssignCombatantsLockedVaultOnClan,
  AttackLockedVaultOnMaker,
  AttackLockedVaultAttackingOnClan,
  AttackLockedVaultDefendingOnClan,
  BattleResultLockedVaultAttackingOnClan,
  BattleResultLockedVaultDefendingOnClan,
  BlockAttacksLockedVaultsOnMaker,
  BlockAttacksLockedVaultsOnClan,
  LockFundsOnMaker,
  LockFundsOnClan,

  HarvestDecorator,
  ClaimFundsOnMaker,
  InstantVRFAction,
  InstantVRFActionCompleted,

  // Pets
  TransferPets,
  ReceivedPets,
  EditPet,

  // ActivityPoints
  ActivityPointsEarned,
}

export enum Direction {
  Consumed,
  Produced,
  ProducedAndConsumed,
}

export class Activity {
  id: string = ''
  activityId: string = '' // Ascending numberic id for each Activity
  type: string = '' // ActivityType
  itemTokenIds: u16[] = []
  amounts: string[] = []
  directions: string[] = []
  prices: string[] = []
  gainedSkills: Skill[] = []
  gainedXPs: string[] = []
  miscs: string[] = [] // Various BigInts specific to the activity type
  petBaseTokenIds: u32[] = []
  petIds: string[] = []
  petDirections: string[] = []
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
  queuedAction: QueuedAction = new QueuedAction()
  queuedActions: QueuedAction[] = [] // Only used for SetActionQueue
  playerQuest: PlayerQuest = new PlayerQuest() // Only set for QuestsCompleted
  clanId: string = '0' // Id if this is a clan activity
  clanName: string = '' // Name of the clan if this is a clan activity
}

export class ActivitySimplified {
  id: string = ''
  activityId: string = '' // Ascending numberic id for each Activity
  type: string = '' // ActivityType
  itemTokenIds: u16[] = []
  amounts: string[] = []
  directions: string[] = []
  prices: string[] = []
  gainedSkills: Skill[] = []
  gainedXPs: string[] = []
  miscs: string[] = [] // Various BigInts specific to the activity type
  petBaseTokenIds: u32[] = []
  petIds: string[] = []
  petDirections: string[] = []
  skill: Skill = Skill.NONE
  otherAddress: string = ''
  thirdAddress: string = ''
  timestamp: string = ''
  hash: string = ''
  blockNumber: string = ''
  playerId: string = '0'
  player: PlayerSimplified = new PlayerSimplified()
  otherPlayer: PlayerSimplified = new PlayerSimplified() // Only used for Clan things currently
  user: string = ''
  queuedAction: QueuedActionSimplified = new QueuedActionSimplified()
  queuedActions: QueuedActionSimplified[] = [] // Only used for SetActionQueue
  playerQuest: PlayerQuestSimplified = new PlayerQuestSimplified() // Only set for QuestsCompleted
  clanId: string = '0' // Id if this is a clan activity
  clanName: string = '' // Name of the clan if this is a clan activity
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
  queuedId: string = '' // queueId
  actionId: u16 = 0
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

  basePetId: u32 = 0
  pet: Pet = new Pet()
}

export class QueuedActionSimplified {
  id: string = '' // queueId
  queuedId: string = '' // queueId
  actionId: u16 = 0
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

  basePetId: u32 = 0
  petId: string = ''
}

// Contains everything you need to create an item
export class ItemInput {
  combatStats: CombatStats = new CombatStats()
  tokenId: u16 = 0
  equipPosition: EquipPosition = EquipPosition.NONE
  // Can this be transferred to another player?
  isTransferable: boolean = true
  isFullModeOnly: boolean = false
  isAvailable: boolean = false
  questPrerequisiteId: u16 = 0
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

export class Item {
  id: string = '0'
  tokenId: u16 = 0
  meleeAttack: i16 = 0
  magicAttack: i16 = 0
  rangedAttack: i16 = 0
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
  lowercaseName: string = ''
  isTransferable: boolean = true
  firstMintedTimestamp: string = '' // Timestamp of the first minted one, can reset if all burned
  // When selling the item
  allocationRemaining: string = '0'
  nextNewAllocationTimestamp: string = '0'
  isForgeable: boolean = false
  isSellableToShop: boolean = false
  isFullModeOnly: boolean = false
  isAvailable: boolean = false
  questPrerequisiteId: u16 = 0
}

export class UserItemNFT {
  id: string = ''
  user: string = ''
  tokenId: u16 = 0
  amount: string = ''
  item: Item = new Item()
  selfMade: boolean = false
}

// All the items that a player has made by themselves
export class PlayerSelfMade {
  id: string = ''
  selfMadeIds: u16[] = []
  totalSelfMades: u32 = 0
}

export class ShopItem {
  id: string = ''
  tokenId: u16 = 0
  price: string = '0'
  item: Item = new Item()
}

export class ActionChoiceInput {
  skill: Skill = Skill.NONE
  rate: u16 = 0
  xpPerHour: u32 = 0
  inputTokenIds: u16[] = []
  inputAmounts: u32[] = []
  outputTokenId: u16 = 0
  outputAmount: u8 = 0
  successPercent: u8 = 100
  handItemTokenIdRangeMin: u32 = 0
  handItemTokenIdRangeMax: u32 = 0
  isFullModeOnly: boolean = false
  isAvailable: boolean = true
  questPrerequisiteId: u16 = 0
  skills: Skill[] = [] // Attach other data to the skills, like minXP and a stats change (diff)
  skillMinXPs: u32[] = []
  skillDiffs: i16[] = []
}

export class ActionChoice {
  id: string = ''
  actionId: u16 = 0
  skill: Skill = Skill.NONE
  rate: u16 = 0
  xpPerHour: u32 = 0
  outputTokenId: u16 = 0
  outputAmount: u8 = 1
  successPercent: u8 = 100
  handItemTokenIdRangeMin: u32 = 0
  handItemTokenIdRangeMax: u32 = 0
  inputTokenIds: u16[] = []
  inputAmounts: u16[] = []
  skills: Skill[] = []
  skillMinXPs: string[] = []
  skillDiffs: i16[] = []
  isFullModeOnly: boolean = false
  isAvailable: boolean = true
  questPrerequisiteId: u16 = 0
}

export class Action {
  id: string = ''
  actionId: u16 = 0
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
  actionChoiceRequired: boolean = false
  successPercent: i8 = 100
  worldLocation: WorldLocation = WorldLocation.STARTING_AREA
  isFullModeOnly: boolean = false
  questPrerequisiteId: u16 = 0

  /* Combat Stats */
  meleeAttack: i16 = 0
  magicAttack: i16 = 0
  rangedAttack: i16 = 0
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
  evolvedPlayersActive: i32 = 0
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
  skillXPGained: u32 = 0 // The amount of XP to give (up to 16 million)
  rewardItem1: Item = new Item() // Reward an item
  rewardAmount1: u16 = 0 // amount of the reward (up to 65535)
  rewardItem2: Item = new Item() // Reward another item
  rewardAmount2: u16 = 0 // amount of the reward (up to 65535)
  burnItem: Item = new Item() // Burn an item
  burnAmount: u16 = 0 // amount of the burn (up to 65535)
  isFullModeOnly: bool = false // Whether this quest can only be completed in full mode
  worldLocation: WorldLocation = WorldLocation.STARTING_AREA // Where this quest can be completed

  isActive: boolean = false
  isFixed: boolean = false
  createdTimestamp: string = ''

  minRequirementSkills: Skill[] = [] // Minimum requirements in these skills
  minRequirementXPs: string[] = [] // Minimum requirements in these skills
}

export class QuestSimplified {
  id: string = '' // quest id
  questId: u32 = 0 // quest id
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

export class PlayerQuestSimplified {
  id: string = '' // playerId_questId
  quest: QuestSimplified = new QuestSimplified()
}

export class ClanTier {
  id: string = ''
  maxMemberCapacity: u32 = 0
  maxBankCapacity: u32 = 0
  maxImageId: u32 = 0
  price: string = '0'
  minimumAge: string = '0'
}

class ClanShared {
  id: string = ''
  clanId: string = ''
  name: string = ''
  lowercaseName: string = ''
  imageId: u16 = 0
  tier: ClanTier = new ClanTier()
  createdTimestamp: string = ''
  memberCount: u32 = 0
  bankAddress: string = ''
  totalLevel: u16 = 0
  combinedRank: u64 = 0

  gateKeepNFTs: string[] = []

  boostStartTime: u64 = 0
  boostDuration: u32 = 0
  boostVal: u8 = 0
  boostType: BoostType
  boostItemTokenId: u16 = 0

  totalDonated: string = '0'
  lastDonationThreshold: string = '0'
  nextDonationThresholdRewardItemTokenId: u16 = 0

  bankBrushValue: string = '0'
  totalWins: string = '0'
  totalLosses: string = '0'

  lockedVaultCombatantsLength: u32 = 0
  blockingLockedVaultAttacksTimestamp: string = '0'
  lockedVaults: LockedBankVault[] = []
  mmr: u16 = 0
  xp: string = '0'
}

export class Clan extends ClanShared {
  owner: Player = new Player()
  discord: string | null = ''
  twitter: string | null = ''
  telegram: string | null = ''
  joinRequestsEnabled: boolean = false

  lastDonationTimestamp: u64 = 0
  pinnedMessage: string = ''
  pinnedMessagePlayer: PlayerSimplified = new PlayerSimplified()
  pinnedMessageTimestamp: string = ''

  // Clan wars related
  territoryCombatants: PlayerSimplified[] = []
  territoryCombatantsLength: u32 = 0
  territoryCombatantCooldownTimestamp: string = ''
  territoryAttackCooldownTimestamp: string = ''
  ongoingTerritoryCombat: bool = false
  blockingTerritoryAttacksTimestamp: string = '0'
  blockingTerritoryAttacksCooldownTimestamp: string = '0'
  lockedVaultCombatants: PlayerSimplified[] = []
  lockedVaultCombatantCooldownTimestamp: string = ''
  lockedVaultAttackCooldownTimestamp: string = ''
  lockedVaultSuperAttackCooldownTimestamp: string = ''
  ongoingLockedVaultCombat: bool = false
  territoryWins: string = '0'
  territoryLosses: string = '0'
  lockedVaultWins: string = '0'
  lockedVaultLosses: string = '0'
  brushLocked: string = '0'
  brushLockedMinusUnclaimed: string = '0'
  brushUnclaimed: string = '0'
  totalBrushLockedFromTerritory: string = '0'
  totalBrushLockedFromVaults: string = '0'
  totalBrushLocked: string = '0'
  totalBrushLost: string = '0'
  totalBrushClaimed: string = '0'

  brushAvailable: string = '0'
}

export class ClanSimplified extends ClanShared {}

export class ClanMember {
  id: string = '' // playerId
  player: PlayerSimplified = new PlayerSimplified()
  clan: ClanSimplified = new ClanSimplified()
  requestedClan: ClanSimplified = new ClanSimplified()
  requestedClanTimestamp: string = ''
  rank: ClanRank = ClanRank.NONE
  joinedTimestamp: string = ''
  // Only applies to the current clan, and gets reset when leaving the clan
  totalDonated: string = '0'
}

export class ClanInvite {
  id: string = '' // playerId_clanId
  member: ClanMember = new ClanMember()
  clan: ClanSimplified = new ClanSimplified()
  invitedBy: ClanMember = new ClanMember()
  invitedTimestamp: string = ''
}

export enum ClanRank {
  NONE, // Not in a clan
  COMMONER, // Member of the clan
  SCOUT, // Invite and kick commoners
  COLONEL, // Can launch attacks and assign combatants
  TREASURER, // Can withdraw from bank
  LEADER, // Can edit clan details
  OWNER, // Can do everything and transfer ownership
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

export class DonationSimplified {
  id: string = '' // user or player id
  user: string | null = null
  player: PlayerSimplified | null = new PlayerSimplified()
  amount: string = '0'
  lastDonatedAmount: string = '0'
  lastUpdatedTimestamp: string = ''
  donationAmountRank: string = ''
}

export class Lottery {
  id: string = '' // lotteryId
  raffleIdWinner: string = '' // 0 means no winner yet
  hasClaimed: bool = false
  rewardItemTokenId: u16 = 0
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
  minItemQuantityBeforeSellsAllowed: string = '0'
  alphaCombatHealing: string = '8'

  // Global Donations
  lastGlobalDonationThreshold: string = '0'
  globalDonationThresholdRewardIncrement: string = '0'
  nextGlobalDonationThresholdRewardItemTokenId: u16 = 0
  // Clan donations
  clanDonationThresholdRewardIncrement: string = '0'
  startClanDonationThresholdRewardItemTokenId: u16 = 0

  // Donations
  raffleEntryCost: string = '0'
  numUsersDonated: string = '0'
  numPlayersDonated: string = '0'
  totalDonatedAmount: string = '0'
  numDonations: string = '0'

  // Global boost
  globalBoostStartTime: string = '0'
  globalBoostDuration: u32 = 0
  globalBoostVal: u8 = 0
  globalBoostType: BoostType = BoostType.NONE
  globalBoostItemTokenId: u16 = 0

  // Clan wars
  nextHarvestAllowedTimestamp: string = '0'
  expectedGasLimitFulfillTerritory: string = '0'
  expectedGasLimitFulfillLockedVault: string = '0'
  initialMMR: u16 = 0
  mmrAttackDistance: u8 = 0
  ka: u8 = 0
  kd: u8 = 0
  lockedBankVaultBurntPercentage: string = '0'
  lockedBankVaultTreasuryPercentage: string = '0'
  lockedBankVaultDevPercentage: string = '0'

  // Instant VRF actions
  gasCostPerUnitInstantVRFAction: string = '0'

  // Generic VRF
  baseRequestCost: string = '0'
  movingAverageGasPrice: string = '0'

  // Shop
  shopBurntPercentage: string = '0'
  shopTreasuryPercentage: string = '0'
  shopDevPercentage: string = '0'
  shopPromotionDiscountPercentage: string = '0'
  shopIsPromotionActive: boolean = false

  // Pets
  petEditNameCost: string = '0'
  petBurntPercentage: string = '0'
  petTreasuryPercentage: string = '0'
  petDevPercentage: string = '0'
  totalPets: string = '0'
  lastMintedPet: Pet = new Pet()

  // Promotions
  promotionBurntPercentage: string = '0'
  promotionTreasuryPercentage: string = '0'
  promotionDevPercentage: string = '0'

  // Players
  totalPlayers: string = '0'
  totalAvatars: string[] = []
  totalUpgradedAvatars: string[] = []
  lastMintedPlayer: Player = new Player()
  lastQueuedActionPlayer: Player = new Player()
  lastQueuedActions: string[] = []
  lastQueuedActionTimestamp: string = '0'
  lastQueuedPassiveActionPlayer: Player = new Player()
  lastQueuedPassiveAction: QueuedPassiveAction = new QueuedPassiveAction()
  lastQueuedInstantActionPlayer: Player = new Player()
  lastQueuedInstantAction: QueuedInstantAction = new QueuedInstantAction()
  lastQueuedInstantVRFActionPlayer: Player = new Player()
  lastQueuedInstantVRFAction: QueuedInstantVRFAction = new QueuedInstantVRFAction()
  lastHarvestPlayer: Player = new Player()
  lastHarvestTimestamp: string = '0'
  numActivities: string = '0'
  playerBurntPercentage: string = '0'
  playerTreasuryPercentage: string = '0'
  playerDevPercentage: string = '0'
  maxId: string = '0'
  playerLeftCombatantCooldownTimestampPenalty: string = '0'

  // Clans
  totalClans: string = '0'
  totalClanMembers: string = '0'
  totalTerritoryBattles: string = '0'
  totalLockedVaultBattles: string = '0'
  clanBurntPercentage: string = '0'
  clanTreasuryPercentage: string = '0'
  clanDevPercentage: string = '0'

  // Users
  totalUsers: string = '0'
  shopTotalSold: string = '0'
  shopTotalBought: string = '0'
  totalBrushBurned: string = '0'
  numActivitiesUsers: string = '0'
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
  isFullMode: boolean = false
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
  HALLOWEEN_2023,
  XMAS_2023,
  HALLOWEEN_2024,
  SONIC_TICKET_2025,
}

export class PromotionInfo {
  id: string = '' // promotionId
  promotionId: u16 = 0
  startTime: u64 = 0
  endTime: u64 = 0
  isMultiday: boolean = false
  minTotalXP: string = '0'
  adminOnly: boolean = false
  brushCost: string = '0'
  evolvedHeroOnly: boolean = false
  brushCostMissedDay: string = '0'
  numDaysHitNeededForStreakBonus: u16 = 0
  numDaysClaimablePeriodStreakBonus: u16 = 0
  questPrerequisiteId: u16 = 0
}

export class PlayerPromotion {
  id: string = '' // playerId_promotionId
  playerId: string = ''
  promotionId: u16 = 0
  itemTokenIds: u16[] = []
  amounts: string[] = []
  days: u16[] = []
}

export enum PromotionMintStatus {
  NONE,
  SUCCESS,
  PROMOTION_ALREADY_CLAIMED,
  ORACLE_NOT_CALLED,
  MINTING_OUTSIDE_AVAILABLE_DATE,
  PLAYER_DOES_NOT_QUALIFY,
  PLAYER_NOT_HIT_ENOUGH_CLAIMS_FOR_STREAK_BONUS,
  DEPENDENT_QUEST_NOT_COMPLETED,
}

// Clan Wars
export class Territory {
  id: string = '' // territoryId
  territoryId: u16 = 0
  percentageEmissions: u16 = 0
  clanOccupier: Clan | null = null
  unclaimedEmissions: string = '0'
  nextHarvestAllowedTimestamp: string = '0'
  minMMR: u16 = 0
}

export enum ClanBattleType {
  TERRITORY,
  LOCKED_VAULT,
}

export enum BattleResult {
  DRAW,
  WIN,
  LOSE,
}

export class ClanBattleShared {
  id: string = '' // [t | b]<requestId>
  requestId: string = '0'
  attackingPlayerIds: string[] = []
  defendingPlayerIds: string[] = []
  attackingRolls: u32[] = []
  defendingRolls: u32[] = []
  battleResults: BattleResult[] = []
  didAttackersWin: boolean = false
  attackingMMRDiff: i16 = 0
  defendingMMRDiff: i16 = 0
  attackingTimestamp: string = '0'
  ongoing: boolean = false
  type: ClanBattleType = ClanBattleType.TERRITORY
  brushWon: string = '0'
}

export class ClanBattle extends ClanBattleShared {
  attackingPlayers: string[] = []
  defendingPlayers: string[] = []
  randomSkills: Skill[] = []
  attackingClan: Clan | null = null
  defendingClan: Clan | null = null
  randomWords: string[] = []
  territory: Territory = new Territory() // Only used for territory battles
  item: Item = new Item()
  oracleFailed: boolean = false
  oracleHash: string = ''
}

export class ClanBattleSimplified extends ClanBattleShared {
  attackingClan: ClanSimplified = new ClanSimplified()
  defendingClan: ClanSimplified = new ClanSimplified()
}

export class LockedBankVaultClanBattlePair {
  id: string = '' // <clanId>_<otherId>
  attackingClan: Clan = new Clan()
  defendingClan: Clan = new Clan()
  attackingCooldownTimestamp: string = '0'
  reattacksMadeWithinTimestamp: string = '0'
}

export class LockedBankVault {
  id: string = '' // vaultId
  vaultId: u16 = 0
  clanId: string = '0'
  amount: string = '0'
  unlockTimestamp: string = '0'
}

/// ERC1155 Orderbook
export class PriceLevel {
  id: string = '' // nftAddress_tokenId_price
  nftAddress: string = ''
  tokenId: u16 = 0
  price: string = '0'
  totalAmount: string = '0'
  totalOrders: string = '0'
  isBuyOrder: boolean = false
}

export class Order {
  id: string = '' // nftAddress_orderId
  orderId: u64 = 0
  nftAddress: string = ''
  tokenId: string = '0'
  amount: string = '0'
  amountRemaining: string = '0'
  price: string = '0'
  isBuyOrder: boolean = false
  maker: string = ''
  claimable: boolean = false // Has any been taken from the order that is still unclaimed?
  tokenAmountClaimable: string = '0' // Brush amount that is still unclaimed
  nftAmountClaimable: string = '0' // NFT amount that is still unclaimed
  timestamp: string = '0'
  blockNumber: string = '0'
  hash: string = '' // transaction hash when this order was created
  lastTradedTimestamp: string = '0'
  lastTradedBlockNumber: string = '0'
}

// Api output of orders
export class OrderData extends MetaBase {
  orders: Order[] = []
}

export class TokenInfo {
  id: string = '' // nftAddress_tokenId
  nftAddress: string = ''
  tokenId: string = '0'
  tick: string = '0'
  minQuantity: string = '0'
  lastTradedPrice: string = '0'
  lastTradedQuantity: string = '0'
  lastTradedTimestamp: string = '0'
  lastTradedWasBuy: boolean = false
}

export class TokenIdInfo {
  tokenId: u16 = 0
  tick: string = '0'
  minQuantity: string = '0'
}

export class FailedOrder {
  id: string = ''
  orderId: u64 = 0
  nftAddress: string = ''
  tokenId: string = '0'
  amount: string = '0'
  price: string = '0'
  isBuyOrder: boolean = false
  maker: string = ''
  timestamp: string = '0'
  blockNumber: string = '0'
}

export class LimitOrder {
  side: OrderSide = OrderSide.BUY
  tokenId: string = '0'
  price: string = '0'
  quantity: string = '0'
}

export class CancelOrder {
  side: OrderSide = OrderSide.BUY
  tokenId: string = '0'
  price: string = '0'
}

export enum OrderSide {
  BUY,
  SELL,
}

export class SaleHistory {
  id: string = ''
  nftAddress: string = ''
  tokenId: string = '0'
  amount: string = '0'
  price: string = '0'
  maker: string = ''
  taker: string = ''
  timestamp: string = '0'
  blockNumber: string = '0'
  isBuyOrder: boolean = false
  hash: string = ''
}

export class OrderBookDayData {
  id: string = ''
  tokenId: string = '0'
  date: string = ''
  averagePrice: string = '0'
}

// Pets
export enum PetSkin {
  NONE,
  DEFAULT,
  OG,
  ONEKIN,
  FROST,
  CRYSTAL,
  ANNIV1,
  KRAGSTYR,
  ANNIV2,
}

export enum PetEnhancementType {
  NONE,
  MELEE,
  MAGIC,
  RANGED,
  DEFENCE,
  HEALTH,
  MELEE_AND_DEFENCE,
  MAGIC_AND_DEFENCE,
  RANGED_AND_DEFENCE,
}

export class BasePetInput {
  description: string = ''
  tier: u8 = 0
  skin: PetSkin = PetSkin.NONE
  enhancementType: PetEnhancementType = PetEnhancementType.NONE
  baseId: u32 = 0
  skillEnhancements: StaticArray<Skill> = [Skill.NONE, Skill.NONE]
  skillFixedMins: StaticArray<u8> = [0, 0]
  skillFixedMaxs: StaticArray<u8> = [0, 0]
  skillFixedIncrements: StaticArray<u8> = [0, 0]
  skillPercentageMins: StaticArray<u8> = [0, 0]
  skillPercentageMaxs: StaticArray<u8> = [0, 0]
  skillPercentageIncrements: StaticArray<u8> = [0, 0]
  skillMinLevels: StaticArray<u8> = [0, 0]
  fixedStarThreshold: u16 = 0
  percentageStarThreshold: u16 = 0
  isTransferable: boolean = false
}

export class BasePet {
  id: string = '' // baseId
  baseId: string = '0'
  description: string = ''
  tier: u8 = 0
  skin: PetSkin = PetSkin.NONE
  enhancementType: PetEnhancementType = PetEnhancementType.NONE
  skillEnhancements: Skill[] = []
  skillMinLevels: u8[] = []
  fixedStarThreshold: u16 = 0
  percentageStarThreshold: u16 = 0
}

export class Pet {
  id: string = '' // tokenId
  tokenId: string = '0'
  basePet: BasePet = new BasePet()
  owner: string = ''
  name: string = ''
  lowercaseName: string = ''
  skillFixedEnhancements: u8[] = []
  skillPercentageEnhancements: u8[] = []
  skillFixedEnhancementMaxes: u8[] = []
  skillPercentageEnhancementMaxes: u8[] = []
  timestamp: string = '0'
  xp: string = '0'
  isTransferable: boolean = true
}

export enum NFTContractType {
  NONE,
  ERC721,
  ERC1155,
}

export class BaseRaid {
  id: string = '' // baseRaidId
  baseRaidId: string = '0'
  tier: u8 = 0
  minHealth: i16 = 0
  maxHealth: i16 = 0
  minMeleeAttack: i16 = 0
  maxMeleeAttack: i16 = 0
  minMagicAttack: i16 = 0
  maxMagicAttack: i16 = 0
  minRangedAttack: i16 = 0
  maxRangedAttack: i16 = 0
  minMeleeDefence: i16 = 0
  maxMeleeDefence: i16 = 0
  minMagicDefence: i16 = 0
  maxMagicDefence: i16 = 0
  minRangedDefence: i16 = 0
  maxRangedDefence: i16 = 0
  randomLootTokenIds: u16[] = []
  randomLootTokenAmounts: u32[] = []
  randomChances: u16[] = []
}

export class Raid {
  id: string = '' // raidId
  raidId: string = '0'
  baseRaid: BaseRaid = new BaseRaid()
  health: i16 = 0
  meleeAttack: i16 = 0
  magicAttack: i16 = 0
  rangedAttack: i16 = 0
  meleeDefence: i16 = 0
  magicDefence: i16 = 0
  rangedDefence: i16 = 0
  tier: u8 = 0
  combatActionIds: u16[] = []
}

export const emptyCombatStats = new CombatStats()
export const defaultItemInput = new ItemInput()
export const defaultActionChoice = new ActionChoiceInput()
export const defaultActionInfo = new ActionInfo()
export const defaultPassiveActionInput = new PassiveActionInput()
export const defaultInstantActionInput = new InstantActionInput()
export const defaultInstantVRFActionInput = new InstantVRFActionInput()
export const noAttire = new Attire()
export const defaultAttire = new Attire()
export const defaultRaid = new BaseRaid()
