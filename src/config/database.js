module.exports = {
  url: "mysql://root:bcd127@localhost:3306/techman",
  config: {
    dialect: "mysql",
    define: {
      timestamp: true,
      underscored: true,
    },
  },
};
