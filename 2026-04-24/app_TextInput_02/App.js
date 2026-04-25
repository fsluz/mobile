import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CxTx from "../app_TextInput_02/CxTx";

export default function App() {
  const [dados, setDados] = useState({
    nome: "",
    idade: "",
    cpf: "999.999.999-00",
    email: "",
    celular: "",
    obs: "",
    senha: "",
  });

  function atualizarCampo(campo, valor) {
    let novoValor = valor;
    if (campo === 'nome') {
      novoValor = valor.toUpperCase();
    } else if (campo === 'idade') {
      novoValor = valor.replace(/[^0-9]/g, '');
    }
    setDados({ ...dados, [campo]: novoValor });
  }

  const campos = [
    {
      key: "nome",
      placeholder: "Digite seu nome",
      maxLength: 30,
      autoCapitalize: "characters",
    },
    {
      key: "idade",
      placeholder: "Qual a sua idade?",
      keyboardType: "numeric",
      maxLength: 2,
    },
    {
      key: "cpf",
      placeholder: "CPF:999.999.999-00",
      editable: false,
    },
    {
      key: "email",
      placeholder: "Digite seu e-mail",
      keyboardType: "email-address",
    },
    {
      key: "celular",
      placeholder: "Digite seu número celular:",
      keyboardType: "numeric",
    },
    {
      key: "obs",
      placeholder: "Observações:",
      multiline: true,
      numberOfLines: 4,
      maxLength: 200,
    },
    {
      key: "senha",
      placeholder: "Digite sua senha",
      secureTextEntry: true,
      maxLength: 5,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.topo}>
        <Text style={styles.titulo}>Aula 06 - Desafio 02</Text>
        <Text style={styles.subtitulo}>Componente InputText</Text>
      </View>

      <Text style={styles.label}>
        Verifique o Formulário abaixo:
      </Text>

      {campos.map((campo) => (
        <CxTx
          key={campo.key}
          placeholder={campo.placeholder}
          value={dados[campo.key]}
          onChangeText={(texto) =>
            atualizarCampo(campo.key, texto)
          }
          keyboardType={campo.keyboardType}
          maxLength={campo.maxLength}
          editable={campo.editable}
          secureTextEntry={campo.secureTextEntry}
          multiline={campo.multiline}
          numberOfLines={campo.numberOfLines}
          autoCapitalize={campo.autoCapitalize}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
    backgroundColor: "#eee",
  },

  topo: {
    backgroundColor: "#ccc",
    width: "90%",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 20,
  },

  titulo: {
    fontSize: 26,
    fontWeight: "bold",
  },

  subtitulo: {
    fontSize: 18,
  },

  label: {
    fontSize: 18,
    marginBottom: 15,
  },
});