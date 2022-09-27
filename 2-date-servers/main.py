import datetime
import requests
from fastapi import FastAPI


app = FastAPI()

# Swagger documentation present at /docs

def get_current_datetime():
    return datetime.datetime.now().isoformat()

@app.get("/timestamp")
def return_current_datetime():
    current_datetime = get_current_datetime()
    return { "Date": current_datetime } 

@app.get("/timestamp/authority")
def read_root():
    res = requests.get("http://127.0.0.1:3000/timestamp")
    res_json = res.json()
    authority_datetime = res_json['Date']
    return {"Date": authority_datetime}