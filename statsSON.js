let objStats = {
  table: []
};

for(let index = 1; index<894;index++)
objStats.table.push({id:index, hp:Math.floor(Math.random()*1000), attack:Math.floor(Math.random()*150), defense :Math.floor(Math.random()*150) });
var json = JSON.stringify(objStats);
var fs = require('fs');
fs.readFile('script.json', 'utf8', function (err, data) {
fs.writeFile('script.json', json, function(err, result) {
   if(err) console.log('error', err);
   console.log()
 });
}); 

