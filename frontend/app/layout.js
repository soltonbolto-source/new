import './globals.css';

export const metadata = {
  metadataBase: new URL('https://ai-studio.example.com'),
  title: {
    default: 'AI Studio | Разработка сайтов и цифровых продуктов',
    template: '%s | AI Studio',
  },
  description: 'AI Studio создает современные сайты, маркетплейсы, CRM, лендинги и AI-интеграции для бизнеса.',
  keywords: ['сайты', 'разработка сайтов', 'Django', 'Next.js', 'AI интеграции', 'CRM', 'лендинг', 'корпоративный сайт'],
  openGraph: {
    title: 'AI Studio | Разработка сайтов и цифровых продуктов',
    description: 'Сайты, CRM, API, AI-интеграции и digital-платформы для бизнеса.',
    url: 'https://ai-studio.example.com',
    siteName: 'AI Studio',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <header className="site-header">
          <div className="container nav-bar">
            <a href="/" className="brand"><span>AI</span> Studio</a>
            <nav className="nav-links">
              <a href="/">Главная</a>
              <a href="/about">О нас</a>
              <a href="/services">Услуги</a>
              <a href="/contact">Контакты</a>
            </nav>
            <a href="/contact" className="primary-btn small-btn">Связаться</a>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
