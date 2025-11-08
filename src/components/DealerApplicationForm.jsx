import React, { useState } from 'react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

const DealerApplicationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Netlify Forms requires a POST request to the form's action URL
    // The form data is collected automatically by Netlify when the form has the 'data-netlify="true"' attribute
    const form = e.target
    const formData = new FormData(form)
    
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      })
      setIsSubmitted(true)
    } catch (error) {
      console.error("Form submission error:", error)
      alert("Başvuru gönderilirken bir hata oluştu. Lütfen tekrar deneyin.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-xl mx-auto">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Başvurunuz Alındı!</h2>
          <p className="text-gray-700">
            Bayilik başvurunuz başarıyla alınmıştır. En kısa sürede sizinle iletişime geçilecektir. İlginiz için teşekkür ederiz.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-xl mx-auto">
      <CardContent className="p-8">
        <h2 className="text-2xl font-bold text-red-600 mb-6">Bayilik Başvuru Formu</h2>
        <form 
          name="dealer-application" 
          method="POST" 
          data-netlify="true" 
          onSubmit={handleSubmit} 
          className="space-y-4"
        >
          {/* Netlify requires a hidden input for form identification */}
          <input type="hidden" name="form-name" value="dealer-application" />

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Ad Soyad / Firma Adı
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
              placeholder="Adınız veya Firma Adınız"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              E-posta Adresi
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
              placeholder="ornek@mail.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Telefon Numarası
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
              placeholder="+90 5xx xxx xx xx"
            />
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
              Bulunduğunuz Şehir
            </label>
            <input
              type="text"
              id="city"
              name="city"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
              placeholder="Örn: Ankara"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Ek Bilgi / Mesajınız
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
              placeholder="Neden bayimiz olmak istediğinizi kısaca açıklayın..."
            ></textarea>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2.5"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Gönderiliyor...' : 'Başvuruyu Gönder'}
            {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5" />}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default DealerApplicationForm
