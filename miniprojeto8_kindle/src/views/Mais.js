import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity, ScrollView } from 'react-native';

// Função abrir link
const openLink = (url) => {
  Linking.openURL(url).catch((err) => console.error('Erro ao abrir o link:', err));
};

const Configuracoes = () => {
  const dicasDeLeitura = [
    {
      titulo: 'Como melhorar sua leitura',
      url: 'https://faro.edu.br/blog/tecnicas-de-leitura-aprenda-como-ler-mais-rapido-e-melhor/',
    },
    {
      titulo: 'Dicas para criar o hábito da leitura',
      url: 'https://totalpass.com/br/blog/bem-estar/como-criar-o-habito-da-leitura/',
    },
    {
      titulo: 'Conheça a leitura dinâmica',
      url: 'https://conexao.pucminas.br/blog/dicas/leitura-dinamica/',
    },
    {
      titulo: '20 Livros de ficção científica',
      url: 'https://blog.skeelo.com/2024/05/03/20-livros-de-ficcao-cientifica-para-rechear-sua-estante/',
    },
    {
      titulo: 'Literatura clássica para conhecer',
      url: 'https://www.companhiadasletras.com.br/BlogPost/6547/100-classicos-para-ler-antes-de-morrer-classico-e-classico-e-vice-versa?srsltid=AfmBOop0XfhPNBzY0mXcdSyxHynLIQG9WF-ABN0Nv0HwKUXYdw1CQmk5',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Dicas de Leitura</Text>
      {dicasDeLeitura.map((dica, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => openLink(dica.url)}
          style={styles.linkContainer}
        >
          <Text style={styles.linkText}>{dica.titulo}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#468C26',
  },
  linkContainer: {
    backgroundColor: '#D99873',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  linkText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});

export default Configuracoes;