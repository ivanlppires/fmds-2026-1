# FACET-SNP-310 — Frameworks Modernos para Desenvolvimento de Sistemas

Repositório oficial da disciplina **FACET-SNP-310 — Frameworks Modernos para Desenvolvimento de Sistemas**, ofertada no curso de **Sistemas de Informação** da **Universidade do Estado de Mato Grosso (UNEMAT) — Campus Universitário de Sinop**.

Aqui ficam os códigos, exemplos e projetos desenvolvidos ao vivo durante as aulas. Os alunos podem clonar, acompanhar e revisar tudo o que for produzido em sala.

---

## Sobre a disciplina

O objetivo da disciplina é apresentar e exercitar, de ponta a ponta, frameworks modernos amplamente utilizados no mercado para a construção de aplicações web. As aulas são práticas: a cada encontro construímos um projeto novo, sempre dentro do mesmo repositório, em uma pasta nomeada pela data da aula.

### Ementa prática (tópicos previstos)

- **Frontend** — Vue.js 3 (Composition API) com [Vuetify](https://vuetifyjs.com/) como biblioteca de UI
- **Backend** — [Fastify](https://fastify.dev/) (Node.js) para APIs HTTP de alta performance
- **Documentação de API** — Swagger / OpenAPI
- **Banco de dados** — PostgreSQL e MySQL (locais) para fundamentos relacionais
- **Backend-as-a-Service** — [Supabase](https://supabase.com/) (Postgres gerenciado, Auth, Storage)
- **Autenticação** — Firebase Authentication com login via Google
- **Deploy** — publicação de frontend e backend em ambiente de produção

### Metodologia

- Aulas **toda quarta-feira**, com início em **06/05/2026** (semestre 2026/1)
- A cada aula, um **projeto novo** é desenvolvido do zero ou evoluído
- Cada projeto fica em uma pasta com o **nome no formato `YYYY-MM-DD-nome-do-projeto`**
- O código vai sendo **commitado em tempo real** durante a aula, para que qualquer aluno consiga puxar o estado atual com `git pull` e acompanhar

---

## Como usar este repositório

### 1. Clonar

```bash
git clone https://github.com/ivanlppires/fmds-2026-1.git
cd fmds-2026-1
```

### 2. Atualizar antes de cada aula

```bash
git pull
```

### 3. Entrar no projeto da aula

Cada aula vive em sua própria pasta. Por exemplo:

```bash
cd 2026-05-06-introducao-vue3
```

Dentro de cada pasta haverá um `README.md` específico explicando o objetivo daquele projeto, como rodar e quais tecnologias foram usadas.

---

## Estrutura do repositório

```
.
├── README.md                          ← este arquivo
├── 2026-05-06-<projeto-da-aula-1>/    ← uma pasta por aula
├── 2026-05-13-<projeto-da-aula-2>/
├── 2026-05-20-<projeto-da-aula-3>/
└── ...
```

---

## Pré-requisitos no seu computador

Para acompanhar as aulas, instale:

- [Node.js](https://nodejs.org/) (versão LTS — 20 ou superior)
- [Git](https://git-scm.com/)
- Editor de código — recomendado [VS Code](https://code.visualstudio.com/)
- [Docker](https://www.docker.com/) (opcional, mas útil para subir Postgres/MySQL localmente)

Conforme a aula avançar, novas ferramentas serão instaladas (CLIs do Vue, do Supabase, do Firebase, etc.).

---

## Universidade

**Universidade do Estado de Mato Grosso (UNEMAT)**
Campus Universitário de Sinop
Curso: Sistemas de Informação
Disciplina: FACET-SNP-310 — Frameworks Modernos para Desenvolvimento de Sistemas
Semestre: 2026/1

---

## Licença

O conteúdo deste repositório é educacional e disponibilizado livremente para fins de estudo dos alunos da disciplina.
