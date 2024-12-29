import Image from "next/image"

const ImageContainer = ({ mainImge, name }: { mainImge: string, name: string }) => {
    return (
        <section className="h-[400px] md:h-[600px] relative mt-8">
            <Image 
            src={mainImge}
            sizes="100vw"
            alt="name"
            fill
            priority
            className='object-cover rounded-md'
            />
        </section>
    )
}
export default ImageContainer