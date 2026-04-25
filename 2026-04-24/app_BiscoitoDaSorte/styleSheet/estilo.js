import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  imagem: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },

  frase: {
    fontSize: 16,
    fontStyle: "italic",
    margin: 20,
    textAlign: "center",
  },

  header: {
    backgroundColor: "#dd7b22",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 15,
    marginTop: 30,
    marginBottom: 20,
    alignSelf: "center",
  },
  headerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
  },
  botao: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#dd7b22",
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  textoBotao: {
    color: "#dd7b22",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});

export default styles;