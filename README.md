# Portfolio Arthur Pires - Angular

Este é o portfólio pessoal de Arthur Pires da Costa, reconstruído em Angular.

## 📋 Sobre o Projeto

Portfolio profissional desenvolvido em Angular que apresenta:
- Informações pessoais e profissionais
- Grade curricular do curso de ADS (Análise e Desenvolvimento de Sistemas)
- Disciplinas e projetos acadêmicos
- Links para redes sociais (GitHub e LinkedIn)

## 🏗️ Estrutura do Projeto

```
.
├── legacy/                  # Site original em HTML/CSS/JS (backup)
├── public/                  # Arquivos públicos (imagens, favicon)
│   ├── images/             # Imagens do portfolio
│   └── disciplinas/        # Páginas HTML das disciplinas
├── src/
│   ├── app/
│   │   ├── components/     # Componentes Angular
│   │   │   ├── header/     # Cabeçalho com navegação
│   │   │   ├── home/       # Seção inicial com foto e introdução
│   │   │   ├── grade/      # Grade curricular
│   │   │   ├── about/      # Sobre mim
│   │   │   └── footer/     # Rodapé
│   │   ├── pages/          # Páginas
│   │   │   └── discipline/ # Página de disciplina
│   │   └── services/       # Serviços
│   ├── styles.css          # Estilos globais
│   └── index.html          # HTML principal
└── angular.json            # Configuração do Angular

```

## 🚀 Tecnologias Utilizadas

- **Angular 19** - Framework principal
- **TypeScript** - Linguagem de programação
- **CSS3** - Estilização
- **HTML5** - Estrutura

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/Parys-boop/Portif-lio-2025.-Incompleto.git
cd Portif-lio-2025.-Incompleto
```

2. Instale as dependências:
```bash
npm install
```

## 🎯 Como Usar

### Desenvolvimento

Para iniciar o servidor de desenvolvimento:
```bash
ng serve
```

Acesse `http://localhost:4200/` no navegador.

### Build de Produção

Para criar uma versão de produção:
```bash
ng build
```

Os arquivos compilados estarão na pasta `dist/portfolio-angular`.

### Testes

Para executar os testes:
```bash
ng test
```

## 🎨 Funcionalidades

- ✅ Design responsivo
- ✅ Navegação suave entre seções
- ✅ Barra de progresso do curso (atualizada automaticamente)
- ✅ Dropdown de disciplinas
- ✅ Copiar e-mail para área de transferência
- ✅ Header que se oculta ao rolar a página
- ✅ Links para redes sociais
- ✅ Grade curricular com cards das disciplinas
- ✅ Seção "Sobre Mim" com informações de contato

## 📝 Site Legado

O site original em HTML/CSS/JS está preservado na pasta `legacy/` para referência e backup.

Para visualizar o site legado, basta abrir o arquivo `legacy/index.html` em um navegador.

## 👨‍💻 Autor

**Arthur Pires da Costa**
- GitHub: [@Parys-boop](https://github.com/Parys-boop)
- LinkedIn: [Arthur Pires](https://www.linkedin.com/in/arthur-pires-948433252/)
- Email: arthurpiresdacosta14@gmail.com

## 📄 Licença

© 2025 por Arthur Pires. Todos os direitos reservados.

## 🔄 Histórico de Versões

### v2.0.0 (2025)
- ✨ Migração completa para Angular
- 🎨 Manutenção do design original
- 📦 Estrutura modular com componentes reutilizáveis
- 🔧 Configuração de build otimizada

### v1.0.0 (Legacy)
- 🌐 Site original em HTML/CSS/JavaScript
- 📂 Preservado na pasta `legacy/`
