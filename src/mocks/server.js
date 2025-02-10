import { createRequire } from 'module'
const require = createRequire(import.meta.url)

const jsonServer = require('json-server')
const path = require('path')

const server = jsonServer.create()
const router = jsonServer.router(path.join(process.cwd(), 'src/mocks/db.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)

server.post('/transactions', (request, response) => {
    try {
        console.log('Dados recebidos:', JSON.stringify(request.body, null, 2));
        
        const { amount, customer, items, paymentMethod } = request.body

        if (!amount || !customer || !items || !paymentMethod) {
            return response.status(400).json({ 
                error: "Dados inválidos",
                details: "Todos os campos são obrigatórios" 
            });
        }

        const newTransaction = {
            id: Date.now(),
            status: Math.random() > 0.2 ? 'authorized' : 'failed',
            amount,
            customer,
            items,
            paymentMethod: {
                type: paymentMethod.type,
                card: {
                    firstDigits: paymentMethod.card.firstDigits,
                    lastDigits: paymentMethod.card.lastDigits,
                    expirationDate: paymentMethod.card.expirationDate,
                    installments: paymentMethod.card.installments
                }
            }
        }

        router.db.get('transactions').push(newTransaction).write()
        return response.status(201).json(newTransaction);
    } catch (error) {
        console.error('Erro ao processar transação:', error);
        return response.status(500).json({ 
            error: "Erro interno do servidor",
            details: error.message 
        });
    }
});

server.get('/transactions/:id', (request, response) => {
    const { id } = request.params
    const transaction = router.db.get('transactions').find({ id: Number(id) }).value()

    if (!transaction) {
        return response.status(404).json({ error: "Transação não encontrada" })
    }

    response.json(transaction)
})

server.use(router)

server.listen(5000, () => {
    console.log("🚀 JSON Server rodando em http://localhost:5000")
})
