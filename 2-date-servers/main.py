import datetime
from fastapi import FastAPI


app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/timestamp")
def return_current_datetime():
    current_datetime = datetime.datetime.now().isoformat()
    return { "Date": current_datetime } 
