import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
const router = express.Router();
import {
    categoryControlller,
    createCategoryController,
    deleteCategoryCOntroller,
    singleCategoryController,
    updateCategoryController,
} from "../controllers/categoryController.js";

//routes
// create category
router.post(
    "/create-category",
    requireSignIn,
    isAdmin,
    createCategoryController
);

//update category
router.put(
    "/update-category/:id",
    requireSignIn,
    isAdmin,
    updateCategoryController
);

//getALl category
router.get("/get-category", categoryControlller);


//single category
router.get("/single-category/:slug", singleCategoryController);

//delete category
router.delete(
    "/delete-category/:id",
    requireSignIn,
    isAdmin,
    deleteCategoryCOntroller
);
export default router;

