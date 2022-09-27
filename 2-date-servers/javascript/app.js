import express from 'express'
import fetch from 'node-fetch'
import swaggerJSDoc from 'swagger-jsdoc'  
import swaggerUI from 'swagger-ui-express'

const app = express()

//Swagger Configuration  
const swaggerOptions = {  
    swaggerDefinition: {  
        info: {  
            title:'Date authority API',  
            version:'1.0.0'  
        }  
    },  
    apis:['app.js'],  
}  
const swaggerDocs = swaggerJSDoc(swaggerOptions);  
app.use('/docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs));  

/** 
 * @swagger 
 * /Timestamp: 
 *   get: 
 *     description: Get Current Timestamp
 *     responses:  
 *       200: 
 *         description: Success  
 *   
 */  
app.get("/timestamp", (req, res) => {
    res.send({'Date': new Date()})
})

/** 
 * @swagger 
 * /Timestamp/Authority: 
 *   get: 
 *     description: Get Timestamp From Authority
 *     responses:  
 *       200: 
 *         description: Success  
 *   
 */ 
app.get("/timestamp/authority", async (req, res) => {
    try {
        const response = await fetch("http://127.0.0.1:8000/timestamp")
        const dateObject = await response.json()
        const newDateObject = new Date(dateObject.Date)
        res.send({'Date': newDateObject})
    } catch (err) {
        console.log('Connection to date authority failed')
    }
})

app.listen(3000, () => {
	console.log(`Date app listening on port 3000`)
})
