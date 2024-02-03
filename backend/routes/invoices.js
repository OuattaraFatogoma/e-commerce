const express = require('express');
const {getAllInvoices, createInvoice, getInvoice, updateInvoice, deleteInvoice} = require('../controllers/invoices')
const router = express.Router();


router.route('/').get(getAllInvoices).post(createInvoice);
router.route('/:id').get(getInvoice).patch(updateInvoice).delete(deleteInvoice);

module.exports = router;