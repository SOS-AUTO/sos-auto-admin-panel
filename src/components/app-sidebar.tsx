// src/components/app-sidebar.tsx

import * as React from "react"
import {
  Users,
  Settings2,
  PieChart,
  Car,
  DollarSign,
  Activity,
  LifeBuoy,
  HelpCircle,

  FileText as FileTextIcon,

} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { NavMain } from "./nav-main"
import { NavProjects } from "./nav-projects"
import { NavUser } from "./nav-user"
import { NavDashboard } from "./nav-dashboard"
import { Link } from "react-router-dom"

const logoUrl = import.meta.env.VITE_LOGO_URL || "/logo.png"
const storedUser = JSON.parse(localStorage.getItem('user') || '{}');

const data = {
  user: {
    name: storedUser.name || 'Usuário',
    email: storedUser.email || '',
    avatar: "/avatars/admin.jpg",
  },
dashboard: [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: PieChart,
    isActive: true, 
    children: [
      { title: "Visão Geral", url: "/dashboard/overview" },
      { title: "Atendimentos em Tempo Real", url: "/dashboard/atendimentos" },
      { title: "Visão Financeira Rápida", url: "/dashboard/finance" },
    ],
  },
],

  navMain: [
  
    {
      title: "Gestão de Usuários",
      url: "/users",
      icon: Users,
      items: [
        { title: "Motoristas", url: "/users/drivers" },
        { title: "Parceiros", url: "/users/partners" },
        { title: "Usuários Internos", url: "/users/internal" },
        { title: "Permissões & Roles", url: "/users/roles" },
      ],
    },
    {
      title: "Veículos",
      url: "/vehicles",
      icon: Car,
      items: [
        { title: "Cadastro de Veículos", url: "/vehicles/manage" },
        { title: "Documentação", url: "/vehicles/documents" },
        { title: "Seguros Ativos", url: "/vehicles/insurance" },
      ],
    },
    {
      title: "Seguro & Assistência",
      url: "/insurance",
      icon: LifeBuoy,
      items: [
        { title: "Apólices de Seguro", url: "/insurance/policies" },
        { title: "Planos de Assistência", url: "/insurance/plans" },
      ],
    },
    {
      title: "Operações de Socorro",
      url: "/rescue",
      icon: Activity,
      items: [
        { title: "Pedidos de Socorro", url: "/rescue/requests" },
        { title: "Serviços Executados", url: "/rescue/services" },
      ],
    },
    {
      title: "Financeiro",
      url: "/finance",
      icon: DollarSign,
      items: [
        { title: "Pagamentos", url: "/finance/payments" },
        { title: "Comissões e Repasse", url: "/finance/commissions" },
        { title: "Relatórios", url: "/finance/reports" },
      ],
    },
   
  ],
  projects: [
  {
      title: "Conteúdo & Configurações",
      url: "/settings",
      icon: Settings2,
      items: [
        { title: "Notificações", url: "/settings/notifications" },
        { title: "Gestão de Conteúdo", url: "/settings/content" },
        { title: "Configurações Gerais", url: "/settings/general" },
      ],
    },
    {
      title: "Logs & Monitoramento",
      url: "/logs",
      icon: FileTextIcon,
      items: [
        { title: "Histórico de Ações", url: "/logs/history" },
        { title: "Monitoramento de Atendimentos", url: "/logs/monitoring" },
        { title: "Segurança", url: "/logs/security" },
      ],
    },
    {
      title: "Suporte",
      url: "/support",
      icon: HelpCircle,
      items: [
        { title: "Tickets de Suporte", url: "/support/tickets" },
        { title: "Contatos de Emergência", url: "/support/emergency" },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="flex justify-start items-center px-4 py-4">
        <Link to="/dashboard" className="flex items-center">
          <img src={logoUrl} alt="SOS Auto Logo" className="h-20 w-auto" />
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <NavDashboard dashboard={data.dashboard} />  
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
