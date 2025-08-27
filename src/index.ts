import express from 'express'
import Producer from './producer'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

const producer = new Producer('test')

app.post('/add-job', async (req, res) => {
    const { name, data } = req.body
    const job = await producer.addJob(name, data)
    res.json({ msg: 'job added', job })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})