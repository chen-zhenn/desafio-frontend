import { useState } from "react"

export default function CardContainer({  
    children, 
}){

    const [open, setOpen] = useState(true)

    return (
        <>
            { 
            open && 
             <aside className='card-container'>
                <div 
                    className='card-container__action'
                    onClick={() => setOpen(false)}
                >
                </div>
                {children}
            </aside> 
            }
        </>
    )
}