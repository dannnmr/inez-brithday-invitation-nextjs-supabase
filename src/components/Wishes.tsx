// "use client";

// import { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Heart, RotateCw, Quote, ChevronLeft, ChevronRight } from "lucide-react";
// import { supabase } from "@/lib/supabase";
// import { SectionHeader } from "./ui/SectionHeader";
// import { AnimatedSection } from "./ui/AnimatedSection";
// import { FloatingDecoration } from "./ui/FloatingDecoration";

// type Wish = {
//   id: string;
//   autor: string;
//   mensaje: string;
//   creado_en: string;
// };

// export function Wishes() {
//   const [wishes, setWishes] = useState<Wish[]>([]);
//   const [name, setName] = useState("");
//   const [message, setMessage] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);

//   const scrollRef = useRef<HTMLDivElement>(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleScroll = () => {
//     if (!scrollRef.current) return;
//     const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

//     if (wishes.length > 0) {
//       if (scrollLeft === 0) {
//         setActiveIndex(0);
//       } else if (Math.ceil(scrollLeft + clientWidth) >= scrollWidth) {
//         setActiveIndex(wishes.length - 1);
//       } else {
//         const progress = scrollLeft / (scrollWidth - clientWidth);
//         setActiveIndex(Math.round(progress * (wishes.length - 1)));
//       }
//     }
//   };

//   const scroll = (direction: 'left' | 'right') => {
//     if (!scrollRef.current) return;
//     scrollRef.current.scrollBy({ left: direction === 'left' ? -320 : 320, behavior: 'smooth' });
//   };

//   const fetchWishes = async () => {
//     try {
//       const { data, error } = await supabase
//         .from('deseos')
//         .select('*')
//         .order('creado_en', { ascending: false })
//         .limit(20);

//       if (!error && data) setWishes(data);
//     } catch (e) {
//       console.error(e);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchWishes();

//     const channel = supabase
//       .channel('public:wishes')
//       .on(
//         'postgres_changes',
//         { event: 'INSERT', schema: 'public', table: 'deseos' },
//         (payload) => {
//           setWishes(prev => [payload.new as Wish, ...prev.filter(w => w.id !== payload.new.id)].slice(0, 20));
//         }
//       )
//       .subscribe();

//     return () => {
//       supabase.removeChannel(channel);
//     };
//   }, []);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!name.trim() || !message.trim()) return;

//     setIsSubmitting(true);
//     try {
//       const { error: sbError } = await supabase
//         .from('deseos')
//         .insert([{ autor: name.trim(), mensaje: message.trim() }]);

//       if (sbError) throw sbError;
//       setName("");
//       setMessage("");
//     } catch (err) {
//       console.error(err);
//       alert("Hubo un error al enviar tu dedicatoria.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section className="relative py-12 px-6 bg-transparent flex flex-col items-center overflow-hidden w-full">
//       <FloatingDecoration
//         src="/images/decorativas_v2/hojas.png"
//         alt="Flores"
//         className="top-0 right-[-10%] w-[300px] h-[300px] opacity-15"
//       />
//       <FloatingDecoration
//         src="/images/decorativas_v2/flor_dorada.png"
//         alt="Flores"
//         className="bottom-[-5%] left-[-5%] w-[250px] h-[250px] opacity-20 animate-pulse"
//       />

//       <div className="max-w-6xl w-full z-10 flex flex-col items-center">
//         <div className="flex flex-col lg:flex-row gap-8 mb-10 w-full items-center justify-between">
//           <AnimatedSection once className="text-center lg:text-left lg:w-1/2">
//             <SectionHeader
//               subtitle="Un Recuerdo Inolvidable"
//               title="Libro de Firmas"
//               className="mb-3 lg:text-left text-center"
//               titleClassName="text-5xl md:text-6xl"
//             />
//             <p className="font-sans text-xs text-[#8B7355] tracking-widest uppercase leading-relaxed max-w-sm mx-auto lg:mx-0">
//               Déjame una felicitación, deseo o consejo especial para atesorar siempre esta noche mágica en mi memoria.
//             </p>
//           </AnimatedSection>

//           {/* Formulario en tarjeta de notas */}
//           <AnimatedSection once className="w-full lg:w-1/2 card-glass p-6 md:p-8 rounded-3xl border border-[#C5A059]/40 relative">
//             <form onSubmit={handleSubmit} className="flex flex-col gap-5">
//               <div className="relative">
//                 <label htmlFor="autor" className="block text-[9px] uppercase tracking-widest text-[#C5A059] font-bold mb-1">Nombre</label>
//                 <input
//                   id="autor"
//                   type="text"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   placeholder="Tu Nombre..."
//                   className="w-full bg-transparent border-b border-[#C5A059]/20 pb-1.5 focus:outline-none focus:border-[#C5A059] font-sans text-sm text-[#FAF4EA] placeholder-[#FAF4EA]/30 tracking-widest"
//                   required
//                   disabled={isSubmitting}
//                 />
//               </div>
//               <div className="relative">
//                 <label htmlFor="mensaje" className="block text-[9px] uppercase tracking-widest text-[#C5A059] font-bold mb-1">Mensaje</label>
//                 <textarea
//                   id="mensaje"
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                   placeholder={`Felicidades ${siteConfig.client.name}...`}
//                   rows={3}
//                   className="w-full bg-transparent border-b border-[#C5A059]/20 pb-1.5 focus:outline-none focus:border-[#C5A059] font-script text-3xl text-white placeholder-[#FAF4EA]/30 resize-none leading-relaxed"
//                   required
//                   disabled={isSubmitting}
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full mt-2 flex items-center justify-center gap-2 py-3 bg-[#2C4A3E] border border-[#2C4A3E] text-[#FAF4EA] rounded-full font-sans tracking-[0.3em] font-extrabold uppercase text-[10px] hover:bg-[#2C4A3E]/95 transition-all shadow-xs cursor-pointer"
//               >
//                 {isSubmitting ? <RotateCw className="w-4 h-4 animate-spin text-white" /> : "Enviar Mensaje"}
//                 {!isSubmitting && <Heart className="w-3.5 h-3.5 fill-[#FAF4EA] text-[#FAF4EA] shrink-0" />}
//               </button>
//             </form>
//           </AnimatedSection>
//         </div>

//         {/* Galería Horizontal de Mensajes */}
//         <div className="w-full overflow-hidden relative">
//           {isLoading ? (
//             <div className="py-12 flex justify-center">
//               <RotateCw className="w-8 h-8 animate-spin text-[#C5A059]" />
//             </div>
//           ) : wishes.length === 0 ? (
//             <div className="py-12 text-center text-[#8B7355] font-sans tracking-widest uppercase text-xs">
//               Mural en blanco. ¡Escribe la primera dedicatoria!
//             </div>
//           ) : (
//             <div className="relative w-full">
//               <div
//                 ref={scrollRef}
//                 onScroll={handleScroll}
//                 className="flex w-full overflow-x-auto snap-x snap-mandatory gap-4 pb-4 px-2 scrollbar-none"
//                 style={{ scrollbarWidth: 'none' }}
//               >
//                 {wishes.map((wish, idx) => (
//                   <motion.div
//                     key={wish.id}
//                     className="shrink-0 w-[80vw] sm:w-[280px] snap-center bg-white p-6 shadow-md rounded-xl flex flex-col relative border border-neutral-100"
//                     style={{ rotate: `${idx % 2 === 0 ? -1.5 : 1.5}deg` }}
//                   >
//                     <Quote className="w-5 h-5 text-[#C5A059]/20 absolute top-4 left-4" />
//                     <p className="font-script text-2xl leading-relaxed text-[#2E1E15] mb-5 mt-4 w-full overflow-hidden text-ellipsis">
//                       "{wish.mensaje}"
//                     </p>
//                     <div className="mt-auto flex items-center justify-between border-t border-neutral-100 pt-2 w-full">
//                       <span className="font-sans text-[8px] font-black uppercase tracking-widest text-[#8B7355] truncate max-w-[85%]">
//                         {wish.autor}
//                       </span>
//                       <Heart className="w-3.5 h-3.5 fill-[#C5A059]/40 text-[#C5A059]/40 shrink-0" />
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* Botones de navegación del scroll */}
//               {wishes.length > 1 && (
//                 <div className="flex justify-center gap-4 mt-4">
//                   <button onClick={() => scroll('left')} className="p-2 bg-white border border-neutral-200 rounded-full hover:bg-neutral-50 transition-colors shadow-xs"><ChevronLeft className="w-4 h-4 text-[#2E1E15]" /></button>
//                   <button onClick={() => scroll('right')} className="p-2 bg-white border border-neutral-200 rounded-full hover:bg-neutral-50 transition-colors shadow-xs"><ChevronRight className="w-4 h-4 text-[#2E1E15]" /></button>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }
