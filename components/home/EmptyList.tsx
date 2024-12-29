import Link from "next/link"
import { Button } from "../ui/button"


const EmptyList = ({
    heading = 'No item',
    message = 'Pleace try again',
    btntext = 'back home'
}:
    {
        heading?: string,
        message?: string,
        btntext?: string,
    }) => {
    return (
        <div>
            <h2 className="text-xl font-bold">{heading}</h2>
            <p className="text-lg mb-4">{message}</p>

            <Button className="capitalize" asChild>
            <Link href={'/'}>{btntext}</Link>
            </Button>
        </div>
    )
}
export default EmptyList