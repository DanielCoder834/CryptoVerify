# app.py
from flask import Flask
from flask_cors import CORS

# Import your blueprints.
from routes.balance_routes import balance_bp
from routes.rate_routes import rate_bp
from routes.transfer_routes import transfer_bp

def create_app():
    """Creates and configures the Flask application."""
    app = Flask(__name__)
    CORS(app)
    # Register blueprints.
    app.register_blueprint(balance_bp, url_prefix="/api")
    app.register_blueprint(rate_bp, url_prefix="/api")
    app.register_blueprint(transfer_bp, url_prefix="/api")

    @app.route("/")
    def index():
        return "Backend running with Hedera support!"

    return app

# Gunicorn will look for 'app' at global scope.
app = create_app()

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)
