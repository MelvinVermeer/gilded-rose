function regular(item) {
  item.sellIn = item.sellIn - 1;
  item.quality = item.quality - 1;

  if (item.sellIn < 0) {
    item.quality = item.quality - 1;
  }

  item.quality = Math.max(item.quality, 0);
}

exports.regular = regular;
