import React from "react"
import { Link } from "gatsby" 
import Header from "../components/header"
import Footer from "../components/footer"

export default () => (
  <div style={{ color: `purple` }}>
    <Link to="/">Home </Link>
    <Link to="/about/">About </Link>
    <Link to="/contact">Contact </Link>
    <Header headerText="About Gatsby" />
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />  <br/>
    <Footer footerText="A learning site by Brigzzy"/>
    </div>
)