const { Shop, Item } = require("../src/gilded_rose");

describe("Gilded Rose", function () {
  it("should lower the quality by 1", function () {
    const gildedRose = new Shop([new Item("foo", 10, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(9);
  });

  it("should lower the sellin by 1", function () {
    const gildedRose = new Shop([new Item("foo", 10, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
  });

  it("should lower the quality twice, after sellIn has past", function () {
    const gildedRose = new Shop([new Item("foo", 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(8);
  });

  it("quality won't drop below 0", function () {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it("Aged Brie increases in quality", function () {
    const gildedRose = new Shop([new Item("Aged Brie", 10, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(11);
  });

  it("'Sulfuras', being a legendary item, never has to be sold or decreases in Quality", function () {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(10);
    expect(items[0].quality).toBe(20);
  });

  it("passes, increase in quality by 2 in ten days", function () {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(12);
  });
  it("passes, increase in quality by 3 in five days", function () {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(13);
  });

  it("passes, have 0 quality after concert", function () {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it("conjured should lower the quality twice the normal rate (2)", function () {
    const gildedRose = new Shop([new Item("Conjured Mana Cake", 5, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(8);
  });

  it("conjured should lower the quality twice the normal rate (2)", function () {
    const gildedRose = new Shop([new Item("Conjured Mana Cake", 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(6);
  });
});
