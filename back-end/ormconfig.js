const rootDir = process.env.NODE_ENV === "development" ?
    "src" :
    "build/src"

module.exports = {
    "type": "sqlite",
    "database": "database.sqlite",
    "synchronize": true,
    "logging": false,
    "entities": [rootDir + "/entities/**/*.{js,ts}"],
    "migrations": [rootDir + "/migrations/*.{js,ts}"],
    "subscribers": [rootDir + "/subscribers/**/*.{js,ts}"],
};
