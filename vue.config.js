module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: "com.fglteam.fglhub",
        productName: "FGL Hub",
        linux: {
          icon: "build/icon.png",
          category: "Internet",
          target: ["AppImage"],
        },
      },
    },
  },
};
