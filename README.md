# SOS Auto Angola – Painel do Administrador 👨‍💼

Este repositório contém o painel de administração da plataforma **SOS Auto Angola**, permitindo o gerenciamento completo de usuários, parceiros, atendimentos, seguradoras e relatórios da operação.

---

## 🚀 Funcionalidades

- Login e autenticação segura
- Dashboard com KPIs (chamados abertos, atendimentos diários, etc.)
- Gerenciamento de:
  - Motoristas
  - Mecânicos
  - Guinchos
  - Seguradoras
- Visualização e edição de atendimentos
- Acompanhamento em tempo real dos chamados
- Configuração de comissões e planos
- Relatórios com gráficos
- Sistema de permissões e cargos

---

## 📦 Tecnologias Utilizadas

- Angular 17+
- TailwindCSS ou SCSS
- RxJS
- ngx-charts / Chart.js
- Angular Router
- JWT / Supabase Auth
- SweetAlert2 / Toastr

---

## 📁 Estrutura do Projeto

src/
├── app/
│ ├── modules/
│ │ ├── dashboard/ # Visão geral do sistema
│ │ ├── users/ # Motoristas
│ │ ├── partners/ # Mecânicos, Guinchos
│ │ ├── insurance/ # Seguradoras
│ │ ├── atendimentos/ # Chamados
│ │ └── relatorios/ # KPIs, gráficos
│ ├── core/ # Interceptors, guards, services
│ ├── shared/ # Componentes comuns
├── environments/ # Configurações por ambiente

yaml
Copy
Edit

---

## 🛠️ Como executar localmente

```bash
git clone https://github.com/SOS-AUTO/sos-auto-admin-panel.git
cd sos-auto-admin-panel

npm install
ng serve

```
🧑 Desenvolvedor
Isaac Isvaldo Bunga
GitHub
