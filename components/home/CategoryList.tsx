import { categories } from "@/utils/categories"
import Link from "next/link"


const CategoryList = ({ search, category }: { search?: string, category?: string }) => {

    const searchTerm = search ? `$search=${search}` : ''

    return (
        <div>
            <div className="flex justify-center my-4 font-bold gap-x-4">
                {
                    categories.map((item) => {
                        const isActive = item.label === category
                        return (
                            <Link
                                href={`/?category=${item.label}${searchTerm}`}
                                key={item.label}>
                                <article className={`flex-col flex p-3 justify-center items-center hover:text-primary hover:scale-110 
                                duration-300
                                     ${isActive ? 'text-primary': ''}
                                     `}>
                                    <item.icon />
                                    <p>{item.label}</p>
                                </article>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default CategoryList