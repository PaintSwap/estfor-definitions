import adminSnapshotAddresses from './whitelisted_admins'
import betaSnapshotAddresses from './whitelisted_beta_snapshot'

export const whitelistedAdmins = adminSnapshotAddresses
export const whitelistedSnapshot = betaSnapshotAddresses

export const NONE = 0
// 1 - 255 (head)
export const HEAD_BASE = 1
export const BRONZE_HELMET = HEAD_BASE
export const IRON_HELMET = HEAD_BASE + 1
export const MITHRIL_HELMET = HEAD_BASE + 2
export const ADAMANTINE_HELMET = HEAD_BASE + 3
export const RUNITE_HELMET = HEAD_BASE + 4
export const TITANIUM_HELMET = HEAD_BASE + 5
export const ORICHALCUM_HELMET = HEAD_BASE + 6
export const NATUOW_HOOD = HEAD_BASE + 7
export const BAT_WING_HAT = HEAD_BASE + 8
export const NATURE_MASK = HEAD_BASE + 9
export const APPRENTICE_HAT = HEAD_BASE + 10
export const MAGE_HOOD = HEAD_BASE + 11
export const SORCERER_HAT = HEAD_BASE + 12
export const SEERS_HOOD = HEAD_BASE + 13
export const SHAMAN_HOOD = HEAD_BASE + 14
export const MASTER_HAT = HEAD_BASE + 15
export const HEAD_MAX = HEAD_BASE + 254 // Inclusive
// 257 - 511 (neck)
export const NECK_BASE = 257
export const SAPPHIRE_AMULET = NECK_BASE
export const EMERALD_AMULET = NECK_BASE + 1
export const RUBY_AMULET = NECK_BASE + 2
export const AMETHYST_AMULET = NECK_BASE + 3
export const DIAMOND_AMULET = NECK_BASE + 4
export const DRAGONSTONE_AMULET = NECK_BASE + 5
export const NECK_MAX = NECK_BASE + 254

// 513 - 767 (body)
export const BODY_BASE = 513
export const BRONZE_ARMOR = BODY_BASE
export const IRON_ARMOR = BODY_BASE + 1
export const MITHRIL_ARMOR = BODY_BASE + 2
export const ADAMANTINE_ARMOR = BODY_BASE + 3
export const RUNITE_ARMOR = BODY_BASE + 4
export const TITANIUM_ARMOR = BODY_BASE + 5
export const ORICHALCUM_ARMOR = BODY_BASE + 6
export const NATUOW_BODY = BODY_BASE + 7
export const BAT_WING_BODY = BODY_BASE + 8
export const NATURE_BODY = BODY_BASE + 9
export const APPRENTICE_BODY = BODY_BASE + 10
export const MAGE_BODY = BODY_BASE + 11
export const SORCERER_BODY = BODY_BASE + 12
export const SEERS_BODY = BODY_BASE + 13
export const SHAMAN_BODY = BODY_BASE + 14
export const MASTER_BODY = BODY_BASE + 15
export const BODY_MAX = BODY_BASE + 254
// 769 - 1023 (arms)
export const ARMS_BASE = 769
export const BRONZE_GAUNTLETS = ARMS_BASE
export const IRON_GAUNTLETS = ARMS_BASE + 1
export const MITHRIL_GAUNTLETS = ARMS_BASE + 2
export const ADAMANTINE_GAUNTLETS = ARMS_BASE + 3
export const RUNITE_GAUNTLETS = ARMS_BASE + 4
export const TITANIUM_GAUNTLETS = ARMS_BASE + 5
export const ORICHALCUM_GAUNTLETS = ARMS_BASE + 6
export const NATUOW_BRACERS = ARMS_BASE + 7
export const BAT_WING_BRACERS = ARMS_BASE + 8
export const NATURE_BRACERS = ARMS_BASE + 9
export const APPRENTICE_GAUNTLETS = ARMS_BASE + 10
export const MAGE_BRACERS = ARMS_BASE + 11
export const SORCERER_GAUNTLETS = ARMS_BASE + 12
export const SEERS_BRACERS = ARMS_BASE + 13
export const SHAMAN_GAUNTLETS = ARMS_BASE + 14
export const MASTER_BRACERS = ARMS_BASE + 15
export const ARMS_MAX = ARMS_BASE + 254
// 1025 - 1279 (legs)
export const LEGS_BASE = 1025
export const BRONZE_TASSETS = LEGS_BASE
export const IRON_TASSETS = LEGS_BASE + 1
export const MITHRIL_TASSETS = LEGS_BASE + 2
export const ADAMANTINE_TASSETS = LEGS_BASE + 3
export const RUNITE_TASSETS = LEGS_BASE + 4
export const TITANIUM_TASSETS = LEGS_BASE + 5
export const ORICHALCUM_TASSETS = LEGS_BASE + 6
export const NATUOW_TASSETS = LEGS_BASE + 7
export const BAT_WING_TROUSERS = LEGS_BASE + 8
export const NATURE_TROUSERS = LEGS_BASE + 9
export const APPRENTICE_TROUSERS = LEGS_BASE + 10
export const MAGE_TROUSERS = LEGS_BASE + 11
export const SORCERER_TROUSERS = LEGS_BASE + 12
export const SEERS_TROUSERS = LEGS_BASE + 13
export const SHAMAN_TROUSERS = LEGS_BASE + 14
export const MASTER_TROUSERS = LEGS_BASE + 15
export const LEGS_MAX = LEGS_BASE + 254

// 1281 - 1535 (feet)
export const FEET_BASE = 1281
export const BRONZE_BOOTS = FEET_BASE
export const IRON_BOOTS = FEET_BASE + 1
export const MITHRIL_BOOTS = FEET_BASE + 2
export const ADAMANTINE_BOOTS = FEET_BASE + 3
export const RUNITE_BOOTS = FEET_BASE + 4
export const TITANIUM_BOOTS = FEET_BASE + 5
export const ORICHALCUM_BOOTS = FEET_BASE + 6
export const NATUOW_BOOTS = FEET_BASE + 7
export const BAT_WING_BOOTS = FEET_BASE + 8
export const NATURE_BOOTS = FEET_BASE + 9
export const APPRENTICE_BOOTS = FEET_BASE + 10
export const MAGE_BOOTS = FEET_BASE + 11
export const SORCERER_BOOTS = FEET_BASE + 12
export const SEERS_BOOTS = FEET_BASE + 13
export const SHAMAN_BOOTS = FEET_BASE + 14
export const MASTER_BOOTS = FEET_BASE + 15
export const FEET_MAX = FEET_BASE + 254

// 1536 - 1791 spare(1)
// 1792 - 2047 spare(2)

// Combat (right arm) (2048 - 2303)
export const COMBAT_BASE = 2048
// Melee
export const SWORD_BASE = COMBAT_BASE
export const BRONZE_SWORD = SWORD_BASE
export const IRON_SWORD = COMBAT_BASE + 1
export const MITHRIL_SWORD = COMBAT_BASE + 2
export const ADAMANTINE_SWORD = COMBAT_BASE + 3
export const RUNITE_SWORD = COMBAT_BASE + 4
export const TITANIUM_SWORD = COMBAT_BASE + 5
export const ORICHALCUM_SWORD = COMBAT_BASE + 6
export const SWORD_MAX = SWORD_BASE + 49
// Magic
export const STAFF_BASE = COMBAT_BASE + 50
export const TOTEM_STAFF = STAFF_BASE
export const SAPPHIRE_STAFF = STAFF_BASE + 1
export const EMERALD_STAFF = STAFF_BASE + 2
export const RUBY_STAFF = STAFF_BASE + 3
export const AMETHYST_STAFF = STAFF_BASE + 4
export const DIAMOND_STAFF = STAFF_BASE + 5
export const DRAGONSTONE_STAFF = STAFF_BASE + 6
export const STAFF_MAX = STAFF_BASE + 49
// Ranged
export const BOW_BASE = COMBAT_BASE + 100
export const BOW_MAX = BOW_BASE + 49
// Shields (left arm)
export const SHIELD_BASE = COMBAT_BASE + 150
export const BRONZE_SHIELD = SHIELD_BASE
export const IRON_SHIELD = SHIELD_BASE + 1
export const MITHRIL_SHIELD = SHIELD_BASE + 2
export const ADAMANTINE_SHIELD = SHIELD_BASE + 3
export const RUNITE_SHIELD = SHIELD_BASE + 4
export const TITANIUM_SHIELD = SHIELD_BASE + 5
export const ORICHALCUM_SHIELD = SHIELD_BASE + 6
export const SHIELD_MAX = SHIELD_BASE + 49

export const COMBAT_MAX = COMBAT_BASE + 255

// Mining (2560 - 2815)
export const MINING_BASE = 2560
export const BRONZE_PICKAXE = MINING_BASE
export const IRON_PICKAXE = MINING_BASE + 1
export const MITHRIL_PICKAXE = MINING_BASE + 2
export const ADAMANTINE_PICKAXE = MINING_BASE + 3
export const RUNITE_PICKAXE = MINING_BASE + 4
export const TITANIUM_PICKAXE = MINING_BASE + 5
export const ORICHALCUM_PICKAXE = MINING_BASE + 6
export const MINING_MAX = MINING_BASE + 255

// Woodcutting (2816 - 3071)
export const WOODCUTTING_BASE = 2816
export const BRONZE_AXE = WOODCUTTING_BASE
export const IRON_AXE = WOODCUTTING_BASE + 1
export const MITHRIL_AXE = WOODCUTTING_BASE + 2
export const ADAMANTINE_AXE = WOODCUTTING_BASE + 3
export const RUNITE_AXE = WOODCUTTING_BASE + 4
export const TITANIUM_AXE = WOODCUTTING_BASE + 5
export const ORICHALCUM_AXE = WOODCUTTING_BASE + 6
export const WOODCUTTING_MAX = WOODCUTTING_BASE + 255

// Fishing (3072 - 3327)
export const FISHING_BASE = 3072
export const NET_STICK = FISHING_BASE
export const MEDIUM_NET = FISHING_BASE + 1
export const WOOD_FISHING_ROD = FISHING_BASE + 2
export const TITANIUM_FISHING_ROD = FISHING_BASE + 3
export const HARPOON = FISHING_BASE + 4
export const LARGE_NET = FISHING_BASE + 5
export const MAGIC_NET = FISHING_BASE + 6
export const CAGE = FISHING_BASE + 7
export const FISHING_MAX = FISHING_BASE + 255

// Firemaking (3328 - 3583)
export const FIRE_BASE = 3328
export const MAGIC_FIRE_STARTER = FIRE_BASE
export const FIRE_MAX = FIRE_BASE + 255

// Smithing (none needed)
// Crafting (none needed)
// Cooking (none needed)

// 10000+ it'a all other items

// Bars
export const BAR_BASE = 10240 // (256 * 40)
export const BRONZE_BAR = BAR_BASE
export const IRON_BAR = BAR_BASE + 1
export const MITHRIL_BAR = BAR_BASE + 2
export const ADAMANTINE_BAR = BAR_BASE + 3
export const RUNITE_BAR = BAR_BASE + 4
export const TITANIUM_BAR = BAR_BASE + 5
export const ORICHALCUM_BAR = BAR_BASE + 6
export const BAR_MAX = BAR_BASE + 255

// Logs
export const LOG_BASE = 10496
export const LOG = LOG_BASE
export const OAK_LOG = LOG_BASE + 1
export const WILLOW_LOG = LOG_BASE + 2
export const MAPLE_LOG = LOG_BASE + 3
export const REDWOOD_LOG = LOG_BASE + 4
export const MAGICAL_LOG = LOG_BASE + 5
export const ASH_LOG = LOG_BASE + 6
export const ENCHANTED_LOG = LOG_BASE + 7
export const LIVING_LOG = LOG_BASE + 8
export const LOG_MAX = LOG_BASE + 255

// Fish
export const RAW_FISH_BASE = 10752
export const RAW_MINNUS = RAW_FISH_BASE
export const RAW_BLEKK = RAW_FISH_BASE + 1
export const RAW_SKRIMP = RAW_FISH_BASE + 2
export const RAW_FEOLA = RAW_FISH_BASE + 3
export const RAW_ANCHO = RAW_FISH_BASE + 4
export const RAW_TROUT = RAW_FISH_BASE + 5
export const RAW_ROJJA = RAW_FISH_BASE + 6
export const RAW_BOWFISH = RAW_FISH_BASE + 7
export const RAW_GOLDFISH = RAW_FISH_BASE + 8
export const RAW_MYSTY_BLUE = RAW_FISH_BASE + 9
export const RAW_FLITFISH = RAW_FISH_BASE + 10
export const RAW_RAZORFISH = RAW_FISH_BASE + 11
export const RAW_QUAFFER = RAW_FISH_BASE + 12
export const RAW_ROXA = RAW_FISH_BASE + 13
export const RAW_AZACUDDA = RAW_FISH_BASE + 14
export const RAW_STONECLAW = RAW_FISH_BASE + 15
export const RAW_CRUSKAN = RAW_FISH_BASE + 16
export const RAW_CHODFISH = RAW_FISH_BASE + 17
export const RAW_DOUBTFISH = RAW_FISH_BASE + 18
export const RAW_ROSEFIN = RAW_FISH_BASE + 19
export const RAW_SPHINX_FISH = RAW_FISH_BASE + 20
export const RAW_SHAW = RAW_FISH_BASE + 21
export const RAW_VANISHING_PERCH = RAW_FISH_BASE + 22
export const RAW_VIPER_BASS = RAW_FISH_BASE + 23
export const RAW_WATER_SERPENT = RAW_FISH_BASE + 24
export const RAW_WHISKFIN = RAW_FISH_BASE + 25
export const RAW_MHARA = RAW_FISH_BASE + 26
export const RAW_GRAN_SQUIN = RAW_FISH_BASE + 27
export const RAW_LANCER = RAW_FISH_BASE + 28
export const RAW_OCTACLE = RAW_FISH_BASE + 29
export const RAW_DRAGONFISH = RAW_FISH_BASE + 30
export const RAW_YERESPATUM = RAW_FISH_BASE + 31
export const RAW_FISH_MAX = RAW_FISH_BASE + 255

// Cooked fish
export const COOKED_FISH_BASE = 11008
export const COOKED_MINNUS = COOKED_FISH_BASE
export const COOKED_BLEKK = COOKED_FISH_BASE + 1
export const COOKED_SKRIMP = COOKED_FISH_BASE + 2
export const COOKED_FEOLA = COOKED_FISH_BASE + 3
export const COOKED_ANCHO = COOKED_FISH_BASE + 4
export const COOKED_TROUT = COOKED_FISH_BASE + 5
export const COOKED_ROJJA = COOKED_FISH_BASE + 6
export const COOKED_BOWFISH = COOKED_FISH_BASE + 7
export const COOKED_GOLDFISH = COOKED_FISH_BASE + 8
export const COOKED_MYSTY_BLUE = COOKED_FISH_BASE + 9
export const COOKED_FLITFISH = COOKED_FISH_BASE + 10
export const COOKED_RAZORFISH = COOKED_FISH_BASE + 11
export const COOKED_QUAFFER = COOKED_FISH_BASE + 12
export const COOKED_ROXA = COOKED_FISH_BASE + 13
export const COOKED_AZACUDDA = COOKED_FISH_BASE + 14
export const COOKED_STONECLAW = COOKED_FISH_BASE + 15
export const COOKED_CRUSKAN = COOKED_FISH_BASE + 16
export const COOKED_CHODFISH = COOKED_FISH_BASE + 17
export const COOKED_DOUBTFISH = COOKED_FISH_BASE + 18
export const COOKED_ROSEFIN = COOKED_FISH_BASE + 19
export const COOKED_SPHINX_FISH = COOKED_FISH_BASE + 20
export const COOKED_SHAW = COOKED_FISH_BASE + 21
export const COOKED_VANISHING_PERCH = COOKED_FISH_BASE + 22
export const COOKED_VIPER_BASS = COOKED_FISH_BASE + 23
export const COOKED_WATER_SERPENT = COOKED_FISH_BASE + 24
export const COOKED_WHISKFIN = COOKED_FISH_BASE + 25
export const COOKED_MHARA = COOKED_FISH_BASE + 26
export const COOKED_GRAN_SQUIN = COOKED_FISH_BASE + 27
export const COOKED_LANCER = COOKED_FISH_BASE + 28
export const COOKED_OCTACLE = COOKED_FISH_BASE + 29
export const COOKED_DRAGONFISH = COOKED_FISH_BASE + 30
export const COOKED_YERESPATUM = COOKED_FISH_BASE + 31
export const COOKED_FISH_MAX = COOKED_FISH_BASE + 255

// Farming
export const FARMING_BASE = 11264
export const BONEMEAL = FARMING_BASE
export const FARMING_MAX = FARMING_BASE + 255

// Mining
export const ORE_BASE = 11520
export const COPPER_ORE = ORE_BASE
export const TIN_ORE = ORE_BASE + 1
export const IRON_ORE = ORE_BASE + 2
export const SAPPHIRE = ORE_BASE + 3
export const COAL_ORE = ORE_BASE + 4
export const EMERALD = ORE_BASE + 5
export const MITHRIL_ORE = ORE_BASE + 6
export const RUBY = ORE_BASE + 7
export const ADAMANTINE_ORE = ORE_BASE + 8
export const AMETHYST = ORE_BASE + 9
export const DIAMOND = ORE_BASE + 10
export const RUNITE_ORE = ORE_BASE + 11
export const DRAGONSTONE = ORE_BASE + 12
export const TITANIUM_ORE = ORE_BASE + 13
export const ORICHALCUM_ORE = ORE_BASE + 14
export const ORE_MAX = ORE_BASE + 255

// Arrows
export const ARROW_BASE = 11776
export const BRONZE_ARROW = ARROW_BASE
export const ARROW_MAX = ARROW_BASE + 255

// Scrolls
export const SCROLL_BASE = 12032
export const SHADOW_SCROLL = SCROLL_BASE
export const NATURE_SCROLL = SCROLL_BASE + 1
export const AQUA_SCROLL = SCROLL_BASE + 2
export const HELL_SCROLL = SCROLL_BASE + 3
export const AIR_SCROLL = SCROLL_BASE + 4
export const BARRAGE_SCROLL = SCROLL_BASE + 5
export const FREEZE_SCROLL = SCROLL_BASE + 6
export const ANCIENT_SCROLL = SCROLL_BASE + 7
export const SCROLL_MAX = SCROLL_BASE + 255

// Eggs
export const EGG_BASE = 12544
export const SECRET_EGG_1 = EGG_BASE
export const SECRET_EGG_2 = EGG_BASE + 1
export const EGG_MAX = 12799

// Boosts
export const BOOST_BASE = 12800
export const COMBAT_BOOST = BOOST_BASE
export const XP_BOOST = BOOST_BASE + 1
export const GATHERING_BOOST = BOOST_BASE + 2
export const SKILL_BOOST = BOOST_BASE + 3
export const ABSENCE_BOOST = BOOST_BASE + 4
export const PRAY_TO_THE_BEARDIE = BOOST_BASE + 5
export const GO_OUTSIDE = BOOST_BASE + 6
export const RAINING_RARES = BOOST_BASE + 7
export const BOOST_MAX = 13055

// MISC
export const MISC_BASE = 65535
export const MYSTERY_BOX = MISC_BASE
export const RAID_PASS = MISC_BASE - 1
export const NATUOW_HIDE = MISC_BASE - 2
export const NATUOW_LEATHER = MISC_BASE - 3
export const SMALL_BONE = MISC_BASE - 4
export const MEDIUM_BONE = MISC_BASE - 5
export const LARGE_BONE = MISC_BASE - 6
export const DRAGON_BONE = MISC_BASE - 7
export const DRAGON_TEETH = MISC_BASE - 8
export const DRAGON_SCALE = MISC_BASE - 9
export const POISON = MISC_BASE - 10
export const STRING = MISC_BASE - 11
export const ROPE = MISC_BASE - 12
export const LEAF_FRAGMENTS = MISC_BASE - 13
export const VENOM_POUCH = MISC_BASE - 14
export const BAT_WING = MISC_BASE - 15
export const BAT_WING_PATCH = MISC_BASE - 16
export const THREAD_NEEDLE = MISC_BASE - 17
export const LOSSUTH_TEETH = MISC_BASE - 18
export const LOSSUTH_SCALE = MISC_BASE - 19
export const FEATHER = MISC_BASE - 20
export const QUARTZ_INFUSED_FEATHER = MISC_BASE - 21
export const BARK_CHUNK = MISC_BASE - 22
export const APPRENTICE_FABRIC = MISC_BASE - 23
export const MAGE_FABRIC = MISC_BASE - 24
export const SORCERER_FABRIC = MISC_BASE - 25
export const SEERS_FABRIC = MISC_BASE - 26
export const SHAMAN_FABRIC = MISC_BASE - 27
export const MASTER_FABRIC = MISC_BASE - 28
export const DRAGON_KEY = MISC_BASE - 29
export const BONE_KEY = MISC_BASE - 30
export const NATURE_KEY = MISC_BASE - 31
export const AQUA_KEY = MISC_BASE - 32
export const BLUECANAR = MISC_BASE - 33
export const ANURGAT = MISC_BASE - 34
export const RUFARUM = MISC_BASE - 35
export const WHITE_DEATH_SPORE = MISC_BASE - 36
export const ENCHANTED_ACORN = MISC_BASE - 37
export const ACORN_PATCH = MISC_BASE - 38
export const MISC_MIN = 32768

/** ACTIONS */
// Woodcutting
export const ACTION_WOODCUTTING_BASE = 1
export const ACTION_WOODCUTTING_LOG = ACTION_WOODCUTTING_BASE
export const ACTION_WOODCUTTING_OAK = ACTION_WOODCUTTING_BASE + 1
export const ACTION_WOODCUTTING_WILLOW = ACTION_WOODCUTTING_BASE + 2
export const ACTION_WOODCUTTING_MAPLE = ACTION_WOODCUTTING_BASE + 3
export const ACTION_WOODCUTTING_REDWOOD = ACTION_WOODCUTTING_BASE + 4
export const ACTION_WOODCUTTING_MAGICAL = ACTION_WOODCUTTING_BASE + 5
export const ACTION_WOODCUTTING_ASH = ACTION_WOODCUTTING_BASE + 6
export const ACTION_WOODCUTTING_ENCHANTED = ACTION_WOODCUTTING_BASE + 7
export const ACTION_WOODCUTTING_LIVING = ACTION_WOODCUTTING_BASE + 8
export const ACTION_WOODCUTTING_MAX = 499

// Mining
export const ACTION_MINING_BASE = 500
export const ACTION_MINING_COPPER = ACTION_MINING_BASE
export const ACTION_MINING_TIN = ACTION_MINING_BASE + 1
export const ACTION_MINING_IRON = ACTION_MINING_BASE + 2
export const ACTION_MINING_SAPPHIRE = ACTION_MINING_BASE + 3
export const ACTION_MINING_COAL = ACTION_MINING_BASE + 4
export const ACTION_MINING_EMERALD = ACTION_MINING_BASE + 5
export const ACTION_MINING_MITHRIL = ACTION_MINING_BASE + 6
export const ACTION_MINING_RUBY = ACTION_MINING_BASE + 7
export const ACTION_MINING_ADAMANTINE = ACTION_MINING_BASE + 8
export const ACTION_MINING_AMETHYST = ACTION_MINING_BASE + 9
export const ACTION_MINING_DIAMOND = ACTION_MINING_BASE + 10
export const ACTION_MINING_RUNITE = ACTION_MINING_BASE + 11
export const ACTION_MINING_DRAGONSTONE = ACTION_MINING_BASE + 12
export const ACTION_MINING_TITANIUM = ACTION_MINING_BASE + 13
export const ACTION_MINING_ORICHALCUM = ACTION_MINING_BASE + 14
export const ACTION_MINING_MAX = 999

// Firemaking
export const ACTION_FIREMAKING_BASE = 1000
export const ACTION_FIREMAKING_ITEM = ACTION_FIREMAKING_BASE
export const ACTION_FIREMAKING_MAX = 1099

// Smithing
export const ACTION_SMITHING_BASE = 1100
export const ACTION_SMITHING_ITEM = ACTION_SMITHING_BASE
export const ACTION_SMITHING_MAX = 1199

// Cooking
export const ACTION_COOKING_BASE = 1200
export const ACTION_COOKING_ITEM = ACTION_COOKING_BASE
export const ACTION_COOKING_MAX = 1299

// Crafting
export const ACTION_CRAFTING_BASE = 1300
export const ACTION_CRAFTING_ITEM = ACTION_CRAFTING_BASE
export const ACTION_CRAFTING_MAX = 1399

// Fishing
export const ACTION_FISHING_BASE = 1500
export const ACTION_FISHING_MINNUS = ACTION_FISHING_BASE
export const ACTION_FISHING_BLEKK = ACTION_FISHING_BASE + 1
export const ACTION_FISHING_SKRIMP = ACTION_FISHING_BASE + 2
export const ACTION_FISHING_FEOLA = ACTION_FISHING_BASE + 3
export const ACTION_FISHING_ANCHO = ACTION_FISHING_BASE + 4
export const ACTION_FISHING_TROUT = ACTION_FISHING_BASE + 5
export const ACTION_FISHING_ROJJA = ACTION_FISHING_BASE + 6
export const ACTION_FISHING_BOWFISH = ACTION_FISHING_BASE + 7
export const ACTION_FISHING_GOLDFISH = ACTION_FISHING_BASE + 8
export const ACTION_FISHING_MYSTY_BLUE = ACTION_FISHING_BASE + 9
export const ACTION_FISHING_FLITFISH = ACTION_FISHING_BASE + 10
export const ACTION_FISHING_RAZORFISH = ACTION_FISHING_BASE + 11
export const ACTION_FISHING_QUAFFER = ACTION_FISHING_BASE + 12
export const ACTION_FISHING_ROXA = ACTION_FISHING_BASE + 13
export const ACTION_FISHING_AZACUDDA = ACTION_FISHING_BASE + 14
export const ACTION_FISHING_STONECLAW = ACTION_FISHING_BASE + 15
export const ACTION_FISHING_CRUSKAN = ACTION_FISHING_BASE + 16
export const ACTION_FISHING_CHODFISH = ACTION_FISHING_BASE + 17
export const ACTION_FISHING_DOUBTFISH = ACTION_FISHING_BASE + 18
export const ACTION_FISHING_ROSEFIN = ACTION_FISHING_BASE + 19
export const ACTION_FISHING_SPHINX_FISH = ACTION_FISHING_BASE + 20
export const ACTION_FISHING_SHAW = ACTION_FISHING_BASE + 21
export const ACTION_FISHING_VANISHING_PERCH = ACTION_FISHING_BASE + 22
export const ACTION_FISHING_VIPER_BASS = ACTION_FISHING_BASE + 23
export const ACTION_FISHING_WATER_SERPENT = ACTION_FISHING_BASE + 24
export const ACTION_FISHING_WHISKFIN = ACTION_FISHING_BASE + 25
export const ACTION_FISHING_MHARA = ACTION_FISHING_BASE + 26
export const ACTION_FISHING_GRAN_SQUIN = ACTION_FISHING_BASE + 27
export const ACTION_FISHING_LANCER = ACTION_FISHING_BASE + 28
export const ACTION_FISHING_OCTACLE = ACTION_FISHING_BASE + 29
export const ACTION_FISHING_DRAGONFISH = ACTION_FISHING_BASE + 30
export const ACTION_FISHING_YERESPATUM = ACTION_FISHING_BASE + 31
export const ACTION_FISHING_MAX = 1999

// Combat
export const ACTION_COMBAT_BASE = 2000
export const ACTION_COMBAT_NATUOW = ACTION_COMBAT_BASE
export const ACTION_COMBAT_GROG_TOAD = ACTION_COMBAT_BASE + 1
export const ACTION_COMBAT_UFFINCH = ACTION_COMBAT_BASE + 2
export const ACTION_COMBAT_NATURARACNID = ACTION_COMBAT_BASE + 3
export const ACTION_COMBAT_DRAGON_FROG = ACTION_COMBAT_BASE + 4
export const ACTION_COMBAT_ELDER_BURGOF = ACTION_COMBAT_BASE + 5
export const ACTION_COMBAT_GRAND_TREE_IMP = ACTION_COMBAT_BASE + 6
export const ACTION_COMBAT_BANOXNID = ACTION_COMBAT_BASE + 7
export const ACTION_COMBAT_ARCANE_DRAGON = ACTION_COMBAT_BASE + 8
export const ACTION_COMBAT_SNAPPER_BUG = ACTION_COMBAT_BASE + 9
export const ACTION_COMBAT_SNUFFLEQUARG = ACTION_COMBAT_BASE + 10
export const ACTION_COMBAT_OBGORA = ACTION_COMBAT_BASE + 11
export const ACTION_COMBAT_LOSSUTH = ACTION_COMBAT_BASE + 12
export const ACTION_COMBAT_SQUIGGLE_EGG = ACTION_COMBAT_BASE + 13
export const ACTION_COMBAT_QUARTZ_EAGLE = ACTION_COMBAT_BASE + 14
export const ACTION_COMBAT_DWELLER_BAT = ACTION_COMBAT_BASE + 15
export const ACTION_COMBAT_ANCIENT_ENT = ACTION_COMBAT_BASE + 16
export const ACTION_COMBAT_ROCKHAWK = ACTION_COMBAT_BASE + 17
export const ACTION_COMBAT_QRAKUR = ACTION_COMBAT_BASE + 18
export const ACTION_COMBAT_ELEMENTAL_DRAGON = ACTION_COMBAT_BASE + 19
export const ACTION_COMBAT_ERKAD = ACTION_COMBAT_BASE + 20
export const ACTION_COMBAT_MAX = 2499

// Thieving
export const ACTION_THIEVING_BASE = 2500
export const ACTION_THIEVING_CHILD = ACTION_THIEVING_BASE
export const ACTION_THIEVING_MAN = ACTION_THIEVING_BASE + 1
export const ACTION_THIEVING_GUARD = ACTION_THIEVING_BASE + 2
export const ACTION_THIEVING_CHEST = ACTION_THIEVING_BASE + 3
export const ACTION_THIEVING_STALL = ACTION_THIEVING_BASE + 4
export const ACTION_THIEVING_FARMER = ACTION_THIEVING_BASE + 5
export const ACTION_THIEVING_FISHERMAN = ACTION_THIEVING_BASE + 6
export const ACTION_THIEVING_LUMBERJACK = ACTION_THIEVING_BASE + 7
export const ACTION_THIEVING_BLACKSMITH = ACTION_THIEVING_BASE + 8
export const ACTION_THIEVING_HEAD_GUARD = ACTION_THIEVING_BASE + 9
export const ACTION_THIEVING_WIZARD = ACTION_THIEVING_BASE + 10
export const ACTION_THIEVING_POTION_SHOP = ACTION_THIEVING_BASE + 11
export const ACTION_THIEVING_GEM_MERCHANT = ACTION_THIEVING_BASE + 12
export const ACTION_THIEVING_BANK = ACTION_THIEVING_BASE + 13
export const ACTION_THIEVING_MASTER_THIEF = ACTION_THIEVING_BASE + 14
export const ACTION_THIEVING_MAX = 2999

/** ACTIONS CHOICES */
// Woodcutting
export const ACTIONCHOICE_FIREMAKING_BASE = 1
export const ACTIONCHOICE_FIREMAKING_LOG = ACTIONCHOICE_FIREMAKING_BASE
export const ACTIONCHOICE_FIREMAKING_OAK = ACTIONCHOICE_FIREMAKING_BASE + 1
export const ACTIONCHOICE_FIREMAKING_WILLOW = ACTIONCHOICE_FIREMAKING_BASE + 2
export const ACTIONCHOICE_FIREMAKING_MAPLE = ACTIONCHOICE_FIREMAKING_BASE + 3
export const ACTIONCHOICE_FIREMAKING_REDWOOD = ACTIONCHOICE_FIREMAKING_BASE + 4
export const ACTIONCHOICE_FIREMAKING_MAGICAL = ACTIONCHOICE_FIREMAKING_BASE + 5
export const ACTIONCHOICE_FIREMAKING_ASH = ACTIONCHOICE_FIREMAKING_BASE + 6
export const ACTIONCHOICE_FIREMAKING_ENCHANTED = ACTIONCHOICE_FIREMAKING_BASE + 7
export const ACTIONCHOICE_FIREMAKING_LIVING = ACTIONCHOICE_FIREMAKING_BASE + 8
export const ACTIONCHOICE_FIREMAKING_MAX = 499

// Smithing
export const ACTIONCHOICE_SMITHING_BASE = 500
export const ACTIONCHOICE_SMITHING_BRONZE_BAR = ACTIONCHOICE_SMITHING_BASE
export const ACTIONCHOICE_SMITHING_IRON_BAR = ACTIONCHOICE_SMITHING_BASE + 1
export const ACTIONCHOICE_SMITHING_MITHRIL_BAR = ACTIONCHOICE_SMITHING_BASE + 2
export const ACTIONCHOICE_SMITHING_ADAMANTINE_BAR = ACTIONCHOICE_SMITHING_BASE + 3
export const ACTIONCHOICE_SMITHING_RUNITE_BAR = ACTIONCHOICE_SMITHING_BASE + 4
export const ACTIONCHOICE_SMITHING_TITANIUM_BAR = ACTIONCHOICE_SMITHING_BASE + 5
export const ACTIONCHOICE_SMITHING_ORICHALCUM_BAR = ACTIONCHOICE_SMITHING_BASE + 6
export const ACTIONCHOICE_SMITHING_BRONZE_HELMET = ACTIONCHOICE_SMITHING_BASE + 7
export const ACTIONCHOICE_SMITHING_IRON_HELMET = ACTIONCHOICE_SMITHING_BASE + 8
export const ACTIONCHOICE_SMITHING_MITHRIL_HELMET = ACTIONCHOICE_SMITHING_BASE + 9
export const ACTIONCHOICE_SMITHING_ADAMANTINE_HELMET = ACTIONCHOICE_SMITHING_BASE + 10
export const ACTIONCHOICE_SMITHING_RUNITE_HELMET = ACTIONCHOICE_SMITHING_BASE + 11
export const ACTIONCHOICE_SMITHING_TITANIUM_HELMET = ACTIONCHOICE_SMITHING_BASE + 12
export const ACTIONCHOICE_SMITHING_ORICHALCUM_HELMET = ACTIONCHOICE_SMITHING_BASE + 13
export const ACTIONCHOICE_SMITHING_BRONZE_ARMOR = ACTIONCHOICE_SMITHING_BASE + 14
export const ACTIONCHOICE_SMITHING_IRON_ARMOR = ACTIONCHOICE_SMITHING_BASE + 15
export const ACTIONCHOICE_SMITHING_MITHRIL_ARMOR = ACTIONCHOICE_SMITHING_BASE + 16
export const ACTIONCHOICE_SMITHING_ADAMANTINE_ARMOR = ACTIONCHOICE_SMITHING_BASE + 17
export const ACTIONCHOICE_SMITHING_RUNITE_ARMOR = ACTIONCHOICE_SMITHING_BASE + 18
export const ACTIONCHOICE_SMITHING_TITANIUM_ARMOR = ACTIONCHOICE_SMITHING_BASE + 19
export const ACTIONCHOICE_SMITHING_ORICHALCUM_ARMOR = ACTIONCHOICE_SMITHING_BASE + 20
export const ACTIONCHOICE_SMITHING_BRONZE_TASSETS = ACTIONCHOICE_SMITHING_BASE + 21
export const ACTIONCHOICE_SMITHING_IRON_TASSETS = ACTIONCHOICE_SMITHING_BASE + 22
export const ACTIONCHOICE_SMITHING_MITHRIL_TASSETS = ACTIONCHOICE_SMITHING_BASE + 23
export const ACTIONCHOICE_SMITHING_ADAMANTINE_TASSETS = ACTIONCHOICE_SMITHING_BASE + 24
export const ACTIONCHOICE_SMITHING_RUNITE_TASSETS = ACTIONCHOICE_SMITHING_BASE + 25
export const ACTIONCHOICE_SMITHING_TITANIUM_TASSETS = ACTIONCHOICE_SMITHING_BASE + 26
export const ACTIONCHOICE_SMITHING_ORICHALCUM_TASSETS = ACTIONCHOICE_SMITHING_BASE + 27
export const ACTIONCHOICE_SMITHING_BRONZE_GAUNTLETS = ACTIONCHOICE_SMITHING_BASE + 28
export const ACTIONCHOICE_SMITHING_IRON_GAUNTLETS = ACTIONCHOICE_SMITHING_BASE + 29
export const ACTIONCHOICE_SMITHING_MITHRIL_GAUNTLETS = ACTIONCHOICE_SMITHING_BASE + 30
export const ACTIONCHOICE_SMITHING_ADAMANTINE_GAUNTLETS = ACTIONCHOICE_SMITHING_BASE + 31
export const ACTIONCHOICE_SMITHING_RUNITE_GAUNTLETS = ACTIONCHOICE_SMITHING_BASE + 32
export const ACTIONCHOICE_SMITHING_TITANIUM_GAUNTLETS = ACTIONCHOICE_SMITHING_BASE + 33
export const ACTIONCHOICE_SMITHING_ORICHALCUM_GAUNTLETS = ACTIONCHOICE_SMITHING_BASE + 34
export const ACTIONCHOICE_SMITHING_BRONZE_BOOTS = ACTIONCHOICE_SMITHING_BASE + 35
export const ACTIONCHOICE_SMITHING_IRON_BOOTS = ACTIONCHOICE_SMITHING_BASE + 36
export const ACTIONCHOICE_SMITHING_MITHRIL_BOOTS = ACTIONCHOICE_SMITHING_BASE + 37
export const ACTIONCHOICE_SMITHING_ADAMANTINE_BOOTS = ACTIONCHOICE_SMITHING_BASE + 38
export const ACTIONCHOICE_SMITHING_RUNITE_BOOTS = ACTIONCHOICE_SMITHING_BASE + 39
export const ACTIONCHOICE_SMITHING_TITANIUM_BOOTS = ACTIONCHOICE_SMITHING_BASE + 40
export const ACTIONCHOICE_SMITHING_ORICHALCUM_BOOTS = ACTIONCHOICE_SMITHING_BASE + 41
export const ACTIONCHOICE_SMITHING_BRONZE_SHIELD = ACTIONCHOICE_SMITHING_BASE + 42
export const ACTIONCHOICE_SMITHING_IRON_SHIELD = ACTIONCHOICE_SMITHING_BASE + 43
export const ACTIONCHOICE_SMITHING_MITHRIL_SHIELD = ACTIONCHOICE_SMITHING_BASE + 44
export const ACTIONCHOICE_SMITHING_ADAMANTINE_SHIELD = ACTIONCHOICE_SMITHING_BASE + 45
export const ACTIONCHOICE_SMITHING_RUNITE_SHIELD = ACTIONCHOICE_SMITHING_BASE + 46
export const ACTIONCHOICE_SMITHING_TITANIUM_SHIELD = ACTIONCHOICE_SMITHING_BASE + 47
export const ACTIONCHOICE_SMITHING_ORICHALCUM_SHIELD = ACTIONCHOICE_SMITHING_BASE + 48
export const ACTIONCHOICE_SMITHING_BRONZE_SWORD = ACTIONCHOICE_SMITHING_BASE + 49
export const ACTIONCHOICE_SMITHING_IRON_SWORD = ACTIONCHOICE_SMITHING_BASE + 50
export const ACTIONCHOICE_SMITHING_MITHRIL_SWORD = ACTIONCHOICE_SMITHING_BASE + 51
export const ACTIONCHOICE_SMITHING_ADAMANTINE_SWORD = ACTIONCHOICE_SMITHING_BASE + 52
export const ACTIONCHOICE_SMITHING_RUNITE_SWORD = ACTIONCHOICE_SMITHING_BASE + 53
export const ACTIONCHOICE_SMITHING_TITANIUM_SWORD = ACTIONCHOICE_SMITHING_BASE + 54
export const ACTIONCHOICE_SMITHING_ORICHALCUM_SWORD = ACTIONCHOICE_SMITHING_BASE + 55
export const ACTIONCHOICE_SMITHING_MAX = 999

// Cooking
export const ACTIONCHOICE_COOKING_BASE = 1000
export const ACTIONCHOICE_COOKING_MINNUS = ACTIONCHOICE_COOKING_BASE + 1
export const ACTIONCHOICE_COOKING_BLEKK = ACTIONCHOICE_COOKING_BASE + 2
export const ACTIONCHOICE_COOKING_SKRIMP = ACTIONCHOICE_COOKING_BASE + 3
export const ACTIONCHOICE_COOKING_FEOLA = ACTIONCHOICE_COOKING_BASE + 4
export const ACTIONCHOICE_COOKING_ANCHO = ACTIONCHOICE_COOKING_BASE + 5
export const ACTIONCHOICE_COOKING_TROUT = ACTIONCHOICE_COOKING_BASE + 6
export const ACTIONCHOICE_COOKING_ROJJA = ACTIONCHOICE_COOKING_BASE + 7
export const ACTIONCHOICE_COOKING_BOWFISH = ACTIONCHOICE_COOKING_BASE + 8
export const ACTIONCHOICE_COOKING_GOLDFISH = ACTIONCHOICE_COOKING_BASE + 9
export const ACTIONCHOICE_COOKING_MYSTY_BLUE = ACTIONCHOICE_COOKING_BASE + 10
export const ACTIONCHOICE_COOKING_FLITFISH = ACTIONCHOICE_COOKING_BASE + 11
export const ACTIONCHOICE_COOKING_RAZORFISH = ACTIONCHOICE_COOKING_BASE + 12
export const ACTIONCHOICE_COOKING_QUAFFER = ACTIONCHOICE_COOKING_BASE + 13
export const ACTIONCHOICE_COOKING_ROXA = ACTIONCHOICE_COOKING_BASE + 14
export const ACTIONCHOICE_COOKING_AZACUDDA = ACTIONCHOICE_COOKING_BASE + 15
export const ACTIONCHOICE_COOKING_STONECLAW = ACTIONCHOICE_COOKING_BASE + 16
export const ACTIONCHOICE_COOKING_CRUSKAN = ACTIONCHOICE_COOKING_BASE + 17
export const ACTIONCHOICE_COOKING_CHODFISH = ACTIONCHOICE_COOKING_BASE + 18
export const ACTIONCHOICE_COOKING_DOUBTFISH = ACTIONCHOICE_COOKING_BASE + 19
export const ACTIONCHOICE_COOKING_ROSEFIN = ACTIONCHOICE_COOKING_BASE + 20
export const ACTIONCHOICE_COOKING_SPHINX_FISH = ACTIONCHOICE_COOKING_BASE + 21
export const ACTIONCHOICE_COOKING_SHAW = ACTIONCHOICE_COOKING_BASE + 22
export const ACTIONCHOICE_COOKING_VANISHING_PERCH = ACTIONCHOICE_COOKING_BASE + 23
export const ACTIONCHOICE_COOKING_VIPER_BASS = ACTIONCHOICE_COOKING_BASE + 24
export const ACTIONCHOICE_COOKING_WATER_SERPENT = ACTIONCHOICE_COOKING_BASE + 25
export const ACTIONCHOICE_COOKING_WHISKFIN = ACTIONCHOICE_COOKING_BASE + 26
export const ACTIONCHOICE_COOKING_MHARA = ACTIONCHOICE_COOKING_BASE + 27
export const ACTIONCHOICE_COOKING_GRAN_SQUIN = ACTIONCHOICE_COOKING_BASE + 28
export const ACTIONCHOICE_COOKING_LANCER = ACTIONCHOICE_COOKING_BASE + 29
export const ACTIONCHOICE_COOKING_OCTACLE = ACTIONCHOICE_COOKING_BASE + 30
export const ACTIONCHOICE_COOKING_DRAGONFISH = ACTIONCHOICE_COOKING_BASE + 31
export const ACTIONCHOICE_COOKING_YERESPATUM = ACTIONCHOICE_COOKING_BASE + 32
export const ACTIONCHOICE_COOKING_MAX = 1499

// Melee
export const ACTIONCHOICE_MELEE_BASE = 1500
export const ACTIONCHOICE_MELEE_MONSTER = ACTIONCHOICE_MELEE_BASE
export const ACTIONCHOICE_MELEE_MAX = 1999

// Magic
export const ACTIONCHOICE_MAGIC_BASE = 2000
export const ACTIONCHOICE_MAGIC_SHADOW_BLAST = ACTIONCHOICE_MAGIC_BASE
export const ACTIONCHOICE_MAGIC_NATURES_FURY = ACTIONCHOICE_MAGIC_BASE + 1
export const ACTIONCHOICE_MAGIC_DEATH_WAVE = ACTIONCHOICE_MAGIC_BASE + 2
export const ACTIONCHOICE_MAGIC_VORTEX = ACTIONCHOICE_MAGIC_BASE + 3
export const ACTIONCHOICE_MAGIC_MYSTIC_BLAST = ACTIONCHOICE_MAGIC_BASE + 4
export const ACTIONCHOICE_MAGIC_MAGIC_BREATH = ACTIONCHOICE_MAGIC_BASE + 5
export const ACTIONCHOICE_MAGIC_SUMMON_HELL_HOUND = ACTIONCHOICE_MAGIC_BASE + 6
export const ACTIONCHOICE_MAGIC_AIR_BALL = ACTIONCHOICE_MAGIC_BASE + 7
export const ACTIONCHOICE_MAGIC_FURY_FISTS = ACTIONCHOICE_MAGIC_BASE + 8
export const ACTIONCHOICE_MAGIC_CONCUSSION_BEAMS = ACTIONCHOICE_MAGIC_BASE + 9
export const ACTIONCHOICE_MAGIC_ICE_SPIKES = ACTIONCHOICE_MAGIC_BASE + 10
export const ACTIONCHOICE_MAGIC_MAX = 2499

// Crafting
export const ACTIONCHOICE_CRAFTING_BASE = 2500
export const ACTIONCHOICE_CRAFTING_SAPPHIRE_AMULET = ACTIONCHOICE_CRAFTING_BASE
export const ACTIONCHOICE_CRAFTING_EMERALD_AMULET = ACTIONCHOICE_CRAFTING_BASE + 1
export const ACTIONCHOICE_CRAFTING_RUBY_AMULET = ACTIONCHOICE_CRAFTING_BASE + 2
export const ACTIONCHOICE_CRAFTING_AMETHYST_AMULET = ACTIONCHOICE_CRAFTING_BASE + 3
export const ACTIONCHOICE_CRAFTING_DIAMOND_AMULET = ACTIONCHOICE_CRAFTING_BASE + 4
export const ACTIONCHOICE_CRAFTING_DRAGONSTONE_AMULET = ACTIONCHOICE_CRAFTING_BASE + 5
export const ACTIONCHOICE_CRAFTING_BRONZE_PICKAXE = ACTIONCHOICE_CRAFTING_BASE + 6
export const ACTIONCHOICE_CRAFTING_IRON_PICKAXE = ACTIONCHOICE_CRAFTING_BASE + 7
export const ACTIONCHOICE_CRAFTING_MITHRIL_PICKAXE = ACTIONCHOICE_CRAFTING_BASE + 8
export const ACTIONCHOICE_CRAFTING_ADAMANTINE_PICKAXE = ACTIONCHOICE_CRAFTING_BASE + 9
export const ACTIONCHOICE_CRAFTING_RUNITE_PICKAXE = ACTIONCHOICE_CRAFTING_BASE + 10
export const ACTIONCHOICE_CRAFTING_TITANIUM_PICKAXE = ACTIONCHOICE_CRAFTING_BASE + 11
export const ACTIONCHOICE_CRAFTING_ORICHALCUM_PICKAXE = ACTIONCHOICE_CRAFTING_BASE + 12
export const ACTIONCHOICE_CRAFTING_BRONZE_AXE = ACTIONCHOICE_CRAFTING_BASE + 13
export const ACTIONCHOICE_CRAFTING_IRON_AXE = ACTIONCHOICE_CRAFTING_BASE + 14
export const ACTIONCHOICE_CRAFTING_MITHRIL_AXE = ACTIONCHOICE_CRAFTING_BASE + 15
export const ACTIONCHOICE_CRAFTING_ADAMANTINE_AXE = ACTIONCHOICE_CRAFTING_BASE + 16
export const ACTIONCHOICE_CRAFTING_RUNITE_AXE = ACTIONCHOICE_CRAFTING_BASE + 17
export const ACTIONCHOICE_CRAFTING_TITANIUM_AXE = ACTIONCHOICE_CRAFTING_BASE + 18
export const ACTIONCHOICE_CRAFTING_ORICHALCUM_AXE = ACTIONCHOICE_CRAFTING_BASE + 19
export const ACTIONCHOICE_CRAFTING_NATUOW_LEATHER = ACTIONCHOICE_CRAFTING_BASE + 20
export const ACTIONCHOICE_CRAFTING_BONEMEAL = ACTIONCHOICE_CRAFTING_BASE + 21
export const ACTIONCHOICE_CRAFTING_ROPE = ACTIONCHOICE_CRAFTING_BASE + 22
export const ACTIONCHOICE_CRAFTING_ACORN_PATCH = ACTIONCHOICE_CRAFTING_BASE + 23
export const ACTIONCHOICE_CRAFTING_BAT_WING_PATCH = ACTIONCHOICE_CRAFTING_BASE + 24
export const ACTIONCHOICE_CRAFTING_NATUOW_HOOD = ACTIONCHOICE_CRAFTING_BASE + 25
export const ACTIONCHOICE_CRAFTING_NATUOW_BODY = ACTIONCHOICE_CRAFTING_BASE + 26
export const ACTIONCHOICE_CRAFTING_NATUOW_TASSETS = ACTIONCHOICE_CRAFTING_BASE + 27
export const ACTIONCHOICE_CRAFTING_NATUOW_BOOTS = ACTIONCHOICE_CRAFTING_BASE + 28
export const ACTIONCHOICE_CRAFTING_NATUOW_BRACERS = ACTIONCHOICE_CRAFTING_BASE + 29
export const ACTIONCHOICE_CRAFTING_BAT_WING_HAT = ACTIONCHOICE_CRAFTING_BASE + 30
export const ACTIONCHOICE_CRAFTING_BAT_WING_BODY = ACTIONCHOICE_CRAFTING_BASE + 31
export const ACTIONCHOICE_CRAFTING_BAT_WING_TROUSERS = ACTIONCHOICE_CRAFTING_BASE + 32
export const ACTIONCHOICE_CRAFTING_BAT_WING_BOOTS = ACTIONCHOICE_CRAFTING_BASE + 33
export const ACTIONCHOICE_CRAFTING_BAT_WING_BRACERS = ACTIONCHOICE_CRAFTING_BASE + 34
export const ACTIONCHOICE_CRAFTING_NATURE_MASK = ACTIONCHOICE_CRAFTING_BASE + 35
export const ACTIONCHOICE_CRAFTING_NATURE_BODY = ACTIONCHOICE_CRAFTING_BASE + 36
export const ACTIONCHOICE_CRAFTING_NATURE_TROUSERS = ACTIONCHOICE_CRAFTING_BASE + 37
export const ACTIONCHOICE_CRAFTING_NATURE_BOOTS = ACTIONCHOICE_CRAFTING_BASE + 38
export const ACTIONCHOICE_CRAFTING_NATURE_BRACERS = ACTIONCHOICE_CRAFTING_BASE + 39
export const ACTIONCHOICE_CRAFTING_TOTEM_STAFF = ACTIONCHOICE_CRAFTING_BASE + 40
export const ACTIONCHOICE_CRAFTING_SAPPHIRE_STAFF = ACTIONCHOICE_CRAFTING_BASE + 41
export const ACTIONCHOICE_CRAFTING_EMERALD_STAFF = ACTIONCHOICE_CRAFTING_BASE + 42
export const ACTIONCHOICE_CRAFTING_RUBY_STAFF = ACTIONCHOICE_CRAFTING_BASE + 43
export const ACTIONCHOICE_CRAFTING_AMETHYST_STAFF = ACTIONCHOICE_CRAFTING_BASE + 44
export const ACTIONCHOICE_CRAFTING_DIAMOND_STAFF = ACTIONCHOICE_CRAFTING_BASE + 45
export const ACTIONCHOICE_CRAFTING_APPRENTICE_HAT = ACTIONCHOICE_CRAFTING_BASE + 46
export const ACTIONCHOICE_CRAFTING_APPRENTICE_BODY = ACTIONCHOICE_CRAFTING_BASE + 47
export const ACTIONCHOICE_CRAFTING_APPRENTICE_TROUSERS = ACTIONCHOICE_CRAFTING_BASE + 48
export const ACTIONCHOICE_CRAFTING_APPRENTICE_GAUNTLETS = ACTIONCHOICE_CRAFTING_BASE + 49
export const ACTIONCHOICE_CRAFTING_APPRENTICE_BOOTS = ACTIONCHOICE_CRAFTING_BASE + 50
export const ACTIONCHOICE_CRAFTING_MAGE_HOOD = ACTIONCHOICE_CRAFTING_BASE + 51
export const ACTIONCHOICE_CRAFTING_MAGE_BODY = ACTIONCHOICE_CRAFTING_BASE + 52
export const ACTIONCHOICE_CRAFTING_MAGE_TROUSERS = ACTIONCHOICE_CRAFTING_BASE + 53
export const ACTIONCHOICE_CRAFTING_MAGE_BRACERS = ACTIONCHOICE_CRAFTING_BASE + 54
export const ACTIONCHOICE_CRAFTING_MAGE_BOOTS = ACTIONCHOICE_CRAFTING_BASE + 55
export const ACTIONCHOICE_CRAFTING_SORCERER_HAT = ACTIONCHOICE_CRAFTING_BASE + 56
export const ACTIONCHOICE_CRAFTING_SORCERER_BODY = ACTIONCHOICE_CRAFTING_BASE + 57
export const ACTIONCHOICE_CRAFTING_SORCERER_TROUSERS = ACTIONCHOICE_CRAFTING_BASE + 58
export const ACTIONCHOICE_CRAFTING_SORCERER_GAUNTLETS = ACTIONCHOICE_CRAFTING_BASE + 59
export const ACTIONCHOICE_CRAFTING_SORCERER_BOOTS = ACTIONCHOICE_CRAFTING_BASE + 60
export const ACTIONCHOICE_CRAFTING_SEERS_HOOD = ACTIONCHOICE_CRAFTING_BASE + 61
export const ACTIONCHOICE_CRAFTING_SEERS_BODY = ACTIONCHOICE_CRAFTING_BASE + 62
export const ACTIONCHOICE_CRAFTING_SEERS_TROUSERS = ACTIONCHOICE_CRAFTING_BASE + 63
export const ACTIONCHOICE_CRAFTING_SEERS_BRACERS = ACTIONCHOICE_CRAFTING_BASE + 64
export const ACTIONCHOICE_CRAFTING_SEERS_BOOTS = ACTIONCHOICE_CRAFTING_BASE + 65
export const ACTIONCHOICE_CRAFTING_SHAMAN_HOOD = ACTIONCHOICE_CRAFTING_BASE + 66
export const ACTIONCHOICE_CRAFTING_SHAMAN_BODY = ACTIONCHOICE_CRAFTING_BASE + 67
export const ACTIONCHOICE_CRAFTING_SHAMAN_TROUSERS = ACTIONCHOICE_CRAFTING_BASE + 68
export const ACTIONCHOICE_CRAFTING_SHAMAN_GAUNTLETS = ACTIONCHOICE_CRAFTING_BASE + 69
export const ACTIONCHOICE_CRAFTING_SHAMAN_BOOTS = ACTIONCHOICE_CRAFTING_BASE + 70
export const ACTIONCHOICE_CRAFTING_BONEMEAL_LARGE = ACTIONCHOICE_CRAFTING_BASE + 71
export const ACTIONCHOICE_CRAFTING_BONEMEAL_DRAGON = ACTIONCHOICE_CRAFTING_BASE + 72
export const ACTIONCHOICE_CRAFTING_MAX = 2999

export const QUEST_BURN_BAN = 1
export const QUEST_NYMPTH_WATCH = 2
export const QUEST_SUPPLY_RUN = 3
export const QUEST_HIDDEN_BOUNTY = 4
export const QUEST_PURSE_STRINGS = 5
export const QUEST_ALMS_POOR = 6
export const QUEST_BURNER_WATCH = 7
export const QUEST_TWO_BIRDS = 8
export const QUEST_APPRENTICESHIP = 9
export const QUEST_TOWN_COOKOUT = 10
export const QUEST_IRON_AGE = 11
export const QUEST_CLEAR_SKIES = 12
export const QUEST_MEADERY_MADNESS = 13
export const QUEST_FOREST_FIRE = 14
export const QUEST_MITHRIL_MILITIA = 15
export const QUEST_MINOR_MINERS = 16

export const WORLD_ADDRESS = '0x94cb4ff6818b0969b62ac7b44d97a996594fb1c8'
export const SHOP_ADDRESS = '0x593ed05fa8a1c19c90657850044fbf7315f123dc'
export const ITEM_NFT_ADDRESS = '0xbf7c0526730e85eb2934f61f9f13fa165148f501'
export const PLAYERS_ADDRESS = '0xbf7c0526730e85eb2934f61f9f13fa165148f501'
export const PROMOTIONS_ADDRESS = '0xf28cab48e29be56fcc68574b5c147b780c35647c'

export const BETA_WORLD_ADDRESS = '0xe2f0b5cb118da85be68de1801d40726ce48009aa'
export const BETA_SHOP_ADDRESS = '0xc5e24fbaba1a945226ad2f882e14fc7b44dc1f30'
export const BETA_ITEM_NFT_ADDRESS = '0x1dae89b469d15b0ded980007dfdc8e68c363203d'
export const BETA_PLAYERS_ADDRESS = '0x0aac9c0966ad5ea59cd0a47a0d415a68126ab7be'
export const BETA_PROMOTIONS_ADDRESS = '0xf28cab48e29be56fcc68574b5c147b780c35647c'

export const TIER_REWARD_START_XP = [0, 5000, 25_000, 80_000, 400_000]

// 0 xp = level 1 (up to level 100)
export const levelXp: Array<i32> = [
  0, 84, 174, 270, 374, 486, 606, 734, 872, 1021, 1179, 1350, 1532, 1728, 1938, 2163, 2404, 2662, 2939, 3236, 3553,
  3894, 4258, 4649, 5067, 5515, 5995, 6510, 7060, 7650, 8282, 8959, 9685, 10461, 11294, 12185, 13140, 14162, 15258,
  16432, 17689, 19036, 20479, 22025, 23681, 25456, 27357, 29393, 31575, 33913, 36418, 39102, 41977, 45058, 48359, 51896,
  55686, 59747, 64098, 68761, 73757, 79110, 84847, 90995, 97582, 104641, 112206, 120312, 128998, 138307, 148283, 158973,
  170430, 182707, 195864, 209963, 225074, 241267, 258621, 277219, 297150, 318511, 341403, 365936, 392228, 420406,
  450605, 482969, 517654, 554828, 594667, 637364, 683124, 732166, 784726, 841057, 901428, 966131, 1035476, 1109796,
]

export default NONE
