'use strict';

import AbstractView from './AbstractView.js';

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle('홈 화면');
    }

    async getHtml(){
        return `
            <h1>홈 화면</h1>
        `;
    }
}