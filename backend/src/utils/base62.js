const BASE62_ALPHABET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export const encodeBase62 = (value) => {
  if (typeof value !== "number" || value < 0 || !Number.isFinite(value)) {
    throw new Error("Value must be a non-negative number for base62 encoding.");
  }

  if (value === 0) return BASE62_ALPHABET[0];

  let encoded = "";
  while (value > 0) {
    encoded = BASE62_ALPHABET[value % 62] + encoded;
    value = Math.floor(value / 62);
  }

  return encoded;
};
