var connection = $.hdb.getConnection();
var result = connection.executeQuery(`SELECT SESSION_CONTEXT('XS_COUNTRY') AS COUNTRY FROM DUMMY`);

$.response.setBody(JSON.stringify(result));