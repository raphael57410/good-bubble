import fs from 'fs'
import { CtrlTemplate } from '../controllers/Template';
import { capitalizeFirstLetter } from '../utils/modifyString';

const routePath = './back/main/apiRouterBuilder.ts'

export const createApiRouterBuilder = (name: string) => {

  // Retrieve data from file
  const allFileContents = fs.readFileSync(routePath, 'utf-8');

  // Split all line from file
  const allFileContentsSplited = allFileContents.split(/\r?\n/);
  // Template for add import
  const addImportTemplate = `import { ${name}Router } from "../routes/${name}/${capitalizeFirstLetter(name)}Routes";\n`
  // Template for add baseApiRouter
  const addBaseApiRouterTemplate = `baseApiRouter.use('/${name}', ${name}Router);`


  // Retrieve how many import in file
  const howManyImport = allFileContentsSplited.map(val => val.includes('import')).filter(el => el);


  // Add import iin file
  allFileContentsSplited.splice(howManyImport.length + 1, 0, `${addImportTemplate}`);

  // Add baseApiRouter in file
  allFileContentsSplited.splice(allFileContentsSplited.length - 2, 0, `${addBaseApiRouterTemplate}`);

  // Return to line
  const updatedContent = allFileContentsSplited.join('\n');

  // Write the update in file
  fs.writeFileSync(routePath, updatedContent, 'utf-8');

}
