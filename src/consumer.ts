import { Worker } from 'bullmq'
import redisConnection from './redis-conection'

class Consumer {
    private worker: Worker
    constructor(name: string) {
        this.worker = new Worker(name, async (job) => {
            console.log(job, 'job processed')
        }, { connection: redisConnection })
    }
}

export default new Consumer('test')