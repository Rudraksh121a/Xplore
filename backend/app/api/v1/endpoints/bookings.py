from fastapi import APIRouter

router = APIRouter()

@router.get("/bookings")
def get_bookings():
    return {"bookings": ["Hotel XYZ", "Flight ABC"]}
