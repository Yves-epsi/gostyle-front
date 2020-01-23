import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';
import MainView from '../Components/MainView'
import ProfilView from '../Components/ProfilView'
import Camera from '../Components/Camera'

const MainStackNavigator = createStackNavigator({
  Home: { 
    screen: MainView,
    navigationOptions: {
      title: 'Home'
    }
  },
  Profile: { 
    screen: ProfilView,
    navigationOptions: {
      title: 'Profile'
    }
  },
  Camera: { 
    screen: Camera,
    navigationOptions: {
      title: 'Camera'
    }
  }
})

export default createAppContainer(MainStackNavigator)