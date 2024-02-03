const express = require('express');
const {getAllAdmins, createAdmin, updateAdmin, deleteAdmin} = require('../controllers/admins')
const router = express.Router();


router.route('/').get(getAllAdmins).post(createAdmin);
router.route('/:id').patch(updateAdmin).delete(deleteAdmin);

module.exports = router;