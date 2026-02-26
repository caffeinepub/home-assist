import { Home, Grid3X3 } from 'lucide-react';

export default function SplashScreen() {
  const currentYear = new Date().getFullYear();
  const appId = encodeURIComponent(window.location.hostname || 'home-assist');

  return (
    <div className="splash-root">
      {/* Main content */}
      <main className="splash-content">
        {/* Branding */}
        <header className="splash-header">
          <div className="splash-logo-ring">
            <Home className="splash-logo-icon" strokeWidth={1.5} />
          </div>
          <h1 className="splash-title">Home Assist</h1>
          <p className="splash-subtitle">Your trusted companion for home &amp; emergency services</p>
        </header>

        {/* Buttons */}
        <section className="splash-buttons" aria-label="Main actions">
          {/* Primary — Take Me Home */}
          <button className="btn-primary-home" type="button">
            <Home className="btn-icon-lg" strokeWidth={2} />
            <span>Take Me Home</span>
          </button>

          {/* Secondary row */}
          <div className="btn-secondary-row">
            {/* SOS */}
            <button className="btn-sos" type="button" aria-label="SOS Emergency">
              <span className="btn-emoji" role="img" aria-label="phone">📞</span>
              <span>SOS</span>
            </button>

            {/* Other Services */}
            <button className="btn-services" type="button">
              <Grid3X3 className="btn-icon-sm" strokeWidth={1.8} />
              <span>Other Services</span>
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="splash-footer">
        <p>
          &copy; {currentYear} Home Assist &mdash; Built with{' '}
          <span className="footer-heart" aria-label="love">♥</span>{' '}
          using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
