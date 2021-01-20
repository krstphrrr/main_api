/* jshint indent: 1 */
const Sequelize = require('sequelize')

const db = require("../config/database")

const dataSpeciesInventory = db.define('dataSpeciesInventory', {
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
		SpecRichMethod: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'SpecRichMethod'
		},
		SpecRichMeasure: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'SpecRichMeasure'
		},
		SpecRichNbrSubPlots: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'SpecRichNbrSubPlots'
		},
		SpecRich1Container: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'SpecRich1Container'
		},
		SpecRich1Shape: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'SpecRich1Shape'
		},
		SpecRich1Dim1: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'SpecRich1Dim1'
		},
		SpecRich1Dim2: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'SpecRich1Dim2'
		},
		SpecRich1Area: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'SpecRich1Area'
		},
		Notes: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Notes'
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
		Species: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Species'
		},
		ProjectKey: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ProjectKey'
		},
		SpeciesCount: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'SpeciesCount'
		},
		Density: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Density'
		},
		Plotkey: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Plotkey'
		},
		DateLoadedInDb: {
			type: Sequelize.DATEONLY,
			allowNull: true,
			field: 'DateLoadedInDb'
		}
	}, {
		tableName: 'dataSpeciesInventory',
		createdAt: false,
		updatedAt:false
	});
module.exports = dataSpeciesInventory
