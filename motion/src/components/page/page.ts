import { BaseComponent } from '../component.js';

export class PageComponent extends BaseComponent<HTMLUListElement>{
    constructor() {
        super('<ul class="page" style="color:white">This is PageComponent</ul>')
    }
}