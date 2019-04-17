const express = require('express');
const router = express.Router();
const db = require('../data/helper/alertsModal');

// Get all alerts
router.get('/', (req, res) => {
	db.getAlerts().then((alerts) => res.status(200).json(alerts)).catch((err) => {
		res.status(500).json({ error: `${err}` });
	});
});

// Get an alert
router.get('/:id', (req, res) => {
	const { id } = req.params;
	db
		.getAlert(id)
		.then((alerts) => {
			if (alerts) {
				res.status(200).json(alerts);
			} else {
				res.status(404).json({ error: 'The specified alert does not exist.' });
			}
		})
		.catch((err) => {
			res.status(500).json({ error: `${err}` });
		});
});

// create alert
router.post('/', (req, res, next) => {
	const newAlert = req.body;
	db
		.createAlert(newAlert)
		.then((ids) => {
			db
				.getAlert(ids[0])
				.then((newAlert) => {
					res.status(201).json({ newAlert: newAlert.id });
				})
				.catch((err) => {
					console.log('error1', err);
					res.status(500).json({ error: `${err}` });
				});
		})
		.catch((err) => {
			console.log('error2', err);
			next('h500', err);
		});
});

// edit alert
router.put('/:id', (req, res, next) => {
	const { id } = req.params;
	const edit = req.body;

	db
		.editAlert(id, edit)
		.then((updated) => {
			if (updated) {
				res.status(200).json({
					message: 'Alert updated.'
				});
			} else {
				res.status(404).json({ error: 'No alert found.' });
			}
		})
		.catch((err) => {
			next('h500', err);
		});
});
