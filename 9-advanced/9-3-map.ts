{
    type Video = {
        title: string;
        author: string;
        description: string;
    }

    type VideoOptional = {
        title?: string;
        author?: string;
        description?: string;
    }

    type VideoReadOnly = {
        readonly title: string;
        readonly author: string;
        readonly description: string;
    }
}