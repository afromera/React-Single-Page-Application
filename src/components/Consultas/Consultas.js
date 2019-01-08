import React, { Component } from 'react'

class Consultas extends Comment {

    constructor(props){
        super(props);
        this.state = {
            realizadas: [],
            marcadas: []
        };
    }

    componentDidMount(){
        fetch('http://www.devup.com.br/php/api-dashboard/api/consultas')
        .then(resultado => resultado.json().then(dados => this.state(dados)));
    }

    render(){
        return(
            <div></div>
        )
    }
}