import * as styles from "./assistanceStyle";
import {
  PhoneCall,
  Clock,
  GaugeCircle,
  Smile,
  PhoneIncoming,
  Eye
} from "lucide-react";
import { Card } from "@/components/ui/card";

export default function AssistancePage() {
  const atendimentos = [
  {
    id: 1,
    nome: "João Silva",
    contacto: "+244 912 345 678",
    empresa: "AutoMais",
    estado: "Pendente",
  },
  {
    id: 2,
    nome: "Ana Costa",
    contacto: "+244 911 222 333",
    empresa: "FixCar",
    estado: "Em Análise",
  },
  {
    id: 3,
    nome: "Carlos Neto",
    contacto: "+244 923 444 555",
    empresa: "CarMaster",
    estado: "Concluído",
  },
  {
    id: 4,
    nome: "Maria Lopes",
    contacto: "+244 946 777 888",
    empresa: "TopAuto",
    estado: "Pendente",
  },
  {
    id: 5,
    nome: "Pedro Rocha",
    contacto: "+244 918 999 000",
    empresa: "MobiServ",
    estado: "Em Análise",
  },
  {
    id: 6,
    nome: "Sara Mendes",
    contacto: "+244 922 123 456",
    empresa: "Oficina Rápida",
    estado: "Concluído",
  },
];


  const parceiros = [
    { nome: "Parceiro Alpha", chamados: 18 },
    { nome: "Parceiro Beta", chamados: 12 },
    { nome: "Parceiro Gamma", chamados: 10 },
    { nome: "Parceiro Delta", chamados: 8 },
  ];

  const topParceiros = parceiros
    .sort((a, b) => b.chamados - a.chamados)
    .slice(0, 7);

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.sectionTitle}>Atendimentos em Tempo Real</h1>

      {/* Indicadores (KPIs) */}
      <div className={styles.kpiContainer}>
        <Card className={styles.kpiCard}>
          <PhoneCall className={styles.kpiIcon} />
          <span className={styles.kpiLabel}>Chamadas Recebidas</span>
          <span className={styles.kpiValue}>32.94K</span>
        </Card>
        <Card className={styles.kpiCard}>
          <Clock className={styles.kpiIcon} />
          <span className={styles.kpiLabel}>Duração Total</span>
          <span className={styles.kpiValue}>824K Min</span>
        </Card>
        <Card className={styles.kpiCard}>
          <GaugeCircle className={styles.kpiIcon} />
          <span className={styles.kpiLabel}>Duração Média</span>
          <span className={styles.kpiValue}>25 Min</span>
        </Card>
        <Card className={styles.kpiCard}>
          <Smile className={styles.kpiIcon} />
          <span className={styles.kpiLabel}>Satisfação (CSAT)</span>
          <span className={styles.kpiValue}>5.5</span>
        </Card>
      </div>

      {/* Mapa + Parceiros ativos */}
      <div className={styles.dashboardGrid}>
        {/* Mapa (simulado) */}
        <div className={styles.mapaContainer}>
          <p>[ Mapa de Atendimentos ]</p>
        </div>

        {/* Card lateral de parceiros */}
        <div className={styles.parceirosCard}>
          <h2 className={styles.parceirosTitle}>
            Parceiros com Chamados Ativos
          </h2>
          <ul className={styles.parceirosList}>
            {topParceiros.map((parceiro, index) => (
              <li key={index} className={styles.parceirosItem}>
                <div className={styles.parceiroInfo}>
                  <div className={styles.parceiroIconWrapper}>
                    <PhoneIncoming className={styles.phoneIncoming} />
                  </div>
                  <span className={styles.parceiroNome}>{parceiro.nome}</span>
                </div>
                <span className={styles.parceiroChamados}>
                  {parceiro.chamados}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tabela de Atendimentos */}
        <div className={styles.tableWrapper}>
          <h2 className={styles.tableTitle}>Lista de Chamadas</h2>
          <table className={styles.table}>
            <thead>
              <tr className={styles.tableHead}>
                <th>ID</th>
                <th>Nome</th>
                <th>Contactos</th>
                <th>Nome da Empresa que recebeu o chamado</th>
                <th>Estado</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              {atendimentos.map((item) => (
                <tr key={item.id} className={styles.tableRow}>
                  <td className={styles.tableCell}>{item.id}</td>
                  <td className={styles.tableCell}>{item.nome}</td>
                  <td className={styles.tableCell}>{item.contacto}</td>
                  <td className={styles.tableCell}>{item.empresa}</td>
                  <td className={styles.tableCell}>
                    <span
                      className={
                        item.estado === "Pendente"
                          ? styles.statusPendente
                          : item.estado === "Em Análise"
                          ? styles.statusAnalise
                          : styles.statusConcluido
                      }
                    >
                      {item.estado}
                    </span>
                  </td>
                  <td className={styles.tableCell}>
                    <Eye className={styles.actionIcon} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Paginação */}
          <div className={styles.paginationWrapper}>
            <button className={styles.paginationButton}>Anterior</button>
            <button className={styles.paginationButton}>Próximo</button>
          </div>
        </div>

      </div>
    </div>
  );
}
