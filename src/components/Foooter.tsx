export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} OrangeCode. All rights reserved.
        </p>
        <ul className="flex gap-4 mt-4 md:mt-0">
          <li>
            <a href="#" className="hover:text-brand-orange">
              Facebook
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-brand-orange">
              Instagram
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-brand-orange">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
