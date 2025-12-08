import Header from '@/components/common/Header';
import ProductCatalogInteractive from './components/ProductCatalogInteractive';

export const metadata = {
  title: 'Catálogo de Productos - ElectroStore',
  description: 'Explora nuestra amplia selección de productos electrónicos más vendidos en Amazon Colombia, con precios en pesos colombianos'
};

export default function ProductCatalogPage() {
  const mockProducts = [
  {
    id: 1,
    name: "Apple AirPods Pro (2da Generación)",
    description: "Auriculares inalámbricos con cancelación activa de ruido adaptativa, audio espacial personalizado y hasta 6 horas de batería",
    price: 1249900,
    originalPrice: 1399900,
    discount: 11,
    image: "https://images.unsplash.com/photo-1631677624302-55e6178078f1",
    alt: "Apple AirPods Pro de segunda generación con estuche de carga blanco sobre fondo claro",
    category: "headphones",
    rating: 4.9,
    reviews: 8934,
    isNew: true,
    popularity: 100
  },
  {
    id: 2,
    name: "Amazon Echo Dot (5ta Gen)",
    description: "Altavoz inteligente con Alexa, sonido mejorado y control de hogar inteligente. Diseño compacto perfecto para cualquier espacio",
    price: 219900,
    originalPrice: 0,
    discount: 0,
    image: "https://images.unsplash.com/photo-1572460041714-49f1f551ad38",
    alt: "Amazon Echo Dot esférico color antracita sobre superficie blanca",
    category: "accessories",
    rating: 4.7,
    reviews: 15234,
    isNew: false,
    popularity: 98
  },
  {
    id: 3,
    name: "Logitech MX Master 3S",
    description: "Ratón inalámbrico ergonómico con sensor de 8000 DPI, desplazamiento electromagnético silencioso y batería de 70 días",
    price: 489900,
    originalPrice: 0,
    discount: 0,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_104d5d70c-1765064258284.png",
    alt: "Ratón Logitech MX Master 3S negro con diseño ergonómico sobre escritorio",
    category: "mouse",
    rating: 4.8,
    reviews: 6421,
    isNew: false,
    popularity: 95
  },
  {
    id: 4,
    name: "Fire TV Stick 4K Max",
    description: "Streaming en 4K UHD con Wi-Fi 6E, sonido Dolby Atmos y control por voz con Alexa. Acceso a Netflix, Prime Video y más",
    price: 269900,
    originalPrice: 319900,
    discount: 16,
    image: "https://images.unsplash.com/photo-1644740949944-13b95d739e24",
    alt: "Amazon Fire TV Stick 4K Max con control remoto Alexa sobre fondo oscuro",
    category: "accessories",
    rating: 4.6,
    reviews: 12890,
    isNew: true,
    popularity: 97
  },
  {
    id: 5,
    name: "Teclado Mecánico Keychron K2 V2",
    description: "Teclado mecánico inalámbrico 75% con switches Gateron, retroiluminación RGB y compatibilidad Mac/Windows",
    price: 419900,
    originalPrice: 0,
    discount: 0,
    image: "https://images.unsplash.com/photo-1639506060078-83c565d0e51a",
    alt: "Teclado mecánico Keychron K2 con teclas RGB multicolor sobre escritorio",
    category: "keyboard",
    rating: 4.7,
    reviews: 3456,
    isNew: false,
    popularity: 89
  },
  {
    id: 6,
    name: "Samsung Galaxy Buds2 Pro",
    description: "Auriculares inalámbricos con cancelación de ruido inteligente, audio Hi-Fi de 360° y resistencia al agua IPX7",
    price: 699900,
    originalPrice: 849900,
    discount: 18,
    image: "https://images.unsplash.com/photo-1721767462673-24305b9e948c",
    alt: "Samsung Galaxy Buds2 Pro negros con estuche de carga compacto",
    category: "headphones",
    rating: 4.6,
    reviews: 5678,
    isNew: false,
    popularity: 92
  },
  {
    id: 7,
    name: "Webcam Logitech C920 HD Pro",
    description: "Webcam Full HD 1080p con corrección automática de luz, enfoque automático y micrófono estéreo dual integrado",
    price: 319900,
    originalPrice: 0,
    discount: 0,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_14094b40a-1764673878586.png",
    alt: "Webcam Logitech C920 HD Pro montada en clip para monitor",
    category: "accessories",
    rating: 4.7,
    reviews: 9234,
    isNew: false,
    popularity: 93
  },
  {
    id: 8,
    name: "Razer DeathAdder V3 Pro",
    description: "Ratón gaming inalámbrico con sensor óptico de 30000 DPI, switches ópticos Gen-3 y batería de hasta 90 horas",
    price: 649900,
    originalPrice: 749900,
    discount: 13,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_10080fd1d-1764792423309.png",
    alt: "Ratón gaming Razer DeathAdder V3 Pro negro con iluminación RGB",
    category: "mouse",
    rating: 4.8,
    reviews: 4567,
    isNew: true,
    popularity: 94
  },
  {
    id: 9,
    name: "Anker PowerCore 20100mAh",
    description: "Batería externa de alta capacidad con tecnología PowerIQ, carga rápida y doble puerto USB para cargar dos dispositivos",
    price: 179900,
    originalPrice: 0,
    discount: 0,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_131ba0a6d-1764641912026.png",
    alt: "Batería externa Anker PowerCore negra de alta capacidad sobre superficie blanca",
    category: "accessories",
    rating: 4.8,
    reviews: 18234,
    isNew: false,
    popularity: 96
  },
  {
    id: 10,
    name: "TP-Link Archer AX3000 WiFi 6",
    description: "Router WiFi 6 dual band con velocidades de hasta 3 Gbps, 4 antenas de alto rendimiento y control parental avanzado",
    price: 429900,
    originalPrice: 0,
    discount: 0,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_133ac8e88-1764814806422.png",
    alt: "Router TP-Link Archer con cuatro antenas externas sobre fondo claro",
    category: "accessories",
    rating: 4.6,
    reviews: 7890,
    isNew: false,
    popularity: 88
  }];


  const mockCategories = [
  { id: 'all', name: 'Todos', icon: 'ViewGridIcon', count: 10 },
  { id: 'mouse', name: 'Ratones', icon: 'CursorClickIcon', count: 2 },
  { id: 'keyboard', name: 'Teclados', icon: 'TerminalIcon', count: 1 },
  { id: 'headphones', name: 'Auriculares', icon: 'VolumeUpIcon', count: 2 },
  { id: 'accessories', name: 'Accesorios', icon: 'PuzzleIcon', count: 5 }];


  return (
    <>
      <Header cartCount={0} />
      <ProductCatalogInteractive
        initialProducts={mockProducts}
        initialCategories={mockCategories} />

    </>);

}