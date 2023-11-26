import Image from "next/image";

const NavBar = () => {
  return (
    <div className="border-2">
      <div className="border-2 bg-red">
        <snap>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"
            alt="logo"
            height={50}
            width={50}
          />
        </snap>
        Tailwind_CSS_Logo
      </div>

      <nav>
        <ul>
          <li>Home</li>
          <li>about</li>
          <li>contact</li>
          <li>blogs</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
