# Country Explorer - Plan Frontend Test

Aplicação desenvolvida como teste técnico para a vaga de Desenvolvedor Senior React (Next.js). A aplicação consome a REST Countries API para listar e exibir detalhes de países, seguindo rigorosamente o layout e requisitos técnicos propostos.

## 🚀 Tecnologias e Ferramentas

- **Next.js 15 (App Router)**: Framework React para renderização híbrida e rotas.
- **TypeScript**: Tipagem estática para maior segurança e manutenibilidade.
- **Tailwind CSS**: Estilização utility-first, garantindo responsividade e fidelidade ao layout.
- **TanStack Query (React Query)**: Gerenciamento de estado servidor (caching, loading, error states).
- **Zustand**: Gerenciamento de estado global leve para filtros (busca, religião, idioma).
- **Axios**: Cliente HTTP para requisições à API.
- **Lucide React**: Ícones leves e consistentes.
- **ESLint & Prettier**: Padronização de código e formatação.

## 📦 Instalação e Execução

Para rodar o projeto localmente, siga os passos abaixo:

1. **Clone o repositório:**

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd plan-frontend-test
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Acesse a aplicação:**
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🛠️ Escolhas Técnicas

- **Next.js App Router**: Escolhido por ser o padrão moderno do Next.js, oferecendo melhor performance e organização de rotas.
- **Arquitetura (`src/shared` e `src/screens`)**: Optei por separar funcionalidades globais (shared) de telas específicas (screens) para manter a base de código escalável e organizada.
- **Tailwind CSS vs Sass**: Sass foi removido. Tailwind permite desenvolvimento mais ágil e bundle size otimizado (purging de CSS não utilizado).
- **React Query**: Essencial para lidar com dados assíncronos da API de Países, oferecendo cache automático e evitando prop drilling de estados de loading/erro.
- **Zustand**: Escolhido para o estado global dos filtros por ser mais simples e menos verboso que Redux ou Context API para este caso de uso.
- **100% Responsivo**: O layout se adapta de mobile a desktop utilizando breakpoints do Tailwind (`md`, `lg`).

## ✅ Funcionalidades Implementadas

- Listagem de países com paginação.
- Busca por nome (em português ou inglês).
- Filtro por Continente (Múltipla escolha/Checkbox).
- Filtro por Idioma (Dinâmico baseados nos países carregados).
- Página de Detalhes com informações completas.
- Navegação fluida e animações de loading.

---

https://github.com/user-attachments/assets/ecceebe5-d9d5-4a5a-b9e4-c77da94efe08



Desenvolvido por Gian Manzo.
