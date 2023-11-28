const config = {
  cookies: {
    auth: {
      name: "@Fallstack23:auth",
      maxAge: 34560000, // 400 days (in seconds) - its the maximum value for the maxAge of a cookie
    },
  },

  defaultAvatar: "/assets/images/default_user.png",

  localStorage: {
    hideInstallPrompt: "@Fallstack23:hidePrompt",
  },

  uploads: {
    avatar: {
      types: ["image/png", "image/jpeg"],
      maxSize: 5 * 1024 * 1024, // 5mb
    },
    cv: {
      types: ["application/pdf"],
      maxSize: 5 * 1024 * 1024, // 5mb
    },
  },
};

export default config;
