"use client";
import logo from "/logo/logo.png";
import cart from "/images/helpers/cart.png";
import { Navbar } from "flowbite-react";

export default function CustomNavbar() {
  return (
    <nav className="">
      <Navbar rounded className=" md:px-20  sm:py-10 lg:py-20 bg-[#F4F7F8] ">
        <Navbar.Brand className="animate-jump ">
          <img
            src={logo}
            className=" mr-3 h-15 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-3xl font-semibold ">
            Salarti.
          </span>
        </Navbar.Brand>

        <Navbar.Collapse className="[&>*]:text-xl ">
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Collection</Navbar.Link>
          <Navbar.Link href="#">Shop</Navbar.Link>
          <Navbar.Link href="#">Product</Navbar.Link>
        </Navbar.Collapse>
        <div className="flex md:order-2">
          <img
            src={cart}
            alt="cart icon"
            className="hidden md:block md:object-scale-down"
          />
        </div>
        <Navbar.Toggle />
      </Navbar>
    </nav>
  );
}
