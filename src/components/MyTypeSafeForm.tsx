import {createTsForm, createUniqueFieldSchema} from "@ts-react/form"
import { z } from "zod"
import TextField from "./TextField"
import NumberField from "./NumberField"
import PasswordField from "./PasswordField"
import CheckBoxField from "./CheckBoxField"

export const PasswordSchema = createUniqueFieldSchema(
    z.string(),
    "password" // a string ID that must be unique across all zod schema types
)

// specify the mapping between the zod type
// and the custom input component
const mapping = [
    [z.string(), TextField],
    [z.boolean(), CheckBoxField],
    [z.number(), NumberField],
    [PasswordSchema, PasswordField]
] as const // <- note that this "as const" is necessary


// A typesafe React component
const MyTypeSafeForm = createTsForm(mapping)

export default MyTypeSafeForm
