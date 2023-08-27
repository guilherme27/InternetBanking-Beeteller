
# Internet Banking - Beeteller

## Desafio Front-end

Aplicação desenvolvida para o desafio da Beeteller. O app foi desenvolvido em [ReactJS](https://pt-br.reactjs.org/) + [Vite](https://vitejs.dev/), utilizando como linguagem principal o TypeScript. Como foi sugerido no desafio, foi utilizado o [styled components](https://styled-components.com/) para fazer o pré-processamento de CSS e usado o [Vitest](https://vitest.dev/) para criação dos testes de componentes.

A escolha do React + styled components foi feita devido a sugestão na descrição do desafio e também por serem as ferramentas na qual tenho maior experiência. O vite foi definido por adotar uma abordagem de build mais rápida, utilizando importação dinâmica que possui uma eficiência bem maior do que o WebPack por exemplo. E considerando isso, usar a biblioteca vitest é a escolha mais clara considerando que já estamos usando o vite e ambas possuem uma integração permitindo testes rápidos e eficientes de componentes React sem configurações complexas.

O projeto está em execução hospedado na vercel. Você pode ver a demonstração no link abaixo:
[DEMO](https://internet-banking-beeteller.vercel.app/)

### Requisitos para execução

Para a execução do projeto em sua máquina você vai precisar ter instalado:

* [Node](https://nodejs.org/en/)
* Um gerenciador de pacotes de sua preferência, nesse passo a passo usaremos o [PNPM](https://pnpm.io/pt/) como padrão.
> Na construção desse projeto foi utilizado o PNPM pois ele demanda um espaço em disco menor do que os outros gerenciadores de pacotes padrões, possui uma interface muito mais amigável no controle de pacotes e possui uma velocidade de gerenciamento ligeiramente maior.

No arquivo `package.json` tem descritos todas as dependências do projeto. É essencial a instalação antes da execução do projeto. Para isso, você pode executar o seguinte comando:

```bash
pnpm install
```

### Execução

Após toda a instalação das dependências, é possível rodar o projeto rodando o comando do **pnpm**:

```bash
pnpm start
```
> Vale lembrar que essa execução será feita em ambiente de desenvolvimento (você pode confirmar isso com uma mensagem de aviso no console do seu navegador ao acessar o endereço na qual a aplicação foi execultada) e isso implica na seguinte situações:
    - As requizições a api serão sequestradas pelo [SWR](https://swr.vercel.app/pt-BR) e então serão respondidas com um dado mockado.
    
Caso você queira ver a aplicação rodando em ambiente de produção você pode acessar esse [link](https://internet-banking-beeteller.vercel.app/) ou você pode também rodar a aplicação em ambiente de produção localmente.

## Executando localmente o modo de produção

 Para executar em você pode usar um servidor HTTP simples para servir os arquivos estáticos gerados durante a compilação da aplicação. Aqui está um guia passo a passo de como fazer isso:
 
 Antes de rodar o ambiente de produção localmente, certifique-se de ter construído a versão otimizada da sua aplicação. Para isso, execute o comando de construção:
 
 ```bash
pnpm build
```
 Isso criará a pasta dist com os arquivos otimizados para produção na raiz do projeto.
 
 Agora precisaremos usar o ``serve`` para levantar um servidor HTTP para servir os arquivos estáticos da pasta `dist`.
 > Não será necessário instalar o `serve` pois já fizemos isso no comando `pnpm install`.
 
 ```bash
pnpm serve dist
```

## Pontos a serem melhorados

* Adicionar sistema de internacionalização ([React-i18next](https://react.i18next.com/))
* Diluir ainda mais os componentes (seguindo a metodologia do [atomic design](https://atomicdesign.bradfrost.com/)) criando um passo a mais que seria o `Template` para ficar mais fácil o gerênciamento dos componentes.
* Criação de um hook de data fetch para otimizar as requizições a API.
    