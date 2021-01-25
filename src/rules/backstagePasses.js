const { limitQuality } = require("./limitQuality");

function backstagePasses(item) {
  if (item.sellIn < 0) {
    return 0;
  }

  if (item.sellIn < 5) {
    return limitQuality(item.quality + 3);
  }

  if (item.sellIn < 10) {
    return limitQuality(item.quality + 2);
  }

  return limitQuality(item.quality + 1);
}

exports.backstagePasses = backstagePasses;
