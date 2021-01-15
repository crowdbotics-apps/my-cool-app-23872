import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CbSplashScreen1193684Navigator from '../features/CbSplashScreen1193684/navigator';
import OnboardingSlideScreen2193683Navigator from '../features/OnboardingSlideScreen2193683/navigator';
/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
    CbSplashScreen1193684: { screen: CbSplashScreen1193684Navigator },
    OnboardingSlideScreen2193683: { screen: OnboardingSlideScreen2193683Navigator },
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
    contentComponent: SideMenu,
    initialRouteName: "CbSplashScreen1193684", // Splash Screen
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
