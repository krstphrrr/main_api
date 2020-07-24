/* jshint indent: 1 */
const Sequelize = require('sequelize')

const db = require("../config/database")

const dataHeader = db.define('dataHeader', {
	PrimaryKey: {
			type: Sequelize.STRING,
			allowNull: false,
			primaryKey: true,
			field: 'PrimaryKey'
		},
		SpeciesState: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'SpeciesState'
		},
		PlotID: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'PlotID'
		},
		PlotKey: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'PlotKey'
		},
		DBKey: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'DBKey'
		},
		EcologicalSiteId: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'EcologicalSiteId'
		},
		Latitude_NAD83: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Latitude_NAD83'
		},
		Longitude_NAD83: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Longitude_NAD83'
		},
		State: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'State'
		},
		County: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'County'
		},
		DateEstablished: {
			type: Sequelize.DATEONLY,
			allowNull: true,
			field: 'DateEstablished'
		},
		ProjectName: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ProjectName'
		},
		source: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'source'
		},
		LocationType: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'LocationType'
		},
		DateVisited: {
			type: Sequelize.DATEONLY,
			allowNull: true,
			field: 'DateVisited'
		},
		Elevation: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'ELEVATION'
		},
		PercentCoveredByEcoSite: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'PercentCoveredByEcoSite'
		},
		DateLoadedInDb: {
			type: Sequelize.DATEONLY,
			allowNull: true,
			field: 'DateLoadedInDb'
		},
		wkb_geometry: {
			type: Sequelize.GEOMETRY('Point', 4326),
			allowNull: true,
			field: 'wkb_geometry'
		}
	}, {
		tableName: 'dataHeader',
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

	module.exports = dataHeader

