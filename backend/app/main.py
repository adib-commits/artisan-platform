from fastapi import FastAPI

from app.api.appointments import router as appointments_router
from app.api.quote_requests import router as quote_requests_router
from app.api.services import router as services_router


app = FastAPI(
    title="Artisan Platform API",
    description="Backend API for the Artisan Platform",
    version="0.1.0",
)

app.include_router(quote_requests_router)
app.include_router(appointments_router)
app.include_router(services_router)


@app.get("/")
def root():
    return {"message": "Artisan Platform API is running"}


@app.get("/health")
def health_check():
    return {"status": "healthy"}
