import { ENV } from "./env.js";

export const corsOptions = {
  credentials: true,
  origin(origin, callback) {
    if (!origin || ENV.CLIENT_URLS.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error(`CORS blocked for origin: ${origin}`));
  },
};
