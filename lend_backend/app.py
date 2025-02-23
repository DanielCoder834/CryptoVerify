from flask import Flask
from config.config import Config

# Import Blueprints
from routes.balance_routes import balance_bp
from routes.rate_routes import rate_bp
from routes.transfer_routes import transfer_bp


def create_app():
    """
    Creates and configures the Flask application,
    registers blueprints, and sets any global config.
    """
    app = Flask(__name__)
    app.config["DEBUG"] = Config.DEBUG
    app.config["SECRET_KEY"] = Config.SECRET_KEY

    # Register Blueprints
    app.register_blueprint(balance_bp, url_prefix="/api")
    app.register_blueprint(rate_bp, url_prefix="/api")
    app.register_blueprint(transfer_bp, url_prefix="/api")

    @app.route("/")
    def index():
        """Root endpoint to confirm the service is running."""
        return "Hedera Flask Demo: see /api/balance, /api/rate, and /api/transfer"

    return app


# Run directly from app.py
if __name__ == "__main__":
    flask_app = create_app()
    # The app will run on http://127.0.0.1:5000 by default
    flask_app.run(host="0.0.0.0", port=8081)
