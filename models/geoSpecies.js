const Sequelize = require('sequelize')
const db = require("../config/database")
// const Header = require('../models/dataHeader')



const geoSpecies =  db.define('geoSpecies', {
		// ogcFid: {
		// 	type: Sequelize.INTEGER,
		// 	allowNull: false,
		// 	primaryKey: true,
		// 	autoIncrement: true,
		// 	field: 'ogc_fid'
		// },
		AH_SpeciesCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'AH_SpeciesCover'
		},
		AH_SpeciesCover_n: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'AH_SpeciesCover_n'
		},
		DBKey: {
			type: Sequelize.STRING,
			allowNull: true,
			primaryKey:true,
			field: 'DBKey'
		},
		Duration: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'Duration'
		},
		GlobalID: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'GlobalID'
		},
		GrowthHabit: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'GrowthHabit'
		},
		GrowthHabitSub: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'GrowthHabitSub'
		},
		Hgt_Species_Avg: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Hgt_Species_Avg'
		},
		Hgt_Species_Avg_n: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Hgt_Species_Avg_n'
		},
		Latitude_NAD83: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'latitude_nad83'
		},
		Longitude_NAD83: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Longitude_NAD83'
		},
		Noxious: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'Noxious'
		},
		PlotID: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'PlotID'
		},
		PrimaryKey: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'PrimaryKey'
		},
		SG_Group: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'SG_Group'
		},
		Species: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'Species'
		},
		SpeciesState: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'SpeciesState'
		},
		created_date: {
			type: Sequelize.DATE,
			allowNull: true,
			field: 'created_date'
		},
		created_user: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'created_user'
		},
		last_edited_date: {
			type: Sequelize.DATE,
			allowNull: true,
			field: 'last_edited_date'
		},
		last_edited_user: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'last_edited_user'
		},
		wkb_geometry: {
			type: Sequelize.GEOMETRY('Point', 4326),
			allowNull: true,
			field: 'wkb_geometry'
		},
		DateLoadedInDb: {
			type: Sequelize.DATEONLY,
			allowNull: true,
			field: 'DateLoadedInDb'
		},
		Public: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'Public'
		}
	}, {
		tableName: 'geoSpecies',
		createdAt: false,
		updatedAt:false
	});
	module.exports = geoSpecies
