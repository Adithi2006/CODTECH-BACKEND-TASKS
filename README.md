# 🎬 AI-Powered Movie Recommendation Engine

This project is an AI-powered movie recommendation backend developed using Python and FastAPI.  
It recommends similar movies based on content similarity.

---

## 🚀 Project Overview

This system uses machine learning techniques to recommend movies similar to a given movie title.  
It exposes a RESTful API endpoint to fetch recommendations.

---

## 🛠️ Technologies Used

- Python
- Pandas
- Scikit-learn
- FastAPI
- Uvicorn

---

## 📂 Dataset

The project uses the `movies.csv` dataset containing movie titles and related information.

---

## 🧠 How It Works

1. Loads movie dataset using Pandas
2. Creates feature vectors using TF-IDF
3. Computes cosine similarity between movies
4. Returns top similar movies via API endpoint

---

## 🔗 API Endpoint

### GET /recommend

#### Example:
