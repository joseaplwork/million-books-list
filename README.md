# million-books-list
A page to show a million books list using react

# Installing dependencies
`
  npm install
`
# ENVIRONMENT VARIABLES
Depending the script we run either `production` or `development` both will be read   
from the local `env` files, if you want test custom `env` locally you can create the   
`.env.development.local` or `.env.production.local` file which will have more priority   
over `.env.development`, `.env.production` and `.env`.

`
  **REACT_APP_BOOKS_LIMIT** // Total books limit generated
  **REACT_APP_CHUNK_PARTS** // Amount of chunks to be loaded
`

# Development
To start the development mode run the command:   
`
  npm start
`

# Production
To start the production mode run the command:   
`
  npm run build && npm run start:prod
`

** The default limit is 1 000 000. **
