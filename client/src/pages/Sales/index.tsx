import React, { useEffect, useState } from "react";
import { Title } from "../../layout/Title"
import "./styles.css";
import { ISeller } from "../../interfaces/sale.interface";
import api from "../../api";

import { ClipLoader } from "react-spinners";
import { groupSellers, valueSigns } from "../../utils/sellers";
import { formatCurrency, formatDate, formatType } from "../../utils/format";

export const Sales = () => {

  const [sellers, setSellers] = useState<ISeller[]>([])
  const [loading, setLoading] = useState(true);

  async function getSales() {
    await api.getSales().then(res => {
      setSellers(groupSellers(res))
    }).finally(() => setLoading(false))
  }

  useEffect(() => {
    getSales();
  }, [])

  return (
    <>
      <main className="container cards">
        <Title title="All Sales" />
        {loading ? <ClipLoader></ClipLoader> : <></>}
        {!!sellers.length &&
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Date</th>
                <th>Product</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>

              {sellers.map((seller, i) => seller.sales.map((sale, si) => (
                <React.Fragment key={si}>
                  <tr >
                    <td>{si === 0 ? seller.name : ""}</td>
                    <td>{formatType(sale.type)}</td>
                    <td>{formatDate(sale.date)}</td>
                    <td>{sale.product}</td>
                    <td>{formatCurrency(+(valueSigns(sale.type) + sale.value.toString()))}</td>
                  </tr>
                  {(si === seller.sales.length - 1) &&
                    <tr className="total">
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>Total:</td>
                      <td>{formatCurrency(seller.total)}</td>
                    </tr>}
                </React.Fragment>
              )))}
            </tbody>

          </table>
        }
      </main>
    </>
  )
}
