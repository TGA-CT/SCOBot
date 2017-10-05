/*global contentType, suspend_data, reviewer_email, reviewer_name, updateSlide */
function LMSAPI() {}
LMSAPI.prototype.LMSInitialize = function(anEmptyString) {
    return 'true';
};
LMSAPI.prototype.LMSFinish = function(anEmptyString) {
    return 'true';
};
LMSAPI.prototype.LMSGetValue = function(key) {
    console.log('1.2 Get', key)
    if (key === 'cmi.suspend_data' ||
        key === 'cmi.core.lesson_location' ||
        key === 'cmi.core.location') {
            return "";
    }
    if (key === 'cmi.core.student_id' ||
        key === 'cmi.learner_id') {
        return "";
    }
    if (key === 'cmi.core.student_name' ||
        key === 'cmi.learner_name') {
        return "";
    }
    if (key === 'cmi.completion_status' ||
        key === 'cmi.success_status' ||
        key === 'cmi.completion_threshold') {
        return 'unknown';
    }
    return '';
};
LMSAPI.prototype.getValue = function(key) {
    return '';
};
LMSAPI.prototype.LMSSetValue = function(key, value) {
    console.log('1.2 Set', key, value)
    return 'true';
};
LMSAPI.prototype.LMSCommit = function(anEmptyString) {
    return 'true';
};
LMSAPI.prototype.LMSGetLastError = function() {
    return 0;
};
LMSAPI.prototype.LMSGetErrorString = function(errorCode) {
    return 'No Error';
};
LMSAPI.prototype.LMSGetDiagnostic = function(errorCode) {
    return 'Unknown Error Code';
};