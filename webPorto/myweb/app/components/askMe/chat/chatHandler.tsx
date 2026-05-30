

/**
 * ketika user klik input
 * maka menjalankan form tertentu
*/

export default function chatHandler(){
    
    return (
        <>
            <div className="h-screen md:h-[60dvh] lg:h-[80dvh] bg-muted p-2 text-foreground md:rounded-b-sm flex flex-col gap-4">
                        
                        {/**chat button list */}
                        
                        {/* Chat dari Orang Lain (Kiri) */}
                        <div className="flex flex-col items-start">
                            <div className="px-4 py-2.5 bg-background rounded-2xl rounded-tl-none shadow-sm text-sm">
                                Halo! Ada yang bisa saya bantu hari ini?
                            </div>
                            <span className="text-[10px] text-zinc-400 mt-1 ml-1">10:00 AM</span>
                        </div>

                        {/* Chat dari Kita (Kanan) */}
                        <div className="flex flex-col items-end">
                            <div className="px-4 py-2.5 bg-blue-600 text-white rounded-2xl rounded-tr-none shadow-sm text-sm">
                            Saya ingin bertanya tentang integrasi tema di aplikasi saya.
                            </div>
                            <span className="text-[10px] text-zinc-400 mt-1 mr-1">10:01 AM</span>
                        </div>
            </div>
        </>
    )
}