export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-600 px-4">
      <div className="w-full max-w-xs">
        <h1 className="text-white text-4xl font-bold text-center mb-8">
          donAR
        </h1>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full px-4 py-3 rounded-md bg-white text-gray-800 placeholder-gray-500 shadow"
          />

          <input
            type="password"
            placeholder="Contraseña"
            className="w-full px-4 py-3 rounded-md bg-white text-gray-800 placeholder-gray-500 shadow"
          />

          <div className="text-sm text-white text-center">
            <a href="#" className="underline hover:text-blue-200">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-2 text-white border border-white rounded-md hover:bg-white hover:text-blue-600 transition"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}
