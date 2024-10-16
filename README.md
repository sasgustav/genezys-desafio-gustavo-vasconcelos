# **Projeto: Cadastro e Login - Genezys App - Gustavo Vasconcelos**

Este é um projeto desenvolvido com **Next.js** e **Tailwind CSS**, focado na criação de um sistema de **cadastro e login** com validação de **CEP** e organização de **dados do usuário e endereço**. Utilizamos **Firebase** para autenticação e gerenciamento de estados com **Context API**. O projeto é **responsivo**, segue as **boas práticas de acessibilidade (a11y)** e é otimizado para fornecer uma excelente experiência ao usuário.

---

## **Tecnologias Utilizadas**

- **Next.js**: Framework React para renderização server-side.
- **Tailwind CSS**: Framework CSS para estilização rápida e responsiva.
- **Firebase**: Autenticação de usuários.
- **React Hot Toast**: Biblioteca de notificações.
- **Context API**: Gerenciamento de estado global.
- **ViaCEP API**: Consulta de endereço a partir do CEP.

---

## **Funcionalidades Implementadas**

### **Cadastro de Usuário**
- [x] Campos: Nome, E-mail, Senha e Confirmação de Senha.
- [x] Validação de senha e exibição de notificações com toast.
- [x] Organização clara entre **dados do usuário** e **endereço**.
- [x] **Validação automática de CEP** usando API ViaCEP.

### **Login de Usuário**
- [x] Autenticação com e-mail e senha utilizando **Firebase**.
- [x] Usuário de teste implementado para validação local.
- [x] **Redirecionamento automático** para a home após login bem-sucedido.
- [x] Mensagens de erro com notificações toast em caso de falha.

### **Recuperação de Senha**
- [x] Envio de link de recuperação por e-mail.
- [x] Exibição de mensagem de sucesso com toast.
- [x] **Redirecionamento automático** para a tela de login após recuperação.

### **Home (Lista de Usuários)**
- [x] **Tabela de usuários** exibindo nome, e-mail e endereço.
- [x] Layout **responsivo** para dispositivos móveis e desktops.
- [x] Efeitos de hover para melhorar a usabilidade.

---

## **Checklist do Projeto Completo**

- [x] **Autenticação com Firebase**.
- [x] **Manutenção de Sessão** com `sessionStorage` para evitar redirecionamentos indevidos.
- [x] **Proteção de Rotas**: Somente rotas públicas são acessíveis sem login.
- [x] **Acessibilidade (a11y)**:
  - Uso de **`aria-label`**, **`role`**, e foco claro em botões e links.
  - **Mensagens de erro e sucesso** configuradas corretamente para leitores de tela.
  - **Separadores semânticos** adicionados para melhorar a navegação.
- [x] **Design Responsivo**: Funciona bem em dispositivos móveis e desktops.
- [x] **Notificações com React Hot Toast**.
- [x] **Consulta de CEP** automática usando ViaCEP.
- [x] **Redirecionamento automático** após login e logout.
- [x] **Logout funcional**, removendo dados da sessão.
- [x] **README** claro e organizado, com instruções de uso e checklist.

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
  /components   - Componentes reutilizáveis (Button, Input, NavBar, etc.)
  /context      - Context API para autenticação
  /pages        - Páginas (Login, Cadastro, Home, etc.)
  /services     - Serviços externos (ViaCEP)
  /styles       - Estilos globais e Tailwind
  /app          - Configuração do Next.js e rotas
```

---

## **Como Usar o Sistema**

1. **Cadastro de Usuário**:
   - Acesse a página de cadastro.
   - Preencha os dados do usuário e o endereço.
   - Clique em **"Cadastrar"** e uma mensagem de sucesso será exibida.

2. **Login de Usuário**:
   - Acesse a página de login.
   - Insira seu e-mail e senha cadastrados.
   - Após o login, você será redirecionado automaticamente para a página inicial.

3. **Recuperação de Senha**:
   - Na página de login, clique em **"Esqueceu sua senha?"**.
   - Insira seu e-mail e receba um link de redefinição.
   - Você será redirecionado para o login após a recuperação.

4. **Logout**:
   - Na home, clique em **"Logout"** para encerrar a sessão e retornar à tela de login.

---

## **Testes e Validações**

- [x] **Validação de Senhas**: Verificação da correspondência entre senha e confirmação.
- [x] **Validação de CEP**: Preenchimento automático do endereço.
- [x] **Responsividade Completa**: Design adaptável a todos os dispositivos.
- [x] **Mensagens de Erro e Sucesso**: Feedback claro e direto para o usuário.
- [x] **Proteção de Rotas**: Rotas restritas só são acessíveis após login.

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