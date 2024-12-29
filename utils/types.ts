import { provinces } from './provinces';
import { categories } from './categories';
export type actionFunction = (
    prveState: any,
    formData: FormData

) => Promise<{ message: string }>



export type LandmarkCardProps = {
    id: string
    name: string
    description: string
    image: string
    category: string
    province: string
    price: number
    lat: number
    lng: number
}