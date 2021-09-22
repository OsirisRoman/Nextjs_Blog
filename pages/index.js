import Link from "next/link";

function HomePage() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>My Blog</h1>
      </main>
    </>
  );
}

export default HomePage;
