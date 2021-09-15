import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    swaggerDefinition: {
        info: {
            title: 'Test API',
            version: '1.0.0',
            description: 'Test API with express',
        },
        host: 'localhost:3000',
        basePath: '/'
    },
    apis: ['./routes/*.ts', './swagger/*','../routes/router.ts']
};

export const specs = swaggerJsdoc(options);
