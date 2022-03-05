'use strict';

import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();

    }

    async getHtml(){
        return `
            <h1>존재하지 않는 화면입니다.</h1>
        `;
    }

    attachEvent(){
        
    }
}