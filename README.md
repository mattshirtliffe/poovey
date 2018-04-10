
# Official UK Cattle Breeds and Codes API
https://www.gov.uk/guidance/official-cattle-breeds-and-codes#cts-breed-code-list

## Create and start database

docker pull mysql

docker run -p 3306:3306 --name poovey-mysql -e MYSQL_ROOT_PASSWORD=toor -d mysql:latest
 
docker exec -it poovey-mysql mysql -u root -p

### Create database
CREATE DATABASE poovey_development;

CREATE DATABASE poovey_test;

## Run app
npm start

## Run test
export NODE_ENV=test

npm test

# migrations and seeders
cd to app and run the following
sequelize db:migrate

sequelize db:seed:all