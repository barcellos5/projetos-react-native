import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserList from './components/src/UserList';
import UserForm from './components/src/UserForm';
import UserDetails from './components/src/UserDetails';
import { Button, Icon } from 'react-native-elements';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="UserList"
        screenOptions={screenOptions}>
        <Stack.Screen
          name="UserList"
          component={UserList}
          options={({ navigation }) => ({
            title: "Lista de Usuários",
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate("UserForm")}
                type="clear"
                icon={<Icon name="add" size={25} color="white" />}
              />
            )
          })}
        />
        <Stack.Screen
          name="UserForm"
          component={UserForm}
          options={{
            title: "Formulário de Usuários"
          }}
        />
        <Stack.Screen
          name="UserDetails"
          component={UserDetails}
          options={{
            title: "Detalhes do Usuário"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const screenOptions = {
  headerStyle: {
    backgroundColor: '#009955'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: "bold"
  }
};