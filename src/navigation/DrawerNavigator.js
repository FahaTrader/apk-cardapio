import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BurgerMenu from '../components/BurgerMenu';
import PizzaMenu from '../components/PizzaMenu';
import DrinkMenu from '../components/DrinkMenu';
import Cart from '../components/Cart';
import Sidebar from '../components/Sidebar';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={(props) => <Sidebar {...props} />}>
      <Drawer.Screen name="Hamburguers" component={BurgerMenu} />
      <Drawer.Screen name="Pizzas" component={PizzaMenu} />
      <Drawer.Screen name="Bebidas" component={DrinkMenu} />
      <Drawer.Screen name="Carrinho" component={Cart} />
    </Drawer.Navigator>
  );
}
