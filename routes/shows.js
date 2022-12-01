import { Router } from 'express'
import * as showCtrl from '../controllers/shows.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/


export { router }
