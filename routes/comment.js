const express = require('express');
const router = express.Router();
const commentsController = require('../controller/commentController');

router.get('/:thumbsID', commentsController.getComment);
router.post('/:thumbsID', commentsController.postComment);
// router.post('/', commentsController .postComment);


module.exports = router;