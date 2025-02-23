import os
from dotenv import load_dotenv

load_dotenv()  # Loads environment variables from .env

class Config:
    """
    Holds all configuration variables for the Flask app and Hedera credentials.
    """
    # Hedera environment
    HEDERA_NETWORK = os.getenv("HEDERA_NETWORK", "testnet")
    
    # User's test account
    USER_ACCOUNT_ID = os.getenv("USER_ACCOUNT_ID")
    USER_PRIVATE_KEY = os.getenv("USER_PRIVATE_KEY")
    
    # Bank's test account
    BANK_ACCOUNT_ID = os.getenv("BANK_ACCOUNT_ID")
    BANK_PRIVATE_KEY = os.getenv("BANK_PRIVATE_KEY")
    
    # Optional operator credentials
    OPERATOR_ID = os.getenv("OPERATOR_ID")
    OPERATOR_KEY = os.getenv("OPERATOR_KEY")
    
    # Flask-related settings
    SECRET_KEY = os.getenv("SECRET_KEY")
    DEBUG = True  # Set to False in production
