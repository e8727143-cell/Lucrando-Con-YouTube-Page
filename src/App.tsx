import { motion, AnimatePresence } from 'motion/react';
import { Play, CheckCircle2, Star, TrendingUp, Youtube, DollarSign, Shield, ChevronDown, ArrowRight, Users } from 'lucide-react';
import { useState } from 'react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-neutral-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 text-left font-medium text-white hover:text-red-400 transition-colors"
      >
        <span>{question}</span>
        <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-neutral-400">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-600 selection:text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-16 sm:pt-24 sm:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.15)_0%,rgba(0,0,0,0)_50%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block rounded-full bg-red-600/10 px-4 py-1.5 text-sm font-semibold text-red-500 mb-6 border border-red-600/20">
                🔥 Atención Creadores y Emprendedores
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight mb-6 leading-tight">
                El Método Exacto Para <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                  Monetizar YouTube
                </span>
                <br className="hidden sm:block" /> Sin Mostrar Tu Rostro
              </h1>
              <p className="text-lg sm:text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">
                Descubre cómo crear canales automatizados altamente rentables y generar ingresos pasivos en dólares todos los meses.
              </p>
            </motion.div>

            {/* VSL Video Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative mx-auto max-w-4xl aspect-video rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl shadow-red-900/20 group cursor-pointer"
            >
              <img 
                src="https://picsum.photos/seed/youtube/1920/1080?blur=2" 
                alt="Video Thumbnail" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-red-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.5)] group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-2" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white font-medium text-sm sm:text-base">Haz clic para reproducir la presentación (Asegúrate de tener el sonido activado) 🔊</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10"
            >
              <a
                href="https://pay.hotmart.com/P104808776O?off=hfx5if7r"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-red-800 px-8 py-4 text-lg sm:text-xl font-bold text-white shadow-[0_0_40px_rgba(220,38,38,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(220,38,38,0.6)] w-full sm:w-auto"
              >
                SÍ, QUIERO EMPEZAR AHORA
                <ArrowRight className="w-6 h-6" />
              </a>
              <p className="mt-4 text-sm text-neutral-500 flex items-center justify-center gap-2">
                <Shield className="w-4 h-4" /> Garantía de satisfacción de 7 días
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="border-y border-white/5 bg-neutral-950 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-neutral-500 uppercase tracking-widest mb-6">
            ESTUDIANTES GENERANDO RESULTADOS TODOS LOS DÍAS
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale">
            <div className="text-2xl font-black tracking-tighter">FORBES</div>
            <div className="text-2xl font-black tracking-tighter">ENTREPRENEUR</div>
            <div className="text-2xl font-black tracking-tighter">BUSINESS INSIDER</div>
            <div className="text-2xl font-black tracking-tighter">TECHCRUNCH</div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl font-black mb-6">
                ¿Estás cansado de trabajar 8 horas al día por un sueldo que no alcanza?
              </h2>
              <div className="space-y-6 text-neutral-400 text-lg">
                <p>
                  La mayoría de las personas creen que para ganar dinero en YouTube necesitan ser carismáticos, tener equipos costosos y exponer su vida privada.
                </p>
                <p>
                  <strong className="text-white">Eso es completamente falso.</strong>
                </p>
                <p>
                  Existe un modelo de negocio oculto llamado "Canales Faceless" (Sin Rostro) donde puedes crear contenido altamente viral utilizando herramientas de Inteligencia Artificial, sin grabar un solo video tú mismo.
                </p>
              </div>
              <ul className="mt-8 space-y-4">
                {[
                  'Sin mostrar tu cara',
                  'Sin comprar cámaras costosas',
                  'Sin experiencia previa en edición',
                  'Dedicando solo 2 horas al día'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white font-medium">
                    <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent blur-3xl rounded-full" />
              <img 
                src="https://picsum.photos/seed/money/800/800" 
                alt="Resultados" 
                className="relative rounded-2xl border border-neutral-800 shadow-2xl"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 bg-neutral-900 border border-neutral-800 p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="bg-green-500/20 p-3 rounded-full">
                    <TrendingUp className="w-8 h-8 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-400">Ingresos Estimados</p>
                    <p className="text-2xl font-black text-white">+$3,450.00</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-24 bg-neutral-950 border-y border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-5xl font-black mb-6">
              Lo que descubrirás dentro de <span className="text-red-600">LUCRANDO CON YOUTUBE</span>
            </h2>
            <p className="text-xl text-neutral-400">
              Un programa paso a paso diseñado para llevarte de cero a tu primer canal monetizado en tiempo récord.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Módulo 1: Fundamentos y Nichos',
                desc: 'Descubre los nichos más rentables (alto CPM) donde la competencia es baja y el potencial de ganancias es masivo.',
                icon: <Star className="w-6 h-6 text-red-500" />
              },
              {
                title: 'Módulo 2: Creación de Contenido IA',
                desc: 'Aprende a generar guiones persuasivos, voces realistas y edición dinámica usando herramientas gratuitas de IA.',
                icon: <Youtube className="w-6 h-6 text-red-500" />
              },
              {
                title: 'Módulo 3: Hackeando el Algoritmo',
                desc: 'El secreto detrás de las miniaturas virales y el SEO en YouTube para que tus videos sean recomendados masivamente.',
                icon: <TrendingUp className="w-6 h-6 text-red-500" />
              },
              {
                title: 'Módulo 4: Monetización Acelerada',
                desc: 'Cómo alcanzar los requisitos de monetización en menos de 30 días y activar múltiples fuentes de ingresos.',
                icon: <DollarSign className="w-6 h-6 text-red-500" />
              },
              {
                title: 'Módulo 5: Automatización Total',
                desc: 'Construye un equipo económico para que hagan el trabajo por ti mientras tú solo te encargas de cobrar.',
                icon: <Users className="w-6 h-6 text-red-500" />
              },
              {
                title: 'Bonus: Casos de Estudio Reales',
                desc: 'Analizamos canales exitosos desde adentro, mostrando analíticas reales y estrategias exactas.',
                icon: <Play className="w-6 h-6 text-red-500" />
              }
            ].map((mod, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-black border border-neutral-800 p-8 rounded-2xl hover:border-red-600/50 transition-colors group"
              >
                <div className="bg-red-600/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {mod.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{mod.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{mod.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="oferta" className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-b from-neutral-900 to-black border border-red-600/30 rounded-3xl p-8 sm:p-12 shadow-2xl shadow-red-900/20 text-center">
            <h2 className="text-3xl sm:text-5xl font-black mb-4">
              Comienza Tu Imperio en YouTube Hoy
            </h2>
            <p className="text-xl text-neutral-400 mb-8">
              Únete a más de 2,500 estudiantes que ya están generando ingresos.
            </p>

            <div className="flex justify-center items-center gap-4 mb-8">
              <span className="text-3xl text-neutral-500 line-through font-bold">$297</span>
              <span className="text-6xl font-black text-white">$49.97</span>
            </div>

            <div className="space-y-4 max-w-md mx-auto mb-10 text-left">
              {[
                'Acceso de por vida al programa completo',
                'Actualizaciones gratuitas',
                'Comunidad privada de estudiantes',
                'Plantillas de guiones virales',
                'Soporte prioritario'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-neutral-300">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="https://pay.hotmart.com/P104808776O?off=hfx5if7r"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-8 py-5 text-xl font-black text-white shadow-[0_0_40px_rgba(220,38,38,0.4)] transition-all hover:scale-105 hover:bg-red-500 w-full sm:w-auto"
            >
              COMPRAR AHORA POR $49.97
              <ArrowRight className="w-6 h-6" />
            </a>
            
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-neutral-500">
              <Shield className="w-5 h-5" />
              <span>Pago 100% seguro y encriptado. Garantía de 7 días.</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-neutral-950 border-t border-white/5">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-12">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-2">
            <FAQItem 
              question="¿Necesito experiencia previa?" 
              answer="No, el curso está diseñado desde cero. Te enseñamos paso a paso cómo crear tu canal, configurarlo y empezar a subir videos sin conocimientos técnicos previos."
            />
            <FAQItem 
              question="¿Tengo que mostrar mi cara?" 
              answer="Absolutamente no. El enfoque principal de este curso son los canales 'Faceless', donde utilizamos voz en off (incluso generada por IA) y material de archivo."
            />
            <FAQItem 
              question="¿Cuánto tiempo necesito dedicarle al día?" 
              answer="Recomendamos dedicar al menos 1 a 2 horas diarias para ver resultados consistentes. Una vez que domines el proceso, podrás automatizar gran parte del trabajo."
            />
            <FAQItem 
              question="¿Qué pasa si no me gusta el curso?" 
              answer="Tienes una garantía incondicional de 7 días. Si sientes que el contenido no es para ti, te devolvemos el 100% de tu dinero sin hacer preguntas."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-white/10 text-center text-neutral-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Youtube className="h-6 w-6 text-neutral-600" />
            <span className="text-lg font-black tracking-tighter text-neutral-400">
              LUCRANDO<span className="text-neutral-600">YT</span>
            </span>
          </div>
          <p className="mb-4 text-sm">
            Este sitio no es parte del sitio web de YouTube, Google o Facebook. Además, este sitio NO está respaldado por YouTube, Google o Facebook de ninguna manera.
          </p>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Lucrando con YouTube. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
