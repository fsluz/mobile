import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Home() {
  const emAlta = [
    {
      id: 1,
      titulo: 'A Origem',
      ano: '2010',
      nota: '8.8',
      categoria: 'Ficção Científica',
      corCapa: '#1E293B',
    },
    {
      id: 2,
      titulo: 'Batman: O Cavaleiro das Trevas',
      ano: '2008',
      nota: '9.0',
      categoria: 'Ação, Policial',
      corCapa: '#0F172A',
    },
    {
      id: 3,
      titulo: 'Matrix',
      ano: '1999',
      nota: '8.7',
      categoria: 'Ficção Científica',
      corCapa: '#022C22',
    }
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.welcomeText}>Bem-vindo ao</Text>
          <Text style={styles.brandText}>CineRecommended 🎬</Text>
        </View>
        <TouchableOpacity style={styles.profileBtn}>
          <MaterialIcons name="person" color="#F5C518" size={24} />
        </TouchableOpacity>
      </View>

      {/* Banner Principal - Destaque (Interestelar) */}
      <Text style={styles.sectionTitle}>Filme Destaque</Text>
      <View style={styles.bannerCard}>
        {/* Simulação de gradiente/imagem de fundo usando views coloridas */}
        <View style={styles.bannerBackground}>
          <View style={styles.glowCircle} />
        </View>

        <View style={styles.bannerContent}>
          <View style={styles.badgeRow}>
            <Text style={styles.featuredBadge}>Ficção Científica</Text>
            <View style={styles.ratingBadge}>
              <MaterialIcons name="star" color="#F5C518" size={14} />
              <Text style={styles.ratingText}>8.7</Text>
            </View>
          </View>

          <Text style={styles.bannerTitle}>Interestelar</Text>
          <Text style={styles.bannerSubtitle}>Direção: Christopher Nolan  •  2014</Text>
          
          <Text style={styles.bannerDescription}>
            As reservas naturais da Terra estão se esgotando. Um grupo de astronautas recebe a missão de verificar possíveis planetas para receber a população mundial.
          </Text>

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.primaryBtn}>
              <MaterialIcons name="play-arrow" color="#0B0B0F" size={20} />
              <Text style={styles.primaryBtnText}>Ver Trailer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryBtn}>
              <MaterialIcons name="add" color="#FFFFFF" size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Seção 2: Filmes em Alta (Horizontal Scroll) */}
      <View style={styles.sectionHeaderRow}>
        <Text style={styles.sectionTitle}>Em Alta Esta Semana</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>Ver todos</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
        {emAlta.map((filme) => (
          <TouchableOpacity key={filme.id} style={[styles.movieMiniCard, { backgroundColor: filme.corCapa }]}>
            {/* Decoração da capa simulando poster de cinema */}
            <View style={styles.miniPosterDesign}>
              <MaterialIcons name="movie-creation" color="rgba(255,255,255,0.15)" size={40} />
            </View>
            <View style={styles.miniCardContent}>
              <View style={styles.miniRatingRow}>
                <MaterialIcons name="star" color="#F5C518" size={12} />
                <Text style={styles.miniRatingText}>{filme.nota}</Text>
              </View>
              <Text style={styles.miniCardTitle} numberOfLines={1}>{filme.titulo}</Text>
              <Text style={styles.miniCardSubtitle}>{filme.ano} • {filme.categoria}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>CineRecommended • Tab Navigation</Text>
        <Text style={styles.creditsText}>Felipe Luz • 2026</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0B0F',
  },
  content: {
    padding: 16,
    paddingBottom: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 24,
  },
  welcomeText: {
    color: '#8E8E9F',
    fontSize: 14,
  },
  brandText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileBtn: {
    backgroundColor: '#161622',
    padding: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#232330',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 12,
  },
  bannerCard: {
    backgroundColor: '#161622',
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#232330',
    position: 'relative',
    height: 240,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
  },
  bannerBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#0F121F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  glowCircle: {
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: 'rgba(30, 64, 175, 0.25)',
    filter: 'blur(30px)', // Observação: blur no style pode não funcionar em algumas versões do RN, usamos opacity/gradiente como fallback visual
    opacity: 0.8,
  },
  bannerContent: {
    ...StyleSheet.absoluteFillObject,
    padding: 20,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(11, 11, 15, 0.65)', // Escurece o fundo para leitura de texto
  },
  badgeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  featuredBadge: {
    backgroundColor: '#E50914',
    color: '#FFFFFF',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    fontSize: 10,
    fontWeight: 'bold',
    overflow: 'hidden',
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  ratingText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  bannerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  bannerSubtitle: {
    fontSize: 12,
    color: '#B0B0C0',
    marginBottom: 8,
  },
  bannerDescription: {
    fontSize: 13,
    color: '#D1D1D6',
    lineHeight: 18,
    marginBottom: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  primaryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5C518',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginRight: 10,
  },
  primaryBtnText: {
    color: '#0B0B0F',
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  secondaryBtn: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    padding: 8,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  seeAllText: {
    color: '#F5C518',
    fontSize: 12,
    fontWeight: 'bold',
  },
  horizontalScroll: {
    marginBottom: 24,
  },
  movieMiniCard: {
    width: 140,
    height: 190,
    marginRight: 14,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#232330',
    justifyContent: 'space-between',
  },
  miniPosterDesign: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
  },
  miniCardContent: {
    padding: 10,
    backgroundColor: 'rgba(11, 11, 15, 0.85)',
    borderTopWidth: 0.5,
    borderColor: 'rgba(255,255,255,0.05)',
  },
  miniRatingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  miniRatingText: {
    color: '#F5C518',
    fontSize: 11,
    fontWeight: 'bold',
    marginLeft: 3,
  },
  miniCardTitle: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: 'bold',
  },
  miniCardSubtitle: {
    color: '#8E8E9F',
    fontSize: 9,
    marginTop: 1,
  },
  footer: {
    backgroundColor: '#161622',
    padding: 15,
    borderRadius: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#232330',
    alignItems: 'center',
  },
  footerText: {
    color: '#8E8E9F',
    fontSize: 12,
  },
  creditsText: {
    color: '#F5C518',
    fontSize: 11,
    fontWeight: 'bold',
    marginTop: 4,
  },
});
