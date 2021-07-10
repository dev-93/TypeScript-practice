{
    type PageInfo = {
        title: string;
    };

    type Page = "home" | "about" | "contatct";

    const nav: Record< Page,PageInfo> = {
        home: {title: "Home"},
        about: {title: "About"},
        contatct: {title: "Contatct"},
    }
}