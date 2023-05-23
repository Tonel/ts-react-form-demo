import {useDescription, useTsController} from "@ts-react/form"

export default function TextField() {
    const { label, placeholder } = useDescription()
    const { field, error  } = useTsController<string>()

    return (
        <>
            <label>{label}</label>
            <input
                placeholder={placeholder}
                value={field.value ? field.value : ""} // conditional to prevent "uncontrolled to controlled" react warning
                onChange={(e) => {
                    field.onChange(e.target.value)
                }}
            />
            {error?.errorMessage && <span className={"error"}>{error?.errorMessage}</span>}
        </>
    )
}
