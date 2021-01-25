const { conjured } = require("./rules/conjured");
const { backstagePasses } = require("./rules/backstagePasses");
const { brie } = require("./rules/brie");
const { regular } = require("./rules/regular");
const { legendary } = require("./rules/legendary");

class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const rules = {
  "Aged Brie": brie,
  "Conjured Mana Cake": conjured,
  "Backstage passes to a TAFKAL80ETC concert": backstagePasses,
  "Sulfuras, Hand of Ragnaros": legendary,
};

function updateItem({ name, quality, sellIn }) {
  const rule = rules[name] ?? regular;

  return {
    name,
    quality: rule({ quality, sellIn: sellIn - 1 }),
    sellIn: sellIn - 1,
  };
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    return this.items.map(updateItem);
  }
}

module.exports = {
  Item,
  Shop,
};
