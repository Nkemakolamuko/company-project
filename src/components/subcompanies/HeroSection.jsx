export default function HeroSection({ title, description,img }) {
  return (
    <section className="py-44 w-full bg-cover relative" style={{
      backgroundImage: `url(${img})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      {/* <div className="absolute bg-gray-800/50 w-full h-full top-0"></div> */}
      <div className="bg-black/50 max-w-lg ml-16 flex flex-col sm:p-4 text-white z-50">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="mt-4 text-gray-100">{description}</p>
      </div>
    </section>
  );
}
