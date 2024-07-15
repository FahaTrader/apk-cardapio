import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BurgerMenu from '../components/BurgerMenu';
import PizzaMenu from '../components/PizzaMenu';
import DrinkMenu from '../components/DrinkMenu';
import Cart from '../components/Cart';
import Sidebar from '../components/Sidebar';
import Icon from 'react-native-vector-icons/FontAwesome';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
        drawerContent={(props) => <Sidebar {...props} />}
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#222',
          },
          drawerActiveTintColor: 'red',
          drawerInactiveTintColor: 'white',
          drawerLabelStyle: {
            fontSize: 18,
          },
          headerStyle: {
            backgroundColor: '#444',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
      <Drawer.Screen
          name="Hamburguers"
          component={BurgerMenu}
          options={{
            drawerLabel: 'Hamburguers',
            drawerIcon: ({ color, size }) => (
              <Icon name="cutlery" size={size} color={color} />
            ),
          }}
        />
      <Drawer.Screen
          name="Pizzas"
          component={PizzaMenu}
          options={{
            drawerLabel: 'Pizzas',
            drawerIcon: ({ color, size }) => (
              <Icon name="pie-chart" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Bebidas"
          component={DrinkMenu}
          options={{
            drawerLabel: 'Bebidas',
            drawerIcon: ({ color, size }) => (
              <Icon name="glass" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Carrinho"
          component={Cart}
          options={{
            drawerLabel: 'Carrinho',
            drawerIcon: ({ color, size }) => (
              <Icon name="shopping-cart" size={size} color={color} />
            ),
          }}
        />
    </Drawer.Navigator>
  );
}
