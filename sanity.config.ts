import { defineConfig } from "sanity";
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
 
import schemas from "./sanity/schema";
 

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

const config = defineConfig({
    projectId,
    dataset,
    title: "Point of View LLC",
    apiVersion: "2024-05-27",
    basePath: "/admin",
    plugins: [structureTool(), visionTool()],
    schema: { types: schemas}
    
});

export default config;
