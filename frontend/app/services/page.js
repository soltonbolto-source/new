export default function ServicesPage() {
  return (
    <main className="page-shell inner-page">
      <div className="container">
        <header className="page-header">
          <span className="eyebrow">Услуги</span>
          <h1>Разработка цифровых продуктов под ваш бизнес.</h1>
          <p>
            Мы создаем сайты, платформы, системы управления и AI-поддержку под конкретные задачи.
          </p>
        </header>

        <section className="card-grid three-col">
          <article className="card">
            <span className="tag">Web</span>
            <h3>Сайты и лендинги</h3>
            <p>Красивые, быстрые и продающие посадочные страницы для бизнеса и личного бренда.</p>
          </article>
          <article className="card">
            <span className="tag">Platform</span>
            <h3>Платформы и панели</h3>
            <p>Админ-панели, CRM, системы данных и внутренние веб-приложения для команд.</p>
          </article>
          <article className="card">
            <span className="tag">AI</span>
            <h3>AI интеграции</h3>
            <p>Автоматизация процессов, чат-помощники, генерация контента и smart workflows.</p>
          </article>
        </section>
      </div>
    </main>
  );
}
