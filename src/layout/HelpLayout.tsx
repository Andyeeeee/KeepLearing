import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="help-layout">


      <h1>Helap-LAYOUT</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, est! Hic, ullam quasi? Ullam corporis illum consequuntur. Aut, earum corporis, deserunt voluptas tempora sunt laborum sequi quibusdam mollitia, minima eveniet?</p>

      <nav>

        <NavLink to="faq">faq</NavLink> <br />
        <NavLink to='contact' >Contact us</NavLink>
      </nav>


      <Outlet />


    </div>
  )
}