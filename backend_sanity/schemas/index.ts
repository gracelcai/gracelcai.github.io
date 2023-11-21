// import { createSchema } from "sanity"
// import createSchema from 'part:@sanity/base/schema-creator'
// import { SchemaType } from "sanity"
// import schemaTypes from 'all:part:@sanity/base/schema-type'
import projects from "./projects"
import about from "./about"
import contact from "./contact"
import workExperience from "./workExperience"

export const schemaTypes = [projects, about, workExperience, contact]

