import { CSVWriter } from "./index.js";
const paymentWriter = new CSVWriter(["id", "amount", "to", "notes"]);
paymentWriter.addRows([
    {
        id: 1, amount: 50, to: 'yoshi', notes: 'for design work',
    },
    {
        id: 2, amount: 100, to: 'mario', notes: 'for dev work',
    }
]);
paymentWriter.save("./data/payments.csv");
//# sourceMappingURL=PaymentWriter.js.map