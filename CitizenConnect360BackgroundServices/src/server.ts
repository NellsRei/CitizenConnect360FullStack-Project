import express from 'express';
import cron from 'node-cron';
import { reset, run} from './EmailServices';

const app = express()


cron.schedule('*/10 * * * * *', async () => {
    try {
        await run()
        // await reset()

    } catch (error) {
        console.error(error)
    }
})

app.listen(1001, () => {
    console.log('Citizen Connect360 BackgroundServices Server running...')
})
