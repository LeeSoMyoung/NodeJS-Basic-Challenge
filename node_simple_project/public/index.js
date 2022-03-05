'use strict';

import { router, navigateTo } from './routes/router.js';

console.log('index.js is working');

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(event);
    });
    router();
});