import { appendFileSync } from 'fs';


export class CSVWriter<T> {
    constructor(private colums: (keyof T)[]) {
        this.csv = this.colums.join(',') + '\n';
    }

    private csv: string;

    save(filename: string): void {
        appendFileSync(filename, this.csv);
        this.csv = "\n";

        console.log("file saved to", filename);
    }

    addRows(values: T[]) {
        let rows = values.map((v) => this.formatRow(v));
        this.csv += rows.join("\n");
        console.log(this.csv);
    }

    private formatRow(p: T): string {
        return this.colums.map((col) => p[col]).join(',');
    }
    
}
