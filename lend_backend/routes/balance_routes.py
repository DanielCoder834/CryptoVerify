from flask import Blueprint, request, jsonify
from services.hedera_service import get_account_balance
from config.config import Config

balance_bp = Blueprint("balance_bp", __name__)

@balance_bp.route("/balance", methods=["GET"])
def check_balance():
    """
    Checks the balance of a given account by query param: /balance?accountId=0.0.X
    """
    account_id = request.args.get("accountId")
    if not account_id:
        return jsonify({"error": "No accountId provided"}), 400
    
    try:
        balance_hbar = get_account_balance(account_id)
        return jsonify({"accountId": account_id, "balance_hbar": balance_hbar})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@balance_bp.route("/balance/user", methods=["GET"])
def balance_user():
    """
    Checks the user's wallet balance from config.
    """
    if not Config.USER_ACCOUNT_ID:
        return jsonify({"error": "USER_ACCOUNT_ID is not set"}), 500
    
    try:
        bal = get_account_balance(Config.USER_ACCOUNT_ID)
        return jsonify({"userAccountId": Config.USER_ACCOUNT_ID, "balance_hbar": bal})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@balance_bp.route("/balance/bank", methods=["GET"])
def balance_bank():
    """
    Checks the bank's wallet balance from config.
    """
    if not Config.BANK_ACCOUNT_ID:
        return jsonify({"error": "BANK_ACCOUNT_ID is not set"}), 500
    
    try:
        bal = get_account_balance(Config.BANK_ACCOUNT_ID)
        return jsonify({"bankAccountId": Config.BANK_ACCOUNT_ID, "balance_hbar": bal})
    except Exception as e:
        return jsonify({"error": str(e)}), 500
