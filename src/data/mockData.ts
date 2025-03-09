
// Mock user data
export const users = [
  { id: "1", name: "Ana Silva", avatar: "" },
  { id: "2", name: "Carlos Oliveira", avatar: "" },
  { id: "3", name: "Mariana Costa", avatar: "" },
  { id: "4", name: "Pedro Santos", avatar: "" },
  { id: "5", name: "Juliana Lima", avatar: "" },
  { id: "6", name: "Roberto Alves", avatar: "" },
  { id: "7", name: "Fernanda Pereira", avatar: "" },
];

// Productivity by user
export const userProductivity = [
  { id: "1", name: "Ana Silva", value: 357, change: 12 },
  { id: "2", name: "Carlos Oliveira", value: 298, change: -3 },
  { id: "3", name: "Mariana Costa", value: 245, change: 5 },
  { id: "4", name: "Pedro Santos", value: 187, change: 2 },
  { id: "5", name: "Juliana Lima", value: 176, change: 8 },
  { id: "6", name: "Roberto Alves", value: 156, change: -5 },
  { id: "7", name: "Fernanda Pereira", value: 142, change: 4 },
];

// Certificates data
export const certificateTypes = [
  { name: "Negativa", value: 543 },
  { name: "Positiva", value: 231 },
  { name: "Positiva com Efeitos de Negativa", value: 174 },
  { name: "Especial", value: 87 },
  { name: "Outros", value: 65 },
];

// Authentication data
export const authenticationData = [
  {
    name: "Autenticação",
    deferidos: 432,
    exigencias: 87,
  },
  {
    name: "Cancelamento",
    deferidos: 68,
    exigencias: 24,
  },
  {
    name: "Registro",
    deferidos: 217,
    exigencias: 53,
  }
];

// Cadastral updates
export const cadastralUpdates = [
  { id: "1", name: "Ana Silva", accepted: 67, rejected: 12 },
  { id: "2", name: "Carlos Oliveira", accepted: 54, rejected: 8 },
  { id: "3", name: "Mariana Costa", accepted: 48, rejected: 15 },
  { id: "4", name: "Pedro Santos", accepted: 37, rejected: 6 },
  { id: "5", name: "Juliana Lima", accepted: 31, rejected: 9 },
];

// Peak hours data
export const peakHoursData = [
  { time: "08:00", count: 42 },
  { time: "09:00", count: 78 },
  { time: "10:00", count: 95 },
  { time: "11:00", count: 87 },
  { time: "12:00", count: 56 },
  { time: "13:00", count: 45 },
  { time: "14:00", count: 67 },
  { time: "15:00", count: 89 },
  { time: "16:00", count: 76 },
  { time: "17:00", count: 58 },
];

// Weekly productivity trend
export const weeklyProductivityTrend = [
  { day: "Segunda", total: 245 },
  { day: "Terça", total: 267 },
  { day: "Quarta", total: 278 },
  { day: "Quinta", total: 289 },
  { day: "Sexta", total: 302 },
  { day: "Sábado", total: 168 },
  { day: "Domingo", total: 0 },
];

// Monthly productivity trend
export const monthlyProductivityTrend = [
  { month: "Jan", total: 4230 },
  { month: "Fev", total: 3890 },
  { month: "Mar", total: 4310 },
  { month: "Abr", total: 4590 },
  { month: "Mai", total: 4790 },
  { month: "Jun", total: 4980 },
  { month: "Jul", total: 5120 },
  { month: "Ago", total: 5230 },
  { month: "Set", total: 5390 },
  { month: "Out", total: 5510 },
  { month: "Nov", total: 5620 },
  { month: "Dez", total: 5420 },
];

// Authentication statistics
export const authenticationStats = {
  totalEvents: 881,
  deferredPercentage: 81.5,
  requirementsPercentage: 18.5,
  highestEvent: "Autenticação",
};

// Certificate statistics
export const certificateStats = {
  totalIssued: 1100,
  mostRequested: "Negativa",
  percentageIncrease: 12.4,
};

// Combined 
export const dashboardSummary = {
  totalProcessed: 5783,
  totalUsers: 7,
  mostProductiveUser: "Ana Silva",
  averageProcessPerUser: 826,
  peakHour: "10:00",
};
