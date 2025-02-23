from flask import Blueprint, request, jsonify
from services.hedera_service import transfer_hbar
from config.config import Config

transfer_bp = Blueprint("transfer_bp", __name__)

@transfer_bp.route("/transfer", methods=["POST"])
def transfer():
    """
    Transfers HBAR between user and bank.
    JSON example: {"from": "user", "amount": 10.0}
    """
    data = request.json
    from_who = data.get("from")  # "user" or "bank"
    amount = data.get("amount")
    
    if from_who not in ["user", "bank"] or not amount:
        return jsonify({"error": "Invalid transfer request"}), 400

    try:
        if from_who == "user":
            source_id = Config.USER_ACCOUNT_ID
            source_key = Config.USER_PRIVATE_KEY
            dest_id = Config.BANK_ACCOUNT_ID
        else:
            source_id = Config.BANK_ACCOUNT_ID
            source_key = Config.BANK_PRIVATE_KEY
            dest_id = Config.USER_ACCOUNT_ID
        
        if not (source_id and source_key and dest_id):
            return jsonify({"error": "Environment variables not set properly"}), 500
        
        tx_id, status = transfer_hbar(source_id, source_key, dest_id, amount)
        return jsonify({
            "transactionId": str(tx_id),
            "status": status,
            "from": source_id,
            "to": dest_id,
            "amountHbar": amount
        }), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
