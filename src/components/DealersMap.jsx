import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { MapPin, Phone, Mail, Navigation } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import Header from './Header'
import Footer from './Footer'
import DealerApplicationForm from './DealerApplicationForm'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import dealersData from '../data/dealers.json'

// Fix for default marker icon in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

// Custom red marker icon for PediZone dealers
const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})

const DealersMap = () => {
  const [selectedDealer, setSelectedDealer] = useState(null)
  const [currentLang, setCurrentLang] = useState('tr')
  const dealers = dealersData.dealers.filter(d => d.isActive)

  // Turkey center coordinates
  const turkeyCenter = [39.0, 35.0]
  const defaultZoom = 6

  const handleDealerClick = (dealer) => {
    setSelectedDealer(dealer)
  }

  const openGoogleMaps = (lat, lng) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`, '_blank')
  }

  return (
    <>
      <Header currentLang={currentLang} setCurrentLang={setCurrentLang} showBackButton={true} />
      
      <div className="min-h-screen bg-gray-50 pt-[72px]">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="pedizone-container">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="w-12 h-12 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold pedizone-heading">
              Satış Noktalarımız
            </h1>
          </div>
          <p className="text-center text-xl text-red-100 max-w-2xl mx-auto">
            PediZone® ürünlerini alabileceğiniz yetkili satış noktalarımız
          </p>
        </div>
      </div>

      <div className="pedizone-container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Dealers List */}
          <div className="lg:col-span-1" style={{ zIndex: 10 }}>
            <DealerApplicationForm />
            <div className="h-8"></div>
            <Card className="sticky top-[90px]">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-red-600">
                  Satış Noktaları ({dealers.length})
                </h2>
                <div className="space-y-4 max-h-[600px] overflow-y-auto">
                  {dealers.map((dealer) => (
                    <div
                      key={dealer.id}
                      onClick={() => handleDealerClick(dealer)}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                        selectedDealer?.id === dealer.id
                          ? 'border-red-600 bg-red-50'
                          : 'border-gray-200 hover:border-red-300 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-start">
                        <MapPin className="w-5 h-5 text-red-600 mt-1 mr-3 flex-shrink-0" />
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-gray-900 mb-1">
                            {dealer.name}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">
                            <span className="font-semibold">{dealer.city}</span>
                          </p>
                          <p className="text-sm text-gray-700 mb-2">
                            {dealer.address}
                          </p>
                          <div className="flex items-center text-sm text-gray-600 mb-1">
                            <Phone className="w-4 h-4 mr-2" />
                            <a href={`tel:${dealer.phone}`} className="hover:text-red-600">
                              {dealer.phone}
                            </a>
                          </div>
                          {dealer.email && (
                            <div className="flex items-center text-sm text-gray-600">
                              <Mail className="w-4 h-4 mr-2" />
                              <a href={`mailto:${dealer.email}`} className="hover:text-red-600">
                                {dealer.email}
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-0">
                <div className="h-[700px] rounded-lg overflow-hidden">
                  <MapContainer
                    center={turkeyCenter}
                    zoom={defaultZoom}
                    scrollWheelZoom={true}
                    className="h-full w-full"
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {dealers.map((dealer) => (
                      <Marker
                        key={dealer.id}
                        position={[dealer.lat, dealer.lng]}
                        icon={redIcon}
                        eventHandlers={{
                          click: () => handleDealerClick(dealer),
                        }}
                      >
                        <Popup>
                          <div className="p-2 min-w-[250px]">
                            <h3 className="font-bold text-lg text-red-600 mb-2">
                              {dealer.name}
                            </h3>
                            <p className="text-sm font-semibold text-gray-800 mb-2">
                              {dealer.city}
                            </p>
                            <p className="text-sm text-gray-700 mb-3">
                              {dealer.address}
                            </p>
                            <div className="space-y-2 mb-3">
                              <div className="flex items-center text-sm text-gray-600">
                                <Phone className="w-4 h-4 mr-2" />
                                <a href={`tel:${dealer.phone}`} className="hover:text-red-600">
                                  {dealer.phone}
                                </a>
                              </div>
                              {dealer.email && (
                                <div className="flex items-center text-sm text-gray-600">
                                  <Mail className="w-4 h-4 mr-2" />
                                  <a href={`mailto:${dealer.email}`} className="hover:text-red-600">
                                    {dealer.email}
                                  </a>
                                </div>
                              )}
                            </div>
                            <Button
                              onClick={() => openGoogleMaps(dealer.lat, dealer.lng)}
                              className="w-full bg-red-600 hover:bg-red-700 text-white"
                              size="sm"
                            >
                              <Navigation className="w-4 h-4 mr-2" />
                              Yol Tarifi Al
                            </Button>
                          </div>
                        </Popup>
                      </Marker>
                    ))}
                  </MapContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Instructions Section */}
        <div className="mt-12 bg-red-50 border border-red-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            💡 Nasıl Kullanırım?
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-red-600 mr-2">•</span>
              <span>Harita üzerindeki <strong className="text-red-600">kırmızı işaretlere</strong> tıklayarak bayi bilgilerini görün</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2">•</span>
              <span>Sol taraftaki listeden bayileri seçerek haritada konumlarını görebilirsiniz</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2">•</span>
              <span><strong>"Yol Tarifi Al"</strong> butonuna tıklayarak Google Maps'te yol tarifini alabilirsiniz</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2">•</span>
              <span>Telefon numaralarına dokunarak direkt arama yapabilirsiniz</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    <Footer />
    </>
  )
}

export default DealersMap
