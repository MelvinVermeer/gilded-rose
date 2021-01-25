function conjured(item) {
  item.quality = item.quality - 2;

  if (item.sellIn < 0) {
    item.quality = item.quality - 2;
  }
}

exports.conjured = conjured;
