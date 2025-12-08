import Header from '@/components/common/Header';
import ShoppingCartInteractive from './components/ShoppingCartInteractive';

export const metadata = {
  title: 'Carrito de Compras - ElectroStore',
  description: 'Revisa y gestiona los productos en tu carrito de compras antes de proceder al pago en ElectroStore.'
};

export default function ShoppingCartPage() {
  const mockCartItems = [
  {
    id: 1,
    name: "Ratón Inalámbrico Logitech MX Master 3S",
    category: "Ratones",
    price: 99.99,
    quantity: 1,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_104d5d70c-1765064258284.png",
    alt: "Ratón inalámbrico negro ergonómico Logitech MX Master 3S sobre superficie blanca"
  },
  {
    id: 2,
    name: "Teclado Mecánico Corsair K95 RGB Platinum",
    category: "Teclados",
    price: 179.99,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1679533662330-457ca8447e7d",
    alt: "Teclado mecánico gaming con retroiluminación RGB multicolor en escritorio oscuro"
  },
  {
    id: 3,
    name: "Auriculares Sony WH-1000XM5",
    category: "Auriculares",
    price: 349.99,
    quantity: 2,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1119295e3-1765076790006.png",
    alt: "Auriculares inalámbricos negros con cancelación de ruido sobre fondo blanco minimalista"
  }];


  const totalCartItems = mockCartItems?.reduce((sum, item) => sum + item?.quantity, 0);

  return (
    <>
      <Header cartCount={totalCartItems} />
      <main className="pt-16">
        <ShoppingCartInteractive initialCartItems={mockCartItems} />
      </main>
    </>);

}