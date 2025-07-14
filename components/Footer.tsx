import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold">MCPS</h3>
            <p>Discover opportunities to serve.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul>
              <li><a href="/about" className="">Explore</a></li>
              <li><a href="/about" className="">About</a></li>
              <li><a href="/careers" className="">Careers</a></li>
              <li><a href="/contact" className="">Contact</a></li>
              <li><a href="/contact" className="">How to Join</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Contact</h3>
            <p>Email: info@mcps.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
        <p className="text-center mt-8">&copy; 2025 MCPS. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer