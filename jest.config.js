const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig");

process.on("unhandledRejection", (reason, p) => {
    console.log("Unhandled Rejection at: Promise", p, "reason:", reason);
    logger.error(reason, "Internal Error");
});

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    preset: "ts-jest",
    testEnvironment: "node",
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
    modulePaths: ["<rootDir>"],
    testTimeout: 30000000,
};
