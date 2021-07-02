import express from 'express';



import { currentUser } from '@tktickets193/common';
// import { currentUser } from '../../../common/src/middlewares/current-user'
// import { requireAuth } from '../middlewares/require-auth';

const router = express.Router();

router.get('/api/users/currentuser', currentUser, /*requireAuth,*/ (req, res) => {
  res.send({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter };
