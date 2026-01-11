export declare class CSVWriter<T> {
    private colums;
    constructor(colums: (keyof T)[]);
    private csv;
    save(filename: string): void;
    addRows(values: T[]): void;
    private formatRow;
}
//# sourceMappingURL=index.d.ts.map