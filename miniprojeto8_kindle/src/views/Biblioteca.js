import React from 'react';
import { View, ScrollView, Text, StyleSheet, Image } from 'react-native';

// Definição do tipo dos dados dos itens
type ItemData = {
  image_url: string;
  name: string;
};

// Lista de itens locais
const localDataList: ItemData[] = [
  {
    image_url: require('../imagens/neuromancer.jpg'),
    name: 'Neuromancer',
  },
  {
    image_url: require('../imagens/countZero.jpeg'),
    name: 'Count Zero',
  },
  {
    image_url: require('../imagens/monalisa.jpeg'),
    name: 'Mona Lisa Overdrive',
  },
  {
    image_url: require('../imagens/sandmanBrumas.jpg'),
    name: 'Sandman - Estação das Brumas',
  },
  {
    image_url: require('../imagens/sandmanPreludios.jpeg'),
    name: 'Sandman - Prelúdios e Noturnos',
  },
  {
    image_url: require('../imagens/sandmanTerraSonhos.jpeg'),
    name: 'Sandman - Terra dos Sonhos',
  },
  {
    image_url: require('../imagens/mochileiro.jpeg'),
    name: 'O Guia Definitivo do Mochileiro das Galáxias',
  },
  {
    image_url: require('../imagens/batalha.jpeg'),
    name: 'A Batalha do Apocalipse',
  },
  {
    image_url: require('../imagens/osSete.jpeg'),
    name: 'Os Sete',
  },
];

// Função para dividir o array em chunks
const chunkArray = (array: any[], size: number) => {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArray.push(array.slice(i, i + size));
  }
  return chunkedArray;
};

// Renderizando a sessão
const renderSession = (title: string, data: ItemData[]) => (
  <View>
    <Text style={styles.subHeader}>{title}</Text>
    {chunkArray(data, 3).map((chunk, chunkIndex) => (
      <View style={styles.row} key={chunkIndex}>
        {chunk.map((item, i) => (
          <View style={styles.itemContainer} key={`${chunkIndex}-${i}`}>
            <Image style={styles.image} source={item.image_url} />
            <Text style={styles.itemName}>{item.name}</Text>
          </View>
        ))}
      </View>
    ))}
  </View>
);

// Componente Avatars
const Avatars = () => {
  return (
    <ScrollView>
      {renderSession('Ficção', localDataList)}
    </ScrollView>
  );
};

// Estilos
const styles = StyleSheet.create({
  subHeader: {
    backgroundColor: '#468C26',
    color: 'white',
    textAlign: 'center',
    paddingVertical: 5,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  itemContainer: {
    alignItems: 'center',
    width: 100
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 2,
  },
  itemName: {
    marginTop: 5,
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});

export default Avatars;