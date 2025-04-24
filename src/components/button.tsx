interface Props {
    title: string;
}

export const Button_Input = (props: Props) => {
    return (
        <>
        <div className="rounded-2xl bg-light-gray flex items-center space-x-16">
            <input type="text" 
            placeholder={props.title}
            className="px-16 pr-16 py-4 text-header-blue font-inter font-bold cursor-pointer outline-0"
            />
        </div>
        </>
    )
}