import React, { Component } from 'react';

import api from '../../services/api';

    export default class Main extends Component{

            state = {
                products: []
            };

            //Metodo para executar assim que o componente for mostrado em tela, mostrar ação logo que o componente e exibido em tela(instancia a solicitação de rede no caso o: loadProducts).
            componentDidMount(){
                this.loadProducts();
            }

            loadProducts = async () => {
                const response = await api.get('/products');
                
                this.setState({ products: response.data.docs })
            }

            render(){
                return ( 
                    <div className="product-list">
                        {this.state.products.map(product => (
                            <h2 key={product._id}>{product.title}</h2>
                        ))}
                    </div>
                );
            }
    }