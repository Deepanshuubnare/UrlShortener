import Counter from "../models/counter.model.js";
import { getCustomShortUrl, saveShortUrl } from "../dao/shorturl.js";
import { encodeBase62 } from "../utils/base62.js";
import { ConflictError } from "../utils/errorhandler.js";

const SLUG_REGEXP = /^[A-Za-z0-9_-]+$/;
const COUNTER_NAME = "shorturl";
const MAX_GENERATION_ATTEMPTS = 5;

const getNextSequence = async () => {
  const counter = await Counter.findOneAndUpdate(
    { _id: COUNTER_NAME },
    { $inc: { seq: 1 } },
    { new: true, upsert: true }
  );
  return counter.seq;
};

const createShortUrl = async (url, userId = null, slug = null) => {
  if (slug) {
    if (!SLUG_REGEXP.test(slug)) {
      throw new Error("Custom slug may only contain letters, numbers, hyphen, and underscore.");
    }

    const exist = await getCustomShortUrl(slug);
    if (exist) throw new ConflictError("This custom url already exists");

    await saveShortUrl(slug, url, userId);
    return slug;
  }

  let attempts = 0;
  while (attempts < MAX_GENERATION_ATTEMPTS) {
    const sequenceId = await getNextSequence();
    const generatedShortUrl = encodeBase62(sequenceId);

    try {
      await saveShortUrl(generatedShortUrl, url, userId);
      return generatedShortUrl;
    } catch (err) {
      if (err instanceof ConflictError) {
        attempts += 1;
        continue;
      }
      throw err;
    }
  }

  throw new Error("Unable to generate a unique short URL. Please try again.");
};

export const createShortUrlWithoutUser = async (url, slug = null) => {
  return createShortUrl(url, null, slug);
};

export const createShortUrlWithUser = async (url, userId, slug = null) => {
  return createShortUrl(url, userId, slug);
};
