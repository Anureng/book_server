const express = require("express");
const router = express.Router();

const {
  createBook,
  getBookId,
  allBook,
  deleteBook,
  updateBook,
  Rate,
  Review,
} = require("../controller/book");

router.route("/books").post(createBook);
router.route("/allbooks").get(allBook);
router.route("/getBookId/:id").get(getBookId);
router.route("/deleteBook/:id").delete(deleteBook);
router.route("/updateBook/:id").put(updateBook);
router.route("/Rate/:id").patch(Rate);
router.route("/Review/:id").patch(Review);

module.exports = router;
