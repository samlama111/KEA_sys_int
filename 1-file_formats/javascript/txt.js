import fs from 'fs/promises'

export const readTxtFile = async (path) => {
    const data = await fs.readFile(path, {encoding: 'utf8'});
    return data
}
export const txtToJson = (text) => {
    const newJsonObject = new Object()
    const lines = text.split(/\r?\n/); //split text into array of lines

    //TODO: handle types of values
    lines.forEach((line, index) => {
        if (index % 2 === 0) {
            const formattedKey = line.trim(); //get rid of whitespaces
            const value = lines[index+1] //get value
            if (value.includes('/')) { //handle arrays of values
                const arrayOfValues = value.split('/')
                newJsonObject[formattedKey] = arrayOfValues
            }
            else newJsonObject[formattedKey] = value
        }
    });
    return JSON.stringify(newJsonObject);
}
