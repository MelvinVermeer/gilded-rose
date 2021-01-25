const { updateQuality } = require("./updateQuality");

function backstagePasses(item) {
  const modifiers = [-1 * item.quality, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 1];
  const modifier = modifiers[Math.min(Math.max(item.sellIn + 1, 0), 11)];
  return updateQuality(item.quality + modifier);
}

// function backstagePasses(item) {
//   if (item.sellIn < 0) {
//     return 0;
//   }
//   if (item.sellIn < 5) {
//     return updateQuality(item.quality + 3);
//   }
//   if (item.sellIn < 10) {
//     return updateQuality(item.quality + 2);
//   }
//   return updateQuality(item.quality + 1);
// }

exports.backstagePasses = backstagePasses;
