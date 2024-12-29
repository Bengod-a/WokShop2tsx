import { fetchLandmark, fetchLandmarkHero } from "@/actions/actioc"
import LandmarkList from "./LandmarkList";
import { LandmarkCardProps } from "@/utils/types";
import Hero from "../hero/Hero";
import CategoryList from "./CategoryList";
import EmptyList from "./EmptyList";

const LandmarkContainer = async ({search, category}:{search?:string, category?:string}) => {

  const landmarks:LandmarkCardProps[] = await fetchLandmark({search, category})
  const landmarksHero:LandmarkCardProps[] = await fetchLandmarkHero()
  // console.log(landmarks);

  // if(landmarks.length === 0){
  //   return <EmptyList />
  // }


  return (
    <div>
      <Hero landmarks={landmarksHero}/>
      <CategoryList search={search} category={category}/>
      {
        landmarks.length === 0
        ? <EmptyList heading="No results" btntext="Clear filter"/>
        : <LandmarkList landmarks={landmarks} />
      }
      
    </div>
  )
}
export default LandmarkContainer