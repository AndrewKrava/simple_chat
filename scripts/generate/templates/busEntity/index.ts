// Core
// import { useEffect } from 'react';

// Tools
import { useSelector } from '../../tools/hooks';

// Saga
// import { use__entityName__(pascalCase)Saga } from './saga';

export const use__entityName__(pascalCase) = () => {
    // const { fetch__entityName__(pascalCase) } = use__entityName__(pascalCase)Saga();
    const __entityName__ = useSelector((state) => state.__entityName__); // Add __entityName__ to ./src/init/redux/index.ts

    // useEffect(() => {
    //     fetch__entityName__(pascalCase)();
    // }, []);

    return {
        __entityName__,
    };
};
