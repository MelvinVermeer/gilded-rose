const { updateQuality } = require("./updateQuality");

function regular(item) {
  if (item.sellIn < 0) {
    return updateQuality(item.quality - 2);
  }

  return updateQuality(item.quality - 1);
}

exports.regular = regular;
