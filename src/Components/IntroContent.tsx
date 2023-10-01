
export default function HomeContent() {
    return (
        <>
        <div className="home-info">
        <h1 className="title-font-light d-none d-md-block">DANIEL CARNS</h1>
        <div className="subtitle-font-light display-1 mx-4">
          SOFTWARE ENGINEER, FULL STACK & MOBILE
        </div>
        <div>
          <a
            rel="noopener"
            data-umami-event="github-social-hero"
            href="https://github.com/DanielCarns"
            className="l1"
          >
            <svg className="social-link" role="img" viewBox="0 0 24 24">
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
          <a
            rel="noopener"
            data-umami-event="strava-social-hero"
            href="https://www.strava.com/athletes/107364581"
            className="l2"
          >
            <svg className="social-link" role="img" viewBox="0 0 24 24">
              <title>Strava</title>
              <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
            </svg>
          </a>
          <a
            rel="noopener"
            data-umami-event="mail-social-hero"
            href="mailto:carns.daniel1@gmail.com"
            className="l3"
            title="carns.daniel1@gmail.com"
          >
            <svg className="social-link" role="img" viewBox="0 0 24 24">
              <title>E-mail</title>
              <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z" />
            </svg>
          </a>
          <a
            rel="noopener"
            href="https://www.linkedin.com/in/daniel-carns-7b2b60a4/"
            className="l4"
            title="LinkedIn"
          >
            <svg className="social-link" role="img" viewBox="0 0 24 24">
              <title>LinkedIn</title>
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
        </div>
        </>
    );
}