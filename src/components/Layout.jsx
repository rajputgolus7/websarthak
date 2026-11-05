import React, { useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { ArrowUpRight, Menu, X, Instagram, Linkedin, Youtube } from 'lucide-react'
import Logo from './Logo'

// const links = [['Work', '/work'], ['Services', '/services'], ['About', '/about'], ['Pricing', '/pricing'], ['Contact', '/contact']]
const links = [['Services', '/services'], ['About', '/about'], ['Pricing', '/pricing'], ['Contact', '/contact']]
export function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  React.useEffect(() => setOpen(false), [location])
  return <header className="header">
    <div className="nav-wrap">
      <Logo />
      <nav className={open ? 'nav-links open' : 'nav-links'}>
        {links.map(([name, path]) => <NavLink key={path} to={path} className={({ isActive }) => isActive ? 'active' : ''}>{name}</NavLink>)}
        <Link className="nav-mobile-cta" to="/contact">Start a Project <ArrowUpRight size={15} /></Link>
      </nav>
      <Link className="button button-lime nav-cta" to="/contact">Start a Project <ArrowUpRight size={15} /></Link>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
    </div>
  </header>
}
export function Footer() {
  return <footer className="footer">
    <div className="footer-top">
      <div><Logo /><p className="footer-blurb">A creative digital agency crafting websites, content and brands that make an impact.</p></div>
      <div className="footer-col"><span className="eyebrow">EXPLORE</span><Link to="/">Home</Link><Link to="/services">Services</Link><Link to="/work">Selected work</Link><Link to="/about">About us</Link><Link to="/pricing">Pricing</Link></div>
      <div className="footer-col"><span className="eyebrow">SERVICES</span><Link to="/services/web-development">Web development</Link><Link to="/services/social-media">Social media</Link><Link to="/services">Graphic design</Link></div>
      <div className="footer-contact"><span className="eyebrow">PHONE / WHATSAPP</span><span><p><b>Golu Kumar Singh : </b><a href="https://wa.me/6299768128" target="_blank" rel="noreferrer">+91 62997 68128</a></p><p><b>Amit Sandhu : </b><a href="https://wa.me/9463645925" target="_blank" rel="noreferrer">+91 94636 45925</a></p></span><span style={{ marginTop: "-15px" }}></span><p style={{ marginTop: "-15px" }}>Punjab, India · Working worldwide</p></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} WebSarthak. All rights reserved.</span><span>Independent creative studio <b>✳</b></span><a href="#top">Back to top ↑</a></div>
  </footer>
}
export function Layout({ children }) {
  return <><Header /><main>{children}</main><Footer /></>
}