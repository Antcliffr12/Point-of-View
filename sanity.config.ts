import { defineConfig } from "sanity";
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
 
import schemas from "./sanity/schema";
 

const projectId = '89y0168p';
const dataset = 'production';

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
