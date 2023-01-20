/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {ScrollView} from 'react-native';
import Item from './Item';
import axios  from 'axios';

class ItemList extends Component<any, any> {
    constructor(props: any){
        super(props);
        this.state = {apiItens:[]};
    }
    componentDidMount() {
        axios.get('https://jorgesantana.net.br/recursos/dmairr/api/itens.html')
        .then((resp) => {
          this.getBodyContent(resp.data);
        })
        .catch((error) => {console.log('An error as occured', error);});
    }

    getBodyContent = (htmlText: string) => {

      let bodyContent = '';
      let posbodyTagOpen = 0;
      let posbodyTagClose = 0;

      posbodyTagOpen = htmlText.indexOf('<body>', 0);
      posbodyTagClose = htmlText.indexOf('</body>', 0);

      bodyContent = htmlText.substring(posbodyTagOpen + 6, posbodyTagClose);
      // console.log(posbodyTagOpen);
      // console.log(posbodyTagClose);
      // console.log(bodyContent);
      this.setState({apiItens: [JSON.parse(bodyContent)]});
    };

    render(): React.ReactNode {
      return (
        <>
        <ScrollView>
          {this.state.apiItens.map(function(arrayItem: any) {
            var cont = 0;
            return arrayItem.map((item:any) => {
                cont++;
                return (<Item item={item} key={cont} />);
            });
          })}
        </ScrollView>
        </>
      );
  }
}

export default ItemList;
