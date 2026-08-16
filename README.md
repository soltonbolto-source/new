# AI Studio project

This project is a starter for a modern product website built on:

- Frontend: Next.js
- Backend: Python + Django
- Database: PostgreSQL
- Frontend deploy: Vercel
- Backend deploy: Render
- Code: GitHub
- AI: Vibe Coding agent

## Project structure

- frontend/ - Next.js app
- backend/ - Django project
- .gitignore
- .env.example

## Quick start

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Open: http://localhost:3000

### Backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver 0.0.0.0:8000
```

Open: http://localhost:8000

> By default the project uses SQLite for local development so the app starts without a running PostgreSQL server. Set `USE_SQLITE=False` if you want to switch to PostgreSQL.

## Environment variables

### Frontend

Create `.env.local` with:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### Backend

Create `.env` with:

```env
SECRET_KEY=your-secret-key
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
USE_SQLITE=True
DB_NAME=ai_studio
DB_USER=postgres
DB_PASSWORD=postgres
DB_HOST=localhost
DB_PORT=5432
```

## Deployment

### Frontend (Vercel)

1. Push this repo to GitHub.
2. Import the project into Vercel.
3. Set framework to Next.js.
4. Add environment variable:
   - `NEXT_PUBLIC_API_URL=https://your-backend.onrender.com`
5. Deploy.

### Backend (Render)

1. Create a new Web Service on Render.
2. Connect the same GitHub repo.
3. Set build command:
   - `pip install -r requirements.txt && python manage.py migrate`
4. Set start command:
   - `python manage.py runserver 0.0.0.0:$PORT`
5. Add environment variables:
   - `SECRET_KEY`
   - `DEBUG=False`
   - `USE_SQLITE=False`
   - `DB_NAME`
   - `DB_USER`
   - `DB_PASSWORD`
   - `DB_HOST`
   - `DB_PORT`
   - `FRONTEND_URL=https://your-frontend.vercel.app`
   - `CORS_ALLOWED_ORIGINS=https://your-frontend.vercel.app`

## Notes

This is a production-ready starter and can be extended with:

- portfolio pages
- blog/news section
- contact form
- admin dashboard
- AI assistant integration
- payment and subscriptions

## SEO / performance checklist

- Add canonical metadata
- Use descriptive page titles
- Add Open Graph metadata
- Keep static pages lightweight
- Use CDN / Vercel static optimization
- Enable backend API docs via Swagger
