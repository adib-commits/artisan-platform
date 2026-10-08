import os

DATABASE_URL = os.getenv(
    "DATABASE_URL",
    "postgresql+psycopg://artisan:artisan@localhost:5432/artisan_db",
)
