import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, Image, TextInput } from 'react-native';

// Definição do tipo de dados dos itens
type ItemData = {
  image_url: any; // Mudança de tipo para aceitar o retorno de require()
  name: string;
};

const dataList: ItemData[] = [
  {
    image_url: require('../imagens/coraline.jpeg'),
    name: 'Coraline',
  },
  {
    image_url: require('../imagens/dino.jpeg'),
    name: 'Jurassic Park',
  },
  {
    image_url: require('../imagens/dino2.jpeg'),
    name: 'O Mundo Perdido',
  },
  {
    image_url: require('../imagens/maquina.jpeg'),
    name: 'A Máquina do Tempo',
  },
  {
    image_url: require('../imagens/menina.jpeg'),
    name: 'A Menina que Roubava Livros',
  },
  {
    image_url: require('../imagens/pipas.jpeg'),
    name: 'O Caçador de Pipas',
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

const Explorar = () => {
  const [searchText, setSearchText] = useState('');
  const filteredData = dataList.filter(item =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <ScrollView>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar livros..."
          value={searchText}
          onChangeText={text => setSearchText(text)}
        />
      </View>
      {renderSession('Outros livros que você pode gostar!', filteredData)}
    </ScrollView>
  );
};

// Estilos
const styles = StyleSheet.create({
  searchContainer: {
    padding: 10,
    backgroundColor: '#468C26',
  },
  searchInput: {
    height: 40,
    backgroundColor: '#FEFEFE',
    borderRadius: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  subHeader: {
    backgroundColor: '#468C26',
    color: '#F2F2F2',
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
    width: 100,
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

export default Explorar;