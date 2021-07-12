const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

//imports dos models
const Users = require("../models/Users");
const Comments = require("../models/Comments");
const Profiles = require("../models/Profiles");
const Equipaments = require("../models/Equipaments");

const connection = new Sequelize(dbConfig.url, dbConfig.config);

//inicializa os models
Users.init(connection);
Comments.init(connection);
Profiles.init(connection);
Equipaments.init(connection);

//inicializa os relacionamentos
Users.associate(connection.models);
Comments.associate(connection.models);
Profiles.associate(connection.models);
Equipaments.associate(connection.models);

// for (let assoc of Object.keys(Category.associations)) {
//     for (let accessor of Object.keys(Category.associations[assoc].accessors)) {
//         console.log(Category.name + '.' + Category.associations[assoc].accessors[accessor] + '()');
//     }
// }
