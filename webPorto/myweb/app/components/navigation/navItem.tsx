import Link from "next/link";

export default function Navitem({
  href="",children,
}: Readonly<{
  children: React.ReactNode;
}>){
    
    return (
        <>
            <div className="group h-7 leading-7 overflow-hidden">
                <div className="transition-transform duration-400 ease-in-out group-hover:-translate-y-1/2">
                    <Link href={href}>
                        <p>{children}</p>
                    </Link>
                    <Link href={href}>
                        <p className="text-muted-foreground">{children}</p>
                    </Link>
                </div>
            </div>
        </>
    )
}