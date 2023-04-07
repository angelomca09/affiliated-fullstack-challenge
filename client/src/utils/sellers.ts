import { ISale, ISeller, SaleType } from "../interfaces/sale.interface";

function groupSellers(sales: ISale[]) {

  let salesPerSeller: ISeller[] = [];
  sales.forEach(sale => {
    const sps_index = salesPerSeller.findIndex(s => s.name === sale.seller)
    const { seller, ...rest } = sale;
    const total = salesValue(rest.value, rest.type);
    if (sps_index === -1) {
      const data = { name: seller, sales: [rest], total }
      salesPerSeller.push(data)
    }
    else {
      salesPerSeller[sps_index].sales.push(rest)
      salesPerSeller[sps_index].total += total;
    }
  });
  return salesPerSeller;
}

function salesValue(value: number, type: SaleType) {
  if (type == "3") return value * -1;
  return value;
}

function valueSigns(type: SaleType) {
  if (type == "3") return "-";
  return "+";
}

export {
  groupSellers,
  valueSigns
}