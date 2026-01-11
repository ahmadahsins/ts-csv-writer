import { CSVWriter } from "./index.js";
const employeeWriter = new CSVWriter(["id", "name", "role", "salary"]);
employeeWriter.addRows([
    {
        id: 1, salary: 50, name: 'yoshi', role: 'for design work',
    },
    {
        id: 2, salary: 100, name: 'mario', role: 'for dev work',
    }
]);
employeeWriter.save("./data/employees.csv");
//# sourceMappingURL=EmployeeWriter.js.map