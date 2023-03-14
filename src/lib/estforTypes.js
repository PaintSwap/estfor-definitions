"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XPThresholdReward = exports.PendingFlags = exports.PendingOutput = exports.noAttire = exports.defaultInputItem = exports.emptyNonCombatStats = exports.emptyCombatStats = exports.NonCombatStats = exports.CombatStats = exports.InputItem = exports.Action = exports.ActionReward = exports.ActionInfo = exports.QueuedAction = exports.Equipment = exports.CombatStyle = exports.ActionQueueStatus = exports.Attire = exports.EquipPosition = exports.Skill = exports.BoostType = void 0;
var BoostType;
(function (BoostType) {
    BoostType[BoostType["NONE"] = 0] = "NONE";
    BoostType[BoostType["ANY_XP"] = 1] = "ANY_XP";
    BoostType[BoostType["COMBAT_XP"] = 2] = "COMBAT_XP";
    BoostType[BoostType["NON_COMBAT_XP"] = 3] = "NON_COMBAT_XP";
    BoostType[BoostType["GATHERING"] = 4] = "GATHERING";
    BoostType[BoostType["ABSENCE"] = 5] = "ABSENCE";
})(BoostType = exports.BoostType || (exports.BoostType = {}));
var Skill;
(function (Skill) {
    Skill[Skill["NONE"] = 0] = "NONE";
    Skill[Skill["COMBAT"] = 1] = "COMBAT";
    Skill[Skill["ATTACK"] = 2] = "ATTACK";
    Skill[Skill["RANGE"] = 3] = "RANGE";
    Skill[Skill["MAGIC"] = 4] = "MAGIC";
    Skill[Skill["DEFENCE"] = 5] = "DEFENCE";
    Skill[Skill["HEALTH"] = 6] = "HEALTH";
    Skill[Skill["MINING"] = 7] = "MINING";
    Skill[Skill["WOODCUTTING"] = 8] = "WOODCUTTING";
    Skill[Skill["FISHING"] = 9] = "FISHING";
    Skill[Skill["SMITHING"] = 10] = "SMITHING";
    Skill[Skill["THIEVING"] = 11] = "THIEVING";
    Skill[Skill["CRAFTING"] = 12] = "CRAFTING";
    Skill[Skill["COOKING"] = 13] = "COOKING";
    Skill[Skill["FIREMAKING"] = 14] = "FIREMAKING";
})(Skill = exports.Skill || (exports.Skill = {}));
var EquipPosition;
(function (EquipPosition) {
    EquipPosition[EquipPosition["NONE"] = 0] = "NONE";
    EquipPosition[EquipPosition["HEAD"] = 1] = "HEAD";
    EquipPosition[EquipPosition["NECK"] = 2] = "NECK";
    EquipPosition[EquipPosition["BODY"] = 3] = "BODY";
    EquipPosition[EquipPosition["ARMS"] = 4] = "ARMS";
    EquipPosition[EquipPosition["LEGS"] = 5] = "LEGS";
    EquipPosition[EquipPosition["BOOTS"] = 6] = "BOOTS";
    EquipPosition[EquipPosition["SPARE1"] = 7] = "SPARE1";
    EquipPosition[EquipPosition["SPARE2"] = 8] = "SPARE2";
    EquipPosition[EquipPosition["LEFT_HAND"] = 9] = "LEFT_HAND";
    EquipPosition[EquipPosition["RIGHT_HAND"] = 10] = "RIGHT_HAND";
    EquipPosition[EquipPosition["BOTH_HANDS"] = 11] = "BOTH_HANDS";
    EquipPosition[EquipPosition["ARROW_SATCHEL"] = 12] = "ARROW_SATCHEL";
    EquipPosition[EquipPosition["MAGIC_BAG"] = 13] = "MAGIC_BAG";
    EquipPosition[EquipPosition["FOOD"] = 14] = "FOOD";
    EquipPosition[EquipPosition["AUX"] = 15] = "AUX";
    EquipPosition[EquipPosition["BOOST_VIAL"] = 16] = "BOOST_VIAL";
    EquipPosition[EquipPosition["NO_POSITION"] = 17] = "NO_POSITION";
})(EquipPosition = exports.EquipPosition || (exports.EquipPosition = {}));
class Attire {
    helmet = 0;
    amulet = 0;
    armor = 0;
    gauntlets = 0;
    tassets = 0;
    boots = 0;
    ring = 0;
    reserved1 = 0;
    queueId = 0;
}
exports.Attire = Attire;
var ActionQueueStatus;
(function (ActionQueueStatus) {
    ActionQueueStatus[ActionQueueStatus["NONE"] = 0] = "NONE";
    ActionQueueStatus[ActionQueueStatus["APPEND"] = 1] = "APPEND";
    ActionQueueStatus[ActionQueueStatus["KEEP_LAST_IN_PROGRESS"] = 2] = "KEEP_LAST_IN_PROGRESS";
})(ActionQueueStatus = exports.ActionQueueStatus || (exports.ActionQueueStatus = {}));
var CombatStyle;
(function (CombatStyle) {
    CombatStyle[CombatStyle["NONE"] = 0] = "NONE";
    CombatStyle[CombatStyle["MELEE"] = 1] = "MELEE";
    CombatStyle[CombatStyle["RANGE"] = 2] = "RANGE";
    CombatStyle[CombatStyle["MAGIC"] = 3] = "MAGIC";
    CombatStyle[CombatStyle["MELEE_DEFENCE"] = 4] = "MELEE_DEFENCE";
    CombatStyle[CombatStyle["RANGE_DEFENCE"] = 5] = "RANGE_DEFENCE";
    CombatStyle[CombatStyle["MAGIC_DEFENCE"] = 6] = "MAGIC_DEFENCE";
})(CombatStyle = exports.CombatStyle || (exports.CombatStyle = {}));
class Equipment {
    itemTokenId = 0;
    amount = 0;
}
exports.Equipment = Equipment;
class QueuedAction {
    attire = new Attire();
    actionId = 0;
    regenerateId = 0; // Food (combat), maybe something for non-combat later
    choiceId = 0; // Melee/Arrow/Magic (combat), logs, ore (non-combat)
    choiceId1 = 0; // Reserved (TBD)
    choiceId2 = 0; // Reserved (TBD)
    combatStyle = CombatStyle.NONE;
    timespan = 0; // How long to queue the action for
    rightHandEquipmentTokenId = 0;
    leftHandEquipmentTokenId = 0;
    startTime = '0'; // Filled in by the smart contract, can be "0"
    isValid = true; // If we still have the item, TODO: Not used yet
}
exports.QueuedAction = QueuedAction;
class ActionInfo {
    skill = Skill.NONE;
    isAvailable = true;
    isDynamic = false;
    actionChoiceRequired = false;
    xpPerHour = 0;
    numSpawn = 0;
    minSkillPoints = 0;
    handItemTokenIdRangeMin = 0;
    handItemTokenIdRangeMax = 0;
}
exports.ActionInfo = ActionInfo;
class ActionReward {
    itemTokenId = 0;
    rate = 0; // base 100, 2 decimal places
}
exports.ActionReward = ActionReward;
class Action {
    actionId = 0;
    info = new ActionInfo();
    guaranteedRewards = [];
    randomRewards = [];
    combatStats = new CombatStats();
}
exports.Action = Action;
// Contains everything you need to create an item
class InputItem {
    combatStats = new CombatStats();
    nonCombatStats = new NonCombatStats();
    tokenId = 0;
    equipPosition = EquipPosition.NONE;
    // Can this be transferred to another player?
    isTransferable = true;
    // Minimum requirements in this skill
    skill = Skill.NONE;
    minSkillPoints = 0;
    // Food
    healthRestored = 0;
    // Boost
    boostType = BoostType.NONE;
    boostValue = 0; // Varies, could be the % increase
    boostDuration = 0; // How long the effect of the boost last
    // uri
    metadataURI = '';
}
exports.InputItem = InputItem;
class CombatStats {
    melee = 0;
    magic = 0;
    range = 0;
    meleeDefence = 0;
    magicDefence = 0;
    rangeDefence = 0;
    health = 0;
}
exports.CombatStats = CombatStats;
class NonCombatStats {
    skill = Skill.NONE;
    diff = 0;
}
exports.NonCombatStats = NonCombatStats;
exports.emptyCombatStats = new CombatStats();
exports.emptyNonCombatStats = new NonCombatStats();
exports.defaultInputItem = new InputItem();
exports.noAttire = new Attire();
class PendingOutput {
    consumed = [];
    produced = [];
    producedPastRandomRewards = [];
    producedXPRewards = [];
    died = false;
}
exports.PendingOutput = PendingOutput;
class PendingFlags {
    includeLoot = true; // Guaranteed loot from actions, and random loot if claiming quite late
    includePastRandomRewards = true; // This is random loot from previous actions
    includeXPRewards = true; // Passing any xp thresholds gives you extra rewards
}
exports.PendingFlags = PendingFlags;
class XPThresholdReward {
    xpThreshold = 0;
    equipments = [];
}
exports.XPThresholdReward = XPThresholdReward;
