'use client'

import { SignOutButton } from "@clerk/nextjs"
import { Button } from "../ui/button"
import { useToast } from "@/hooks/use-toast"


const SingOutLinks = () => {
    const { toast } = useToast()

    const hdllogout =()=>{
        toast({ description: 'Logout สำเร็จ' })
    }

    return (

        <SignOutButton>

            <Button 
            className="w-full"
            onClick={hdllogout}>Logout</Button>

        </SignOutButton>

    )
}
export default SingOutLinks