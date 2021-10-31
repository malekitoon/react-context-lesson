import { createContext } from 'react';
import DIRECTORIES_DATA from './directory.data';

const DirectoryContext = createContext(DIRECTORIES_DATA);

export default DirectoryContext;
