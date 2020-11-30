/* jshint indent: 1 */
const Sequelize = require('sequelize')

const db = require("../config/database")

const dataTest = db.define('testMet', {
	parameter_set: {
			type: Sequelize.REAL,
			allowNull: false,
			primaryKey: true,
			field: 'parameter_set'
		},
		likelihood: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'likelihood'
		},
		horizontal_flux_total: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'horizontal_flux_total'
		},
		vertical_flux: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'vertical_flux'
		},
		PM1: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'PM1'
		},
		PM2_5: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'PM2_5'
		},
		PM10: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'PM10'
		}
		
	}, {
		tableName: 'dataTest',
		createdAt: false,
		updatedAt:false,
		// classMethod:{
		// 	associate: (models)=>{
		// 	dataHeader.hasMany(models.dataGap,{
		// 		foreignKey: 'PrimaryKey',

		// 	})
		// 	}
		// }
	});

	module.exports = dataTest
