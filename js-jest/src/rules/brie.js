const { updateQuality } = require("./updateQuality");

const overdueModifier = {
  true: +2,
  false: +1,
};

function brie(item) {
  return updateQuality(item.quality + overdueModifier[item.sellIn < 0]);
}

exports.brie = brie;
