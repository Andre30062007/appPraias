import React from 'react';
import {
StyleSheet,
View,
Text,
Image,
ScrollView
} from 'react-native';
import { Stack } from 'expo-router';
export default function ArraialScreen() {
return (
<ScrollView style={styles.container}>
{/* 1. Header com o Título "Arraial"
Isso garante que o nome da praia apareça na barra de navegação.
*/}
<Stack.Screen
options={{
title: 'Arraial',
}}
/>
{/* 2. Imagem Principal */}
<Image
// O caminho da pasta `app/` para `assets/` é apenas um nível (../)
source={require('../assets/images/arraial.jpg')}
style={styles.headerImage}
/>
{/* 3. Conteúdo da Página */}
<View style={styles.contentContainer}>
{/* Título e Subtítulo */}
<Text style={styles.title}>Arraial</Text>
<Text style={styles.subtitle}>Rio de Janeiro</Text>
{/* Texto de Descrição */}
<Text style={styles.description}>
Arraial do Cabo tem diversas praias famosas por suas águas cristalinas, como as Prainhas do Pontal do Atalaia, a Praia do Forno (acessível por trilha ou barco) e a Praia Grande.
As praias geralmente têm mar gelado, mas atraem visitantes pela beleza natural, ótimas para mergulho com snorkel, e boa infraestrutura com quiosques.
O acesso a algumas praias pode envolver escadarias, trilhas ou passeios de barco.
</Text>
{/* Imagem do Mapa */}
<Image
source={require('../assets/images/arraial-map.png')}
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