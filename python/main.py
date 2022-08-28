import pandas as pd

csv_person = pd.read_csv(r'file_types\person.csv')

json_person = csv_person.to_json()

# issues with XML conversion, so HTML instead
xml_person = csv_person.to_html()

txt_person = csv_person.to_string()

print(txt_person)