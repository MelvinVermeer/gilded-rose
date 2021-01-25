function limitQuality(quality) {
  return Math.max(Math.min(quality, 50), 0);
}

exports.limitQuality = limitQuality;
