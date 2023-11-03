const {ServiceBroker} = require("moleculer");
const DbService = require("moleculer-db");
const SqlAdapter = require("moleculer-db-adapter-sequelize");
const Sequelize = require("sequelize");
const {MoleculerError} = require("moleculer").Errors;
const ApiService = require("moleculer-web");
const worker = require("../models/worker");

module.exports = {
    name: "db",
    mixins: [ApiService, DbService, SqlAdapter],
    adapter: new SqlAdapter("postgres://tnilrstoqqnkitvwpbsoaimo%40psql-mock-database-cloud:dgpvjfwsfemmevlfumgrazch@psql-mock-database-cloud.postgres.database.azure.com:5432/booking1697716855993ypoagxbflwwevwqq", {define: {timestamps: false}}),
    model: {
        name: "users",
        define: {
            id: {type: Sequelize.INTEGER, primaryKey: true},
            first_name: Sequelize.TEXT,
            last_name: Sequelize.TEXT,
            full_name: Sequelize.TEXT,
            job_title: Sequelize.TEXT,
            job_type: Sequelize.TEXT,
            phone: Sequelize.TEXT,
            email: Sequelize.TEXT,
            image: Sequelize.TEXT,
            country: Sequelize.TEXT,
            city: Sequelize.TEXT,
            onboarding_completion: Sequelize.INTEGER
        }
    },
    options: {
        // Options from http://docs.sequelizejs.com/manual/tutorial/models-definition.html
    },
    events: {},
    // экшены для экспорта (для использования в модуле)
    /*
        async started(){
        this.adapter.db.import("worker", worker);
    },
    */
    actions: {
        users() {
            return this.adapter.db.query("SELECT * FROM users LIMIT 100")
                .then(([res, metadata]) => res);
        },
        async users2() {
            // Get all posts
            const res = await this.model.findAll({limit: 100});
            // this.adapter.db.models.worker. ....
            // this.adapter.db.models.user.findAll({limit: 100});
            return res;
        }

    },
    settings: {
        port: 8443,
        routes: [
            {
                path: "/api/v2",
                aliases: {
                    users: "db.users",
                    users2: "db.users2"
                }
            }
        ]
    }
};