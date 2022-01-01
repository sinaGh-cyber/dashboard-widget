import { useEffect, useState } from 'react';
import axios from 'axios';
import DashboardWidget from 'components/dashboard/DashboardWidget';

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [income, setIncome] = useState([]);

  const getOrders = async () => {
    try {
      const res = await axios.get('http://localhost:8000/orders');
      const { data } = res;
      let orderCounter = 0;
      let totalPrice = 0;
      data.forEach((order) => {
        if (order.status) {
          orderCounter++;
          totalPrice += order.price;
        }
      });

      setOrders(orderCounter);
      setIncome(totalPrice);
    } catch (error) {
      throw error;
    }
  };

  const getProducts = async () => {
    const res = await axios.get('http://localhost:8000/products');
    const { data } = res;
    setProducts(data.length);
  };
  useEffect(() => {
    getOrders();
    getProducts();
  }, [orders, products]);

  return (
    <>
      <div className="row">
        <div className="col-12 col-sm-6 col-lg-4">
          <DashboardWidget
            title="تعداد محصولات"
            icon="tshirt"
            value={products}
            color="bg-primary"
            testId="products-count"
          />
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          <DashboardWidget
            title="درآمد کل"
            icon="coins"
            value={income}
            color="bg-warning"
            testId="total-incomes"
          />
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          <DashboardWidget
            title="تعداد سفارشات موفق"
            icon="shopping-cart"
            value={orders}
            color="bg-danger"
            testId="successful-orders-count"
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
