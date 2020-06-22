/* jshint indent: 1 */
const Sequelize = require('sequelize')

const db = require("../config/database")

const dataLPI = db.define('dataLpi', {
		lineKey: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'LineKey'
		},
		recKey: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'RecKey'
		},
		dateModified: {
			type: Sequelize.DATEONLY,
			allowNull: true,
			field: 'DateModified'
		},
		formType: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'FormType'
		},
		formDate: {
			type: Sequelize.DATEONLY,
			allowNull: true,
			field: 'FormDate'
		},
		observer: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Observer'
		},
		recorder: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Recorder'
		},
		dataEntry: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'DataEntry'
		},
		dataErrorChecking: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'DataErrorChecking'
		},
		direction: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'Direction'
		},
		measure: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Measure'
		},
		lineLengthAmount: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'LineLengthAmount'
		},
		spacingIntervalAmount: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'SpacingIntervalAmount'
		},
		spacingType: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'SpacingType'
		},
		heightOption: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'HeightOption'
		},
		heightUom: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'HeightUOM'
		},
		showCheckbox: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'ShowCheckbox'
		},
		checkboxLabel: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'CheckboxLabel'
		},
		primaryKey: {
			type: Sequelize.TEXT,
			allowNull: true,
			primaryKey:true,
			references: {
				model: 'dataHeader',
				key: 'PrimaryKey'
			},
			field: 'PrimaryKey'
		},
		dbKey: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'DBKey'
		},
		pointLoc: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'PointLoc'
		},
		pointNbr: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'PointNbr'
		},
		shrubShape: {
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
		source: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'source'
		}
	}, {
		tableName: 'dataLPI',
		createdAt: false,
		updatedAt:false
	});
module.exports = dataLPI
