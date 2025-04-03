import requests

BASE_URL = "http://127.0.0.1:8000"

response = requests.get(f"{BASE_URL}/chatbot", params={"message": "hello"})

print("Chatbot Response:", response.json())
