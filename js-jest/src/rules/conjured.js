function conjured(item) {
  item.sellIn = item.sellIn - 1;
  item.quality = item.quality - 2;

  if (item.sellIn < 0) {
    item.quality = item.quality - 2;
  }

  item.quality = Math.max(item.quality, 0);
}

exports.conjured = conjured;
