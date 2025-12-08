'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Icon from '@/components/ui/AppIcon';
import Image from '@/components/ui/AppImage';
import PropTypes from 'prop-types';

function TabButton({ active, onClick, icon, label }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-150 ${
        active
          ? 'bg-primary text-primary-foreground shadow-md'
          : 'text-text-secondary hover:bg-muted hover:text-text-primary'
      }`}
    >
      <Icon name={icon} size={20} variant="outline" />
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}

TabButton.propTypes = {
  active: PropTypes?.bool?.isRequired,
  onClick: PropTypes?.func?.isRequired,
  icon: PropTypes?.string?.isRequired,
  label: PropTypes?.string?.isRequired
};

function InfoCard({ title, children }) {
  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-text-primary mb-4">{title}</h3>
      {children}
    </div>
  );
}

InfoCard.propTypes = {
  title: PropTypes?.string?.isRequired,
  children: PropTypes?.node?.isRequired
};

function InfoRow({ label, value, editable }) {
  return (
    <div className="flex justify-between items-center py-3 border-b border-border last:border-0">
      <span className="text-text-secondary text-sm">{label}</span>
      <div className="flex items-center gap-2">
        <span className="text-text-primary font-medium">{value}</span>
        {editable && (
          <button className="text-primary hover:text-accent transition-colors">
            <Icon name="PencilIcon" size={16} variant="outline" />
          </button>
        )}
      </div>
    </div>
  );
}

InfoRow.propTypes = {
  label: PropTypes?.string?.isRequired,
  value: PropTypes?.string?.isRequired,
  editable: PropTypes?.bool
};

function OrderCard({ order }) {
  return (
    <div className="bg-surface border border-border rounded-xl p-6 hover:shadow-md transition-shadow duration-150">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="text-text-primary font-semibold">Pedido #{order?.id}</h4>
          <p className="text-sm text-text-secondary mt-1">{order?.date}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
          order?.status === 'Entregado' 
            ? 'bg-success/10 text-success'
            : order?.status === 'En camino' ?'bg-warning/10 text-warning' :'bg-primary/10 text-primary'
        }`}>
          {order?.status}
        </span>
      </div>
      
      <div className="space-y-3 mb-4">
        {order?.items?.map((item, idx) => (
          <div key={idx} className="flex gap-3">
            <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
              <Image
                src={item?.image}
                alt={item?.name}
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="text-text-primary text-sm font-medium">{item?.name}</p>
              <p className="text-text-secondary text-xs mt-1">
                Cantidad: {item?.quantity}
              </p>
            </div>
            <div className="text-right">
              <p className="text-text-primary font-semibold">
                ${item?.price?.toLocaleString('es-CO')}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-between items-center pt-4 border-t border-border">
        <span className="text-text-secondary text-sm">Total</span>
        <span className="text-text-primary text-lg font-bold">
          ${order?.total?.toLocaleString('es-CO')} COP
        </span>
      </div>
      
      <button className="w-full mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-accent transition-colors duration-150 flex items-center justify-center gap-2">
        <Icon name="EyeIcon" size={18} variant="outline" />
        <span>Ver detalles</span>
      </button>
    </div>
  );
}

OrderCard.propTypes = {
  order: PropTypes?.shape({
    id: PropTypes?.string?.isRequired,
    date: PropTypes?.string?.isRequired,
    status: PropTypes?.string?.isRequired,
    items: PropTypes?.arrayOf(PropTypes?.shape({
      name: PropTypes?.string?.isRequired,
      quantity: PropTypes?.number?.isRequired,
      price: PropTypes?.number?.isRequired,
      image: PropTypes?.string?.isRequired
    }))?.isRequired,
    total: PropTypes?.number?.isRequired
  })?.isRequired
};

export default function UserProfilePage() {
  const [activeTab, setActiveTab] = useState('profile');

  const userData = {
    name: 'Juan Pérez',
    email: 'juan.perez@tecnoplus.com',
    phone: '+57 300 123 4567',
    memberSince: 'Enero 2024',
    totalOrders: 12,
    avatar: '/assets/images/no_image.png'
  };

  const orderHistory = [
    {
      id: 'TP001234',
      date: '5 de Diciembre, 2025',
      status: 'Entregado',
      items: [
        {
          name: 'Apple AirPods Pro (2da generación)',
          quantity: 1,
          price: 1299900,
          image: '/assets/images/no_image.png'
        },
        {
          name: 'Smartwatch Amazfit Band 7',
          quantity: 1,
          price: 189900,
          image: '/assets/images/no_image.png'
        }
      ],
      total: 1489800
    },
    {
      id: 'TP001189',
      date: '28 de Noviembre, 2025',
      status: 'En camino',
      items: [
        {
          name: 'Fire TV Stick 4K',
          quantity: 1,
          price: 259900,
          image: '/assets/images/no_image.png'
        }
      ],
      total: 259900
    },
    {
      id: 'TP001145',
      date: '15 de Noviembre, 2025',
      status: 'Entregado',
      items: [
        {
          name: 'Teclado mecánico Redragon Kumara',
          quantity: 1,
          price: 179900,
          image: '/assets/images/no_image.png'
        },
        {
          name: 'Mouse inalámbrico Logitech M170',
          quantity: 2,
          price: 37900,
          image: '/assets/images/no_image.png'
        }
      ],
      total: 255700
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={3} />
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 mb-8 shadow-xl">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-surface overflow-hidden border-4 border-primary-foreground shadow-lg">
                <Image
                  src={userData?.avatar}
                  alt={`Foto de perfil de ${userData?.name}`}
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-primary-foreground rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform">
                <Icon name="CameraIcon" size={16} variant="outline" />
              </button>
            </div>
            
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-3xl font-bold text-primary-foreground mb-2">
                {userData?.name}
              </h1>
              <p className="text-primary-foreground/90 mb-4">{userData?.email}</p>
              <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                <div className="bg-primary-foreground/20 px-4 py-2 rounded-lg">
                  <span className="text-primary-foreground text-sm font-medium">
                    Miembro desde {userData?.memberSince}
                  </span>
                </div>
                <div className="bg-primary-foreground/20 px-4 py-2 rounded-lg">
                  <span className="text-primary-foreground text-sm font-medium">
                    {userData?.totalOrders} compras realizadas
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          <TabButton
            active={activeTab === 'profile'}
            onClick={() => setActiveTab('profile')}
            icon="UserIcon"
            label="Información"
          />
          <TabButton
            active={activeTab === 'orders'}
            onClick={() => setActiveTab('orders')}
            icon="ShoppingBagIcon"
            label="Historial de Compras"
          />
          <TabButton
            active={activeTab === 'settings'}
            onClick={() => setActiveTab('settings')}
            icon="CogIcon"
            label="Ajustes"
          />
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {activeTab === 'profile' && (
            <div className="grid md:grid-cols-2 gap-6">
              <InfoCard title="Información Personal">
                <InfoRow label="Nombre completo" value={userData?.name} editable />
                <InfoRow label="Email" value={userData?.email} editable />
                <InfoRow label="Teléfono" value={userData?.phone} editable />
                <InfoRow label="Miembro desde" value={userData?.memberSince} />
              </InfoCard>

              <InfoCard title="Dirección de Envío">
                <InfoRow label="Dirección" value="Calle 123 #45-67" editable />
                <InfoRow label="Ciudad" value="Bogotá" editable />
                <InfoRow label="Departamento" value="Cundinamarca" editable />
                <InfoRow label="Código Postal" value="110111" editable />
              </InfoCard>

              <InfoCard title="Métodos de Pago">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-8 bg-primary rounded flex items-center justify-center">
                        <Icon name="CreditCardIcon" size={20} variant="outline" />
                      </div>
                      <div>
                        <p className="text-text-primary font-medium">•••• 4242</p>
                        <p className="text-text-secondary text-sm">Vence 12/26</p>
                      </div>
                    </div>
                    <button className="text-primary hover:text-accent transition-colors">
                      <Icon name="PencilIcon" size={18} variant="outline" />
                    </button>
                  </div>
                  <button className="w-full py-3 border-2 border-dashed border-border rounded-lg text-text-secondary hover:border-primary hover:text-primary transition-all duration-150 flex items-center justify-center gap-2">
                    <Icon name="PlusIcon" size={20} variant="outline" />
                    <span>Agregar método de pago</span>
                  </button>
                </div>
              </InfoCard>

              <InfoCard title="Estadísticas">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <p className="text-3xl font-bold text-primary">{userData?.totalOrders}</p>
                    <p className="text-text-secondary text-sm mt-1">Pedidos</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <p className="text-3xl font-bold text-accent">₡234K</p>
                    <p className="text-text-secondary text-sm mt-1">Total gastado</p>
                  </div>
                </div>
              </InfoCard>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-text-primary">
                  Historial de Compras
                </h2>
                <select className="px-4 py-2 bg-surface border border-input rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Todos los pedidos</option>
                  <option>Entregados</option>
                  <option>En camino</option>
                  <option>Procesando</option>
                </select>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {orderHistory?.map((order) => (
                  <OrderCard key={order?.id} order={order} />
                ))}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="grid md:grid-cols-2 gap-6">
              <InfoCard title="Notificaciones">
                <div className="space-y-4">
                  {['Ofertas y promociones', 'Actualizaciones de pedidos', 'Nuevos productos', 'Newsletter']?.map((item) => (
                    <label key={item} className="flex items-center justify-between cursor-pointer group">
                      <span className="text-text-primary group-hover:text-primary transition-colors">
                        {item}
                      </span>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-5 h-5 rounded border-input text-primary focus:ring-2 focus:ring-primary"
                      />
                    </label>
                  ))}
                </div>
              </InfoCard>

              <InfoCard title="Idioma y Región">
                <div className="space-y-4">
                  <div>
                    <label className="block text-text-secondary text-sm mb-2">Idioma</label>
                    <select className="w-full px-4 py-2 bg-surface border border-input rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary">
                      <option>Español</option>
                      <option>English</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-text-secondary text-sm mb-2">Moneda</label>
                    <select className="w-full px-4 py-2 bg-surface border border-input rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary">
                      <option>COP - Peso Colombiano</option>
                      <option>USD - Dólar</option>
                      <option>EUR - Euro</option>
                    </select>
                  </div>
                </div>
              </InfoCard>

              <InfoCard title="Privacidad y Seguridad">
                <div className="space-y-4">
                  <button className="w-full px-4 py-3 bg-surface border border-input rounded-lg text-text-primary hover:bg-muted transition-colors duration-150 flex items-center justify-between">
                    <span>Cambiar contraseña</span>
                    <Icon name="ChevronRightIcon" size={20} variant="outline" />
                  </button>
                  <button className="w-full px-4 py-3 bg-surface border border-input rounded-lg text-text-primary hover:bg-muted transition-colors duration-150 flex items-center justify-between">
                    <span>Autenticación de dos factores</span>
                    <Icon name="ChevronRightIcon" size={20} variant="outline" />
                  </button>
                  <button className="w-full px-4 py-3 bg-surface border border-input rounded-lg text-text-primary hover:bg-muted transition-colors duration-150 flex items-center justify-between">
                    <span>Dispositivos conectados</span>
                    <Icon name="ChevronRightIcon" size={20} variant="outline" />
                  </button>
                </div>
              </InfoCard>

              <InfoCard title="Cuenta">
                <div className="space-y-4">
                  <button className="w-full px-4 py-3 bg-surface border border-input rounded-lg text-text-primary hover:bg-muted transition-colors duration-150 text-left">
                    Descargar mis datos
                  </button>
                  <button className="w-full px-4 py-3 bg-error text-error-foreground rounded-lg hover:bg-error/90 transition-colors duration-150">
                    Eliminar cuenta
                  </button>
                </div>
              </InfoCard>
            </div>
          )}
        </div>

        {/* Back to Store */}
        <div className="mt-12 text-center">
          <Link 
            href="/product-catalog" 
            className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors"
          >
            <Icon name="ArrowLeftIcon" size={20} variant="outline" />
            <span>Volver a la tienda</span>
          </Link>
        </div>
      </main>
    </div>
  );
}