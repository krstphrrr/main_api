/* jshint indent: 1 */
const Sequelize = require('sequelize')

const db = require("../config/database")

const dataSpeciesInventory = db.define('dataSpeciesInventory', {
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
		specRichMethod: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'SpecRichMethod'
		},
		specRichMeasure: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'SpecRichMeasure'
		},
		specRichNbrSubPlots: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'SpecRichNbrSubPlots'
		},
		specRich1Container: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'SpecRich1Container'
		},
		specRich1Shape: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'SpecRich1Shape'
		},
		specRich1Dim1: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'SpecRich1Dim1'
		},
		specRich1Dim2: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'SpecRich1Dim2'
		},
		specRich1Area: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'SpecRich1Area'
		},
		notes: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Notes'
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
		species: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Species'
		},
		source: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'source'
		},
		speciesCount: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'SpeciesCount'
		},
		density: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Density'
		},
		plotkey: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Plotkey'
		},
		dateLoadedInDb: {
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
