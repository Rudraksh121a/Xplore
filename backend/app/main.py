from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.v1.endpoints import trips, chatbot, bookings

app = FastAPI(title="Xplora API", version="1.0", description="Backend for Xplora Travel App")

# ✅ Enable CORS for frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (Change this in production!)
    allow_credentials=True,
    allow_methods=["*"],   # Allow all HTTP methods
    allow_headers=["*"],   # Allow all headers
)

# ✅ Register API routes with unique prefixes
app.include_router(trips.router, prefix="/api/v1/trips", tags=["Trips"])
app.include_router(chatbot.router, prefix="/api/v1/chatbot", tags=["Chatbot"])
app.include_router(bookings.router, prefix="/api/v1/bookings", tags=["Bookings"])

# ✅ Root endpoint
@app.get("/", tags=["Root"])
def home():
    return {"message": "Welcome to Xplora Backend!"}
