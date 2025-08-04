// Página principal
export const pageContainer = "p-6 flex flex-col gap-6 bg-background min-h-screen";
export const sectionTitle = "text-xl font-bold text-black-800";

// KPIs (Indicadores)
export const kpiContainer = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4";
export const kpiCard = "bg-card text-card-foreground p-4 rounded-xl shadow-md flex flex-col items-center justify-center gap-3 border border-muted border-r-4 border-r-red-500";
export const kpiIcon = "w-6 h-6 text-primary";
export const kpiLabel = "text-sm text-muted-foreground";
export const kpiValue = "text-2xl font-bold";

// Grid principal: Mapa + Card lateral
export const dashboardGrid = "grid grid-cols-1 lg:grid-cols-12 gap-6";

// Mapa (lado esquerdo)
export const mapaContainer = "col-span-8 bg-muted rounded-xl h-[300px] flex items-center justify-center text-muted-foreground text-sm";

// Card de parceiros (lado direito)
export const parceirosCard = "col-span-4 bg-card p-4 rounded-xl shadow";
export const parceirosTitle = "text-sm font-semibold mb-3";

// Itens da lista de parceiros
export const parceirosList = "space-y-2";
export const parceirosItem = "flex items-center justify-between p-2 bg-muted rounded-xl shadow-sm";
export const parceiroInfo = "flex items-center gap-3";
export const parceiroIconWrapper = "bg-primary/10 p-2 rounded-full";
export const parceiroNome = "text-sm font-medium";
export const parceiroChamados = "text-sm font-bold text-primary";
export const phoneIncoming = "w-5 h-5 text-green-500";

// Tabela de atendimentos
export const tableWrapper = "col-span-12 bg-card rounded-xl shadow p-4 mt-6";
export const tableTitle = "text-sm font-semibold mb-4";
export const table = "w-full table-auto text-sm";
export const tableHead = "text-left text-muted-foreground border-b border-muted pb-2";
export const tableRow = "border-b border-muted last:border-none";
export const tableCell = "py-2";
export const actionIcon = "w-4 h-4 text-primary cursor-pointer hover:opacity-75";
export const paginationWrapper = "flex justify-end mt-4 gap-2";
export const paginationButton = "px-3 py-1 text-xs rounded bg-muted text-foreground hover:bg-muted/70";

// Estados (Status)
export const statusBase = "text-xs font-semibold px-2 py-1 rounded-full";
export const statusPendente = `${statusBase} bg-yellow-100 text-yellow-700`;
export const statusAnalise = `${statusBase} bg-blue-100 text-blue-700`;
export const statusConcluido = `${statusBase} bg-green-100 text-green-700`;
