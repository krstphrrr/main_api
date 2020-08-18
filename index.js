const express = require('express')
const app = express()
const db = require('./config/database')
const cors = require('cors')
const helmet = require('helmet')
//routes
const stateRoutes = require('./routes/stateget')

//models
const Header = require('./models/dataHeader')
const Gap = require('./models/dataGap')
const Height = require('./models/dataHeight')
const LPI = require('./models/dataLPI')
const SoilStab = require('./models/dataSoilStability')
const SpecInv = require('./models/dataSpeciesInventory')
const GeoInd = require('./models/geoIndicators')

// associating header to gap through primarykey
Header.hasMany(Gap,{
  foreignKey:"PrimaryKey",
  as:'gap' 
})
Gap.belongsTo(Header,{
  foreignKey:"PrimaryKey",
})
// associating header to height 
Height.belongsTo(Header,{
  foreignKey:"PrimaryKey",
})
Header.hasMany(Height,{
  foreignKey:"PrimaryKey",
  as:"height"
})
//associating header to lpi 
Header.hasMany(LPI, {
  foreignKey: "PrimaryKey",
  as: "lpi"
})
LPI.belongsTo(Header, {
  foreignKey:"PrimaryKey"
})
// associating header to soil stability 
Header.hasMany(SoilStab, {
  foreignKey:"PrimaryKey",
  as: "soilstab"
})
SoilStab.belongsTo(Header, {
  foreignKey:"PrimaryKey"
})
// associatiung header to species inventory
Header.hasMany(SpecInv,{
  foreignKey:"PrimaryKey",
  as: "speciesinv"
})
SpecInv.belongsTo(Header,{
  foreignKey:"PrimaryKey"
})

////

Header.hasMany(GeoInd,{
  foreignKey:"PrimaryKey"
})
GeoInd.belongsTo(Header,{
  foreignKey:"PrimaryKey",
  as: "geoindicators"
})

db.authenticate()
    .then(() => console.log('database connected...'))
    .catch(err => console.log('error:'+ err));

app.use(cors())
app.use(helmet())



app.get('/', (req, res) => 
  res.send('ldc api up')
)

//routes 

app.use('/api', stateRoutes)


db
  .sync({logging:false})
  .catch(err=>{
    console.log(err)
  })
  .then(result=>{
    const server = app.listen(process.env.PORT || 5002)
  })



