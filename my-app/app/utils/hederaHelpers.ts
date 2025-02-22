import { Client, PrivateKey, AccountCreateTransaction, Hbar, ContractExecuteTransaction, ContractFunctionParameters } from "@hashgraph/sdk";

const OPERATOR_ID = process.env.HEDERA_OPERATOR_ID!;
const OPERATOR_KEY = process.env.HEDERA_OPERATOR_KEY!;
const CONTRACT_ID = process.env.HEDERA_CONTRACT_ID!;

export const hederaClient = () => {
  const client = Client.forTestnet();
  client.setOperator(OPERATOR_ID, PrivateKey.fromString(OPERATOR_KEY));
  return client;
};

// ✅ Create a new loan request transaction
export const createLoanTransaction = async (amount: number): Promise<string> => {
  const client = hederaClient();
  
  const transaction = new ContractExecuteTransaction()
    .setContractId(CONTRACT_ID)
    .setGas(50000)
    .setFunction("requestLoan", new ContractFunctionParameters().addUint256(amount));

  const response = await transaction.execute(client);
  const receipt = await response.getReceipt(client);

  if (receipt.status.toString() !== "SUCCESS") {
    throw new Error("Loan transaction failed");
  }

  return receipt.transactionId.toString();
};
