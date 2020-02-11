import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';
import MainView from '../Components/MainView'
import Camera from '../Components/Camera'
import PromotionsView from '../Components/PromotionsView'

const blue = "#2289dc"

const MainStackNavigator = createStackNavigator({
  Home: { 
    screen: MainView,
    navigationOptions: {
      title: 'Home',
      headerShown: false,
    }
  },
  Promotions: { 
    screen: PromotionsView,
    navigationOptions: {
      title: 'Promotions',
      headerStyle: {
        backgroundColor: blue,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
      },
    }
  },
  Camera: { 
    screen: Camera,
    navigationOptions: {
      title: 'Camera',
      headerStyle: {
        backgroundColor: blue,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
      },
    }
  }
})

export default createAppContainer(MainStackNavigator)