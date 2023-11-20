import React from "react";
import { Text, Alert, View, Image } from "react-native";
import { Appbar, Button } from 'react-native-paper';
import { SafeAreaProvider  } from 'react-native-safe-area-context';
import Container from '../components/container';
import Body from '../components/body';

const Doacao = () => {
  return (
    <SafeAreaProvider>
    <Container>
    <Appbar.Header>
      <Appbar.Content title={'Campanha do Quilo'} />
    </Appbar.Header>
      <Body>
                <Text style={{fontSize: 18}}>
                  QUE TIPO DE DOAÇÃO VOCÊ DESEJA REALIZAR?
                </Text>
                <View>
                    <Image
                    style={{ height: 200, width:200, marginTop: 20 }}
                    source={require('../../assets/roupas.png')}
                    />
  <Button 
  icon="user" 
  mode="contained" 
  onPress={() => Alert.alert('Roupa doada com Sucesso!')}>
    Roupas
  </Button>
            </View>
                <View>
                    <Image
                    style={{ height: 200, width:200, marginTop: 20}}
                    source={require('../../assets/alimentos.png')}
                    />
        <Button
          title="Alimentos"
          color="#FE7277"
          onPress={() => Alert.alert('Vou Doar Alimentos')} />
           </View>
</Body>
</Container>
</SafeAreaProvider>
  );
};

export default Doacao;