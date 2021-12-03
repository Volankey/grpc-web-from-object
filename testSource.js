/**
* @param {?proto.helloworld.Student|undefined} value
* @return {!proto.helloworld.HelloRequest} returns this
*/
proto.helloworld.HelloRequest.prototype.setStudentInfo = function(value) {
    return jspb.Message.setWrapperField(this, 2, value);
};
   
/**
 * optional Student student_info = 2;
 * @return {?proto.helloworld.Student}
 */
proto.helloworld.HelloRequest.prototype.getStudentInfo = function() {
return /** @type{?proto.helloworld.Student} */ (
    jspb.Message.getWrapperField(this, proto.helloworld.Student, 2));
};