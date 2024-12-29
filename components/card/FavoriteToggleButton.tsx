import { Heart } from "lucide-react"
import { Button } from "../ui/button"
import { auth } from "@clerk/nextjs/server"
import { SingInCardButton } from "../form/Buttons"
import { fetchFavoritrId } from "@/actions/actioc"
import FavoritrToggleForm from "./FavoritrToggleForm"



const FavoriteToggleButton = async ({ landmarkId }: { landmarkId: string }) => {

    const { userId } = await auth()
    // console.log(userId);

    if (!userId) return <SingInCardButton />
    const favoriteId = await fetchFavoritrId({ landmarkId })

    // console.log(favoriteId);

    return <FavoritrToggleForm
        favoriteId={favoriteId}
        landmarkId={landmarkId}
    />

}
export default FavoriteToggleButton