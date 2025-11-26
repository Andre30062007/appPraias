import React from 'react';
import {
StyleSheet,
View,
Text,
Image,
ScrollView
} from 'react-native';
import { Stack } from 'expo-router';
export default function MaragogiScreen() {
return (
<ScrollView style={styles.container}>
{/* 1. Header com o Título "Maragogi"
Isso garante que o nome da praia apareça na barra de navegação.
*/}
<Stack.Screen
options={{
title: 'Maragogi',
}}
/>
{/* 2. Imagem Principal */}
<Image
// O caminho da pasta `app/` para `assets/` é apenas um nível (../)
source={require('../assets/images/maragogi.jpeg')}
style={styles.headerImage}
/>
{/* 3. Conteúdo da Página */}
<View style={styles.contentContainer}>
{/* Título e Subtítulo */}
<Text style={styles.title}>Maragogi</Text>
<Text style={styles.subtitle}>Alagoas</Text>
{/* Texto de Descrição */}
<Text style={styles.description}>
Maragogi, em Alagoas, é famosa pelas suas piscinas naturais de águas cristalinas e praias com coqueiros, areia fina e mar claro.
O destino, localizado entre Maceió e Recife, atrai turistas o ano todo, especialmente durante a estação seca (outubro a março), quando o mar está mais transparente.
É essencial consultar a tábua de marés para aproveitar ao máximo os passeios, pois na maré baixa as piscinas naturais ficam visíveis e o "Caminho de Moisés" (um banco de areia) se revela.
</Text>
{/* Imagem do Mapa */}
<Image
source={require('../assets/images/maragogi-map.png')}
style={styles.mapImage}
/>

</View>
</ScrollView>
);
}
// --- Estilos ---
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#FFFFFF',
},
headerImage: {
width: '100%',
height: 280, // Um pouco maior para a tela de detalhe
resizeMode: 'cover',
borderBottomLeftRadius: 20, // Bordas arredondadas no canto
borderBottomRightRadius: 20, // Bordas arredondadas no canto
},
contentContainer: {
padding: 20, // Espaçamento interno para todo o conteúdo
},
title: {
fontSize: 36,
fontWeight: 'bold',
color: '#005FFF', // Azul principal
marginBottom: 5,
},
subtitle: {
fontSize: 18,
color: '#20C0C0', // Ciano/Verde-água
marginBottom: 20,
},
description: {
fontSize: 16,
color: '#333333', // Cor de texto padrão (escuro)
lineHeight: 24, // Espaçamento entre linhas para melhor leitura
marginBottom: 25,
},
mapImage: {
width: '100%',
height: 200,
resizeMode: 'cover',
borderRadius: 10, // Bordas arredondadas para o mapa
},
});