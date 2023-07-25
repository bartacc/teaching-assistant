# Teaching assistant - Microsoft Intern FHL project 

## Running the project

### Local database setup

#### 1. [Instal postgres](https://www.postgresql.org/download/)
#### 2. Create empty database and set password for default user:

##### On Linux

1. `$ sudo su - postgres`
2. `# createdb TeachingAssistantDB`
3. `# psql TeachingAssistantDB`
4. `TeachingAssistantDB=# \password postgres` and type new password when prompted.
`dbConfig.ts` file assumes password is `postgres`.

##### On Windows
1. Go to postgres installation directory (e.g. `C:\Program Files\PostgreSQL\15\bin>`)
2. `.\createdb.exe --username=postgres TeachingAssistantDB` 
3. `.\psql.exe --username=postgres TeachingAssistantDB`
4. `TeachingAssistantDB=# \password postgres` and type new password when prompted.
`dbConfig.ts` file assumes password is `postgres`.


#### 3. Actual tables in this database will be created by javascript code when running the project for the first time.

### NPM setup

`npm install`

`npm run build` - will build project

`npm run dev` - dev server

`npm run start` - run prod

Based on: https://www.webmound.com/best-typescript-setup-with-nodejs-express-project/
