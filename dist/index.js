import { appendFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';
class CSVWriter {
    colums;
    constructor(colums) {
        this.colums = colums;
        this.csv = this.colums.join(',') + '\n';
    }
    csv;
    save(filename) {
        appendFileSync(filename, this.csv);
        this.csv = "\n";
        console.log("file saved to", filename);
    }
    addRows(values) {
        let rows = values.map((v) => this.formatRow(v));
        this.csv += rows.join("\n");
        console.log(this.csv);
    }
    formatRow(p) {
        return this.colums.map((col) => p[col]).join(',');
    }
}
const writer = new CSVWriter(["id", "amount", "to", "notes"]);
writer.addRows([
    {
        id: 1, amount: 50, to: 'yoshi', notes: 'for design work',
    },
    {
        id: 2, amount: 100, to: 'mario', notes: 'for dev work',
    }
]);
writer.save("./data/payments.csv");
//# sourceMappingURL=index.js.map