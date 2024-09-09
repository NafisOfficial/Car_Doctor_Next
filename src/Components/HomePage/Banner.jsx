import bgImg1 from "../../../public/assets/images/homeCarousel/1.jpg";
import bgImg2 from "../../../public/assets/images/homeCarousel/2.jpg";
import bgImg3 from "../../../public/assets/images/homeCarousel/3.jpg";
import bgImg4 from "../../../public/assets/images/homeCarousel/4.jpg";

const Banner = () => {

    const banners = [
        {
            tittle: "Affordable Price For Car Servicing",
            description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
            next: "#slide2",
            prev: "#slide4",
            bgUrl: bgImg1
        },
        {
            tittle: "Affordable Price For Car Servicing",
            description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
            next: "#slide3",
            prev: "#slide1",
            bgUrl: bgImg2
        },
        {
            tittle: "Affordable Price For Car Servicing",
            description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
            next: "#slide4",
            prev: "#slide2",
            bgUrl: bgImg3
        },
        {
            tittle: "Affordable Price For Car Servicing",
            description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
            next: "#slide1",
            prev: "#slide3",
            bgUrl: bgImg4
        },
    ]


    return (
        <div >
            <div className="carousel w-full my-10">
                {banners.map((data, index) => <div key={index} id={`slide${index + 1}`} className="carousel-item relative w-full h-[90vh] rounded" style={{ backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(${data?.bgUrl?.src})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                    <div className='h-full w-1/2 flex items-center pl-36'>
                        <div>
                            <h1 className='text-white text-5xl font-bold'>{data?.tittle}</h1>
                            <p className='text-white my-5'>{data?.description}</p>
                            <div className='flex gap-3'>
                                <button className='btn btn-primary rounded-sm text-white'>Discover More</button>
                                <button className='btn btn-outline rounded-sm btn-general'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-3 right-12 gap-5  flex -translate-y-1/2 transform justify-between">
                        <a href={data?.prev} className="btn btn-circle btn-primary text-white">❮</a>
                        <a href={data?.next} className="btn btn-circle btn-primary text-white">❯</a>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default Banner;