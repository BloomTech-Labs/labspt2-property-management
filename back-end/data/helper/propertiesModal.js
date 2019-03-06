const db = require('../../knex');

module.exports = {
	getPropertiesByOwner,
	getPropertiesByTen1,
	getPropertiesByTen2,
	createProperty,
	deleteProperty,
	getProperty,
	editProperty
};

function getPropertiesByTen1(houseId) {
	return db('property').then((res) => res.filter((prop) => prop.tenant1 == id));
}

function getPropertiesByTen2(houseId) {
	return db('properties').then((res) => res.filter((prop) => prop.tenant2 == id));
}

function getPropertiesByOwner(houseId) {
	return db('properties').then((res) => res.filter((prop) => prop.owner == id));
}

function getProperty(houseId) {
	return db('properties').where({ houseId }).first();
}

function createProperty(property) {
	return db('properties').insert(property, 'id');
}

function deleteProperty(houseId) {
	return db('properties').where({ id }).del();
}

function editProperty(houseId, property) {
	return db('properties').where({ id }).update(property, 'id');
}
