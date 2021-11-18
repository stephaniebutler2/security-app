$.response.contentType = "text/html";
if (!$.session.hasAppPrivilege("EDIT")) {
    $.response.setBody("[ERROR] Privilege EDIT is missing.");
    $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
} else{
    $.response.status = $.net.http.OK;
    $.response.setBody("[SUCCESS] Privilege EDIT exists.");
}