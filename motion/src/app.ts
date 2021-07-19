import { MediaSectionInput } from './components/dialog/input/media-input.js';
// import { VideoComponent } from './components/page/item/video.js';
// import { TodoComponent } from './components/page/item/todo.js';
// import { NoteComponent } from './components/page/item/note.js';
import { ImageComponent } from './components/page/item/image.js';
import { Composable, PageComponent, PageItemComponent } from './components/page/page.js';
import { Component } from './components/component.js';
import { InputDialog } from './components/dialog/dialog.js';

class App {
	private readonly page: Component & Composable; 
	constructor(appRoot: HTMLElement, dialogRoot: HTMLElement) {
		this.page = new PageComponent(PageItemComponent);
		this.page.attachTo(appRoot);

		// const image = new ImageComponent('Image Title', "https://picsum.photos/600/300");
		// this.page.addChild(image);

		// const note = new NoteComponent("Note Title", "note Contents");
		// this.page.addChild(note);

		// const todo = new TodoComponent("Todo Title", "todo Item");
		// this.page.addChild(todo);

		// const video = new VideoComponent("Video Title", "https://youtu.be/2XouzhJ1jTU");
		// this.page.addChild(video);

		const imageBtn = document.querySelector("#new-image")! as HTMLButtonElement;
		imageBtn.addEventListener('click', () => {
			const dialog = new InputDialog();
			const inputSection = new MediaSectionInput();
			dialog.addChild(inputSection);
			dialog.attachTo(dialogRoot);

			dialog.setOnCloseListener(() => {
				dialog.removeFrom(dialogRoot);
			});

			dialog.setOnSubmitListener(() => {
				const image = new ImageComponent(inputSection.title, inputSection.url);
				this.page.addChild (image);
				dialog.removeFrom(dialogRoot);
			});

		})
	}
}

new App(document.querySelector(".document")! as HTMLElement, document.body);