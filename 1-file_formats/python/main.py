import pandas as pd
import yaml 
import os

directory_path = os.getcwd()
file_path_template = directory_path+r'\file_types\person.'

# Following formats can be loaded
# and worked with, either in pandas DataFrame format
# or in JSON

# CSV
csv_file = pd.read_csv(file_path_template+'csv')
csv_person = csv_file.to_csv()

# Then they can be transformed easily 
# into other formats, as with this CSV example
csv_json_person = csv_file.to_json()
# issues with XML conversion, so HTML instead
csv_xml_person = csv_file.to_html()
csv_txt_person = csv_file.to_string()


# JSON
json_file = pd.read_json(file_path_template+'json')
json_person = json_file.to_json()

# XML
xml_file = pd.read_xml(file_path_template+'xml')
xml_person = xml_file.to_xml()

# TXT
with open(file_path_template+'txt') as f:
    lines = f.readlines()

# YAML
with open(file_path_template+'yml', 'r') as file:
    yaml_person = yaml.safe_load(file)
