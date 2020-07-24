/* jshint indent: 1 */
const Sequelize = require('sequelize')

const db = require("../config/database")

const dataGap = db.define('dataGap', {
	LineKey: {
			type: Sequelize.STRING,
			allowNull: true,
			primaryKey:true,
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
			type: Sequelize.DOUBLE,
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
		GapMin: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'GapMin'
		},
		GapData: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'GapData'
		},
		PerennialsCanopy: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'PerennialsCanopy'
		},
		AnnualGrassesCanopy: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'AnnualGrassesCanopy'
		},
		AnnualForbsCanopy: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'AnnualForbsCanopy'
		},
		OtherCanopy: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'OtherCanopy'
		},
		Notes: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Notes'
		},
		NoCanopyGaps: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'NoCanopyGaps'
		},
		NoBasalGaps: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'NoBasalGaps'
		},
		PerennialsBasal: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'PerennialsBasal'
		},
		AnnualGrassesBasal: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'AnnualGrassesBasal'
		},
		AnnualForbsBasal: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'AnnualForbsBasal'
		},
		OtherBasal: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'OtherBasal'
		},
		PrimaryKey: {
			type: Sequelize.TEXT,
			allowNull: true,
			primaryKey: true,
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
		SeqNo: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'SeqNo'
		},
		RecType: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'RecType'
		},
		GapStart: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'GapStart'
		},
		GapEnd: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'GapEnd'
		},
		Gap: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Gap'
		},
		source: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'source'
		},
		State: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'STATE'
		},
		PlotKey: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'PLOTKEY'
		},
		DateLoadedInDb: {
			type: Sequelize.DATEONLY,
			allowNull: true,
			field: 'DateLoadedInDb'
		}
	}, {
		tableName: 'dataGap',
		createdAt: false,
		updatedAt:false
	});
module.exports = dataGap
