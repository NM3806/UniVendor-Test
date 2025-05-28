export default function CategoryCard({ image, label }: { image: string; label: string }) {
  return (
    <a href="/products" className="group">
      <div
        className="rounded-lg overflow-hidden aspect-square relative bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
      >
        <div className="absolute inset-0 bg-indigo-600/10 group-hover:bg-indigo-600/30 transition-colors" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="bg-white/90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">{label}</span>
        </div>
      </div>
    </a>
  );
}
