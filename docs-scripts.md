# Explicação do arquivo alo-mundo.yml

Este é um arquivo de fluxo de trabalho do GitHub Actions. Ele define um fluxo de trabalho que é executado sempre que um push é feito para a branch `main` do seu repositório.

Aqui está uma explicação linha por linha:

- `name: Alô Mundo`: Define o nome do fluxo de trabalho como "Alô Mundo".

- `on: push: branches: - main`: Define o evento que aciona o fluxo de trabalho. Neste caso, o fluxo de trabalho é acionado quando um push é feito para a branch `main`.

- `jobs: build: runs-on: ubuntu-latest`: Define um job chamado `build` que é executado em um runner com a última versão do Ubuntu.

- `steps:`: Define uma lista de passos que serão executados no job.

- `- name: Exibir mensagem run: echo "Alô Mundo"`: Define um passo que executa o comando `echo "Alô Mundo"` para exibir a mensagem "Alô Mundo".

Em resumo, este fluxo de trabalho faz o checkout do código do seu repositório e exibe a mensagem "Alô Mundo" sempre que um push é feito para a branch `main`.

---
# Documentação do Workflow: Testes Automatizados

O arquivo `build-manual.yml` define um workflow do GitHub Actions chamado "Testes Automatizados". Este workflow é acionado manualmente através do evento `workflow_dispatch`.

## Jobs

O workflow contém um único job chamado `build`.

### Job: Build

O job `build` é executado no ambiente de execução mais recente do Ubuntu (`ubuntu-latest`).

#### Passos

O job `build` contém os seguintes passos:

1. **Checkout do código**: Este passo usa a ação `actions/checkout@v2` para fazer o checkout do código do repositório atual para o runner.

2. **Configurar o Node.js**: Este passo usa a ação `actions/setup-node@v2` para configurar a versão especificada do Node.js no runner. Neste caso, a versão é '14'.

3. **Instalar dependências**: Este passo executa o comando `npm install` para instalar todas as dependências do projeto.

4. **Executar testes**: Este passo executa o comando `npm test` para executar todos os testes do projeto.

## Como acionar o workflow

Como este workflow é acionado pelo evento `workflow_dispatch`, ele pode ser acionado manualmente a partir da interface do GitHub. Vá para a aba "Actions" do seu repositório no GitHub, selecione este workflow e clique no botão "Run workflow".