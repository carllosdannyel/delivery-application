import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
    '_id': '63b9f4424baa894cebd151aa',
    'table': '123',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1673096308284-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 3,
        '_id': '63b9f4424baa894cebd151ab'
      },
      {
        'product': {
          'name': 'Coca cola',
          'imagePath': '1673097247055-coca-cola.png',
          'price': 7,
        },
        'quantity': 2,
        '_id': '63b9f4424baa894cebd151ac'
      }
    ],
  }
];

export function Orders() {
  return(
    <Container>
      <OrdersBoard
        icon="⏱️"
        title="Fila de espera"
        orders={orders}
      />
      <OrdersBoard
        icon="🧑‍🍳"
        title="Em preparação"
        orders={[]}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto!"
        orders={[]}
      />
    </Container>
  );
}