import { SaleType } from "../interfaces/sale.interface";

function formatDate(date: string) {
  const newDate = new Date(date);
  return new Intl.DateTimeFormat('pt-BR').format(newDate)
}
function formatCurrency(currency: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: "currency",
    currency: "BRL"
  }).format(currency)
}
function formatType(type: SaleType) {
  if (type == "1") return "Creator Sale";
  if (type == "2") return "Affiliate Sale";
  if (type == "3") return "Paid Comission";
  if (type == "4") return "Received Comission";
  return type;
}



export { formatDate, formatCurrency, formatType }