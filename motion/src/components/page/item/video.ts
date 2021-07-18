import { BaseComponent } from '../../component.js';

export class VideoComponent extends BaseComponent<HTMLElement> {
    constructor(title:string, url:string) {
        super(`<section class="video">
                    <div class="video__player">
                        <iframe class="video__iframe"></iframe>
                    </div>
                    <h3 class="video__title"></h3>
                </section>`);

        const iframeElement = this.element.querySelector(".video__iframe")! as HTMLIFrameElement;
        iframeElement.src = 'https://www.youtube.com/embed/2XouzhJ1jTU';
        console.log(url);

        const titleElement = this.element.querySelector(".video__title")! as HTMLHeadingElement;
        titleElement.textContent = title;

    }
}