# Dyte SDE- Intern Intern Assignment
Name- Mridul Srivastava

email- mridulsrivastava.vit2021@gmail.com

College and Branch- VIT, Vellore (CSE)

Batch- 2025






## About

Complete Mern Stack Application for managing and accessing log files. The logs files, can ingested (in the log ingestor) over HTTP, on port 3000. I have used thundercliend(can also use postman) to send the post request on port 3000. The injected log files can be seen on the frontend part of the application. 

![image](https://github.com/dyte-submissions/november-2023-hiring-Mridul2021/assets/119924746/74312b87-1633-4d15-af99-d2e43577b73f)

![image](https://github.com/dyte-submissions/november-2023-hiring-Mridul2021/assets/119924746/c6c0e68e-cc7f-4d5b-ac42-3a49fefa3800)

![image](https://github.com/dyte-submissions/november-2023-hiring-Mridul2021/assets/119924746/ede9694a-b73f-401e-92a6-50cb390a3c11)

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

first of all modify .env file in backend folder, then open two windows in terminal

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

### Video Demo 
https://drive.google.com/file/d/18XwVL0okpFweZP4GZ47UBbscydve682D/view?usp=sharing
