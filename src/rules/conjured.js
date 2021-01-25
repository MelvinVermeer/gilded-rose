const { limitQuality } = require("./limitQuality");

function conjured(item) {
  if (item.sellIn < 0) {
    return limitQuality(item.quality - 4);
  }

  return limitQuality(item.quality - 2);

}

exports.conjured = conjured;
