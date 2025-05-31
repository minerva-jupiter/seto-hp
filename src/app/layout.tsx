import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "瀬戸和希のホームページ",
  description: "Created by Tetsu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return ( <>
  <html lang="jp" className="h-100">
    <body>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">瀬戸和希のホームページ</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.staffsearch.shimane-u.ac.jp/kenkyu/search/3d57492f13a5ff11d57e2a307cd68dcd/detail">島根大学教員情報検索</a>
                </li>
                <li className="nav-item">
                  <a href="https://www.ds.shimane-u.ac.jp/" className="nav-link">島根大学数理・データサイエンス教育研究センター</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main >
        <div className="container">
          {children}
        </div>
      </main>
    </body>
  </html>
  </>
  );
}
