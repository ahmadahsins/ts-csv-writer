import { CSVWriter } from "./index.js";

interface Employee {
    id: number;
    name: string;
    role: string;
    salary: number
}

const employeeWriter = new CSVWriter<Employee>(["id", "name", "role", "salary"]);

employeeWriter.addRows([
    {
        id: 1, salary: 50, name: 'yoshi', role: 'for design work',
    },
    {
        id: 2, salary: 100, name: 'mario', role: 'for dev work',
    }
]);

employeeWriter.save("./data/employees.csv");
