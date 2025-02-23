import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

import { collection, setDoc, doc } from "firebase/firestore";

export function SupportView() {

    const addLoansToFirestore = async () => {
        try {
            for (const loan of loans) {
                const loanRef = doc(collection(db, "loans"), loan.id); // Use custom loan ID
                await setDoc(loanRef, loan);
            }
            console.log("Loans added to Firestore!");
        } catch (error) {
            console.error("Error adding loans: ", error);
        }
    };

    return (
        <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-6">Support Tickets</h2>
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <LoanDetailRow label="Name" value="John" />
                <LoanDetailRow label="Name" value="Madison" />
                <LoanDetailRow label="Name" value="Apple" />
                <LoanDetailRow label="Name" value="Chris" />
                <LoanDetailRow label="Name" value="Rupesh" />
                <LoanDetailRow label="Name" value="Michael" />
                <LoanDetailRow label="Name" value="Annabelle" />
                <LoanDetailRow label="Name" value="Sonia" />
                <LoanDetailRow label="Name" value="Chrissy" />
                <LoanDetailRow label="Name" value="Steven" />
                <LoanDetailRow label="Name" value="Amber" />
            </div>
        </div>
    )
}

function LoanDetailRow({
    label,
    value,
    valueClassName,
}: {
    label: string
    value: string
    valueClassName?: string
}) {
    return (
        <div className="flex items-center justify-between py-3 border-b border-[#f1f2f6] last:border-0">
            <div className="text-[#616371]">{label}</div>
            <div className={cn("text-[#1a1a1a]", valueClassName)}>{value}</div>
        </div>
    )
}