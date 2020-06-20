/* jshint indent: 1 */
const Sequelize = require('sequelize')

const db = require("../config/database")

const dataGap = db.define('dataGap', {
		lineKey: {
			type: Sequelize.STRING,
			allowNull: true,
			primaryKey:true,
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
			type: Sequelize.DOUBLE,
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
		gapMin: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'GapMin'
		},
		gapData: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'GapData'
		},
		perennialsCanopy: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'PerennialsCanopy'
		},
		annualGrassesCanopy: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'AnnualGrassesCanopy'
		},
		annualForbsCanopy: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'AnnualForbsCanopy'
		},
		otherCanopy: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'OtherCanopy'
		},
		notes: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'Notes'
		},
		noCanopyGaps: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'NoCanopyGaps'
		},
		noBasalGaps: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'NoBasalGaps'
		},
		perennialsBasal: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'PerennialsBasal'
		},
		annualGrassesBasal: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'AnnualGrassesBasal'
		},
		annualForbsBasal: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'AnnualForbsBasal'
		},
		otherBasal: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'OtherBasal'
		},
		primaryKey: {
			type: Sequelize.TEXT,
			allowNull: true,
			primaryKey: true,
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
		seqNo: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'SeqNo'
		},
		recType: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'RecType'
		},
		gapStart: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'GapStart'
		},
		gapEnd: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'GapEnd'
		},
		gap: {
			type: Sequelize.DOUBLE,
			allowNull: true,
			field: 'Gap'
		},
		source: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'source'
		},
		state: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'State'
		},
		plotKey: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'PlotKey'
		},
		dateLoadedInDb: {
			type: Sequelize.DATEONLY,
			allowNull: true,
			field: 'DateLoadedInDb'
		}
	}, {
		tableName: 'dataGap',
		// associate: (models)=>{
		// 	dataGap.belongsTo(header,{
		// 		foreignKey:'PrimaryKey',
		// 	})
		// }
	});
module.exports = dataGap
