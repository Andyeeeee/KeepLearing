import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h2>RootLayout</h2>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">about</NavLink>
          <NavLink to="help">help</NavLink>
          <NavLink to="qq">qq</NavLink>
          <NavLink to="careers">Careers</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}