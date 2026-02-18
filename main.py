from fastapi import FastAPI
from recommender import recommend

app = FastAPI()

@app.get("/")
def home():
    return {"message": "AI Recommendation Engine Running"}

@app.get("/recommend")
def get_recommendation(movie: str):
    results = recommend(movie)
    return {"recommendations": results}
