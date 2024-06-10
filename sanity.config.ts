import { defineConfig } from "sanity";
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
 
import schemas from "./sanity/schema";
 

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

const config = defineConfig({
    basePath: "/admin",
    title: "Point of View LLC",
    projectId,
    dataset,
    apiVersion: "2024-05-27",
    plugins: [structureTool(), visionTool()],
    schema: { types: schemas}
    
});

export default config;
