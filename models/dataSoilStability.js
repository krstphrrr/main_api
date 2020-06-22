/* jshint indent: 1 */
const Sequelize = require('sequelize')

const db = require("../config/database")

const dataSoilStability = db.define('dataSoilStability', {
		plotKey: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'PlotKey'
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
		lineKey: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'LineKey'
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
		soilStabSubSurface: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'SoilStabSubSurface'
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
		position: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Position'
		},
		line: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'Line'
		},
		pos: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'Pos'
		},
		veg: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Veg'
		},
		rating: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Rating'
		},
		hydro: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Hydro'
		},
		source: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'source'
		},
		dateLoadedInDb: {
			type: Sequelize.DATEONLY,
			allowNull: true,
			field: 'DateLoadedInDb'
		}
	}, {
		tableName: 'dataSoilStability',
		createdAt: false,
		updatedAt:false
	});
module.exports = dataSoilStability
