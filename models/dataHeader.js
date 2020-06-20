/* jshint indent: 1 */
const Sequelize = require('sequelize')

const db = require("../config/database")

const dataHeader = db.define('dataHeader', {
		primaryKey: {
			type: Sequelize.STRING,
			allowNull: false,
			primaryKey: true,
			field: 'PrimaryKey'
		},
		speciesState: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'SpeciesState'
		},
		plotId: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'PlotID'
		},
		plotKey: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'PlotKey'
		},
		dbKey: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'DBKey'
		},
		ecologicalSiteId: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'EcologicalSiteId'
		},
		latitudeNad83: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Latitude_NAD83'
		},
		longitudeNad83: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Longitude_NAD83'
		},
		state: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'State'
		},
		county: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'County'
		},
		dateEstablished: {
			type: Sequelize.DATEONLY,
			allowNull: true,
			field: 'DateEstablished'
		},
		projectName: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'ProjectName'
		},
		source: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'source'
		},
		locationType: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'LocationType'
		},
		dateVisited: {
			type: Sequelize.DATEONLY,
			allowNull: true,
			field: 'DateVisited'
		},
		elevation: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'ELEVATION'
		},
		percentCoveredByEcoSite: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'PercentCoveredByEcoSite'
		},
		dateLoadedInDb: {
			type: Sequelize.DATEONLY,
			allowNull: true,
			field: 'DateLoadedInDb'
		},
		wkbGeometry: {
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

