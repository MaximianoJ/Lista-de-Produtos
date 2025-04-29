import React from 'react';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import ProductCard from '../../components/ProductCard';

// Definição do tipo para o produto
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function HomeScreen() {
  // Lista de produtos com pelo menos 6 itens
  const products: Product[] = [
    {
      id: 1,
      name: 'Smartphone Galaxy S24',
      price: 4999.99,
      image: require('../../assets/images/S24.jpg'),
    },
    {
      id: 2,
      name: 'Notebook Dell XPS',
      price: 8499.90,
      image: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/16-9640/spi/touch/silver/notebook-xps-16-9640-t-silver-campaign-hero-504x350-ng.psd?fmt=jpg&wid=570&hei=400',
    },
    {
      id: 3,
      name: 'Fones de Ouvido AirPods Pro',
      price: 1899.00,
      image: require('../../assets/images/AirPods.jpeg')
    },
    {
      id: 4,
      name: 'Smart TV 55" 4K',
      price: 3299.00,
      image: require('../../assets/images/SmartTV.png'),
    },
    {
      id: 5,
      name: 'Console PlayStation 5',
      price: 3999.90,
      image: require('../../assets/images/PS5.jpg'),
    },
    {
      id: 6,
      name: 'Câmera DSLR Profissional',
      price: 5459.99,
      image:require('../../assets/images/Camera.jpg'),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Produtos em Destaque</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#4CAF50',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  scrollContent: {
    paddingVertical: 15,
  },
});