import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';
import MainView from '../Components/MainView'
import ProfilView from '../Components/ProfilView'
import Camera from '../Components/Camera'

const blue = "#2289dc"

const MainStackNavigator = createStackNavigator({
  Home: { 
    screen: MainView,
    navigationOptions: {
      title: 'Home',
      headerShown: false,
    }
  },
  Profile: { 
    screen: ProfilView,
    navigationOptions: {
      title: 'Profile',
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