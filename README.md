# **Projeto: Cadastro e Login - Genezys App - Gustavo Vasconcelos**

Este é um projeto desenvolvido com **Next.js** e **Tailwind CSS**, focado na criação de um sistema de **cadastro e login** com validação de **CEP** e organização de **dados do usuário e endereço**. Utilizamos **Firebase** para autenticação e gerenciamento de estados com **Context API**. Além disso, o projeto é responsivo e otimizado para fornecer uma excelente experiência ao usuário.

---

## **Tecnologias Utilizadas**

- **Next.js**: Framework React para renderização server-side.
- **Tailwind CSS**: Framework CSS para estilização rápida e responsiva.
- **React Hot Toast**: Biblioteca de notificações toast.
- **Firebase**: Autenticação e gerenciamento de estado.
- **Context API**: Gerenciamento de estado global.
- **ViaCEP API**: Consulta de endereço a partir do CEP.

---

## **Funcionalidades Implementadas**

### **Cadastro de Usuário**
- Campos: Nome Completo, E-mail, Senha e Confirmação de Senha.
- Validação de senha e exibição de notificações com toast.
- Seção separada para dados do usuário e endereço.
- **CEP automático**: Busca de endereço pela API ViaCEP.

### **Login de Usuário**
- Login com e-mail e senha utilizando Firebase.
- Redirecionamento automático para o dashboard após login.
- Mensagens de erro com notificações em caso de falha.

### **Recuperação de Senha**
- Envio de link de recuperação por e-mail.
- Exibição de mensagem de sucesso com toast.
- Redirecionamento para a tela de login após recuperação.

### **Home (Lista de Usuários)**
- Tabela exibindo uma lista de usuários com nome, e-mail e endereço.
- Responsiva para dispositivos móveis e desktops.
- Efeito de hover para melhor usabilidade.

---

## **Requisitos de Instalação**

### **Pré-requisitos**
- Node.js >= 14.0
- NPM ou Yarn instalado

### **Clonando o Repositório**

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### **Instalando Dependências**

```bash
npm install
# ou
yarn install
```

---

## **Rodando o Projeto Localmente**

Execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar o projeto.

---

## **Estrutura do Projeto**

```
/public         - Arquivos estáticos (imagens, ícones, etc.)
/src
  /components   - Componentes reutilizáveis (Button, Input, etc.)
  /context      - Context API para autenticação
  /pages        - Páginas (Login, Cadastro, Home, etc.)
  /services     - Serviços externos (ViaCEP)
  /styles       - Estilos globais
  /app          - Configuração do Next.js e rotas
```

---

## **Como Usar o Sistema**

1. **Cadastro de Usuário**:
   - Acesse a página de cadastro.
   - Preencha os dados do usuário e o endereço.
   - Clique em "Cadastrar". Se tudo estiver correto, uma mensagem de sucesso será exibida.

2. **Login de Usuário**:
   - Acesse a página de login.
   - Insira seu e-mail e senha cadastrados.
   - Após login, você será redirecionado para o dashboard.

3. **Recuperação de Senha**:
   - Na página de login, clique em "Esqueceu sua senha?".
   - Insira seu e-mail e receba um link de redefinição.

---

## **Testes e Validações**

- Validação de senhas e confirmação.
- Validação de CEP e preenchimento automático de endereço.
- Responsividade completa para todos os dispositivos.
- Mensagens claras e concisas em caso de erro ou sucesso.

---

## **Hospedagem e Deploy**

O projeto pode ser facilmente implantado na plataforma **Vercel**:

1. Acesse [Vercel](https://vercel.com/).
2. Conecte seu repositório GitHub.
3. Siga as instruções para configurar e implantar o projeto.

---

## **Contribuição**

Contribuições são bem-vindas! Siga os passos abaixo:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature:  
   ```bash
   git checkout -b feature/nova-feature
   ```
3. Commit suas mudanças:  
   ```bash
   git commit -m 'Adicionei uma nova feature'
   ```
4. Envie suas mudanças:  
   ```bash
   git push origin feature/nova-feature
   ```
5. Abra um Pull Request.

---

## **Contato**

Desenvolvido por **Gustavo Vasconcelos**.

- **LinkedIn**: [Gustavo Vasconcelos](https://www.linkedin.com/in/gustavo-vasconcelos-software-engineer/)
- **GitHub**: [sasgustav](https://github.com/sasgustav)

---

## **Licença**

Este projeto é licenciado sob a [MIT License](https://opensource.org/licenses/MIT).