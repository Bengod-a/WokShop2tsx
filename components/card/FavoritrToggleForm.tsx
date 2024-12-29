'use client'

import { toggleFavoriteAction } from "@/actions/actioc"
import FormContainer from "../form/FormContainer"
import { usePathname } from "next/navigation";
import { CardSubmitButton } from "../form/Buttons";

const FavoritrToggleForm = (
    { favoriteId, landmarkId }
        : { favoriteId: string | null; landmarkId: string }) => {
    const pathname = usePathname()
    // console.log(pathname);
    // console.log('id', favoriteId);

    const toggleAction = toggleFavoriteAction.bind(null, { favoriteId, landmarkId, pathname })

    return (
        <FormContainer action={toggleAction}>
            <CardSubmitButton isFavorite={favoriteId ? true : false}/>
        </FormContainer>
    )
}
export default FavoritrToggleForm