module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    loc_development_development: {
      network_id: "5777",
      port: 7545,
      host: "127.0.0.1"

    }
  },
  mocha: {},
  compilers: {
    solc: {
      version: "0.8.17"
    }
  },
  db: {
    enabled: true,
    host: "127.0.0.1",
    adapter: {
      name: "sqlite",
      settings: {
        directory: ".db"
      }
    }
  }
};
