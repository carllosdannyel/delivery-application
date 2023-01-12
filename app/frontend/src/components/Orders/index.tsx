import { useEffect, useState } from 'react';
import { Order } from '../../types/Order';
import { api } from '../../utils/api';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

export function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    api.get('/orders').then(({ data }) => {
      setOrders(data);
      console.log(data);

    });
  }, []);

  const waiting = orders.filter((order) => order.status === 'WAITING');
  const inProduction = orders.filter((order) => order.status === 'IN_PRODUCTION');
  const done = orders.filter((order) => order.status === 'DONE');

  function handleOrderStatusOrder(orderId: string, status: Order['status']) {
    setOrders((prevState) => prevState.map(order => (
      order._id === orderId ? { ...order, status } : order
    )));
  }

  function handleCancelOrder(orderId: string) {
    setOrders((prevState) => prevState.filter(order => order._id !== orderId));
  }

  return(
    <Container>
      <OrdersBoard
        icon="⏱️"
        title="Fila de espera"
        orders={waiting}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusOrder}
      />
      <OrdersBoard
        icon="🧑‍🍳"
        title="Em preparação"
        orders={inProduction}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusOrder}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto!"
        orders={done}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusOrder}
      />
    </Container>
  );
}