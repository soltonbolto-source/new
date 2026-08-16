'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
      const response = await fetch(`${apiUrl}/api/contacts/submit/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Ошибка отправки');
      }

      setStatus('Сообщение успешно отправлено!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('Не удалось отправить сообщение. Попробуйте позже.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="page-shell inner-page">
      <div className="container">
        <header className="page-header">
          <span className="eyebrow">Контакты</span>
          <h1>Готовы обсудить ваш проект?</h1>
          <p>
            Напишите нам, и мы быстро поможем понять, какой продукт лучше всего подходит для вашей задачи.
          </p>
        </header>

        <section className="contact-box">
          <div className="contact-info">
            <div>
              <strong>Email</strong>
              <p>hello@ai-studio.example</p>
            </div>
            <div>
              <strong>Телефон</strong>
              <p>+996 555 123 456</p>
            </div>
            <div>
              <strong>Город</strong>
              <p>Бишкек, Кыргызстан</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Имя" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
            <textarea name="message" rows="5" value={formData.message} onChange={handleChange} placeholder="Ваш проект или идея" required />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
            </button>
            {status && <p className="form-status">{status}</p>}
          </form>
        </section>
      </div>
    </main>
  );
}
