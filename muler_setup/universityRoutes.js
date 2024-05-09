import express from "express"
import UniversityController from "./universitiesController.js"
import upload from "./multerConfig.js"


const router = express.Router()

router.post("/admin/upload", upload.single('file'), UniversityController.addUniversity)


const universityRoutes = router;
export default universityRoutes;