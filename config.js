module.exports = {
    // Postgre_config : {
    //     user: 'postgres',
    //     database: 'doctor_db',
    //     password: 'Password1',
    //     port: 5432,
    //     max: 10,
    //     idleTimeoutMillis: 30000,
    // }

    Postgres_config: {
        database: 'doctor_db',
        username: 'postgres',
        password: 'Password1',
        host: 'localhost',
        port: 5432,
        dialect: 'postgres',
        define: {
            freezeTableName: true 
        }
    }
};