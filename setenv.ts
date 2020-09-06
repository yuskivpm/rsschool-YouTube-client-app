const { writeFile } = require('fs');
const { argv } = require('yargs');
require('dotenv').config();

const isProduction = argv.environment === 'prod';
console.log(`argv.environment=${argv.environment}`)
console.log(`Generate environment. isProdMode=${isProduction}`)
const targetPath = isProduction
   ? `./src/environments/environment.prod.ts`
   : `./src/environments/environment.ts`;
const environmentFileContent = `
export const environment = {
   production: ${isProduction},
   API_KEY: "${process.env.API_KEY}",
};
`;

writeFile(targetPath, environmentFileContent, err => console.log(err ? err : `Wrote variables to ${targetPath}`));
