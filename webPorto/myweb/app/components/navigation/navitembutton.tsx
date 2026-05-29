
export default function NavitemButton({
  toggle,children,
}: Readonly<{
  children: React.ReactNode;
}>){
    
    return (
        <>
            <div className="group h-7 leading-7 overflow-hidden">
                <div className="flex flex-col transition-transform duration-400 ease-in-out group-hover:-translate-y-1/2">
                    <button onClick={toggle}>
						{children}
					</button>
					<button onClick={toggle} className="text-muted-foreground">
						{children}
					</button>
                </div>
            </div>
        </>
    )
}