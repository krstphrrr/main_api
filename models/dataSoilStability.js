/* jshint indent: 1 */
const Sequelize = require('sequelize')

const db = require("../config/database")

const dataSoilStability = db.define('dataSoilStability', {
	PlotKey: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'PlotKey'
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
		LineKey: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'LineKey'
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
		SoilStabSubSurface: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'SoilStabSubSurface'
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
		Position: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Position'
		},
		Line: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'Line'
		},
		Pos: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'Pos'
		},
		Veg: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Veg'
		},
		Rating: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Rating'
		},
		Hydro: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Hydro'
		},
		ProjectKey: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ProjectKey'
		},
		DateLoadedInDb: {
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
