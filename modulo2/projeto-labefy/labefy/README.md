# Escopo do Projeto

A ideia central deste projeto é realizar uma integração com a API Labefy, que permite o gerenciamento básico de playlists de músicas. O link da documentação dela encontra-se em:

https://documenter.getpostman.com/view/7549981/SztBc8eT?version=latest

Para este projeto, só passaremos as funcionalidades e os requisitos que vocês tem que implementar. Portanto, não temos um layout específico para isto. A ideia é treinar não só a criatividade de vocês, mas também a capacidade de **transformar** um **problema comum** em um **problema de programação**.

As funcionalidades do projeto estão listadas abaixo. As colocamos na ordem de prioridade que vocês devem seguir. Ou seja, só façam a próxima funcionalidade se a anterior já estiver 100% concluída.

- O usuário deve ser capaz de criar uma playlist de músicas. Para isso, ele só precisa passar um nome. Não podem existir playlists com o mesmo nome.

- Deve haver a possibilidade do usuário visualizar todas as suas playlists, em uma lista específica. Nesta lista, o usuário também pode deletar alguma playlist.

- O usuário deve ser capaz de visualizar os detalhes de uma playlist: o seu nome e as músicas que fazem parte dela.

-Para adicionar músicas à playlist, o usuário deve informar: o nome, os artistas relacionados (que pode ser só um cantor ou uma banda) e um link com o arquivo de áudio correspondente a esta música

-Por fim, quando o usuário abrir o detalhe da playlist, ele deve ser capaz de ouvir a cada uma das músicas que estiverem inseridas na playlist. Um botão de 'play' e 'pause' é essencial para isto.

🏅  Desafios

Como desafio, queríamos que vocês tivessem a diversão experiência de testar a API do Spotify (sim sim, nosso principal concorrente 😢 ). A ideia é a seguinte:

Nós queremos criar uma funcionalidade em que o usuário possa pesquisar uma música (através do seu nome e/ou do autor dela). O resultado desta pesquisa deve ser mostrado em uma lista. No momento em que ele clicar em alguma música da lista, devemos pedir para o usuário escolher uma playlist para que esta música possa ser adicionada nela. 

Os fluxos, as telas, as informações a serem mostradas são vocês quem devem pensar! O importante é o usuário conseguir pesquisar e adicionar na sua playlist.

Aqui está a API do Spotify:

https://developer.spotify.com/documentation/web-api/