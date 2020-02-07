import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import FilmDetailScreenl from '../Components/FilmDetail'
import HomeScreen from '../Components/HomeView'

const MainNavigator = createStackNavigator({
  HomeView: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Rechercher'
    }
  },
  FilmDetail: { // Encore une fois j'ai mis le même nom que celui du component mais libre à vous de choisir un nom différent
    screen: FilmDetailScreen
  }
})

const App = createAppContainer(MainNavigator)

export default App;
