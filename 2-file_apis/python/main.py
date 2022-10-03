import pandas as pd
from fastapi import FastAPI

app = FastAPI()

file_path_template =r'..\files\person.'

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/csv")
def read_csv():
    csv_file = pd.read_csv(file_path_template+'csv')
    csv_json_person = csv_file.to_json()
    return csv_json_person

@app.get("/json")
def read_json():
    json_file = pd.read_json(file_path_template+'json')
    json_person = json_file.to_json()
    return json_person

@app.get("/xml")
def read_xml():
    xml_file = pd.read_xml(file_path_template+'xml')
    xml_person = xml_file.to_json()
    return xml_person