import Image from "next/image";
import { LandmarkCardProps } from "@/utils/types";
import LandmarkRating from "./LandmarkRating";
import FavoriteToggleButton from "./FavoriteToggleButton";
import Link from "next/link";

const LandmarkCard = ({ landmark }: { landmark: LandmarkCardProps }) => {
  const { name, image, id, description, category, price, province } = landmark;
  return (
    <article className="group relative">
      <Link href={`/landmark/${id}`}>
      <div className="relative h-[300px] rounded-md overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={500} // Adjust to your needs
          height={300} // Adjust to your needs
          className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
      </div>

      <div className="flex justify-between items-center mt-2">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">{name.substring(0,30)}</h3>
        <span className="text-xs text-gray-600 dark:text-gray-400"><LandmarkRating /></span>
      </div>

      <p className="text- mt-1 text-muted-foreground">{description.substring(0,51)}</p>


      <div className="mt-2 flex items-center justify-between text-sm font-semibold">
      <p>{price} THB</p>
      <p>{province}</p>
      </div>

          </Link>
      <div className='absolute top-5 right-5'>
        <FavoriteToggleButton landmarkId={id}/>
      </div>
    </article>
  );
};

export default LandmarkCard;
