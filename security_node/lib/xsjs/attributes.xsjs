$.response.contentType = "text/html";
$.response.setBody($.session.securityContext.userAttributes);
$.response.status = $.net.http.OK;