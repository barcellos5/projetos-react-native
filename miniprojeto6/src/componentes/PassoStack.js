import React from 'react';
import { View, Button } from 'react-native';

const Comp = (comp) => (
  <View style={{ flex: 1 }}>
    <View>
      {comp.avancar ? (
        <Button
          title="Avançar"
          onPress={() => {
            comp.navigation.navigate(comp.avancar);
          }}
        />
      ) : null}
      {comp.voltar ? (
        <Button
          title="Voltar"
          onPress={() => {
            comp.navigation.goBack();
          }}
        />
      ) : null}
    </View>

    <View style={{ flex: 1 }}>
      {comp.children}
    </View>
  </View>
);

export default Comp;