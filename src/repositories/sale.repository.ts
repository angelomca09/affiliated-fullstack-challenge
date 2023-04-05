import Sale from "../models/sale.model";

async function insertSale(sale: any) {
  try {
    return await Sale.create(sale);
  } catch (error) {
    throw error;
  }
}

async function getSales() {
  try {
    return await Sale.findAll();
  } catch (error) {
    throw error;
  }
}

async function getSale(sale_id: number) {
  try {
    return await Sale.findByPk(sale_id);
  } catch (error) {
    throw error;
  }
}

async function updateSale(sale: any) {
  try {
    await Sale.update(sale, {
      where: {
        sale_id: sale.sale_idd,
      },
    });
    return await getSale(sale.sale_id);
  } catch (error) {
    throw error;
  }
}

async function deleteSale(sale_id: number) {
  try {
    return await Sale.destroy({
      where: {
        sale_id,
      },
    });
  } catch (error) {
    throw error;
  }
}

async function getSalesBySeller(seller: string) {
  try {
    return await Sale.findAll({
      where: { seller },
    });
  } catch (error) {
    throw error;
  }
}

export default {
  insertSale,
  getSales,
  getSale,
  updateSale,
  deleteSale,
  getSalesBySeller,
};
