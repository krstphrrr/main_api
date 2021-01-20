/* jshint indent: 1 */
const Sequelize = require('sequelize')

const db = require("../config/database")

const dataLPI = db.define('dataLpi', {
	LineKey: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'LineKey'
		},
		RecKey: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'RecKey'
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
		Observer: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Observer'
		},
		Recorder: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Recorder'
		},
		DataEntry: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'DataEntry'
		},
		DataErrorChecking: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'DataErrorChecking'
		},
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
		PrimaryKey: {
			type: Sequelize.TEXT,
			allowNull: true,
			primaryKey:true,
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
		ShrubShape: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ShrubShape'
		},
		layer: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'layer'
		},
		code: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'code'
		},
		chckbox: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'chckbox'
		},
		ProjectKey: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ProjectKey'
		}
	}, {
		tableName: 'dataLPI',
		createdAt: false,
		updatedAt:false
	});
module.exports = dataLPI
