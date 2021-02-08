import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen3202348Navigator from '../features/BlankScreen3202348/navigator';
import CbSplashScreen1193684Navigator from '../features/CbSplashScreen1193684/navigator';
import OnboardingSlideScreen2193683Navigator from '../features/OnboardingSlideScreen2193683/navigator';
import BasicLoginSignup3193682Navigator from '../features/BasicLoginSignup3193682/navigator';
/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen3202348: { screen: BlankScreen3202348Navigator },
    CbSplashScreen1193684: { screen: CbSplashScreen1193684Navigator },
    OnboardingSlideScreen2193683: { screen: OnboardingSlideScreen2193683Navigator },
    BasicLoginSignup3193682: { screen: BasicLoginSignup3193682Navigator },
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
