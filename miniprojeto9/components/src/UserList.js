import React from 'react';
import { View, FlatList } from 'react-native';
import { ListItem, Avatar, Icon } from '@rneui/themed';
import { Button } from 'react-native-elements';
import users from './data/users';

export default function UserList({ navigation }) {
  function getActions(user) {
    return (
      <>
        <Button
          onPress={() => navigation.navigate('UserForm', user)}
          type="clear"
          icon={<Icon name="edit" size={25} color="black" />}
        />
        <Button
          onPress={() => alert(`Deletar ${user.nome}`)}
          type="clear"
          icon={<Icon name="delete" size={25} color="red" />}
        />
      </>
    );
  }

  function getUserItem({ item: user }) {
    return (
      <ListItem
        bottomDivider
        onPress={() => navigation.navigate('UserDetails', { user })}>
        <Avatar size={50} rounded source={{ uri: user.avatarUrl }} />
        <ListItem.Content>
          <ListItem.Title>{user.nome}</ListItem.Title>
        </ListItem.Content>
        {getActions(user)}
      </ListItem>
    );
  }

  return (
    <View>
      <FlatList
        keyExtractor={(user) => user.id.toString()}
        data={users}
        renderItem={getUserItem}
      />
    </View>
  );
}