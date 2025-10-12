export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-3 text-blue-700">Welcome Home 🎉</h1>
        <p className="text-gray-600 mb-6">You've successfully logged in!</p>
        <a
          href="/login"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Logout
        </a>
      </div>
    </div>
  );
}
