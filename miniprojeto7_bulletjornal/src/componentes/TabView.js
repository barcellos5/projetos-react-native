import React from 'react';
import { StyleSheet, Dimensions, StatusBar, Platform } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from '../views/home';
import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';
import TelaD from '../views/TelaD';

const Rota1 = () => <Home />;
const Rota2 = () => <TelaA />;
const Rota3 = () => <TelaB />;
const Rota4 = () => <TelaC />;
const Rota5 = () => <TelaD />;

export default class TabViewComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'posicao1', icon: 'home' },           // Home
      { key: 'posicao2', icon: 'calendar' },       // Calendário
      { key: 'posicao3', icon: 'target' },         // Metas Semanais
      { key: 'posicao4', icon: 'check-circle' },   // Hábitos Diários
      { key: 'posicao5', icon: 'book' },           // Livros
    ],
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          posicao1: Rota1,
          posicao2: Rota2,
          posicao3: Rota3,
          posicao4: Rota4,
          posicao5: Rota5,
        })}
        onIndexChange={(index) => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
        style={styles.container}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            style={styles.tabBar}
            renderIcon={({ route, color }) => (
              <MaterialCommunityIcons
                name={route.icon}
                size={24}
                color={color}
              />
            )}
            indicatorStyle={styles.indicator}
            activeColor="#261A23"
            inactiveColor="#D5F2DC"
          />
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  tabBar: {
    backgroundColor: '#A9D9B5',
  },
  indicator: {
    backgroundColor: '#261A23',
  },
});