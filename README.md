# Piiquante #
Il s'agit de la création d’une API pour le Projet 6 du parcours Développeur Web.

### Conditions préalables ###
# Front-end
Pour l'installer voir les explications ici https://s3.eu-west-1.amazonaws.com/course.oc-static.com/projects/DWJ_FR_P6/Requirements_DW_P6.pdf

Pour récuperer le repository ici https://github.com/OpenClassrooms-Student-Center/Web-Developer-P6

# Back-end
Il faudra installer :
- Node : npm init
- Nodemon : npm install -g nodemon
- Express : npm install --save express
- MongoDB : npm install --save mongoose
- MongoDB : npm install --save mongoose-unique-validator
- Bcrypt : npm install --save bcrypt
- Jsonwebtoken : npm install --save jsonwebtoken
- Multer : npm install --save multer
- Helmet : npm install helmet
- XSS-Clean : npm install xss-clean
- HPP : npm install hpp
- Express Mongo Sanitize : npm install express-mongo-sanitize
- Express Rate Limit : npm install express-rate-limit

Il faudra créer un fichier `.env` dans le répertoire principale avec les données suivantes :
- DB_port = le port de connection
- DB_mongoDB = les donnéées de connection de mangoDB
- DB_cleSecurite = le mot de passe de sécurité

Il faut lancer le serveur par la commande `nodemon server`