export default function ItemCompra() {
  const compras = [
    { id: 1, nome: "Arroz", quantidade: 2 },
    { id: 2, nome: "Feijão", quantidade: 1 },
    { id: 3, nome: "Macarrão", quantidade: 3 },
  ];

  return (
    <div>
      <h1>Lista de Compras</h1>
      <ul>
        {compras.map((compra) => (
          <li key={compra.id}>
            {compra.nome} - Quantidade: {compra.quantidade}
          </li>
        ))}
      </ul>
    </div>
  );
}
