'use strict';

import HomeView from '../views/HomeView.js';
import AboutView from '../views/AboutView.js';
import NotFoundView from '../views/NotFoundView.js';

const navigateTo = (url) => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const routes = [
        { path: '/', view: HomeView },
        { path: '/about', view: AboutView }
    ];

    const pathList = routes.map((route) => {
        return {
            route,
            isMatch: location.pathname === route.path
        };
    });

    let currentPath = pathList.find((path) => path.isMatch);

    if (!currentPath) {
        // 만약 현재 경로가 존재하지 않는다면
        currentPath = {
            route: {
                path: location.pathname,
                view: NotFoundView
            },
            isMatch: true
        };
    }

    console.log(currentPath);

    const view = currentPath.view();

    const app = document.querySelector('#app');

    app.innerHTML = await view.getHtml();

    view.attachEvent();

}

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (event) => {
        console.log(event);
        event.preventDefault();
    });
    router();
});

export { router, navigateTo };