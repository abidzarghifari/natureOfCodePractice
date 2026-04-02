"use client"

import { useTheme } from "next-themes";
import { useEffect, useState } from "react"
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";

export default function ThemeSwitcher({size = 30}) {

    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()


    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="w-9 h-9" /> // Placeholder kosong dengan ukuran yang sama
    }

    const toggleTheme = () => {
          setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    }

    return (
        <>
            <button onClick={toggleTheme}>
                {theme === 'light' ? (
                    <CiLight size={size}/>
                ) : (
                    <CiDark size={size}/>
                )}
            </button>
        </>
    );
}