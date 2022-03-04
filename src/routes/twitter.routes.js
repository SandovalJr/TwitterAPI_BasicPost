import { Router } from "express";
import {
  postTwitter1,
  postTwitter2,
  postTwitter3,
} from "../controllers/twitter.controller";
const router = Router();

// router.get("/", (req, res) => {
//   res.send("hi");
// });

router.post("/1.1/lists/create", postTwitter1);
router.post("/1.1/lists/members/create", postTwitter2);
router.post("/1.1/lists/members/create_all", postTwitter3);


export default router;
