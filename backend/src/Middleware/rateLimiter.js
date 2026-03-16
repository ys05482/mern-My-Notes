import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit("my-limit-key");
    if (!success) {
      return res
        .status(429)
        .json({ message: "Too many request, please try later" });
    }
    next();
  } catch (error) {
    console.log("rate limit Error", error);
    next(error);
    //res.status(500).jason({ message: "internal server error" });
  }
};

export default rateLimiter;
