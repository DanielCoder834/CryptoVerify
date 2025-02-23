import requests
from flask import Blueprint, jsonify

rate_bp = Blueprint("rate_bp", __name__)

@rate_bp.route("/rate", methods=["GET"])
def get_rate():
    """
    Fetches the HBAR -> USD conversion rate from a third-party API (e.g., CoinGecko).
    """
    try:
        url = "https://api.coingecko.com/api/v3/simple/price?ids=hedera-hashgraph&vs_currencies=usd"
        resp = requests.get(url)
        data = resp.json()
        usd_price = data.get("hedera-hashgraph", {}).get("usd")
        if usd_price is None:
            return jsonify({"error": "Unable to retrieve HBAR price"}), 500
        
        return jsonify({"hbar_usd": usd_price})
    except Exception as e:
        return jsonify({"error": str(e)}), 500
