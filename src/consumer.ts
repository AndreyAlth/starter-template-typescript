import { Worker, Job } from 'bullmq'
import redisConnection from './redis-conection'

class Consumer {
    private worker: Worker
    constructor(name: string) {
        this.worker = new Worker(name, async (job: Job) => {
            console.log(job.name, 'job processed')
        }, { connection: redisConnection })
    }
}

export default new Consumer('test')