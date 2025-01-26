import { useDarkMode } from "../context/DarkModeContext";

const Footer = () => {
  const { darkMode } = useDarkMode();

  return (
    <footer className={`footer ${darkMode ? "bg-dark text-light" : "bg-light text-dark"} mt-5`}>
      <div className="container text-center py-3">
        <p>&copy; 2025 Personal Finance Tracker. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
