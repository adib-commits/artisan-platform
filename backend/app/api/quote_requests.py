from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.models.quote_request import QuoteRequest
from app.schemas.quote_request import (
    QuoteRequestCreate,
    QuoteRequestResponse,
)


router = APIRouter(
    prefix="/quote-requests",
    tags=["Quote Requests"],
)


@router.post(
    "",
    response_model=QuoteRequestResponse,
    status_code=201,
)
def create_quote_request(
    quote_request: QuoteRequestCreate,
    db: Session = Depends(get_db),
):
    new_quote_request = QuoteRequest(**quote_request.model_dump())

    db.add(new_quote_request)
    db.commit()
    db.refresh(new_quote_request)

    return new_quote_request
