// These lines make "require" available
import { createRequire } from "module";
const require = createRequire(import.meta.url);

import { franc } from 'franc'
const langs = require("langs")

const inputString = process.argv[2]
const languageCode = franc(inputString)
if (languageCode === "und") {
    console.log("Could not match a language. Please try again with a larger sample")
} else {
    const languageName = langs.where("3", languageCode).name
    console.log(languageName)
}
