/* jshint indent: 1 */
const Sequelize = require('sequelize')
const db = require("../config/database")
const Header = require('../models/dataHeader')



const geoIndicators =  db.define('geoIndicators', {

		AH_AnnGrassCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'AH_AnnGrassCover'
		},
		AH_ForbCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'AH_ForbCover'
		},
		AH_GrassCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'AH_GrassCover'
		},
		AH_NonNoxAnnForbCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'AH_NonNoxAnnForbCover'
		},
		AH_NonNoxAnnForbGrassCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'AH_NonNoxAnnForbGrassCover'
		},
		AH_NonNoxAnnGrassCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'AH_NonNoxAnnGrassCover'
		},
		AH_NonNoxCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'AH_NonNoxCover'
		},
		AH_NonNoxPerenForbCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'AH_NonNoxPerenForbCover'
		},
		AH_NonNoxPerenForbGrassCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'AH_NonNoxPerenForbGrassCover'
		},
		AH_NonNoxPerenGrassCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'AH_NonNoxPerenGrassCover'
		},
		AH_NonNoxShrubCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'AH_NonNoxShrubCover'
		},
		AH_NonNoxSubShrubCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'AH_NonNoxSubShrubCover'
		},
		AH_NonNoxSucculentCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'AH_NonNoxSucculentCover'
		},
		AH_NonNoxTreeCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'AH_NonNoxTreeCover'
		},
		AH_NonSagebrushShrubCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'AH_NonSagebrushShrubCover'
		},
		AH_NoxAnnForbCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'AH_NoxAnnForbCover'
		},
		AH_NoxAnnForbGrassCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'AH_NoxAnnForbGrassCover'
		},
		AH_NoxAnnGrassCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'AH_NoxAnnGrassCover'
		},
		AH_NoxCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'AH_NoxCover'
		},
		AH_NoxPerenForbCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'AH_NoxPerenForbCover'
		},
		AH_NoxPerenForbGrassCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'AH_NoxPerenForbGrassCover'
		},
		AH_NoxPerenGrassCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'AH_NoxPerenGrassCover'
		},
		AH_NoxShrubCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'AH_NoxShrubCover'
		},
		AH_NoxSubShrubCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'AH_NoxSubShrubCover'
		},
		AH_NoxSucculentCover: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'AH_NoxSucculentCover'
		},
		AH_NoxTreeCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'AH_NoxTreeCover'
		},
		AH_PerenForbCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'AH_PerenForbCover'
		},
		AH_PerenGrassCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'AH_PerenGrassCover'
		},
		AH_PerenGrassForbCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'AH_PerenGrassForbCover'
		},
		AH_PreferredForb: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'AH_PreferredForb'
		},
		AH_PreferredForbCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'AH_PreferredForbCover'
		},
		AH_SagebrushCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'AH_SagebrushCover'
		},
		AH_SagebrushCover_Live: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'AH_SagebrushCover_Live'
		},
		AH_ShortPerenGrassCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'AH_ShortPerenGrassCover'
		},
		AH_ShrubCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'AH_ShrubCover'
		},
		AH_TallPerenGrassCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'AH_TallPerenGrassCover'
		},
		BareSoilCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'BareSoilCover'
		},
		County: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'County'
		},
		DBKey: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'DBKey'
		},
		DateEstablished: {
			type: Sequelize.DATE,
			allowNull: true,
			field: 'DateEstablished'
		},
		DateLoadedInDb: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'DateLoadedInDb'
		},
		DateVisited: {
			type: Sequelize.DATE,
			allowNull: true,
			field: 'DateVisited'
		},
		Elevation: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'ELEVATION'
		},
		EcolSiteName: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'EcolSiteName'
		},
		EcologicalSiteId: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'EcologicalSiteId'
		},
		FH_CyanobacteriaCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'FH_CyanobacteriaCover'
		},
		FH_DepSoilCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'FH_DepSoilCover'
		},
		FH_DuffCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'FH_DuffCover'
		},
		FH_EmbLitterCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'FH_EmbLitterCover'
		},
		FH_HerbLitterCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'FH_HerbLitterCover'
		},
		FH_LichenCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'FH_LichenCover'
		},
		FH_MossCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'FH_MossCover'
		},
		FH_NonNoxAnnForbCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'FH_NonNoxAnnForbCover'
		},
		FH_NonNoxAnnGrassCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'FH_NonNoxAnnGrassCover'
		},
		FH_NonNoxPerenForbCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'FH_NonNoxPerenForbCover'
		},
		FH_NonNoxPerenGrassCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'FH_NonNoxPerenGrassCover'
		},
		FH_NonNoxShrubCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'FH_NonNoxShrubCover'
		},
		FH_NonNoxSubShrubCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'FH_NonNoxSubShrubCover'
		},
		FH_NonNoxSucculentCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'FH_NonNoxSucculentCover'
		},
		FH_NonNoxTreeCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'FH_NonNoxTreeCover'
		},
		FH_NoxAnnForbCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'FH_NoxAnnForbCover'
		},
		FH_NoxAnnGrassCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'FH_NoxAnnGrassCover'
		},
		FH_NoxPerenForbCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'FH_NoxPerenForbCover'
		},
		FH_NoxPerenGrassCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'FH_NoxPerenGrassCover'
		},
		FH_NoxShrubCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'FH_NoxShrubCover'
		},
		FH_NoxSubShrubCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'FH_NoxSubShrubCover'
		},
		FH_NoxSucculentCover: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'FH_NoxSucculentCover'
		},
		FH_NoxTreeCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'FH_NoxTreeCover'
		},
		FH_RockCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'FH_RockCover'
		},
		FH_SagebrushCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'FH_SagebrushCover'
		},
		FH_TotalLitterCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'FH_TotalLitterCover'
		},
		FH_VagrLichenCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'FH_VagrLichenCover'
		},
		FH_WaterCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'FH_WaterCover'
		},
		FH_WoodyLitterCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'FH_WoodyLitterCover'
		},
		GapCover_101_200: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'GapCover_101_200'
		},
		GapCover_200_plus: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'GapCover_200_plus'
		},
		GapCover_25_50: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'GapCover_25_50'
		},
		GapCover_25_plus: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'GapCover_25_plus'
		},
		GapCover_51_100: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'GapCover_51_100'
		},
		GlobalID: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'GlobalID'
		},
		Hgt_Forb_Avg: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Hgt_Forb_Avg'
		},
		Hgt_Grass_Avg: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Hgt_Grass_Avg'
		},
		Hgt_Herbaceous_Avg: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Hgt_Herbaceous_Avg'
		},
		Hgt_NonNoxPerenGrass_Avg: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Hgt_NonNoxPerenGrass_Avg'
		},
		Hgt_NonSagebrushShrub_Avg: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Hgt_NonSagebrushShrub_Avg'
		},
		Hgt_NoxPerenGrass_Avg: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Hgt_NoxPerenGrass_Avg'
		},
		Hgt_PerenForbGrass_Avg: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Hgt_PerenForbGrass_Avg'
		},
		Hgt_PerenForb_Avg: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Hgt_PerenForb_Avg'
		},
		Hgt_PerenGrass_Avg: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Hgt_PerenGrass_Avg'
		},
		Hgt_Sagebrush_Avg: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Hgt_Sagebrush_Avg'
		},
		Hgt_Sagebrush_Live_Avg: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Hgt_Sagebrush_Live_Avg'
		},
		Hgt_ShortPerenGrass_Avg: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Hgt_ShortPerenGrass_Avg'
		},
		Hgt_TallPerenGrass_Avg: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Hgt_TallPerenGrass_Avg'
		},
		Hgt_Woody_Avg: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Hgt_Woody_Avg'
		},
		Latitude_NAD83: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Latitude_NAD83'
		},
		LocationType: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'LocationType'
		},
		Longitude_NAD83: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Longitude_NAD83'
		},
		NumSpp_NonNoxPlant: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'NumSpp_NonNoxPlant'
		},
		NumSpp_NoxPlant: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'NumSpp_NoxPlant'
		},
		NumSpp_PreferredForb: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'NumSpp_PreferredForb'
		},
		PlotKey: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'PLOTKEY'
		},
		PercentCoveredByEcoSite: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'PercentCoveredByEcoSite'
		},
		PlotID: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'PlotID'
		},
		PLOTKEY: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'PLOTKEY'
		},
		PrimaryKey: {
			type: Sequelize.STRING,
			allowNull: true,
			primaryKey:true,
			references: {
				model: "dataHeader",
				key: 'PrimaryKey'
			},
			field: 'PrimaryKey'
		},
		ProjectName: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'ProjectName'
		},
		RH_AnnualProd: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'RH_AnnualProd'
		},
		RH_BareGround: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'RH_BareGround'
		},
		RH_BioticIntegrity: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'RH_BioticIntegrity'
		},
		RH_CommentsBI: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'RH_CommentsBI'
		},
		RH_CommentsHF: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'RH_CommentsHF'
		},
		RH_CommentsSS: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'RH_CommentsSS'
		},
		RH_Compaction: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'RH_Compaction'
		},
		RH_DeadDyingPlantParts: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'RH_DeadDyingPlantParts'
		},
		RH_FuncSructGroup: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'RH_FuncSructGroup'
		},
		RH_Gullies: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'RH_Gullies'
		},
		RH_HydrologicFunction: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'RH_HydrologicFunction'
		},
		RH_InvasivePlants: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'RH_InvasivePlants'
		},
		RH_LitterAmount: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'RH_LitterAmount'
		},
		RH_LitterMovement: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'RH_LitterMovement'
		},
		RH_PedestalsTerracettes: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'RH_PedestalsTerracettes'
		},
		RH_PlantCommunityComp: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'RH_PlantCommunityComp'
		},
		RH_ReprodCapabilityPeren: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'RH_ReprodCapabilityPeren'
		},
		RH_Rills: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'RH_Rills'
		},
		RH_SoilSiteStability: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'RH_SoilSiteStability'
		},
		RH_SoilSurfLossDeg: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'RH_SoilSurfLossDeg'
		},
		RH_SoilSurfResisErosion: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'RH_SoilSurfResisErosion'
		},
		RH_WaterFlowPatterns: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'RH_WaterFlowPatterns'
		},
		RH_WindScouredAreas: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'RH_WindScouredAreas'
		},
		RecordCount: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'RecordCount'
		},
		SagebrushShape_All_ColumnCount: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'SagebrushShape_All_ColumnCount'
		},
		SagebrushShape_All_Predominant: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'SagebrushShape_All_Predominant'
		},
		SagebrushShape_All_SpreadCount: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'SagebrushShape_All_SpreadCount'
		},
		SagebrushShape_Live_ColumnCount: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'SagebrushShape_Live_ColumnCount'
		},
		SagebrushShape_Live_Predominant: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'SagebrushShape_Live_Predominant'
		},
		SagebrushShape_Live_SpreadCount: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'SagebrushShape_Live_SpreadCount'
		},
		SoilStability_All: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'SoilStability_All'
		},
		SoilStability_Protected: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'SoilStability_Protected'
		},
		SoilStability_Unprotected: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'SoilStability_Unprotected'
		},
		Spp_Nox: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'Spp_Nox'
		},
		Spp_PreferredForb: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'Spp_PreferredForb'
		},
		Spp_Sagebrush: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'Spp_Sagebrush'
		},
		Spp_ShortPerenGrass: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'Spp_ShortPerenGrass'
		},
		Spp_TallPerenGrass: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'Spp_TallPerenGrass'
		},
		State: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'State'
		},
		TotalFoliarCover: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'TotalFoliarCover'
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
		// wkb_geometry: {
		// 	type: Sequelize.GEOMETRY('Point', 4326),
		// 	allowNull: true,
		// 	field: 'wkb_geometry'
		// },
		// Public: {
		// 	type: Sequelize.BOOLEAN,
		// 	allowNull: true,
		// 	field: 'Public'
		// }
	}, {
		tableName: 'geoIndicators',
		createdAt: false,
		updatedAt:false
	})
	module.exports = geoIndicators
