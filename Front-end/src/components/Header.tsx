import logo from '../assets/images/logo.svg';

export function Header() {
  return (
    <header>
      <div className="page-details">
        <h1>Pedidos</h1>
        <h2>Acompanhe os pedidos dos clientes</h2>
      </div>

      <img src={logo} alt="WAITERAPP" />
    </header>
  );
}