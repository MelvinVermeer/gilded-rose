const { updateQuality } = require("./updateQuality");

function conjured(item) {
  if (item.sellIn < 0) {
    return updateQuality(item.quality - 4);
  }

  return updateQuality(item.quality - 2);

}

exports.conjured = conjured;
