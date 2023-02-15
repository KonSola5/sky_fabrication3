//priority: 9
let first_item = "croparia:fruit_dragon"
let amount = 8;
/*
if (global.isExpertMode) {
  first_item = "compress:bag_with_wither_rose"
  amount = 1
}
*/

onEvent('recipes', event => {
  event.custom({
    "type": "artis:biggest_bench_shaped",
    "pattern": [
      "ABCDFGRr ", "JKLMNOPQ ", "STUVWXZ0 ", "12345678 ", "bcdefghi ", "jklmnopq ", "stvwyz!9 ", "<>§/;?,% ", "^¨$£¤*µ  "
    ],
    "key": {
      "A": {"item": first_item},
      "B": {"item": "minecraft:apple"},
      "C": {"item": "minecraft:sweet_berries"},
      "D": {"item": "minecraft:melon_slice"},
      "F": {"item": "croptopia:elderberry"},
      "G": {"item": "betterend:shadow_berry_raw"},
      "J": {"item": "farmersdelight:tomato"},
      "K": {"item": "croptopia:cherry"},
      "L": {"item": "bewitchment:witchberry"},
      "M": {"item": "croptopia:rhubarb"},
      "N": {"item": "croptopia:eggplant"},
      "O": {"item": "betternether:black_apple"},
      "P": {"item": "croptopia:blackberry"},
      "Q": {"item": "croptopia:avocado"},
      "R": {"item": "croptopia:hops"},
      "S": {"item": "croptopia:strawberry"},
      "T": {"item": "minecraft:beetroot"},
      "U": {"item": "croptopia:dragonfruit"},
      "V": {"item": "croptopia:plum"},
      "W": {"item": "bewitchment:belladonna"},
      "X": {"item": "croptopia:grape"},
      "Z": {"item": "croptopia:artichoke"},
      "0": {"item": "croptopia:asparagus"},
      "1": {"item": "croptopia:cranberry"},
      "2": {"item": "croptopia:raspberry"},
      "3": {"item": "croptopia:radish"},
      "4": {"item": "croptopia:date"},
      "5": {"item": "croptopia:fig"},
      "6": {"item": "croptopia:lime"},
      "7": {"item": "croptopia:kiwi"},
      "8": {"item": "croptopia:honeydew"},
      "9": {"item": "croptopia:broccoli"},
      "b": {"item": "croptopia:peach"},
      "c": {"item": "croptopia:saguaro"},
      "d": {"item": "croptopia:currant"},
      "e": {"item": "croptopia:rutabaga"},
      "f": {"item": "farmersdelight:cabbage"},
      "g": {"item": "croptopia:celery"},
      "h": {"item": "croptopia:spinach"},
      "i": {"item": "croptopia:greenbean"},
      "j": {"item": "croptopia:grapefruit"},
      "k": {"item": "farmersdelight:pumpkin_slice"},
      "l": {"item": "minecraft:glow_berries"},
      "m": {"item": "croptopia:pear"},
      "n": {"item": "croptopia:lemon"},
      "o": {"item": "croptopia:leek"},
      "p": {"item": "croptopia:lettuce"},
      "q": {"item": "croptopia:kale"},
      "r": {"item": "croptopia:olive"},
      "s": {"item": "croptopia:orange"},
      "t": {"item": "minecraft:carrot"},
      "v": {"item": "croptopia:pineapple"},
      "w": {"item": "croptopia:starfruit"},
      "y": {"item": "croptopia:greenonion"},
      "z": {"item": "bewitchment:garlic"},
      "!": {"item": "croptopia:cauliflower"},
      "<": {"item": "croptopia:sweetpotato"},
      ">": {"item": "croptopia:persimmon"},
      "§": {"item": "croptopia:cantaloupe"},
      "/": {"item": "bewitchment:aconite"},
      ";": {"item": "croptopia:bellpepper"},
      "?": {"item": "croptopia:coconut"},
      ",": {"item": "farmersdelight:rice"},
      "^": {"item": "bewitchment:mandrake_root"},
      "¨": {"item": "croptopia:squash"},
      "$": {"item": "farmersdelight:onion"},
      "£": {"item": "minecraft:potato"},
      "¤": {"item": "croptopia:soybean"},
      "*": {"item": "croptopia:peanut"},
      "µ": {"item": "minecraft:wheat"},
      "%": {"item": "croptopia:barley"}
    },
    "result": {
      "item": "kubejs:ultimate_stew",
      "count": amount
    }
  });

  event.custom({
    "type": "artis:bigger_bench_shaped",
    "pattern": [
      "ABCDEFG", "JKLMNOP", "STUVWX ", "HIQR   "
    ],
    "key": {
      "A": {"item": first_item},
      "B": {"item": "minecraft:rotten_flesh"},
      "C": {"item": "minecraft:chicken"},
      "D": {"item": "minecraft:porkchop"},
      "E": {"item": "minecraft:beef"},
      "F": {"item": "minecraft:rabbit"},
      "G": {"item": "minecraft:mutton"},
      "H": {"item": "additionaladditions:chicken_nugget"},
      "I": {"item": "twilightforest:raw_venison"},
      "J": {"item": "agape_space:space_meat"},
      "K": {"item": "farmersdelight:pasta_with_meatballs"},
      "L": {"item": "croptopia:tofu"},
      "M": {"item": "croparia:fruit_rawbeef"},
      "N": {"item": "minecraft:egg"},
      "O": {"item": "adventurez:iguana_meat"},
      "P": {"item": "betteranimalsplus:pheasantraw"},
      "Q": {"item": "betteranimalsplus:crab_meat_raw"},
      "R": {"item": "betteranimalsplus:turkey_leg_raw"},
      "S": {"item": "betteranimalsplus:eel_meat_raw"},
      "T": {"item": "betteranimalsplus:turkey_raw"},
      "U": {"item": "farmersdelight:chicken_cuts"},
      "V": {"item": "farmersdelight:bacon"},
      "W": {"item": "farmersdelight:minced_beef"},
      "X": {"item": "farmersdelight:mutton_chops"}
    },
    "result": {
      "item": "kubejs:cosmic_meatballs",
      "count": amount
    }
  });

  event.custom({
    "type": "artis:bigger_bench_shaped",
    "pattern": [
      "ABCDEFG", "JKLMNOP", "STUVWXY", "1234678", "abcdefg", "QRZ09HI"
    ],
    "key": {
      "A": {"item": first_item},
      "B": {"item": "minecraft:cod"},
      "C": {"item": "minecraft:salmon"},
      "D": {"item": "minecraft:tropical_fish"},
      "E": {"item": "minecraft:pufferfish"},
      "F": {"item": "betterend:end_fish_raw"},
      "G": {"item": "farmersdelight:cod_slice"},
      "H": {"item": "farmersdelight:salmon_slice"},
      "I": {"item": "gofish:icicle_fish"},
      "J": {"item": "gofish:lilyfish"},
      "K": {"item": "gofish:matrix_fish"},
      "L": {"item": "gofish:seaweed_eel"},
      "M": {"item": "gofish:slimefish"},
      "N": {"item": "gofish:snowball_fish"},
      "O": {"item": "gofish:terrafish"},
      "P": {"item": "gofish:carrot_carp"},
      "Q": {"item": "gofish:oakfish"},
      "R": {"item": "gofish:charfish"},
      "S": {"item": "gofish:spikerfish"},
      "T": {"item": "gofish:ender_eel"},
      "U": {"item": "gofish:blackstone_trout"},
      "V": {"item": "gofish:bonefish"},
      "W": {"item": "gofish:gilded_blackstone_carp"},
      "X": {"item": "gofish:smokey_salmon"},
      "Y": {"item": "gofish:soul_salmon"},
      "Z": {"item": "gofish:magma_cod"},
      "0": {"item": "gofish:basalt_bass"},
      "1": {"item": "gofish:obsidian_halibut"},
      "2": {"item": "gofish:endfish"},
      "3": {"item": "gofish:endfish_and_chorus"},
      "4": {"item": "minecraft:dragon_breath"},
      "6": {"item": "croparia:fruit_pufferfish"},
      "7": {"item": "gofish:lunarfish"},
      "8": {"item": "gofish:galaxy_starfish"},
      "9": {"item": "gofish:starry_salmon"},
      "a": {"item": "gofish:nebula_swordfish"},
      "b": {"item": "gofish:rainy_bass"},
      "c": {"item": "gofish:thundering_bass"},
      "d": {"item": "gofish:cloudy_crab"},
      "e": {"item": "gofish:blizzard_bass"},
      "f": {"item": "gofish:golden_fish"},
      "g": {"item": "croptopia:french_fries"}
    },
    "result": {
      "item": "kubejs:fish_and_chips",
      "count": amount
    }
  });
});
