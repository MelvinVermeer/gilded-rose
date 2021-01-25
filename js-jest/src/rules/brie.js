function brie(item) {
  item.quality = item.quality + 1;

  if (item.sellIn < 0) {
    item.quality = item.quality + 1;
  }

  item.quality = Math.min(item.quality, 50);
}

exports.brie = brie;
