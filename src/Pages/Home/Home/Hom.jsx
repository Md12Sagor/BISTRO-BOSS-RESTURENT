import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PosuloarMenu from "../PopularMenu/PosuloarMenu";
import Review from "../Revieew/Review";



const Hom = () => {
    return (
        <div>
            {<Helmet>
                <title>Bistro |  Home</title>
            </Helmet>}
            <Banner></Banner>
            <Category></Category>
            <PosuloarMenu></PosuloarMenu>
            <Featured></Featured>
            <Review></Review>
        </div>
    );
};

export default Hom;