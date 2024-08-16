const router = require("express").Router();
const authenticateUser = require("../middleware/authUser");
const { addBook, updateBook, deleteBook, getBooks, recentBooks, getBook } = require("../controllers/book.controller");

router.post("/addBook", authenticateUser, addBook);
router.put("/updateBook", authenticateUser, updateBook);
router.delete("/deleteBook", authenticateUser, deleteBook);
router.get("/getBooks", getBooks);
router.get("/recentBooks", recentBooks);
router.get("/getBook/:id", getBook);

module.exports = router;