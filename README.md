# Ammiel Joseph — Portfolio

A premium, dark-mode portfolio for Ammiel Joseph, a Computing and Information Technology graduate from the University of Surrey.

## Stack

- React + Vite frontend
- Node.js + Express production server
- Plain CSS for the visual system (no UI framework)

## Structure

```text
backend/index.js       Express server and /api/health endpoint
frontend/src/           React application, data and styles
frontend/public/        Static files such as resume.pdf
```

## Local development

From the project root:

```bash
npm run install:all
npm run dev
```

The Vite development server runs at `http://localhost:5173`. The frontend is independently developable with `npm --prefix frontend run dev`.

## Production

Build the frontend, then start Express:

```bash
npm run build
npm start
```

Express uses `PORT` when provided and defaults to port `3000`. It serves `frontend/dist`, supports SPA fallback routes such as `/resume` and `/projects/idpp-dashboard`, and exposes `GET /api/health`.

## Content updates

- Add or edit projects in `frontend/src/data.js`. The project cards and case-study pages are generated from this data.
- Update experience, skills and links in the same file.
- Replace the resume by adding `frontend/public/resume.pdf`. The Resume page will then display the PDF in the browser and its download link will work.
- The contact form currently validates in the browser and shows a success state. Connect its `submit` handler in `frontend/src/main.jsx` to Formspree, EmailJS or your own endpoint when an email service is selected.

## Deployment

Deploy the repository as a Node application. Run `npm install` (or `npm run install:all`), `npm run build`, and use `npm start` as the start command. Point `ammiel.app` at the host's configured domain after deployment.
