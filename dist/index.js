import { appendFileSync } from 'fs';
export class CSVWriter {
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
//# sourceMappingURL=index.js.map