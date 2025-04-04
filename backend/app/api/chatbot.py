from flask import Blueprint, request, jsonify

bp = Blueprint('chatbot', __name__)  # Creating a Blueprint for the chatbot

@bp.route('/chat', methods=['POST'])
def chat():
    """Handles chatbot interactions."""
    data = request.json  # Get user input from request
    user_message = data.get("message", "")

    # Simple chatbot logic (replace with AI model)
    response = f"You said: {user_message}"
    
    return jsonify({"response": response})

