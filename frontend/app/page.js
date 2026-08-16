'use client';

import { useEffect, useState } from 'react';

export default function HomePage() {
  const [apiStatus, setApiStatus] = useState('Проверяем...');

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

    fetch(`${apiUrl}/api/health/`)
      .then((res) => res.ok ? res.json() : Promise.reject(new Error('bad response')))
      .then((data) => setApiStatus(data.status === 'ok' ? 'Backend онлайн' : 'Backend отвечает'))
      .catch(() => setApiStatus('Backend недоступен'));
  }, []);

  return (
    <main className="page-shell">
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Next.js + Django + PostgreSQL</span>
            <h1>Сайт под ваш бизнес, который работает быстро и растет вместе с вами.</h1>
            <p className="lead">
              Мы создаем современные веб-платформы на стеке Next.js, Django и PostgreSQL.
              Быстрый frontend, мощный backend, надежная база данных и удобный деплой.
            </p>
            <div className="cta-row">
              <a href="#services" className="primary-btn">Посмотреть услуги</a>
              <a href="#stack" className="secondary-btn">Технологии</a>
            </div>
          </div>

          <div className="panel">
            <div className="panel-item">
              <span>Frontend</span>
              <strong>Next.js</strong>
            </div>
            <div className="panel-item">
              <span>Backend</span>
              <strong>Django API</strong>
            </div>
            <div className="panel-item">
              <span>Database</span>
              <strong>PostgreSQL</strong>
            </div>
            <div className="panel-item">
              <span>API status</span>
              <strong>{apiStatus}</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="container section">
        <h2>Что входит в проект</h2>
        <div className="card-grid">
          <article className="card">
            <span className="tag">Landing</span>
            <h3>Главная страница</h3>
            <p>Продающая посадочная страница с сильным UX, блоками услуг и CTA.</p>
          </article>
          <article className="card">
            <span className="tag">Admin</span>
            <h3>Панель управления</h3>
            <p>Управление контентом, заказами, пользователями и новостями.</p>
          </article>
          <article className="card">
            <span className="tag">API</span>
            <h3>REST API</h3>
            <p>Надежная связка frontend-backend для работы с данными и логикой.</p>
          </article>
        </div>
      </section>

      <section id="stack" className="container section">
        <h2>Технологический стек</h2>
        <div className="stack-list">
          <div>Next.js</div>
          <div>Django</div>
          <div>PostgreSQL</div>
          <div>Vercel</div>
          <div>Render</div>
          <div>GitHub</div>
        </div>
      </section>
    </main>
  );
}
