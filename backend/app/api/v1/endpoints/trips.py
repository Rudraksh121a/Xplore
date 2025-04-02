from fastapi import APIRouter

router = APIRouter()

@router.get("/trips")
def get_trips():
    return {"trips": ["Trip1", "Trip2"]}
