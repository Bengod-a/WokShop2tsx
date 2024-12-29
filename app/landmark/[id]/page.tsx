import { fetchLandmarkDetail } from "@/actions/actioc"
import FavoriteToggleButton from "@/components/card/FavoriteToggleButton";
import Breadcrumbs from "@/components/landmaek/Breadcrumbs";
import Desc from "@/components/landmaek/Desc";
import ImageContainer from "@/components/landmaek/ImageContainer";
import ShareButton from "@/components/landmaek/ShareButton";
import MapLandmark from "@/components/map/MapLandmark";
import { redirect } from "next/navigation";


const LandmarkDetail = async ({ params }: { params: { id: string } }) => {

    const { id } = await params
    const landmark = await fetchLandmarkDetail({ id })
    if(!landmark)redirect('/')
    // console.log(landmark);


    return (
        <section>
            <Breadcrumbs name={landmark.name}/>
            <header className="flex justify-between mt-4 items-center">
                <h1 className="text-4xl font-bold">{landmark.name}</h1>

                <div className="flex items-center gap-x-4">
                   <ShareButton landmarkId={landmark.id} name={landmark.name}/>                  
                    <FavoriteToggleButton landmarkId={landmark.id}/>
                </div>          
            </header>
            <ImageContainer mainImge={landmark.image} name={landmark.name}/>


            <section>
                <div>
                    <Desc description={landmark.description}/>
                    <MapLandmark location={{lat:landmark.lat,lng:landmark.lng}}/>
                </div>
            </section>

        </section>
    )
}
export default LandmarkDetail