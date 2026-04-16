import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#D32F2F',
  primaryDark: '#B71C1C',
  background: '#f5f5f5',
  lightGray: '#ffffff',
  darkGray: '#1a1a1a',
  mediumGray: '#555',
  lightGray2: '#999',
  lightBlue: '#e3f2fd',
  borderColor: '#D32F2F',
  categoryRed: '#D32F2F',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export const headerStyles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    paddingTop: 15,
    paddingBottom: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.primaryDark,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.lightGray,
    backgroundColor: colors.primary,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 4,
  },
  subtitle: {
    fontSize: 12,
    color: colors.lightGray2,
    marginTop: 8,
  },
});

export const newsListStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export const footerStyles = StyleSheet.create({
  footer: {
    backgroundColor: colors.background,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    alignItems: 'center',
  },
  text: {
    fontSize: 13,
    color: colors.mediumGray,
    marginBottom: 10,
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
    color: colors.darkGray,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 40,
  },
  iconButton: {
    padding: 10,
  },
  icon: {
    fontSize: 24,
  },
});

export const newsItemStyles = StyleSheet.create({
  newsItem: {
    backgroundColor: colors.lightGray,
    marginBottom: 12,
    padding: 15,
    borderRadius: 4,
    borderLeftWidth: 4,
    borderLeftColor: colors.categoryRed,
  },
  category: {
    fontSize: 11,
    fontWeight: 'bold',
    color: colors.categoryRed,
    marginBottom: 6,
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.darkGray,
    marginBottom: 8,
    lineHeight: 20,
  },
  date: {
    fontSize: 11,
    color: colors.lightGray2,
  },
  contentContainer: {
    flex: 1,
    marginRight: 10,
  },
  headline: {
    fontSize: 13,
    color: colors.mediumGray,
    marginBottom: 8,
    lineHeight: 18,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 6,
  },
});
