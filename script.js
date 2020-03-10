const Axios = require('axios')
const Consola = require('consola')
const db = require('then-redis').createClient()

db.smembers('endpoints').then(endpoints => Promise.all(endpoints.map(endpoint => Axios.get(endpoint))).then(
  responses => {
      Consola.success('Called all endpoints successfully.')

      endpoints.forEach((endpoint, index) => {
        Consola.info(`${endpoint} : ${responses[index].status}`)
      })

      process.exit(0)
  }
))
