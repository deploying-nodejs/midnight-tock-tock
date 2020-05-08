require('dotenv').config()
const Axios = require('axios')
const Express = require('express')
const Consola = require('consola')
const BodyParser = require('body-parser')
const { config, engine } = require('express-edge')
const db = require('then-redis').createClient(process.env.REDIS_URL)

config({ cache: process.env.NODE_ENV === 'production' })

const app = Express()

app.use(engine)
app.use(BodyParser.urlencoded({ extended: false }))
app.use(BodyParser.json())

app.set('views', `${__dirname}/views`)

const port = process.env.PORT || 5000

app.get('/', (_, res) => res.render('index'))

app.post('/', (req, res) => {
    if (!req.body.endpoint)
        return res.status(400).json({
            error: 'Invalid endpoint provided.'
        })

    Axios.get(req.body.endpoint)
        .then(() => {
            db.sadd('endpoints', req.body.endpoint)
            res.json({})
        })
        .catch(() =>
            res.status(400).json({
                error: 'Invalid endpoint provided.'
            })
        )
})

app.get('*', (_, res) => res.redirect('/'))

app.listen(port, () => {
    Consola.success('Midnight tick tock running on port', port)
})
