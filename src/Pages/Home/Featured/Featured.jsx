import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featured from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
            heading="check it out"
            subHeading="Featured item">

            </SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 pb-20 pt-12 px-36">
                <div>
                    <img src={featured} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get Some</p>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas asperiores, voluptatum id expedita ab sint placeat voluptatibus ea saepe beatae explicabo voluptates sunt esse delectus sapiente inventore modi quasi voluptas? Adipisci, saepe doloribus. Quia expedita distinctio labore officiis, vero commodi. Quis iusto debitis harum ipsa!</p>
                 <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;