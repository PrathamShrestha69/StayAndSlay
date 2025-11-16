import React from 'react'

const venue = 'Himalayan Restro and Events Pvt Ltd'
const eventDate = 'Dec 1, 2025'
const location = 'Hattisar, Kathmandu, Nepal'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-base-200 text-center py-4">
      <div className="max-w-6xl mx-auto text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-2 px-4">
        <div>© {year} Stay & Saly — All rights reserved.</div>

        <div>
          <strong className="mr-1">Venue:</strong>
          <span>{venue}</span>
        </div>

        <div>
          <strong className="mr-1">Date:</strong>
          <span>{eventDate}</span>
          <span className="mx-2">•</span>
          <strong className="mr-1">Location:</strong>
          <span>{location}</span>
        </div>
      </div>

      {/* Live map embed (hidden on very small screens) */}
      <div className="max-w-6xl mx-auto px-4 mt-4 block">
        <div className="w-full h-48 sm:h-56 overflow-hidden rounded-lg border">
          <iframe
            title="Event location map"
            src="https://www.google.com/maps?q=Himalayan+Restro+and+Events+Pvt+Ltd+Hattisar+Kathmandu&output=embed"
            width="100%"
            height="100%"
            style={{border:0}}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="text-sm text-gray-600 mt-2">See you all there!</div>
      </div>
    </footer>
  )
}

export default Footer