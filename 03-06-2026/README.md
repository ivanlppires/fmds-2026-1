# Aula 03/06/2026 — Pinia + Autenticação Google (Firebase) no Vuetify

Projeto-exemplo da disciplina **FACET-SNP-310 — Frameworks Modernos para Desenvolvimento de Sistemas** (UNEMAT, Sistemas de Informação, 2026/1).

Demonstra, em um app Vue 3 + Vuetify:

- **Pinia** — estado global de verdade (uma _store_ de autenticação);
- **Firebase Authentication** — login social com a conta **Google** (popup);
- **Vue Router** — uma **rota protegida** (`/perfil`) com guarda de navegação.

> 📄 O roteiro completo da aula (passo a passo + exercício) está em
> [`aula_pinia_firebase.pdf`](./aula_pinia_firebase.pdf).

---

## Pré-requisitos

- Node.js 20+ e [`bun`](https://bun.sh)
- Uma conta Google (para criar o projeto no Firebase)

## 1. Instalar as dependências

```bash
bun install
```

## 2. Criar o projeto no Firebase (resumo)

1. Acesse <https://console.firebase.google.com> → **Adicionar projeto**.
2. No projeto: **Authentication → Get started → Sign-in method → Google → Ativar → Salvar**.
3. **Configurações do projeto (⚙️) → Seus apps → Web (`</>`)** → registre o app e
   copie o objeto `firebaseConfig`.
4. **Authentication → Settings → Authorized domains**: confirme que `localhost` está na lista.

## 3. Configurar as chaves

```bash
cp .env.example .env
```

Edite o `.env` colando os valores do seu `firebaseConfig`:

```
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=seu-projeto.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=seu-projeto
VITE_FIREBASE_APP_ID=1:...:web:...
```

> As chaves "Web" do Firebase **não são secretas** (são identificadores públicos
> do projeto). A segurança real vem das _regras_ e dos _domínios autorizados_.
> Ainda assim, mantemos no `.env` por boa prática.

## 4. Rodar

```bash
bun dev
```

Abra <http://localhost:3000>, clique em **Entrar com Google** e teste.

---

## Estrutura

```
src/
├── main.js
├── App.vue                  # app-bar + <router-view> + <UserMenu>
├── firebase.js              # inicializa o Firebase (auth + provider Google)
├── plugins/
│   ├── index.js             # registra Pinia, Vuetify e Router (nesta ordem!)
│   └── vuetify.js           # tema customizado (cores do Vue)
├── router/
│   └── index.js             # rotas + guarda que protege /perfil
├── stores/
│   └── auth.js              # ⭐ a store Pinia de autenticação
├── components/
│   └── UserMenu.vue         # botão "Entrar" / avatar + menu "Sair"
└── pages/
    ├── Home.vue
    ├── Perfil.vue           # rota protegida (usa storeToRefs)
    └── Sobre.vue
```
