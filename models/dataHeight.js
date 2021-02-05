/* jshint indent: 1 */
const Sequelize = require('sequelize')

const db = require("../config/database")

const dataHeight = db.define('dataHeight', {
	PrimaryKey: {
			type: Sequelize.TEXT,
			allowNull: true,
			primaryKey: true,
			references: {
				model: 'dataHeader',
				key: 'PrimaryKey'
			},
			field: 'PrimaryKey'
		},
		DBKey: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'DBKey'
		},
		PointLoc: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'PointLoc'
		},
		PointNbr: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'PointNbr'
		},
		RecKey: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'RecKey'
		},
		Height: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Height'
		},
		Species: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Species'
		},
		Chkbox: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Chkbox'
		},
		type: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'type'
		},
		GrowthHabit_measured: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'GrowthHabit_measured'
		},
		LineKey: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'LineKey'
		},
		DateModified: {
			type: Sequelize.DATEONLY,
			allowNull: true,
			field: 'DateModified'
		},
		FormType: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'FormType'
		},
		FormDate: {
			type: Sequelize.DATEONLY,
			allowNull: true,
			field: 'FormDate'
		},
		// Observer: {
		// 	type: Sequelize.TEXT,
		// 	allowNull: true,
		// 	field: 'Observer'
		// },
		// Recorder: {
		// 	type: Sequelize.TEXT,
		// 	allowNull: true,
		// 	field: 'Recorder'
		// },
		// DataEntry: {
		// 	type: Sequelize.TEXT,
		// 	allowNull: true,
		// 	field: 'DataEntry'
		// },
		// DataErrorChecking: {
		// 	type: Sequelize.TEXT,
		// 	allowNull: true,
		// 	field: 'DataErrorChecking'
		// },
		Direction: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'Direction'
		},
		Measure: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Measure'
		},
		LineLengthAmount: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'LineLengthAmount'
		},
		SpacingIntervalAmount: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'SpacingIntervalAmount'
		},
		SpacingType: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'SpacingType'
		},
		HeightOption: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'HeightOption'
		},
		HeightUOM: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'HeightUOM'
		},
		ShowCheckbox: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'ShowCheckbox'
		},
		CheckboxLabel: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'CheckboxLabel'
		},
		ProjectKey: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ProjectKey'
		},
		UOM: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'UOM'
		},
		DateLoadedInDb: {
			type: Sequelize.DATEONLY,
			allowNull: true,
			field: 'DateLoadedInDb'
		}
	}, {
		tableName: 'dataHeight',
		createdAt: false,
		updatedAt: false
	});
module.exports = dataHeight
