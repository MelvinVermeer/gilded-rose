function backstagePasses(item) {
  item.sellIn = item.sellIn - 1;
  item.quality = item.quality + 1;

  if (item.sellIn < 10) {
    item.quality = item.quality + 1;
  }

  if (item.sellIn < 5) {
    item.quality = item.quality + 1;
  }

  if (item.sellIn < 0) {
    item.quality = 0;
  }

  item.quality = Math.min(item.quality, 50);
}

exports.backstagePasses = backstagePasses;
