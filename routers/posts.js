import express from "express";
import controllerPosts from "../controllers/controllerPosts.js";
const router = express.Router()
/* index */
router.get("/",controllerPosts.index)

/* show */
router.get("/:id", controllerPosts.show)

/* destroy */

router.delete("/:id", controllerPosts.destroy)
export default router