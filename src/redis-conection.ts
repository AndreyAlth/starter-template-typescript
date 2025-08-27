import Redis from 'ioredis'

const redisConfig = {
  port: 6379,
  host: '127.0.0.1',
  maxRetriesPerRequest: null,
};

const redisConnection = new Redis(redisConfig);

redisConnection.on('error', (err: any) => {
  console.log(err)
})

redisConnection.on('ready', () => {
  console.log('Redis client ready')
})

redisConnection.on('connect', () => {
  console.log('Redis client connected')
})

export default redisConnection;