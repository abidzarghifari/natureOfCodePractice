"use client"

import ThemeSwitcher from "../components/theme/themeSwitcher";
import Link from "next/link";

export default function Page(){

    return (
        <>
            <div>
                <ThemeSwitcher size={40}/>
            </div>
            <Link href="/">home</Link>
        </>
    );
}   