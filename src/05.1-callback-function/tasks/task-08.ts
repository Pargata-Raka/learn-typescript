import { table } from "node:console";
import { after } from "node:test";

/**
 * A company has a simple data-processing engine used to analyze transaction records.
 */
type transaction = {id: string, customer: string, amount: number, status: string}
const transactions = [
    {
        id: "TRX001",
        customer: "Alya",
        amount: 850000,
        status: "paid"
    },
    {
        id: "TRX002",
        customer: "Budi",
        amount: 1250000,
        status: "pending"
    },
    {
        id: "TRX003",
        customer: "Citra",
        amount: 450000,
        status: "paid"
    },
    {
        id: "TRX004",
        customer: "Dimas",
        amount: 2100000,
        status: "paid"
    },
    {
        id: "TRX005",
        customer: "Eka",
        amount: 780000,
        status: "cancelled"
    }
];

type TRANS_CATEGORY = "High Value" | "Medium Value" | "Low Value"
type CATEGORY_RECOMMENDATION = transaction & { status: TRANS_CATEGORY}
type AFTER_FEE = transaction & {Fee: number}

function Translisting(items: transaction[], action: (item: transaction) => void): void {
    for (const key of items) {
        action(key);
    }
}


function determineCategory(selectedAction: transaction): CATEGORY_RECOMMENDATION {
    let Category: TRANS_CATEGORY = "Low Value";

    if (selectedAction.amount >= 90) {
        Category = "High Value";
    } else if (selectedAction.amount >= 90) {
        Category = "Medium Value";
    } else {
    }
    return {
        ...selectedAction,
        status: Category
    };
}

function percentage(variable: number ,numbers: number): number {
    return variable * numbers /100
}

function CalculatePlatformFee(selectedAction: transaction):AFTER_FEE {
    let base = selectedAction.amount
    let afterfee = 0;
  if (selectedAction.status == "paid") {
    afterfee = percentage(base, 2);    
  }
  else if (selectedAction.status == "pending") {
    afterfee = percentage(base, 1);
  } else {
    afterfee = 0
  }
  return {
    ...selectedAction,
    Fee: afterfee
  }
}

function transactionProcess<T>(
    arr: transaction[],
    callback: (student: transaction) => T): T[] 
    {
    return arr.map(callback);
}

const Categorylist = transactionProcess(transactions, determineCategory);
const PlatformFee = transactionProcess(transactions, CalculatePlatformFee);

console.log("== Customer List ==");
Translisting(transactions, (trans) => {
    console.log(`${trans.customer}`);
});
console.log(`== Category ==`);
console.table(Categorylist)
console.log(`== Platform Fee ==`);
console.table(PlatformFee)

/** TASKS:
 * - Extract customer's name only in array
 * - Determine Transaction Category with rules below:
 *   - ≥ Rp2,000,000 → HIGH VALUE
 *   - ≥ Rp1,000,000 → MEDIUM VALUE
 *   - < Rp1,000,000 → LOW VALUE
 * - Calculate platform fee:
 *   - Paid transactions → 2%
 *   - Pending transactions → 1%
 *   - Cancelled transactions → 0%
 */