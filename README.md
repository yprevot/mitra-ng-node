# mitra-ng-node
Copy provided file .envexample to ".env"
For every stage generate a file configuration following this pattern: 
.env.prod
.env.test
.env.dev

# Running development environment
docker-compose -f compose.dev.yaml  up --build

# Running testing environment
docker-compose -f compose.test.yaml  up --build


# Running production environment
docker-compose up --build