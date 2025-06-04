import Link from 'next/link';
import React from 'react';

function Welcome() {
  return (
    <div className="min-h-screen bg-blue-600 flex items-center justify-center px-4">
      <div className="text-center text-white max-w-xs w-full">
        <div className="text-6xl mb-6">❤️🤲</div>

        <h1 className="text-3xl font-bold mb-4">¡Bienvenido a donAR!</h1>

        <p className="text-lg font-medium mb-8">
          Trabajamos para conectar personas solidarias y generar un impacto positivo.
        </p>

        <div className="space-y-3">
          <Link href="/login" className="w-full py-3 bg-white text-blue-600 rounded-md font-semibold shadow hover:bg-blue-100 transition">
            Iniciar sesión
          </Link>
          <Link href="/register" className="w-full py-3 border border-white text-white rounded-md font-semibold hover:bg-white hover:text-blue-600 transition">
            Registrarse
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;