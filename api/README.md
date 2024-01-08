<h3 align="center">![Frame1.svg](..%2F..%2F..%2FUsers%2FHARDPC%2FDesktop%2FFrame1.svg)</h3>
<h2 align="center">Backend</h2>

### Installation 💾
My node version is 19.8.1 <br />
Download the project to your computer and install needed packages with command:

```bash
$ npm install
```
Then create .env file:
```bash
URL='http://localhost:8000'

DATABASE_URL="postgresql://postgres:123@localhost:5434/nest?schema=public"
TOKEN_SECRET="your_secret"

# Upload configuration
UPLOAD_DIR="./uploads"
MAX_FILE_SIZE=1024 * 1024 * 10 #10MB
```

To run database (you must have docker desktop installed):
```bash
$ npm run db:up
```

Next generate prisma schema:
```bash
$ npx prisma generate
```

Then start the project on the local server with the command:

```bash
$ npm run start:dev
```

and you can test api here - http://localhost:8000/
