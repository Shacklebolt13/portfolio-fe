import fs, { readFileSync } from 'fs';
import yaml from 'js-yaml';

export const getPortFolioObject = (): any => {
    try {
        const portfolioFileContents =  readFileSync('src/assets/portfolio.yml', 'utf8');
        return yaml.load(portfolioFileContents);
    } catch (error) {
        console.error(error);
        return {}; 
    }
} 