try:
    from hedera import (
        Client,
        AccountBalanceQuery,
        TransferTransaction,
        Hbar,
        AccountId,
        PrivateKey
    )
    HEDERA_SDK_AVAILABLE = True
except ImportError:
    HEDERA_SDK_AVAILABLE = False

from config.config import Config

def get_hedera_client(account_id=None, private_key=None):
    """
    Creates a Hedera client to connect to testnet or mainnet,
    using either a custom account_id/private_key or the operator credentials.
    We parse the private key string into a PrivateKey object.
    """
    if not HEDERA_SDK_AVAILABLE:
        raise Exception("Hedera Python SDK not installed or unavailable.")

    # Decide if we're on testnet or mainnet based on Config
    if Config.HEDERA_NETWORK.lower() == "mainnet":
        client = Client.forMainnet()
    else:
        client = Client.forTestnet()

    # If custom credentials (e.g., for user or bank), parse them.
    if account_id and private_key:
        # Convert string to PrivateKey
        parsed_key = PrivateKey.fromString(private_key)
        client.setOperator(AccountId.fromString(account_id), parsed_key)
    else:
        # Otherwise, fallback to optional OPERATOR_ID/OPERATOR_KEY
        if Config.OPERATOR_ID and Config.OPERATOR_KEY:
            op_key = PrivateKey.fromString(Config.OPERATOR_KEY)
            client.setOperator(AccountId.fromString(Config.OPERATOR_ID), op_key)

    return client

def get_account_balance(account_id):
    """
    Returns the HBAR balance (in whole HBAR) of the specified Hedera account.
    """
    client = get_hedera_client()
    query = AccountBalanceQuery().setAccountId(AccountId.fromString(account_id))
    result = query.execute(client)
    # Convert from tinybars to full HBAR
    return result.hbars.toTinybars() / 100_000_000

def transfer_hbar(source_id, source_key, dest_id, amount_hbar):
    """
    Transfers `amount_hbar` HBAR from source_id to dest_id.
    Returns (transaction_id, receipt_status).
    """
    # We parse the source_key into a PrivateKey so setOperator can accept it.
    client = get_hedera_client(source_id, source_key)

    transaction = (
        TransferTransaction()
        .addHbarTransfer(AccountId.fromString(source_id), Hbar(-float(amount_hbar)))
        .addHbarTransfer(AccountId.fromString(dest_id), Hbar(float(amount_hbar)))
    )
    tx_response = transaction.execute(client)
    receipt = tx_response.getReceipt(client)
    return tx_response.transactionId, str(receipt.status)
