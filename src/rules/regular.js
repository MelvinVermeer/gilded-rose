const { limitQuality } = require("./limitQuality");

function regular(item) {
  if (item.sellIn < 0) {
    return limitQuality(item.quality - 2);
  }

  return limitQuality(item.quality - 1);
}

exports.regular = regular;
