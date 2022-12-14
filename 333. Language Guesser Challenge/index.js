import { franc } from "franc"
import langs from "langs"
import colors from "colors"

const inputString = process.argv[2]
const languageCode = franc(inputString)
if (languageCode === "und") {
    console.log("Could not match a language. Please try again with a larger sample".red)
} else {
    const languageName = langs.where("3", languageCode).name
    console.log(languageName.green)
}
