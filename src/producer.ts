import { Queue } from 'bullmq'
import redisConnection from './redis-conection'

export default class Producer {
    private queue: Queue
    constructor(name: string) {
        this.queue = new Queue(name, {
            connection: redisConnection
        })
    }

    async addJob(name: string, data: any) {
        await this.queue.add(name, data)
    }
}
