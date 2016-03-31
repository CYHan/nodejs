/**
 * Created by Yohan on 2016-03-25.
 */


var employeeDb = require('../database/employees');

exports.getEmployees = getEmployees;
exports.getEmployee = getEmployee;

function getEmployees (callback) {
    setTimeout(function(){
        callback(null, employeeDb);
    },500);
}

function getEmployee (employeeId, callback){
    getEmployees(function(err, data){
        if(error){
            return callback(error);
        }
        var result = data.find(function(item) {

            return item.id === employeeId;
        });

        callback(null,result);
    })
}