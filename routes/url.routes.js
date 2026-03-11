import express from 'express'
import { createShortUrl, redirectUrl } from '../controllers/UrlControllers.js'

const urlRoute = express.Router()

urlRoute.post('/create', createShortUrl)
urlRoute.get('/:shortCode', redirectUrl)

export default urlRoute