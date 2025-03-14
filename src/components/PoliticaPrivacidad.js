import React from 'react';

const PoliticaPrivacidad = () => {
  return (
    <div className="bg-orange-50 min-h-screen py-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-orange-500 px-6 py-4">
          <h1 className="text-2xl font-bold text-white">Política de Privacidad</h1>
        </div>
        
        <div className="p-6 space-y-6 text-gray-700">
          <p className="text-lg leading-relaxed">
            En nuestra aplicación, respetamos tu privacidad y estamos comprometidos con la protección de tus datos personales.
            Esta política explica cómo recopilamos, usamos y protegemos tu información.
          </p>
          
          <div className="space-y-4">
            <div className="border-l-4 border-orange-400 pl-4">
              <h2 className="text-xl font-semibold text-orange-700 mb-2">Información que Recopilamos</h2>
              <p className="leading-relaxed">
                Podemos recopilar información personal como tu nombre, dirección de correo electrónico y otros datos
                necesarios para el funcionamiento de la aplicación.
              </p>
            </div>
            
            <div className="border-l-4 border-orange-400 pl-4">
              <h2 className="text-xl font-semibold text-orange-700 mb-2">Cómo Usamos tu Información</h2>
              <p className="leading-relaxed">
                Utilizamos tu información para mejorar tu experiencia en la aplicación, personalizar los servicios y
                garantizar la seguridad de la plataforma.
              </p>
            </div>
            
            <div className="border-l-4 border-orange-400 pl-4">
              <h2 className="text-xl font-semibold text-orange-700 mb-2">Protección de Datos</h2>
              <p className="leading-relaxed">
                Implementamos medidas de seguridad para proteger tu información contra accesos no autorizados o divulgación.
              </p>
            </div>
          </div>
          
          <div className="bg-orange-100 p-4 rounded-lg mt-6">
            <h2 className="text-xl font-semibold text-orange-700 mb-2">Contacto</h2>
            <p className="leading-relaxed">
              Si tienes preguntas sobre nuestra política de privacidad, puedes contactarnos en{' '}
              <a href="mailto:juan.servin.21s@utzmg.edu.mx" className="text-orange-600 font-medium hover:underline">
                juan.servin.21s@utzmg.edu.mx
              </a>
            </p>
          </div>
        </div>
        
        <div className="bg-orange-100 px-6 py-4 border-t border-orange-200">
          <p className="text-sm text-orange-600 text-center">
            Última actualización: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PoliticaPrivacidad;