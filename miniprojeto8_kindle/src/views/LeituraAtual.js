import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

// teste de conteudo de página
const bookContent = [
  "Página 1: O Céu sobre o porto tinha cor de televisão num canal fora do ar. Considerada a obra precursora do movimento cyberpunk e um clássico da ficção científica moderna, Neuromancer conta a história de Case, um cowboy do ciberespaço e hacker da matrix.",
  "Página 2: Como punição por tentar enganar os patrões, seu sistema nervoso foi contaminado por uma toxina que o impede de entrar no mundo virtual.",
  "Página 3: Agora, ele vaga pelos subúrbios de Tóquio, cometendo pequenos crimes para sobreviver, e acaba se envolvendo em uma jornada que mudará para sempre o mundo e a percepção da realidade.",
  "Página 4: Evoluindo de Blade Runner e antecipando Matrix, Neuromancer é o romance de estreia de William Gibson.",
  "Página 5: Esta obra distópica, publicada em 1984, antevê, de modo muito preciso, vários aspectos fundamentais da sociedade atual e de sua relação com a tecnologia",
  "Página 6: Foi o primeiro livro a ganhar a chamada “tríplice coroa da ficção científica”: os prestigiados prêmios Hugo, Nebula e Philip K. Dick.",
  "Página 7: William Gibson – junto a Bruce Sterling e John Shirley – é um dos criadores do gênero cyberpunk, que une informática e inquietações históricas e filosóficas, em tramas pop violentas e cheias de ação. Neuromancer é a primeira obra do gênero e seu principal expoente. Pioneiro em retratar o universo da internet, foi em Neuromancer que Gibson difundiu o termo ciberespaço, apresentando de forma inédita os conceitos tão comuns atualmente. ",
];

const LeituraAtual = () => {
  const [currentPage, setCurrentPage] = useState(0);

  // Navegação entre as páginas
  const nextPage = () => {
    if (currentPage < bookContent.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Neuromancer</Text>

      <ScrollView style={styles.areaLeitura}>
        <Text style={styles.pageContent}>{bookContent[currentPage]}</Text>
      </ScrollView>

      <View style={styles.navigationButtons}>
        <TouchableOpacity
          style={[styles.button, currentPage === 0 && styles.disabledButton]}
          onPress={prevPage}
          disabled={currentPage === 0}
        >
          <Text style={styles.buttonText}>Anterior</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, currentPage === bookContent.length - 1 && styles.disabledButton]}
          onPress={nextPage}
          disabled={currentPage === bookContent.length - 1}
        >
          <Text style={styles.buttonText}>Próxima</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.pageNumber}>
        Página {currentPage + 1} de {bookContent.length}
      </Text>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#3b8c24',
  },
  areaLeitura: {
    flex: 1,
    marginBottom: 20,
  },
  pageContent: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'justify',
    color: '#333',
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#3b8c24',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  disabledButton: {
    backgroundColor: '#9e9e9e',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  pageNumber: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
  },
});

export default LeituraAtual;