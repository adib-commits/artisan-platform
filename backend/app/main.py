from fastapi import FastAPI

app = FastAPI(
    title="Artisan Platform API",
    description="Backend API for the Artisan Platform",
    version="0.1.0",
)


@app.get("/")
def root():
    return {"message": "Artisan Platform API is running"}


@app.get("/health")
def health_check():
    return {"status": "healthy"}
