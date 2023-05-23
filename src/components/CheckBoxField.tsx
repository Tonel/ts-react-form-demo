import {useDescription, useTsController} from "@ts-react/form"
export default function CheckBoxField({ name }: { name: string }) {
    const { label } = useDescription()
    const { field, error } = useTsController<boolean>()

    return (
        <>
            <label>
                {label}
                <input
                    onChange={(e) => field.onChange(e.target.checked)}
                    checked={field.value ? field.value : false}
                    type="checkbox"
                />
            </label>
        {error?.errorMessage && <span className={"error"}>{error?.errorMessage}</span>}
        </>
    )
}
