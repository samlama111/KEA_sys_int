import { txtToJson, readTxtFile } from './txt.js'
import fs from 'fs/promises'

const path_to_file_template = '../file_types/person.'

const txtFile = await readTxtFile(path_to_file_template+'txt')

// data parsed from txt file to be used as JSON
// could be done for other formats as well, for instance using Danfo.js
// https://danfo.jsdata.org/api-reference/input-output
const parsedTxtFileFromJson = txtToJson(txtFile)

const csv_data = await fs.readFile(path_to_file_template+'csv', {encoding: 'utf8'});

const json_data = await fs.readFile(path_to_file_template+'json', {encoding: 'utf8'});

const xml_data = await fs.readFile(path_to_file_template+'xml', {encoding: 'utf8'});

const yml_data = await fs.readFile(path_to_file_template+'yml', {encoding: 'utf8'});

console.log(txtFile)
console.log('-----------')
console.log(csv_data)
console.log('-----------')
console.log(json_data)
console.log('-----------')
console.log(xml_data)
console.log('-----------')
console.log(yml_data)