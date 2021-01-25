const { updateQuality } = require("./updateQuality");

const overdueModifier = {
  true: -2,
  false: -1,
};

function regular(item) {
  return updateQuality(item.quality + overdueModifier[item.sellIn < 0]);
}

exports.regular = regular;

// function regular(item) {
//   if (item.sellIn < 0) {
//     return updateQuality(item.quality - 2);
//   }
//   return updateQuality(item.quality - 1);
// }

