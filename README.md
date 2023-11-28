# LOG INGESTOR

## About

Complete Mern Stack Application for managing and accessing log files. The logs files, can ingested (in the log ingestor) over HTTP, on port 3000. I have used thundercliend(can also use postman) to send the post request on port 3000. The injected log files can be seen on the frontend part of the application. <br />
host url- https://logiingestor.onrender.com/

Sample log data format:<br />
{<br />
	"level": "error",<br />
	"message": "Failed to connect to DB",<br />
    	"resourceId": "server-1234",<br />
	"timestamp": "2023-09-15T08:00:00Z",<br />
	"traceId": "abc-xyz-123",<br />
    	"spanId": "span-456",<br />
    	"commit": "5e5342f",<br />
    	"metadata": {<br />
        "parentResourceId": "server-0987"<br />
    }<br />
}


The key features are given below-

## Features

- Offered a user interface (Web UI) for full-text search across logs.
- Include filters based on:
    - level
    - message
    - resourceId
    - timestamp
    - traceId
    - spanId
    - commit
    - metadata.parentResourceId
- Allowed user to combine multiple filters.
- Used database indexing for faster search operations.
- Given "export to CSV" option to download all the log file in in excel sheet.
- Given option to sort the log files using the timestamp.
- Given the pagination

## Packages used 

- dotenv
- cors
- mongoose
- nodemon
- fast-CSV
- Axios

## Deployment

To deploy this project run

first of all add .env file in backend folder, give BASE_URL as shown
![image](https://github.com/Mridul2021/log-ingestor-backend/assets/119924746/f276040b-ae6a-4b33-aeb8-fee6729f4f5b) <br />
 then open two windows in terminal

#### backend
```bash
    cd backend
    npm install
    nodemon app

```
The frontend server will start on localhost:3000

### frontend 
```bash
    cd frontend
    npm install
    npm start
```
The server will start on localhost:3006

