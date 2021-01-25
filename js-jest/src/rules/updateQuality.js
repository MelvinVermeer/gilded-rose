function updateQuality(quality) {
  return Math.max(Math.min(quality, 50), 0);
}

exports.updateQuality = updateQuality;
