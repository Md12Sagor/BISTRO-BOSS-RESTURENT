import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import dessrtImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import useMenu from '../../hook/useMenu';
import MenuCategory from './MenuCategory/MenuCategory';
const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter(item => item.category === 'dessert')
  const soup = menu.filter(item => item.category === 'soup')
  const salad = menu.filter(item => item.category === 'salad')
  const offered = menu.filter(item => item.category === 'offered')
  const pizza = menu.filter(item => item.category === 'pizza')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss|  Menu</title>
            </Helmet>
             <Cover img={menuImg} title="our menu"></Cover>
             {/* Main Cover */}
           <SectionTitle subHeading="don't miss" heading="Today's Offer"> </SectionTitle>
              {/* offered menu Items */}
            <MenuCategory items={offered}></MenuCategory>
            
             {/* dessert menu items */}
            
           <MenuCategory items={desserts} 
           
          title="dessert" img={dessrtImg}></MenuCategory>
   
              <MenuCategory items={pizza} title="pizza" img={pizzaImg}></MenuCategory>
              <MenuCategory items={salad} title="salad" img={saladImg}></MenuCategory>
              <MenuCategory items={soup} title="soup" img={soupImg}></MenuCategory>

          
        </div>
    );
};

export default Menu;

