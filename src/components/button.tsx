interface Props {
    title: string;
    src: string;
}


export const Button_Input = (props: Props) => {
    return (
        <>
        <div className="rounded-2xl bg-light-gray flex items-center space-x-3" >
            <input type="text" 
            placeholder={props.title}
            className="px-10 py-4 text-header-blue font-inter font-bold cursor-pointer outline-0"
            />
            <img 
            src={props.src}
            className="mr-4"
            />
        </div>
        </>
    )
}