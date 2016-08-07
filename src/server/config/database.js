var path = require('path')

module.exports = {
  development: {
    dialect: 'sqlite',
    storage: path.resolve(__dirname, '../db/database.sqlite')
  },
  // "test": {
  //   "username": "root",
  //   "password": null,
  //   "database": "database_test",
  //   "host": "127.0.0.1",
  //   "dialect": "mysql"
  // },
  production: {
    use_env_variable: 'DATABASE_URL'
  }
}
