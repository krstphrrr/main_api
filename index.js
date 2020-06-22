const express = require('express')
const app = express()
const db = require('./config/database')
const cors = require('cors')
//routes
const stateRoutes = require('./routes/stateget')

//models
const Header = require('./models/dataHeader')
const Gap = require('./models/dataGap')
const Height = require('./models/dataHeight')
const LPI = require('./models/dataLPI')
const SoilStab = require('./models/dataSoilStability')
const SpecInv = require('./models/dataSpeciesInventory')


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

db.authenticate()
    .then(() => console.log('database connected...'))
    .catch(err => console.log('error:'+ err));


app.use((req, res, next)=>{
  res.setHeader('Access-Control-Allow-Origin','http://localhost:4200','https://landscapedatacommons.org', 'https://test.landscapedatacommons.org')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, PATCH')
  res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization')
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('set-cookie',[
    'same-site-cookie=bar; SameSite=None; Secure'
  ])
  next()
})



app.get('/', (req, res) => 
  res.send('queslake')
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



