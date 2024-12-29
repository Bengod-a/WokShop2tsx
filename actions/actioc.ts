// import { fetchFavorit } from './actioc';
// import { fetchFavoritrId } from '@/actions/actioc';
'use server';

import { imageSchema, landmarkSchema, profileSchema, validateWithZod, } from "@/utils/schemas";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import db from '@/utils/db'
import { redirect } from "next/navigation";
import { uploadFile } from "@/utils/supabase";
import { revalidatePath } from "next/cache";
import { profile } from "console";

const getAuthUser = async () => {
    const user = await currentUser()

    if (!user) {
        throw new Error('You must logged!!!')
    }
    if (!user.privateMetadata.hasProfile) redirect('/profile/create')
    return user
}


const renderError = (error: unknown): { message: string } => {
    return {
        message: error instanceof Error ? error.message : 'An Error!!!'
    }
}

export const CreateProfileAction = async (
    prveState: any,
    formData: FormData
) => {
    try {
        const user = await currentUser()
        if (!user) throw new Error('Please Login!!!')

        const rawData = Object.fromEntries(formData)
        const validateField = validateWithZod(profileSchema, rawData)
        // console.log(validateField);

        await db.profile.create({
            data: {
                clerkId: user.id,
                email: user.emailAddresses[0].emailAddress,
                profileImage: user.imageUrl ?? '',
                ...validateField
            }
        })

        const client = await clerkClient()
        await client.users.updateUserMetadata(user.id, {
            privateMetadata: {
                hasProfile: true
            }
        })

    } catch (error) {
        // console.log(error);
        return renderError(error)
    }
    redirect('/')

}



export const CreateLandmarkAction = async (
    prveState: any,
    formData: FormData
): Promise<{ message: string }> => {
    try {
        const user = await getAuthUser()
        const rawData = Object.fromEntries(formData)
        const file = formData.get('image') as File;

        const validatedFile = validateWithZod(imageSchema, { image: file })
        const validateField = validateWithZod(landmarkSchema, rawData);




        const fullPath = await uploadFile(validatedFile.image)
        console.log(fullPath);


        await db.landmark.create({
            data: {
                ...validateField,
                image: fullPath,
                profileId: user.id
            }
        })



        // return { message: "Create Landmark Success!!!" }
    } catch (error) {
        // console.log(error);
        return renderError(error)
    }
    redirect('/')

}

export const fetchLandmark = async ({ search = '', category }: { search?: string, category?: string }) => {
    const landmark = await db.landmark.findMany({
        where: {
            category,
            OR: [
                { name: { contains: search, mode: 'insensitive' } },
                { description: { contains: search, mode: 'insensitive' } },
                { province: { contains: search, mode: 'insensitive' } },

            ]
        },
        orderBy: {
            createdAt: 'desc'
        }
    })

    return landmark
}



export const fetchLandmarkHero = async () => {
    const landmark = await db.landmark.findMany({
        orderBy: {
            createdAt: 'desc',
        },
        take: 5
    })

    return landmark
}






export const fetchFavoritrId = async ({ landmarkId }: { landmarkId: string }) => {
    const user = await getAuthUser()
    const favorite = await db.favorite.findFirst({
        where: {
            landmarkId: landmarkId,
            profileId: user.id
        },
        select: {
            id: true
        }
    })
    return favorite?.id || null
}



export const toggleFavoriteAction = async (prveState: {
    favoriteId: string | null
    landmarkId: string
    pathname: string
}) => {
    const { favoriteId, landmarkId, pathname } = prveState
    const user = await getAuthUser()
    // console.log("ข้อมูลผู้ใช้:", user);
    try {

        if (favoriteId) {
            await db.favorite.delete({
                where: {
                    id: favoriteId,
                }
            })
        }
        else {

            await db.favorite.create({
                data: {
                    landmarkId: landmarkId,
                    profileId: user.id,
                },
            });
        }

        revalidatePath(pathname)
        return {
            message: favoriteId
                ? 'Remove Favoritr Success'
                : "Add favorite "
        }

    } catch (error) {
        return renderError(error)
    }

}


export const fetchFavorits = async () => {
    const user = await getAuthUser()

    const favorites = await db.favorite.findMany({
        where: {
            profileId: user.id
        },
        select: {
            landmark: {
                select: {
                    id: true,
                    name: true,
                    description: true,
                    image: true,
                    price: true,
                    province: true,
                    lat: true,
                    lng: true,
                    category: true,
                }
            }
        }
    })

    return favorites.map((favorite) => favorite.landmark)
}

export const fetchLandmarkDetail = async({id}:{id:string})=>{
    return db.landmark.findFirst({
        where:{
            id:id
        },
        include:{
            profile: true
        }
    })
}