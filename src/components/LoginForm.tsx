import { z } from "zod"
import MyTypeSafeForm, { PasswordSchema } from "./MyTypeSafeForm"

const LoginSchema = z.object({
    email: z.string()
        .describe("Email // email@example.com")
        .email("Enter a valid email"),
    password: PasswordSchema,
    keepSignedIn: z.boolean().describe("Keep Signed In? // "),
})

export default function LoginForm() {
    function onSubmit(data: z.infer<typeof LoginSchema>) {
        // onSubmit form logic...
        console.log(data)
    }


return (
    <MyTypeSafeForm
        schema={LoginSchema}
        onSubmit={onSubmit}
        // add the Submit button to the form
        renderAfter={() => <button type="submit">Login</button>}
        // add a header section to the form
        renderBefore={() => <h1>Login</h1>}
        defaultValues={{
            keepSignedIn: true
        }}
        props={{
            password: {
                // separate the form with a line
                afterElement: <hr />
            },
        }}
    />
)}
