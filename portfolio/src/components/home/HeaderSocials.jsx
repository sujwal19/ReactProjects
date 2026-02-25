import {
  Dribbble,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a href="instagram.com" className="home__social-link" target="_blank">
        <Instagram />
      </a>
      <a href="x.com" className="home__social-link" target="_blank">
        <Twitter />
      </a>
      <a href="linkedin.com" className="home__social-link" target="_blank">
        <Linkedin />
      </a>

      <a href="github.com" className="home__social-link" target="_blank">
        <Facebook />
      </a>
      <a href="github.com" className="home__social-link" target="_blank">
        <Github />
      </a>
    </div>
  );
};

export default HeaderSocials;
