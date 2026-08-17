'use client';

import { useState } from 'react';

const translations = {
  ky: {
    topText: 'Сокулук району, Жаңы-Жер айылы, Жаш Гвардия №81В',
    nav: ['Биз жөнүндө', 'Жетишкендиктер', 'Окуу программасы', 'Мугалимдер', 'Жаңылыктар', 'Жарыялар', 'Фото/Видео', 'Пикир / Кайрылуу', 'Байланыш'],
    heroTitle: 'Равза медресеси',
    heroSubtitle: '2000-жылдан бери ислам илимдерин үйрөтүп келе жаткан медресе',
    heroText: 'Куран жаттоо, хадис, фикх, акыйда, ислам тарыхы, адаб жана араб тили боюнча билим берүү, тарбия жана акылият.',
    ctaPrimary: 'Медресе жөнүндө',
    ctaSecondary: 'Кайрылуу жазуу',
    aboutTitle: 'Биз жөнүндө',
    aboutText: '«Равза медресеси» 2000-жылдан бери ислам илимдерин үйрөтүп келе жаткан билим берүү мекемеси.',
    achievementsTitle: 'Жетишкендиктер',
    achievements: [
      { value: '26+', label: 'Жылдык тажрыйба' },
      { value: '500+', label: 'Бүтүрүүчү' },
      { value: '20+', label: 'Мугалим' },
      { value: '95%', label: 'Ийгиликтүү жыйынтык' },
    ],
    curriculumTitle: 'Окуу программасы',
    curriculum: ['Куран жаттоо', 'Хадис', 'Фикх', 'Акыйда', 'Ислам тарыхы', 'Адаб', 'Араб тили'],
    teachersTitle: 'Мугалимдер',
    teachers: [
      { name: 'Исаев Сабит', role: 'Куран устазы' },
      { name: 'Каландаров Ускенбай Косимович', role: 'Директор' },
    ],
    admissionsTitle: 'Кабыл алуу шарттары',
    admissions: ['9-класстын күбөлүгү болушу керек.', 'Курандан 1 пара жаттаган болуусу керек.', 'Же «Равза» медресесинин жайкы Куран лагеринин экзаменинен өткөн болушу керек.'],
    docsTitle: 'Талап кылынган документтер',
    docs: ['Дело үчүн тышкы папка', 'Мүдүрдүн атына арыз', '№086 медициналык маалымкат (флюро сүрөтү сөзсүз)', 'Күбөлүктүн же паспорттун көчүрмөсү', '3×4 өлчөмүндөгү 4 даана сүрөт', 'Жашаган жеринен маалымкат', 'Ата-энесинин паспорт көчүрмөлөрү', '9-класстын күбөлүгүнүн көчүрмөсү', 'Класс жетекчисинен мүнөздөмө', 'Имамдан сунуштама', 'ОМС (паспорту жок болсо)'],
    newsTitle: 'Жаңылыктар',
    news: [
      { date: '2026', title: 'Жаңы окуу жылы', text: 'Кабыл алуу жана окуу жылы башталууда.' },
      { date: '2026', title: 'Диний иш-чаралар', text: 'Медреседе диний билим берүү жана жамааттык иш-чаралар.' },
      { date: '2026', title: 'Медреседеги жаңылыктар', text: 'Окууга даярдык, жазуу, экзамендер жана семинарлар.' },
    ],
    announcementsTitle: 'Жарыялар',
    announcements: [
      { date: '15.08.2026', title: 'Кабыл алуу даталары', text: 'Кабыл алуу 2026-жылдын август-октябрь айларында өтөт.' },
      { date: '01.09.2026', title: 'Жаңы окуу программалары', text: 'Жаңы жылда 4 жылдык окуу программасы ишке кирет.' },
    ],
    galleryTitle: 'Фото / Видео',
    galleryItems: ['Медресенин имараты', 'Окуучулар', 'Сабактар', 'Иш-чаралар'],
    formTitle: 'Пикир / Кайрылуу жазуу',
    formFields: { name: 'Аты-жөнү', contact: 'Байланыш', category: 'Категория', subject: 'Тема', message: 'Билдирүү тексти' },
    contactTitle: 'Байланыш',
    contactText: 'Суроо, пикир, арыз же сунуш бар болсо, жазып коюңуз.',
    formSuccess: 'Билдирүү ийгиликтүү жөнөтүлдү.',
    formError: 'Билдирүү жөнөтүү учурунда ката кетти. Кайра аракет кылып көрүңүз.',
  },
  ru: {
    topText: 'Сокулукский район, село Жаңы-Жер, ул. Жаш Гвардия №81В',
    nav: ['О нас', 'Достижения', 'Учебная программа', 'Преподаватели', 'Новости', 'Объявления', 'Фото/Видео', 'Отзывы / Обращения', 'Контакты'],
    heroTitle: 'Равза медресе',
    heroSubtitle: 'Медресе, которое более 2000 лет развивает исламское образование',
    heroText: 'Обучение Корана, хадисов, фикха, акыды, истории ислама, адаба и арабского языка в духе знаний и нравственности.',
    ctaPrimary: 'О медресе',
    ctaSecondary: 'Написать обращение',
    aboutTitle: 'О нас',
    aboutText: '«Равза медресе» — образовательное учреждение, которое более 2000 лет передает исламские знания.',
    achievementsTitle: 'Достижения',
    achievements: [
      { value: '26+', label: 'Лет опыта' },
      { value: '500+', label: 'Выпускников' },
      { value: '20+', label: 'Преподавателей' },
      { value: '95%', label: 'Успешных результатов' },
    ],
    curriculumTitle: 'Учебная программа',
    curriculum: ['Куран', 'Хадис', 'Фикх', 'Акыда', 'История ислама', 'Адаб', 'Арабский язык'],
    teachersTitle: 'Преподаватели',
    teachers: [
      { name: 'Исаев Сабит', role: 'Учитель Корана' },
      { name: 'Каландаров Ускенбай Косимович', role: 'Директор' },
    ],
    admissionsTitle: 'Условия приёма',
    admissions: ['Наличие аттестата о 9 классе.', 'Необходимо выучить 1 джуз Корана.', 'Или пройти экзамен летнего лагеря «Равза» медресе.'],
    docsTitle: 'Необходимые документы',
    docs: ['Внешняя папка для дела', 'Заявление на имя директора', 'Медицинская справка №086', 'Копия аттестата/паспорта', '4 фотографии 3×4', 'Справка о месте жительства', 'Копии паспортов родителей', 'Копия аттестата 9 класса', 'Характеристика от классного руководителя', 'Рекомендация имама', 'ОМС (если нет паспорта)'],
    newsTitle: 'Новости',
    news: [
      { date: '2026', title: 'Новый учебный год', text: 'Начало приёма и нового учебного года.' },
      { date: '2026', title: 'Религиозные мероприятия', text: 'Медресе проводит религиозные и общественные мероприятия.' },
      { date: '2026', title: 'Новости медресе', text: 'Подготовка к программе, экзаменам, семинарам и встречам.' },
    ],
    announcementsTitle: 'Объявления',
    announcements: [
      { date: '15.08.2026', title: 'Даты приёма', text: 'Приём документов будет проходить в августе-октябре 2026 года.' },
      { date: '01.09.2026', title: 'Новые учебные программы', text: 'В новом учебном году запущена 4-летняя программа.' },
    ],
    galleryTitle: 'Фото / Видео',
    galleryItems: ['Здание медресе', 'Учащиеся', 'Занятия', 'Мероприятия'],
    formTitle: 'Отзывы / Обращения',
    formFields: { name: 'Имя', contact: 'Контакт', category: 'Категория', subject: 'Тема', message: 'Текст обращения' },
    contactTitle: 'Контакты',
    contactText: 'Если у вас есть вопрос, отзыв или обращение, напишите нам.',
    formSuccess: 'Сообщение успешно отправлено.',
    formError: 'Не удалось отправить. Попробуйте позже.',
  },
  en: {
    topText: 'Sokuluk district, Jany-Jer village, Zhash Gvardiya No. 81V',
    nav: ['About', 'Achievements', 'Curriculum', 'Teachers', 'News', 'Announcements', 'Gallery', 'Feedback', 'Contact'],
    heroTitle: 'Ravza Madrasa',
    heroSubtitle: 'A madrasa serving Islamic education since 2000',
    heroText: 'Learning Quran recitation, Hadith, Fiqh, Aqidah, Islamic history, Adab and Arabic language guided by knowledge and character.',
    ctaPrimary: 'About the madrasa',
    ctaSecondary: 'Write an appeal',
    aboutTitle: 'About us',
    aboutText: 'Ravza Madrasa is an educational institution that has been delivering Islamic knowledge for more than 2000 years.',
    achievementsTitle: 'Achievements',
    achievements: [
      { value: '26+', label: 'Years of experience' },
      { value: '500+', label: 'Graduates' },
      { value: '20+', label: 'Teachers' },
      { value: '95%', label: 'Success rate' },
    ],
    curriculumTitle: 'Study program',
    curriculum: ['Quran recitation', 'Hadith', 'Fiqh', 'Aqidah', 'Islamic history', 'Adab', 'Arabic language'],
    teachersTitle: 'Teachers',
    teachers: [
      { name: 'Isaev Sabit', role: 'Quran teacher' },
      { name: 'Kalandarov Uskenbay Kosimovich', role: 'Director' },
    ],
    admissionsTitle: 'Admission requirements',
    admissions: ['A 9th grade certificate is required.', 'You must have memorized one para of the Quran.', 'Or pass the summer Quran camp exam of Ravza Madrasa.'],
    docsTitle: 'Required documents',
    docs: ['Folder for the file', 'Application addressed to the director', 'Medical certificate No. 086', 'Copy of passport or certificate', '4 photos 3×4', 'Proof of residence', 'Copies of parents passports', 'Copy of 9th grade certificate', 'Certificate from class teacher', 'Recommendation from imam', 'OMS (if no passport)'],
    newsTitle: 'News',
    news: [
      { date: '2026', title: 'New academic year', text: 'Admissions and the new study year are opening.' },
      { date: '2026', title: 'Religious events', text: 'The madrasa organizes religious and community activities.' },
      { date: '2026', title: 'Madrasa news', text: 'Program updates, tests and seminars are underway.' },
    ],
    announcementsTitle: 'Announcements',
    announcements: [
      { date: '15.08.2026', title: 'Admission dates', text: 'Admissions will take place between August and October 2026.' },
      { date: '01.09.2026', title: 'New academic programs', text: 'A new 4-year study program will start in the upcoming year.' },
    ],
    galleryTitle: 'Photo / Video',
    galleryItems: ['Madrasa building', 'Students', 'Classes', 'Events'],
    formTitle: 'Feedback / Appeal',
    formFields: { name: 'Full name', contact: 'Contact', category: 'Category', subject: 'Subject', message: 'Message' },
    contactTitle: 'Contact',
    contactText: 'If you have a question, suggestion or appeal, send us a message.',
    formSuccess: 'Your message was sent successfully.',
    formError: 'There was an error sending the message. Please try again.',
  },
  ar: {
    topText: 'منطقة سوكولوك، قرية جاني-جير، شارع جاش غفرديا رقم 81V',
    nav: ['من نحن', 'الإنجازات', 'البرنامج', 'المعلمون', 'الأخبار', 'الإعلانات', 'المعرض', 'التقييم', 'اتصل بنا'],
    heroTitle: 'مدرسة رافزا',
    heroSubtitle: 'مدرسة تقدم العلوم الإسلامية منذ عام 2000',
    heroText: 'تعلّم القرآن، الحديث، الفقه، العقيدة، التاريخ الإسلامي، الأدب واللغة العربية في إطار العلم والأخلاق.',
    ctaPrimary: 'عن المدرسة',
    ctaSecondary: 'اكتب رسالة',
    aboutTitle: 'من نحن',
    aboutText: 'مدرسة رافزا هي مؤسسة تعليمية تواصل تقديم العلوم الإسلامية منذ أكثر من 2000 سنة.',
    achievementsTitle: 'الإنجازات',
    achievements: [
      { value: '26+', label: 'سنوات الخبرة' },
      { value: '500+', label: 'خريجون' },
      { value: '20+', label: 'معلمون' },
      { value: '95%', label: 'نسبة النجاح' },
    ],
    curriculumTitle: 'البرنامج الدراسي',
    curriculum: ['حفظ القرآن', 'الحديث', 'الفقه', 'العقيدة', 'التاريخ الإسلامي', 'الأدب', 'اللغة العربية'],
    teachersTitle: 'المعلمون',
    teachers: [
      { name: 'إسایف سابیت', role: 'معلم القرآن' },
      { name: 'كالاندروف وسكنباي قاسموفيتش', role: 'المدير' },
    ],
    admissionsTitle: 'شروط القبول',
    admissions: ['يشترط الحصول على شهادة الصف التاسع.', 'يجب حفظ جزء من القرآن.', 'أو اجتياز امتحان معسكر القرآن الصيفي في مدرسة رافزا.'],
    docsTitle: 'المستندات المطلوبة',
    docs: ['مجلد خاص بالقضية', 'طلب موجه إلى المدير', 'شهادة طبية رقم 086', 'نسخة من الشهادة أو جواز السفر', '4 صور بحجم 3×4', 'إثبات الإقامة', 'نسخ جوازات الوالدين', 'نسخة شهادة الصف التاسع', 'توصية من المشرف', 'توصية إمام', 'التأمين الطبي (إن لم يكن لديك جواز سفر)'],
    newsTitle: 'الأخبار',
    news: [
      { date: '2026', title: 'سنة دراسية جديدة', text: 'بدء التقديم وبداية العام الدراسي الجديد.' },
      { date: '2026', title: 'أنشطة دينية', text: 'تنظم المدرسة أنشطة دينية ومجتمعية.' },
      { date: '2026', title: 'أخبار المدرسة', text: 'أخبار البرنامج والاختبارات والدورات.' },
    ],
    announcementsTitle: 'الإعلانات',
    announcements: [
      { date: '15.08.2026', title: 'مواعيد القبول', text: 'سيتم القبول خلال شهري أغسطس وأكتوبر 2026.' },
      { date: '01.09.2026', title: 'برامج جديدة', text: 'سيتم إطلاق برنامج دراسي جديد لمدة 4 سنوات.' },
    ],
    galleryTitle: 'الصورة / الفيديو',
    galleryItems: ['مبنى المدرسة', 'الطلاب', 'الدروس', 'الفعاليات'],
    formTitle: 'التقييم / الشكوى',
    formFields: { name: 'الاسم', contact: 'الاتصال', category: 'الفئة', subject: 'الموضوع', message: 'نص الرسالة' },
    contactTitle: 'اتصل بنا',
    contactText: 'إذا كان لديك سؤال أو اقتراح أو شكوى، أرسل رسالة.',
    formSuccess: 'تم إرسال الرسالة بنجاح.',
    formError: 'حدثت مشكلة أثناء الإرسال. حاول مرة أخرى.',
  },
};

const languages = [
  { code: 'ky', label: 'Кыргызча' },
  { code: 'ru', label: 'Русский' },
  { code: 'en', label: 'English' },
  { code: 'ar', label: 'العربية' },
];

const defaultForm = { name: '', contact: '', category: 'question', subject: '', message: '' };

export default function HomePage() {
  const [lang, setLang] = useState('ky');
  const [form, setForm] = useState(defaultForm);
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const copy = translations[lang];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
      const response = await fetch(`${apiUrl}/api/appeals/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error('submit failed');
      }

      setStatus(copy.formSuccess);
      setForm(defaultForm);
    } catch (error) {
      setStatus(copy.formError);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="top-contact-bar">
        <div className="container top-contact-bar-inner">
          <span>📍 {copy.topText}</span>
          <div className="top-contact-links">
            <a href="tel:+996702430744">📞 0702 43 07 44</a>
            <a href="mailto:info@ravza.kg">✉️ info@ravza.kg</a>
            <a href="https://maps.app.goo.gl/ZZScUbDPyc7Avqc9S" target="_blank" rel="noreferrer">🌐 Google Maps</a>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav-bar">
          <a href="/" className="brand">Равза</a>
          <nav className="nav-links">
            {copy.nav.map((item, index) => {
              const hrefs = ['#about', '#achievements', '#curriculum', '#teachers', '#news', '#announcements', '#gallery', '#appeal', '#contact'];
              return <a key={item} href={hrefs[index] || '#'}>{item}</a>;
            })}
          </nav>
          <div className="header-actions">
            <div className="language-switcher" aria-label="Language switcher">
              {languages.map((option) => (
                <button
                  key={option.code}
                  type="button"
                  className={lang === option.code ? 'active' : ''}
                  onClick={() => setLang(option.code)}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <a href="#appeal" className="primary-btn small-btn">{copy.ctaSecondary}</a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">{copy.heroSubtitle}</span>
              <h1>{copy.heroTitle}</h1>
              <p className="lead">{copy.heroText}</p>
              <div className="cta-row">
                <a href="#about" className="primary-btn">{copy.ctaPrimary}</a>
                <a href="#appeal" className="secondary-btn">{copy.ctaSecondary}</a>
              </div>
            </div>

            <div className="hero-panel">
              <div className="panel-card"><span>Медресе</span><strong>Равза</strong></div>
              <div className="panel-card"><span>Стиль</span><strong>Modern + Islamic</strong></div>
              <div className="panel-card"><span>Направление</span><strong>Куран, хадис, фикх</strong></div>
            </div>
          </div>
        </section>

        <section id="about" className="section container">
          <div className="section-heading">
            <span className="eyebrow">{copy.aboutTitle}</span>
            <h2>{copy.aboutText}</h2>
          </div>
          <div className="info-grid">
            <div className="feature-card">
              <h3>Миссия</h3>
              <p>Исламдык билим, адеп-ахлак, тарбия жана коомчулукка кызмат кылуу.</p>
            </div>
            <div className="feature-card">
              <h3>Баасы</h3>
              <p>2000-жылдан бери билим берүү, диний тарбия жана кыйынчылыкка туруштук берүү.</p>
            </div>
          </div>
        </section>

        <section id="achievements" className="section container">
          <div className="section-heading">
            <span className="eyebrow">{copy.achievementsTitle}</span>
          </div>
          <div className="stats-grid">
            {copy.achievements.map((item) => (
              <div key={item.label} className="stat-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="curriculum" className="section container">
          <div className="section-heading">
            <span className="eyebrow">{copy.curriculumTitle}</span>
          </div>
          <div className="cards-grid three-col">
            {copy.curriculum.map((item) => (
              <article key={item} className="info-card">
                <span className="tag">Islam</span>
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </section>

        <section id="teachers" className="section container">
          <div className="section-heading">
            <span className="eyebrow">{copy.teachersTitle}</span>
          </div>
          <div className="cards-grid two-col">
            {copy.teachers.map((teacher) => (
              <article key={teacher.name} className="profile-card">
                <div className="profile-avatar">{teacher.name.charAt(0)}</div>
                <h3>{teacher.name}</h3>
                <p>{teacher.role}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section container">
          <div className="section-heading">
            <span className="eyebrow">{copy.admissionsTitle}</span>
          </div>
          <div className="list-panel">
            <ol>
              {copy.admissions.map((item) => <li key={item}>{item}</li>)}
            </ol>
          </div>
        </section>

        <section className="section container">
          <div className="section-heading">
            <span className="eyebrow">{copy.docsTitle}</span>
          </div>
          <div className="docs-grid">
            {copy.docs.map((doc, index) => (
              <div key={doc} className="doc-card">
                <span>{index + 1}.</span>
                <p>{doc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="news" className="section container">
          <div className="section-heading">
            <span className="eyebrow">{copy.newsTitle}</span>
          </div>
          <div className="cards-grid three-col">
            {copy.news.map((item) => (
              <article key={item.title} className="info-card">
                <span className="tag">{item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="announcements" className="section container">
          <div className="section-heading">
            <span className="eyebrow">{copy.announcementsTitle}</span>
          </div>
          <div className="announcement-list">
            {copy.announcements.map((item) => (
              <div key={item.title} className="announcement-item">
                <span>{item.date}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="gallery" className="section container">
          <div className="section-heading">
            <span className="eyebrow">{copy.galleryTitle}</span>
          </div>
          <div className="gallery-grid">
            {copy.galleryItems.map((item, index) => (
              <div key={item} className="gallery-item" style={{ backgroundImage: `url('https://images.unsplash.com/photo-${index === 0 ? '1524995997946-a1c2e315a42f' : index === 1 ? '1545231027-637aa9678ef7' : index === 2 ? '1503676260728-1d2a3b8b1c1c' : '1513258496099-48168024aec0'}?auto=format&fit=crop&w=900&q=80')` }}>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="appeal" className="section container">
          <div className="section-heading">
            <span className="eyebrow">{copy.formTitle}</span>
          </div>
          <div className="appeal-wrap">
            <form className="appeal-form" onSubmit={handleSubmit}>
              <div className="field-grid">
                <label>
                  <span>{copy.formFields.name}</span>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required />
                </label>
                <label>
                  <span>{copy.formFields.contact}</span>
                  <input type="text" name="contact" value={form.contact} onChange={handleChange} required />
                </label>
              </div>

              <div className="field-grid">
                <label>
                  <span>{copy.formFields.category}</span>
                  <select name="category" value={form.category} onChange={handleChange}>
                    <option value="question">Question</option>
                    <option value="feedback">Feedback</option>
                    <option value="complaint">Complaint</option>
                  </select>
                </label>
                <label>
                  <span>{copy.formFields.subject}</span>
                  <input type="text" name="subject" value={form.subject} onChange={handleChange} required />
                </label>
              </div>

              <label>
                <span>{copy.formFields.message}</span>
                <textarea name="message" rows="5" value={form.message} onChange={handleChange} required />
              </label>

              <button type="submit" className="primary-btn" disabled={isSubmitting}>
                {isSubmitting ? '...' : copy.ctaSecondary}
              </button>
              {status && <p className="form-status">{status}</p>}
            </form>

            <aside className="contact-card" id="contact">
              <h3>{copy.contactTitle}</h3>
              <p>{copy.contactText}</p>
              <ul>
                <li>📍 Сокулук району, Жаңы-Жер айылы, Жаш Гвардия №81В</li>
                <li>📞 0702 43 07 44</li>
                <li>✉️ info@ravza.kg</li>
              </ul>
            </aside>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <h4>Равза медресеси</h4>
            <p>Медресе 2000-жылдан бери ислам илимдерин үйрөтөт.</p>
          </div>
          <div>
            <h4>Навигация</h4>
            <ul>
              <li>Биз жөнүндө</li>
              <li>Жетишкендиктер</li>
              <li>Окуу программасы</li>
            </ul>
          </div>
          <div>
            <h4>Байланыш</h4>
            <ul>
              <li>0702 43 07 44</li>
              <li>info@ravza.kg</li>
              <li>Сокулук району</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
