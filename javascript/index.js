import { txtToJson, readTxtFile } from './txt.js'
import fs from 'fs/promises'

const path_to_file_template = '../file_types/person.'

const txtFile = await readTxtFile('txt')
const parsedTxtFileFromJson = txtToJson(txtFile)

const csv_data = await fs.readFile(path_to_file_template+'csv', {encoding: 'utf8'});

const json_data = await fs.readFile(path_to_file_template+'json', {encoding: 'utf8'});

const xml_data = await fs.readFile(path_to_file_template+'xml', {encoding: 'utf8'});

const yml_data = await fs.readFile(path_to_file_template+'yml', {encoding: 'utf8'});
