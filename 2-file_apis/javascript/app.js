import express from 'express'
import fs from 'fs/promises'
import yaml from 'js-yaml'
import { txtToJson } from './txt_helper.js'

const app = express()

const path_to_file_template = '../../1-file_formats/file_types/person.'

app.get("/yml", async (req, res) => {
    const yml_data = await fs.readFile(path_to_file_template+'yml', {encoding: 'utf8'});
    const doc = yaml.load(yml_data);
    res.json(doc)
})

app.get("/txt", async (req, res) => {
    const txtFile = await fs.readFile(path_to_file_template+'txt', {encoding: 'utf8'});
    const parsedTxtFileFromJson = txtToJson(txtFile)
    res.json(parsedTxtFileFromJson)
})

app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
})