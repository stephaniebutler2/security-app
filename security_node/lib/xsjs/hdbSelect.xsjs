var connection = $.hdb.getConnection();
var result = connection.executeQuery('SELECT * FROM "tables.T_Airports"');

var row1 = result[0];
for (var row in result){
	console.log(result[row]);
}
$.response.setBody(JSON.stringify(result));
