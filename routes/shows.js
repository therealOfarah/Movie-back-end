import { Router } from 'express'
import * as showCtrl from '../controllers/shows.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/',checkAuth,showCtrl.saveShow)

export { router }
