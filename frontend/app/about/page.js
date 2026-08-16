export default function AboutPage() {
  return (
    <main className="page-shell inner-page">
      <div className="container">
        <header className="page-header">
          <span className="eyebrow">О нас</span>
          <h1>Мы строим цифровые решения для роста вашего бизнеса.</h1>
          <p>
            Наша команда помогает компаниям, стартапам и экспертам создавать быстрые,
            современные и масштабируемые веб-системы.
          </p>
        </header>

        <section className="info-grid two-col">
          <div className="card">
            <h3>Наша миссия</h3>
            <p>
              Мы объединяем дизайн, backend-логики и AI-инструменты, чтобы дать вашему проекту
              конкурентное преимущество и понятную архитектуру развития.
            </p>
          </div>

          <div className="card">
            <h3>Наш подход</h3>
            <p>
              Сначала определяем задачу, затем строим понятный стек, после чего запускаем MVP и
              масштабируем продукт без хаоса в коде.
            </p>
          </div>
        </section>

        <section className="section">
          <h2>Почему клиенты выбирают нас</h2>
          <div className="card-grid three-col">
            <article className="card">
              <span className="tag">Fast</span>
              <h3>Быстрая разработка</h3>
              <p>Четкий workflow и MVP-ориентированный подход сокращают время запуска.</p>
            </article>
            <article className="card">
              <span className="tag">Clear</span>
              <h3>Понятная архитектура</h3>
              <p>Frontend, backend и база данных строятся логично и без лишних зависимостей.</p>
            </article>
            <article className="card">
              <span className="tag">AI</span>
              <h3>AI-поддержка</h3>
              <p>Интеграции с AI и автоматизацией помогают ускорять процессы и улучшать UX.</p>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
