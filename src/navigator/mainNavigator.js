import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps82830Navigator from '../features/Maps82830/navigator';
import Add-Item82829Navigator from '../features/Add-Item82829/navigator';
import Maps82825Navigator from '../features/Maps82825/navigator';
import UserProfile82821Navigator from '../features/UserProfile82821/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps82830: { screen: Maps82830Navigator },
Add-Item82829: { screen: Add-Item82829Navigator },
Maps82825: { screen: Maps82825Navigator },
UserProfile82821: { screen: UserProfile82821Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
