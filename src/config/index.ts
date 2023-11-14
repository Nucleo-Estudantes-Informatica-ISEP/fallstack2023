const config = {
  authCookieMaxAge: 34560000, // 400 days (in seconds) - its the maximum value for the maxAge of a cookie

  cookieName: "@Fallstack23:auth",

  uploads: {
    profile: {
      types: ["image/png", "image/jpeg", "image/jpg"],
      maxSize: 5 * 1024 * 1024, // 5mb
    },
    cv: {
      types: ["application/pdf"],
      maxSize: 2 * 1024 * 1024, // 2mb
    },
  },
};

export default config;
