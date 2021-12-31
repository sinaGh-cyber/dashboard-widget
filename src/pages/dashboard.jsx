import { useEffect, useState } from 'react'
import axios from 'axios'
import DashboardWidget from 'components/dashboard/DashboardWidget'

const Dashboard = () => {
  useEffect(() => {
    // put your codes here...
  }, [])

  return (
    <>
      <div className="row">
        <div className="col-12 col-sm-6 col-lg-4">
          <DashboardWidget
            title="تعداد محصولات"
            icon="tshirt"
            value={0}
            color="bg-primary"
            testId="products-count"
          />
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          <DashboardWidget
            title="درآمد کل"
            icon="coins"
            value={0}
            color="bg-warning"
            testId="total-incomes"
          />
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          <DashboardWidget
            title="تعداد سفارشات موفق"
            icon="shopping-cart"
            value={0}
            color="bg-danger"
            testId="successful-orders-count"
          />
        </div>
      </div>
    </>
  )
}

export default Dashboard
