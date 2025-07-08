// components/Layout.tsx or Layout.jsx

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-0 py-10 space-y-16">
        {children}
      </div>
    </div>
  );
}
