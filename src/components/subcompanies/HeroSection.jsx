export default function HeroSection({ title, description }) {
  return (
    <section className="text-center py-16 bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
      <p className="mt-4 text-gray-600 max-w-xl mx-auto">{description}</p>
    </section>
  );
}
