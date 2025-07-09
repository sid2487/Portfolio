

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-0 py-10 space-y-16">
        {children}
      </div>
    </div>
  );
}
