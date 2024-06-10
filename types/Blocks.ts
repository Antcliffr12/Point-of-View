export type Image = {
    asset: {
        _id: string;
        url: string;
    };
    alt: string;
}

export type Hero = {
    pageBuilder: any;
    _id: string;
    _createdAt: Date;
    heading: string;
    tagline: string;
    image: Image;
}

export type Card = {
    pageBuilder: any;
    _id: string;
    _createdAt: Date;
    cards: Array<{
        image: Image;
        heading: string;
        description: string;
    }>;
}

export type Services = {
    pageBuilder: any;
    _id: string;
    _createdAt: Date;
    BlockTitle: string;
    BlockDescription: string;
    services: Array<{
        title: string;
        description: string;
        items: Array<{
           item: string;
        }>;
    }>;

}

export type Sponsors = {
    pageBuilder: any;
    _id: string;
    _createdAt: Date;
    sponsors: Array<{
        image: Image;
    }>;
}

export type Accordion = {
    pageBuilder: any;
    _id: string;
    _createdAt: Date;
    accordions: Array<{
        title: string;
        content: string;
    }>;
}

 