import { createRequire } from 'module'
const require = createRequire(import.meta.url)

const jsonServer = require('json-server')
const path = require('path')

const server = jsonServer.create()
const router = jsonServer.router(path.join(process.cwd(), 'src/mocks/db.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)

// Simulando criação de pagamento
server.post('/transactions', (request, response) => {
    const { amount, customer, items, paymentMethod } = request.body

    if (!amount || !customer || !items || !paymentMethod) {
        return response.status(400).json({ error: "Dados inválidos" })
    }

    // Simulando um pagamento falhando ou autorizado aleatoriamente
    const status = Math.random() > 0.2 ? 'authorized' : 'failed'

    const newTransaction = {
        id: Date.now(),
        status,
        amount,
        customer,
        items,
        paymentMethod: {
            type: 'card',
            card: {
                firstDigits: paymentMethod.card.number.substring(0, 4),
                lastDigits: paymentMethod.card.number.slice(-4),
                holderName: paymentMethod.card.holderName,
                expirationDate: paymentMethod.card.expirationDate,
                installments: paymentMethod.card.installments
            }
        }
    }

    router.db.get('transactions').push(newTransaction).write()

    response.status(201).json(newTransaction)
})

server.use(router)

server.listen(5000, () => {
    console.log("🚀 JSON Server rodando em http://localhost:5000")
})
