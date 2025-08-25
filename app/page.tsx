export default function Page() {
  return (
    <div>
      <div
        className="container"
      >
        <main>
          <h1
            className="title"
          >
            Welcome to 
            <a
              href="https://nextjs.org"
            >
              Next.js!
            </a>
          </h1>
          <p
            className="description"
          >
            Get started by editing 
            <code>
              pages/index.js
            </code>
          </p>
          <div
            className="grid"
          >
            <a
              className="card"
              href="https://nextjs.org/docs"
            >
              <h3>
                Documentation →
              </h3>
              <p>
                Find in-depth information about Next.js features and API.
              </p>
            </a>
            <a
              className="card"
              href="https://nextjs.org/learn"
            >
              <h3>
                Learn →
              </h3>
              <p>
                Learn about Next.js in an interactive course with quizzes!
              </p>
            </a>
            <a
              className="card"
              href="https://github.com/vercel/next.js/tree/canary/examples"
            >
              <h3>
                Examples →
              </h3>
              <p>
                Discover and deploy boilerplate example Next.js projects.
              </p>
            </a>
            <a
              className="card"
              href="https://vercel.com/new"
            >
              <h3>
                Deploy →
              </h3>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>
        <footer
          className="footer"
        >
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            rel="noopener noreferrer"
            target="_blank"
          >
            Powered by
            
            <span
              className="logo"
            >
              <img
                alt="Vercel Logo"
                data-nimg="1"
                decoding="async"
                height="16"
                loading="lazy"
                src="/vercel.svg"
                style={{ color: "transparent" }}
                width="72"
              />
            </span>
          </a>
        </footer>
      </div>
    </div>
  );
}
