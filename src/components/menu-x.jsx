import { Menu } from "lucide-react"
import { X } from 'lucide-react'
import { useState } from 'react'

export default function MenuX() {
    const [menustate, setmenustate] = useState("closed")
    let menuopenornot = menustate === "open"
    return (
        <button className='sm:hidden'>
            {!menuopenornot && (
                <Menu className="block" onClick={() => {setmenustate("open")}}/>		
            )}
            {menuopenornot && (
                <X className="block" onClick={() => {setmenustate("closed")}}/>
            )}
        </button>
    )}