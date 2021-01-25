const { updateQuality } = require("./updateQuality");

const overdueModifier = {
  true: -4,
  false: -2,
};

function conjured(item) {
  return updateQuality(item.quality + overdueModifier[item.sellIn < 0]);
}

exports.conjured = conjured;
