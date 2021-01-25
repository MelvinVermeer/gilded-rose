const { updateQuality } = require("./updateQuality");

function backstagePasses(item) {
  if (item.sellIn < 0) {
    return 0;
  }

  if (item.sellIn < 5) {
    return updateQuality(item.quality + 3);
  }

  if (item.sellIn < 10) {
    return updateQuality(item.quality + 2);
  }

  return updateQuality(item.quality + 1);
}

exports.backstagePasses = backstagePasses;
