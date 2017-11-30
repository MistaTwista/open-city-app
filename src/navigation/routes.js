import { StackNavigator, TabNavigator }       from 'react-navigation';

import SplashScreen             from '../views/SplashScreen';
import MainView                 from '../views/MainView';
import SendServiceRequestView   from '../views/SendServiceRequestView';
import ServiceRequestListView   from '../views/ServiceRequestListView';
import IntroductionView         from '../views/IntroductionView';
import ServiceRequestDetailView from '../views/ServiceRequestDetailView';
import AppFeedbackView          from '../views/AppFeedbackView';
import ImageView                from '../views/ImageView';
import HomeView                 from '../views/HomeView';

const ServiceStack = StackNavigator({
  MainView: { screen: MainView },
  ServiceRequestListView: { screen: ServiceRequestListView },
  SendServiceRequestView: { screen: SendServiceRequestView },
  ServiceRequestDetailView: { screen: ServiceRequestDetailView }
}, {
  headerMode: 'none' //hide built in navbar
});

export const TabStack = TabNavigator({
  Home: {
    screen: HomeView,
    tabBarLabel: 'Home'
  }
}, {
  tabBarPosition: 'bottom'
})

export const GlobalStack = StackNavigator({
  Tabs: { screen: TabStack },
  SplashScreen: { screen: SplashScreen },
  IntroductionView: { screen: IntroductionView },
  AppFeedbackView: { screen: AppFeedbackView },
  ImageView: { screen: ImageView }
}, {
  headerMode: 'none'
})
