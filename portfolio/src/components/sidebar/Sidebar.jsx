import {
  BookOpen,
  BriefcaseBusiness,
  ContactRound,
  FolderGit2,
  House,
  NotepadText,
  UserRoundCheck,
} from "lucide-react";
import logo from "../../assets/logo.svg";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <aside className="aside">
      <a href="#home" className="nav__logo">
        <img src={logo} alt="erro" />
      </a>

      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <House />
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <UserRoundCheck />
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
                <BriefcaseBusiness />
              </a>
            </li>
            <li className="nav__item">
              <a href="#resume" className="nav__link">
                <NotepadText />
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <FolderGit2 />
              </a>
            </li>
            <li className="nav__item">
              <a href="#blog" className="nav__link">
                <BookOpen />
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <ContactRound />
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="nav__footer">
        <span className="copyright">&copy; 2024 - 2026.</span>
      </div>
    </aside>
  );
};

export default Sidebar;
