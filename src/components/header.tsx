interface Props {
  title: string;
}

export function Header(props: Props) {
  return (
    <header className="bg-light-gray w-screen">
      <h1 className="text-center font-bold text-2xl text-header-blue pt-[20px]">
        {props.title}
      </h1>

      <div className="flex">
        <div className="bg-header-red h-[15px] grow"></div>
        <div className="bg-header-light-blue h-[15px] grow"></div>
        <div className="bg-header-yellow h-[15px] grow"></div>
      </div>
    </header>
  );
}
