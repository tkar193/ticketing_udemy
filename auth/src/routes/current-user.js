"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentUserRouter = void 0;
var express_1 = __importDefault(require("express"));
var common_1 = require("@tktickets193/common");
// import { currentUser } from '../../../common/src/middlewares/current-user'
// import { requireAuth } from '../middlewares/require-auth';
var router = express_1.default.Router();
exports.currentUserRouter = router;
router.get('/api/users/currentuser', common_1.currentUser, /*requireAuth,*/ function (req, res) {
    res.send({ currentUser: req.currentUser || null });
});
