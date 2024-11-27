"use strict";
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, employeeId) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.employeeId = employeeId;
    }
    Employee.prototype.FriendlyName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Employee;
}());
document.addEventListener("DOMContentLoaded", function () {
    var employees = [
        new Employee("John", "Doe", "1"),
        new Employee("Jane", "Smith", "2"),
        new Employee("Bob", "Johnson", "3")
    ];
    function generateEmployeeTable() {
        var table = document.createElement("table");
        var headerRow = table.insertRow(0);
        var headers = ["Employee ID", "First Name", "Last Name", "Friendly Name"];
        headers.forEach(function (headerText) {
            var th = document.createElement("th");
            th.textContent = headerText;
            headerRow.appendChild(th);
        });
        employees.forEach(function (employee) {
            var row = table.insertRow();
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            cell1.textContent = employee.employeeId;
            cell2.textContent = employee.firstName;
            cell3.textContent = employee.lastName;
            cell4.textContent = employee.FriendlyName();
        });
        document.body.appendChild(table);
    }
    generateEmployeeTable();
});
