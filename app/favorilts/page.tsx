import {  fetchFavorits } from "@/actions/actioc"
import EmptyList from "@/components/home/EmptyList";
import LandmarkList from "@/components/home/LandmarkList";

const FavoritsPage = async() => {
  const favorites = await fetchFavorits()
  if(favorites.length === 0){
    return <EmptyList heading="No item Favorits"/>
  }  

  return <LandmarkList landmarks={favorites}/>
}
export default FavoritsPage