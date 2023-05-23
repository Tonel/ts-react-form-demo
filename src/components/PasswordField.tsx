import { useTsController } from "@ts-react/form"

export default function TextField() {
    const { field, error } = useTsController<string>()
    return (
        <>
            <input
                type={"password"}
                value={field.value ? field.value : ""} // conditional to prevent "uncontrolled to controlled" react warning
                onChange={(e) => {
                    field.onChange(e.target.value)
                }}
            />
            {error?.errorMessage && <span className={"error"}>{error?.errorMessage}</span>}
        </>
    )
}
