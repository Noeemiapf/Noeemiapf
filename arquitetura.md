# 📐 Arquitetura e Modelagem do Sistema - E-Learning

Este documento contém a modelagem inicial da **Plataforma de Cursos Online**, detalhando o fluxo de navegação e utilização do aluno dentro da aplicação.

---

## 🔄 Fluxograma do Aluno (Fluxo Principal)

```mermaid
graph TD
    A[Início: Acesso à Plataforma] --> B{Possui Conta?}
    
    %% Fluxo de Autenticação
    B -- Não --> C[Realizar Cadastro]
    C --> D[Fazer Login]
    B -- Sim --> D
    
    %% Navegação Principal
    D --> E[Catálogo de Cursos]
    E --> F[Visualizar Detalhes do Curso]
    
    %% Inscrição e Estudo
    F --> G{Deseja se inscrever?}
    G -- Não --> E
    G -- Sim --> H[Confirmar Inscrição]
    
    H --> I[Área do Aluno / Meus Cursos]
    I --> J[Assistir Aulas]
    J --> K[Atualizar Progresso]
    K --> L[Concluir Curso]
