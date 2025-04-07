// app/home/page.tsx (Next.js) or src/pages/Home.tsx (React)
export default function HomePage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-[var(--theme-color)] mb-6">
        Welcome to My Portfolio
      </h1>
      <div className="prose max-w-3xl">
        <p>
          Hello! I'm a passionate developer with expertise in modern web
          technologies.
        </p>
        <p>
          Navigate using the sidebar to learn more about my skills, projects,
          and experience.
        </p>
      </div>
    </div>
  );
}
