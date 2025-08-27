import { Queue, Worker, } from 'bullmq'
import redisConnection from './redis-conection'



// const videoEncodingQueue = new Queue('video encoding', {
//     connection: redisConnection
// })

// const tasksQueue = new Queue('tasks', {
//     connection: redisConnection
// })

// videoEncodingQueue.add('video encoding', { videoId: 1 })
// tasksQueue.add('tasks', { task: 'task', description: 'task to handle' })

// console.log(videoEncodingQueue)


const worker = new Worker('video encoding', async (job) => {
    console.log(job)
}, { connection: redisConnection })

// worker.run()