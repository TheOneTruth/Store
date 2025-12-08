import Header from '@/components/common/Header';
import HomeInteractive from './components/HomeInteractive';

export const metadata = {
  title: 'Inicio - TecnoPlus',
  description: 'TecnoPlus - Tu tienda de productos tecnológicos más vendidos en Amazon Colombia con los mejores precios en pesos colombianos'
};

export default function HomePage() {
  const featuredProducts = [
  {
    id: 1,
    name: "Apple AirPods Pro (2da Generación)",
    description: "Auriculares inalámbricos con cancelación activa de ruido",
    price: 1249900,
    originalPrice: 1399900,
    discount: 11,
    image: "https://images.unsplash.com/photo-1631677624302-55e6178078f1",
    alt: "Apple AirPods Pro de segunda generación con estuche de carga blanco sobre fondo claro",
    category: "headphones",
    rating: 4.9,
    reviews: 8934,
    isNew: true,
    badge: "Más Vendido"
  },
  {
    id: 2,
    name: "Amazon Echo Dot (5ta Gen)",
    description: "Altavoz inteligente con Alexa y sonido mejorado",
    price: 219900,
    originalPrice: 0,
    discount: 0,
    image: "https://images.unsplash.com/photo-1572460041714-49f1f551ad38",
    alt: "Amazon Echo Dot esférico color antracita sobre superficie blanca",
    category: "accessories",
    rating: 4.7,
    reviews: 15234,
    isNew: false,
    badge: "Mejor Precio"
  },
  {
    id: 3,
    name: "Logitech MX Master 3S",
    description: "Ratón inalámbrico ergonómico profesional",
    price: 489900,
    originalPrice: 0,
    discount: 0,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_104d5d70c-1765064258284.png",
    alt: "Ratón Logitech MX Master 3S negro con diseño ergonómico sobre escritorio",
    category: "mouse",
    rating: 4.8,
    reviews: 6421,
    isNew: false,
    badge: "Recomendado"
  },
  {
    id: 4,
    name: "Fire TV Stick 4K Max",
    description: "Streaming 4K con WiFi 6E y Dolby Atmos",
    price: 269900,
    originalPrice: 319900,
    discount: 16,
    image: "https://images.unsplash.com/photo-1644740949944-13b95d739e24",
    alt: "Amazon Fire TV Stick 4K Max con control remoto Alexa sobre fondo oscuro",
    category: "accessories",
    rating: 4.6,
    reviews: 12890,
    isNew: true,
    badge: "Oferta"
  }];


  const heroBanners = [
  {
    id: 1,
    title: "Los Más Vendidos de Amazon",
    subtitle: "Tecnología de última generación al mejor precio",
    description: "Descubre los 10 productos tecnológicos más populares con envío gratis",
    ctaText: "Ver Catálogo",
    ctaLink: "/product-catalog",
    bgImage: "https://images.unsplash.com/photo-1706597461613-9e1d816a3d78",
    bgAlt: "Escritorio moderno con laptop, smartphone y accesorios tecnológicos organizados",
    gradient: "from-blue-600/90 to-cyan-600/90"
  },
  {
    id: 2,
    title: "Ofertas Especiales",
    subtitle: "Hasta 30% de descuento",
    description: "Aprovecha nuestras promociones exclusivas por tiempo limitado",
    ctaText: "Ver Ofertas",
    ctaLink: "/product-catalog",
    bgImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1d355bca9-1764850529663.png",
    bgAlt: "Dispositivos electrónicos modernos incluyendo auriculares y smartphone con iluminación led",
    gradient: "from-purple-600/90 to-pink-600/90"
  },
  {
    id: 3,
    title: "Envío Gratis",
    subtitle: "En compras superiores a $200.000",
    description: "Recibe tus productos tecnológicos favoritos sin costo adicional",
    ctaText: "Comprar Ahora",
    ctaLink: "/product-catalog",
    bgImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1fc5e34af-1764703112990.png",
    bgAlt: "Productos electrónicos empaquetados listos para envío con caja de cartón",
    gradient: "from-green-600/90 to-teal-600/90"
  }];


  const categories = [
  {
    id: 'headphones',
    name: 'Auriculares',
    description: 'Audio premium y cancelación de ruido',
    icon: 'VolumeUpIcon',
    productCount: 15,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1119295e3-1765076790006.png",
    alt: "Auriculares inalámbricos negros de alta calidad sobre fondo oscuro"
  },
  {
    id: 'mouse',
    name: 'Ratones',
    description: 'Precisión y ergonomía',
    icon: 'CursorClickIcon',
    productCount: 12,
    image: "https://images.unsplash.com/photo-1627614406324-2427cb18c2f2",
    alt: "Ratón gaming ergonómico con iluminación RGB sobre mousepad"
  },
  {
    id: 'keyboard',
    name: 'Teclados',
    description: 'Mecánicos y gaming',
    icon: 'TerminalIcon',
    productCount: 10,
    image: "https://images.unsplash.com/photo-1679841074555-827291ba6270",
    alt: "Teclado mecánico retroiluminado con switches visibles sobre escritorio"
  },
  {
    id: 'accessories',
    name: 'Accesorios',
    description: 'Complementos esenciales',
    icon: 'PuzzleIcon',
    productCount: 25,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f6802d51-1765099570461.png",
    alt: "Variedad de accesorios tecnológicos incluyendo cables, adaptadores y cargadores"
  }];


  return (
    <>
      <Header cartCount={0} />
      <HomeInteractive
        heroBanners={heroBanners}
        featuredProducts={featuredProducts}
        categories={categories} />

    </>);

}