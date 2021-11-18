$.response.contentType = "text/html";
if (!$.session.hasAppPrivilege("READ")) {
    $.response.setBody("[ERROR] Privilege READ is missing.");
    $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
} else{
    $.response.status = $.net.http.OK;
    $.response.setBody("[SUCCESS] Privilege READ exists.");
}