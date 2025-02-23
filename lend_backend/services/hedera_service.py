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

def get_hedera_client(account_id, private_key):
    """
    Creates a Hedera client using the provided credentials.
    Raises an Exception if credentials are not provided.
    """
    if not HEDERA_SDK_AVAILABLE:
        raise Exception("Hedera Python SDK not installed or unavailable.")

    # Determine the network: testnet or mainnet.
    if Config.HEDERA_NETWORK.lower() == "mainnet":
        client = Client.forMainnet()
    else:
        client = Client.forTestnet()

    if not (account_id and private_key):
        raise Exception("Account ID and private key must be provided.")

    # Convert the private key string into a PrivateKey object.
    parsed_key = PrivateKey.fromString(private_key)
    client.setOperator(AccountId.fromString(account_id), parsed_key)
    return client

def get_account_balance(account_id):
    """Returns the HBAR balance (in whole HBAR) of the specified account."""
    # For balance queries, you must supply the account credentials explicitly.
    # You can adjust this function as needed.
    client = get_hedera_client(Config.USER_ACCOUNT_ID, Config.USER_PRIVATE_KEY)
    query = AccountBalanceQuery().setAccountId(AccountId.fromString(account_id))
    result = query.execute(client)
    # Convert from tinybars to full HBAR
    return result.hbars.toTinybars() / 100_000_000

def transfer_hbar(source_id, source_key, dest_id, amount_hbar):
    """
    Transfers `amount_hbar` HBAR from source_id to dest_id.
    Returns (transaction_id, receipt_status).
    """
    client = get_hedera_client(source_id, source_key)

    transaction = (
        TransferTransaction()
        .addHbarTransfer(AccountId.fromString(source_id), Hbar(-float(amount_hbar)))
        .addHbarTransfer(AccountId.fromString(dest_id), Hbar(float(amount_hbar)))
    )
    tx_response = transaction.execute(client)
    receipt = tx_response.getReceipt(client)
    return tx_response.transactionId, str(receipt.status)
