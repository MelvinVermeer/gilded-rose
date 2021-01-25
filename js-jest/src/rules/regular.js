function regular(item) {
  item.quality = item.quality - 1;

  if (item.sellIn < 0) {
    item.quality = item.quality - 1;
  }

}

exports.regular = regular;
