import { Hero } from "./Blocks";

export type Page = {
    _id: string;
    _createdAt: Date;
    title: string;
    slug: string;
    pageBuilder: Block[];
}

export type Block = Hero;