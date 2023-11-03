const config = {
  uploads: {
    profile: {
      types: ["image/png", "image/jpeg"],
      maxSize: 5 * 1024 * 1024, // 5mb
    },
    cv: {
      types: ["application/pdf"],
      maxSize: 2 * 1024 * 1024, // 2mb
    },
  },
};

export default config;
