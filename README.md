# totalvoiceapi-node

Cliente em JavaScript/NodeJS para API da [Totalvoice](http://totalvoice.com.br)

## Funcionalidades

- [X] Gerenciamento das chamadas
- [X] Consulta e envio de SMS
- [X] Consulta e envio de TTS
- [X] Consulta e envio de Audio
- [X] Consulta e envio de Composto
- [X] Consulta e envio de Conferência
- [X] Gerenciamento da Conta
- [X] Gerenciamento da Central
- [X] Gerenciamento de DID

## Requisitos

- NodeJS versão 6.0 ou superior

## Instalação

``` bash
npm install --save https://github.com/jhonystein/totalvoice-node.git
```
ou 
``` bash
yarn add https://github.com/jhonystein/totalvoice-node.git
```

## Exemplos de utilização

- Enviando SMS
``` javascript
// commonsJs/ES5
var Sms = require('totalvoice-node').Sms

var cliente = new Sms(<TOKEN>)
cliente.enviar(<numero_destino>, <mensagem1>)
  .then(function (data) {
    console.log('SMS enviado', data)
  })
  .catch(function (error) {
    console.error('Problemas ao enviar SMS', error)
  })

```
``` javascript
// ES6
import {Sms} from 'totalvoice-node'

const cliente = new Sms(<TOKEN>)
cliente.enviar(<numero_destino>, <mensagem1>)
  .then(data => {
    console.log('SMS enviado', data)
  })
  .catch(error => {
    console.error('Problemas ao enviar SMS', error)
  })

```

## Contribua!

Achou um problema? 
1. Cadastre uma [issue](https://github.com/jhonystein/totalvoice-node/issues)!

2. Faça um [fork](https://github.com/jhonystein/totalvoice-node#fork-destination-box)! 
3. Solicite um pull request :wink:

## Licença
Esta biblioteca segue os termos de uso da licença [MIT](https://github.com/jhonystein/totalvoice-node/blob/master/LICENSE)