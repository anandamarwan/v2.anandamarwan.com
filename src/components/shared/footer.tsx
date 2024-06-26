export function Footer() {
  return (
    <footer className="bg-slate-200 dark:bg-slate-800 w-full mt-20 py-20 space-y-4">
      <div className="flex justify-center">
        <h1 className="text-3xl text-white">My Links</h1>
      </div>
      <nav className="flex flex-col space-y-4">
        <ul className="flex flex-row justify-center gap-20 items-center">
          <li>
            <a href="https://github.com/anandamarwan">
              <img
                className="w-10 h-10  hover:bg-blue-300"
                src="/images/icon-github.svg"
                alt="Github"
              />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/anandamarwan/">
              <img
                className="w-10 h-10  hover:bg-blue-300"
                src="/images/icon-linkedin.svg"
                alt="LinkedIn"
              />
            </a>
          </li>
          <li className=" hover:bg-blue-300">
            <a href="https://www.instagram.com/anandamarwanayaputra/">
              <img
                className="w-10 h-10 "
                src="/images/icon-instagram.svg"
                alt="Instagram"
              />
            </a>
          </li>
          <li>
            <a href="https://t.me/anandamarwan">
              <img
                className="w-10 h-10  hover:bg-blue-300"
                src="/images/icon-telegram.svg"
                alt="Telegram"
              />
            </a>
          </li>
        </ul>

        <div className="flex justify-center gap-4">
          <p className="text-slate-400">
            Copyright ©2024 Ananda Marwanaya Putra
          </p>

          <p className="text-slate-400">Made with ❤️</p>
        </div>
      </nav>
    </footer>
  );
}
