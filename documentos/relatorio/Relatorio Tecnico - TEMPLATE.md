# Informações do Projeto

Tema:  
Não saber o que jogar  

## Participantes
- Gabriel Antonio Rodrigues Morais
- Gabriel Drumond Franklin de Miranda e Rezende
- Livia Alves Ferreira
- Pedro Otavio Luz Salgado

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas, Empatia e Proposta de Valor](#personas-empatia-e-proposta-de-valor)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução
Com o passar dos anos é notável o crescimento da influência da tecnologia na vida das pessoas, seja no âmbito pessoal ou profissional. As pessoas, por meio da internet, vêm se conectando com maior facilidade, trabalhando de casa (home office) e também usando este meio para lazer, assistindo a séries, filmes e também jogando. É notável a visibilidade que o mundo dos eSportes vem adquirindo atualmente e juntamente com essa fama novas pessoas se interessam por esse mundo.

Visto que essas pessoas que entram, muitas vezes, não possuem o conhecimento necessário para “se manter nele”, pois logo se sentem entediadas ou desanimadas com os jogos. Sendo as causas para esses acontecimentos: jogos muito difíceis que jogadores iniciantes não conseguem acompanhar o ritmo ou a falta de alguém para conversar e jogar o jogo.

Diante disso, torna-se necessário a criação de um site que sirva como um guia para esses novatos. Ajudando-os a achar jogos que se encaixem com seus perfis e com o nível de dificuldade desejado. Além de indicar algumas comunidades de jogos de seu interesse, para que assim ele possa falar sobre e achar alguém para jogar junto, evitando assim que ele desista desse mundo pelos motivos citados.

## Problema

Conforme exposto, o problema que se busca resolver com este projeto é a dificuldade das pessoas (mais precisamente o público que curte jogar vídeo game) em encontrar o que jogar, seja nas horas vagas ou com os amigos, devido à pouca informação sobre que se encontra nos meios digitais.

## Objetivos

O objetivo geral deste trabalho é a criação de um ambiente onde as pessoas encontrarão jogos de diferentes categorias e estilos de jogabilidade, baseado no gosto da própria pessoa, mostrando à elas os destaques da semana e até mesmo lançamentos mês.

Como objetivos específicos, podemos ressaltar:
Desenvolver uma interface de usuário intuitiva que permita aos usuários navegar facilmente pelos jogos disponíveis.
Criar uma ferramenta de pesquisa avançada que permita aos usuários filtrar jogos com base em suas preferências pessoais (por exemplo, gênero, plataforma, preço, etc.).
Incluir uma seção de avaliações e comentários de usuários para ajudar os usuários a decidir se um determinado jogo é adequado para eles.
Garantir que o site seja responsivo e compatível com dispositivos móveis, para que os usuários possam acessá-lo em qualquer lugar, a qualquer momento.


## Justificativa

Após realizar entrevistas com pessoas que possuem o costume de jogar, foi analisado que muitos sentem dificuldades em encontrar o que jogar, principalmente quando estão a procura de um jogo para jogar sozinho(a), porém também foi percebido uma grande necessidade de se encontrar jogos com novas mecânicas e jogabilidades diferentes do atual padrão de “FPS” que se encontra em alta no momento.


## Público-Alvo

Foi percebido que o principal público alvo desse projeto são os jovens que gostam de jogar videogame, principalmente na faixa de 15 a 23 anos, mas é claro que pessoas mais adultas também farão parte desse público, uma vez que existem diversas simulações/jogos que podem atrair as pessoas de várias idades.

# Especificações do Projeto

Nessa parte do documento será abordado, de uma forma geral, a concepção inicial do projeto. Apresentando as personas e os problemas iniciais que elas nos proporam, assim como suas histórias e possíveis soluções para o que nos foi mostrado. Para essa parte inicial, usamos ferramentas como o Miro, Google Docs, Trello, Figma e, sendo usado nesse momento, GitHub.

## Personas, Empatia e Proposta de Valor
![image](https://user-images.githubusercontent.com/129913437/232342814-2e92a95b-a3e1-408e-85f1-e8cef5980ac7.png)
![image](https://user-images.githubusercontent.com/129913437/232342873-0f9a7107-b340-4cb9-909a-e10c25e3e0e1.png)
![image](https://user-images.githubusercontent.com/129913437/232342941-a892bf1e-e0e2-44ad-aeed-c343e695d95a.png)

- Exemplo de uma das propostas de valor
![image](https://user-images.githubusercontent.com/129913437/232344780-3f16f941-bf1c-43ac-a92c-b4716eae1e82.png)

## Histórias de Usuários
A partir da compreensão do dia a dia das personas identificadas para o projeto, foram registradas as seguintes histórias de usuários.

![image](https://user-images.githubusercontent.com/129913437/232343260-579c2b25-03d9-4aa7-9ad3-dfed617d256f.png)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

A tabela a seguir apresenta os requisitos do projeto, identificando a prioridade em que os mesmos devem ser entregues.
![image](https://user-images.githubusercontent.com/129913437/232343105-2b1bf126-4f2a-4298-8bed-03b0ab50db51.png)

### Requisitos não Funcionais
 A tabela a seguir apresenta os requisitos não funcionais que o projeto deverá atender
 ![image](https://user-images.githubusercontent.com/129913437/232343180-7a2b1bc5-65b8-44be-94e4-702d1b011951.png)

## Restrições
As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir.
![image](https://user-images.githubusercontent.com/129913437/232349579-bbb1b0e8-dbe1-4cf4-9f52-d39b3a8a93a5.png)

# Projeto de Interface

No geral as interfaces fora elaboradas para atender as necessidades do usuário com o menor número de cliques possível e de forma dinâmica e intuítiva. 

## User Flow
O diagrama apresentado na Figura abaixo mostra o fluxo de interação do usuário pelas telas do sistema. Cada uma das telas deste fluxo é detalhada na seção de Wireframes que se segue. Para visualizar o wireframe interativo, acesse o ambiente Figma do projeto.

![image](https://user-images.githubusercontent.com/129913437/232352326-693368c9-e622-4921-b098-981f8acc58c9.png)

Fluxo de telas do usuário

## Wireframes
Conforme fluxo de telas do projeto, apresentado no item anterior, as telas do sistema são apresentadas em detalhes nos itens que se seguem. As telas do sistema apresentam uma estrutura comum que é apresentada na Figura 2. Nesta estrutura, existem 3 grandes blocos, descritos a seguir. São eles:
Cabeçalho - local onde são dispostos elementos fixos de identidade (logo), representado pelo retângulo preto, e navegação principal do site (menu da aplicação);
Conteúdo - apresenta o conteúdo da tela em questão e acima tem o título como indicado.
Barra lateral - apresenta os elementos de navegação secundária, geralmente associados aos elementos do bloco de conteúdo e também apresenta uma barra de pesquisa.

![image](https://user-images.githubusercontent.com/129913437/232352354-da7a1219-2137-4b0a-a58d-b9352e198d53.png)
Estrutura padrão do site

- HomePage
A tela de home-page mostra uma mensagem chamativa mostrando do que o site se trata e logo abaixo possui uma breve descrição do que você encontrará no site. Na parte do Menu superior possui a logo do site, um botão de registre-se e um de login. Além de um botão para ser redirecionado para página de dúvidas e reclamações.

![image](https://user-images.githubusercontent.com/129913437/232352371-fa9d5c8e-66ce-46bf-b6ea-3477568539b6.png)

- Tela de Novidades nos jogos
A tela de novidades apresenta, no Bloco de Conteúdo, os últimos lançamentos no mundo dos jogos. O Bloco de Barra Lateral apresenta categorias de jogos e uma barra de pesquisa. No bloco tem o menu superior, comum a todas as telas.

![image](https://user-images.githubusercontent.com/129913437/232352393-e409b105-ce4a-42fe-a93a-eb93f5734cee.png)

- Tela de Favoritos
O usuário poderá colocar seus jogos e comunidades na categoria favoritos. Na parte conteúdo vão aparecer os jogos favoritos e no menu lateral aparecerão as comunidades favoritas. O menu superior será o comum a todas as páginas.

![image](https://user-images.githubusercontent.com/129913437/232352416-b744202a-8e09-489a-96f9-6686cc8008fd.png)


 - Tela de Jogos
A tela de jogos apresenta, no Bloco de Conteúdo,as categorias de jogos e abaixo de cada categoria os jogos que a ela correspondem. O Bloco de Barra Lateral apresenta uma barra de pesquisa e as categorias de jogos. E o menu superior comum a todas as páginas.

![image](https://user-images.githubusercontent.com/129913437/232352437-b652ea3a-9537-417d-9aac-c899241b4298.png)

- Tela Comunidades
A tela comunidade possui em seu conteúdo as principais comunidades de acordo com cada jogo. Possui uma barra de pesquisa flutuante. E o menu superior comum a todas as páginas.

![image](https://user-images.githubusercontent.com/129913437/232352453-8aa88754-7dd7-4b40-afc2-16b4dae1d7ad.png)

 - Tela Sobre
A tela Sobre, na parte conteúdo possui texto e imagens falando o porquê o site foi criado, motivações, problema inicial. Ela possui um menu superior comum a todas as páginas.

![image](https://user-images.githubusercontent.com/129913437/232352469-6faa2260-ce4b-4511-b014-8f7b3f7fe80c.png)


- Tela de reclamações
Essa tela permite que o usuário deixe sua dúvida ou reclamação sobre o site. Ela possui um campo onde o usuário pode inserir o nome, um para o email e um para escrever sua dúvida ou reclamação. Também possui um botão de enviar.

![image](https://user-images.githubusercontent.com/129913437/232352554-fd0da138-f6ea-4394-981d-8d112a306f0a.png)

- Tela Login
Essa tela permite que o usuário se logue no site, informando o usuário e a senha. Ela possui a logo do site, os campos para inserção de informações e um botão para logar.

![image](https://user-images.githubusercontent.com/129913437/232352660-af6ebd48-176b-428e-8b50-f4af8503f43a.png)


 - Tela Logout
A tela de logout pergunta se o usuário realmente deseja sair do site. Possuindo a logo do site e dois botões: um de confirmação e o outro de cancelamento.

![image](https://user-images.githubusercontent.com/129913437/232352682-904d9293-1ef7-4a07-8d3d-46269caeee67.png)


 - Tela Cadastro
A tela de cadastro permite ao usuário criar uma conta para usar o aplicativo. Tendo campos para a inserção de informações como: Nome, email, usuário e senha (confirmação de senha também). A tela também conta com as opções de selecionar idade e interesses. E por fim, ela possui o botão de cadastro.

![image](https://user-images.githubusercontent.com/129913437/232352700-ad7f801a-0793-4d7c-a744-8ee1178c5ff9.png)


- Tela de Recuperação de Senha
A tela de recuperação de usuário, como o próprio nome já diz, permite que o usuário recupere sua senha. Ela possui o logo do site, um campo para o usuário digitar seu email e um botão enviar email. Assim, um email será enviado para o usuário recuperar sua senha.

![image](https://user-images.githubusercontent.com/129913437/232352721-d97ed2e4-d2b7-4704-9755-57035c4229d0.png)

# Metodologia

A metodologia contempla as definições de ferramental utilizado pela equipe tanto para a manutenção dos códigos e demais artefatos quanto para a organização do time na execução das tarefas do projeto.

## Divisão de Papéis
Scrum Master:
Pedro Otavio Luz Salgado

Desenvolvedores:  
- Gabriel Antonio Rodrigues Morais
- Gabriel Drumond Franklin de Miranda e Rezende
- Livia Alves Ferreira
- Pedro Otavio Luz Salgado

## Ferramentas

Relação de Ambientes de Trabalho
Os artefatos do projeto são desenvolvidos a partir de diversas plataformas e a relação dos ambientes com seu respectivo propósito é apresentada na tabela que se segue. 

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinkgin  | Miro | https://miro.com/app/board/uXjVMYDTr_8=/ | 
|Repositório de código | GitHub | https://github.com/ICEI-PUC-Minas-PMGCC-TI/ti-1-pmg-cc-t-20231-grupo-12 | 
|Hospedagem do site |  |   | 
|Protótipo Interativo | MavelApp ou Figma | https://www.figma.com/file/2z5tmbvyGhPFOPwEv1E7wr/Untitled?node-id=0%3A1&t=tTi5HPsA4y2OJgDN-1 | 


## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o
[Git](https://git-scm.com/), sendo que o [Github](https://github.com)
foi utilizado para hospedagem do repositório `upstream`.

O projeto segue a seguinte convenção para o nome de branchs:  
- `master`: versão estável já testada do software
- `dev`: versão de desenvolvimento do software

Quanto à gerência de issues, o projeto adota a seguinte convenção para
etiquetas:

- `bug`: uma funcionalidade encontra-se com problemas
- `melhoria`: uma funcionalidade precisa ser melhorada
- `sugestao`: uma nova funcionalidade precisa ser introduzida


# Projeto da Solução

......  COLOQUE AQUI O SEU TEXTO ......

## Tecnologias Utilizadas

......  COLOQUE AQUI O SEU TEXTO ......

> Descreva aqui qual(is) tecnologias você vai usar para resolver o seu
> problema, ou seja, implementar a sua solução. Liste todas as
> tecnologias envolvidas, linguagens a serem utilizadas, serviços web,
> frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.
> Apresente também uma figura explicando como as tecnologias estão
> relacionadas ou como uma interação do usuário com o sistema vai ser
> conduzida, por onde ela passa até retornar uma resposta ao usuário.
> 
> Inclua os diagramas de User Flow, esboços criados pelo grupo
> (stoyboards), além dos protótipos de telas (wireframes). Descreva cada
> item textualmente comentando e complementando o que está apresentado
> nas imagens.

## Arquitetura da solução

......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

> Inclua um diagrama da solução e descreva os módulos e as tecnologias
> que fazem parte da solução. Discorra sobre o diagrama.
> 
> **Exemplo do diagrama de Arquitetura**:
> 
> ![Exemplo de Arquitetura](images/arquitetura-exemplo.png)


# Avaliação da Aplicação

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
> 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

......  COLOQUE AQUI O SEU TEXTO ......

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Registros de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.


# Referências

......  COLOQUE AQUI O SEU TEXTO ......

> Inclua todas as referências (livros, artigos, sites, etc) utilizados
> no desenvolvimento do trabalho.
> 
> **Links Úteis**:
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
> - [Referências Bibliográficas da ABNT](https://comunidade.rockcontent.com/referencia-bibliografica-abnt/)
