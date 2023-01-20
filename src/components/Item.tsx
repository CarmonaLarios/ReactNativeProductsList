/* eslint-disable prettier/prettier */
import React  from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

function Item(item: any, key: any): JSX.Element {
  return (
    <View style={styles.item}>
      <Image style={styles.image} source={{uri: item.item.foto}} />
      <View style={styles.lineBreak} />
      <View style={styles.descriptionContainer}>
        <Text style={styles.place}>{item.item.local_anuncio}</Text>
        <Text style={styles.cost}>R$ {item.item.valor.toFixed(2)}</Text>
        <Text style={styles.title} key={key}>{item.item.titulo}</Text>
        <Text style={styles.title}>Data publicação: {item.item.data_publicacao}</Text>
      </View>
    </View>
 );
}

const styles = StyleSheet.create({
  item: {
    margin: 2,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    backgroundColor: '#4e2170',
  },
  title: {
    fontSize: 16,
    color: '#ffff',
  },
  cost: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#ffff',
    paddingTop: 5,
  },
  place:{
    backgroundColor: '#688d2a',
    color: '#ffff',
    textTransform: 'uppercase',
    width: 'auto',
    paddingLeft: 5,
    borderRadius: 5,
  },
  descriptionContainer:{
    padding: 15,
    flexDirection: 'column',
  },
  lineBreak: {
    borderWidth: 0.2,
    borderColor: '#9f9f9f',
    marginLeft: 10,
    opacity: 0.4,
  },
  image:{
    marginLeft: 10,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    height: 120,
    width: 120,
  },
});

export default Item;
