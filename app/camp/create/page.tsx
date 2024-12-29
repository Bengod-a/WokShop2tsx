// import { CreateLandmarkAction, CreateProfileAction } from "@/actions/actioc";
// import MapLandmark from "@/components/map/MapLandmark";
// import { SubmitButton } from "@/components/form/Buttons";
// import CategoryInput from "@/components/form/CategoryInput";
// import FormContainer from "@/components/form/FormContainer";
// import FormInput from "@/components/form/FormInput";
// import ImageInpu from "@/components/form/ImageInput";
// import ProvinceInput from "@/components/form/ProvinceInput";
// import TextAreaInput from "@/components/form/TextAreaInput";
// import { currentUser } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";



// const CreateProfile = async () => {
//     return (
//         <section>
//             <h1 className="text-2xl font-semibold mb-8 capitalize">Create Landmark</h1>

//             <div className="border p-8 rounded-2xl">

//                 <FormContainer action={CreateLandmarkAction}>
//                     <div className="grid md:grid-cols-2 gap-4 mt-4">
//                         <FormInput
//                             name='name'
//                             label="Landmark Name"
//                             type="text"
//                             placeholder="Landmark Name" />


//                         <CategoryInput />
//                     </div>
//                     <TextAreaInput name="descirption" />
//                     <div className="grid md:grid-cols-2 gap-4 mt-4">

//                         <FormInput
//                             name='price'
//                             label="Price"
//                             type='number'
//                             placeholder="Price"
//                         />

//                         <ProvinceInput />
//                     </div>

//                     <ImageInpu />


//                     <MapLandmark  />



//                     <SubmitButton className="mt-3" text="create landmark" size='lg' />
//                 </FormContainer>

//             </div>
//         </section>
//     )
// }
// export default CreateProfile


"use client";

import { CreateLandmarkAction } from "@/actions/actioc";
import dynamic from "next/dynamic";
import { SubmitButton } from "@/components/form/Buttons";
import CategoryInput from "@/components/form/CategoryInput";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import ImageInput from "@/components/form/ImageInput";
import ProvinceInput from "@/components/form/ProvinceInput";
import TextAreaInput from "@/components/form/TextAreaInput";

// Dynamic Import for MapLandmark
const MapLandmark = dynamic(() => import('@/components/map/MapLandmark'), {
  ssr: false, // Disable SSR for MapLandmark
});

const CreateProfile = () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">Create Landmark</h1>

      <div className="border p-8 rounded-2xl">
        <FormContainer action={CreateLandmarkAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput
              name="name"
              label="Landmark Name"
              type="text"
              placeholder="Landmark Name"
            />
            <CategoryInput />
          </div>
          <TextAreaInput name="description" />
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput name="price" label="Price" type="number" placeholder="Price" />
            <ProvinceInput />
          </div>
          <ImageInput />

          <MapLandmark />

          <SubmitButton className="mt-3" text="Create Landmark" size="lg" />
        </FormContainer>
      </div>
    </section>
  );
};

export default CreateProfile;
