import { useTsController } from "@ts-react/form"

export default function NumberField() {
    const { field, error } = useTsController<number>()

    return (
        <>
            <input
                type="number"
                value={field.value !== undefined ? field.value : 0} // conditional to prevent "uncontrolled to controlled" react warning
                onChange={(e) => {
                    field.onChange(Number(e.target.value))
                }}
            />
            {error?.errorMessage && <span className={"error"}>{error?.errorMessage}</span>}
        </>
    )
}
