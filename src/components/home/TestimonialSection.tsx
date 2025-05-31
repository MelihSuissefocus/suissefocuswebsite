import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function TestimonialSection() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-secondary"
    >
      <div className="max-w-4xl mx-auto text-center">
        <Quote className="h-12 w-12 text-swiss-navy mx-auto mb-8" />
        <motion.blockquote 
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="text-2xl font-medium text-swiss-navy mb-8"
        >
          "Mit suissefocus konnten wir unsere Support-Tickets um 30% reduzieren und die Kundenzufriedenheit deutlich steigern."
        </motion.blockquote>
        
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="w-16 h-16 bg-gray-200 rounded-full" aria-label="Profilbild Placeholder" />
          <div className="text-left">
            <div className="font-medium text-swiss-navy">Dr. Sarah Weber</div>
            <div className="text-swiss-navy/60">CTO, Swiss Insurance AG</div>
          </div>
        </div>

        <motion.a
          href="/references"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center px-6 py-3 rounded-lg bg-swiss-navy text-white font-medium
                   hover:bg-swiss-navy/90 transition-colors
                   focus-visible:ring-2 focus-visible:ring-swiss-navy focus-visible:ring-offset-2"
          aria-label="Zu allen Kundenreferenzen"
        >
          Alle Referenzen
        </motion.a>
      </div>
    </motion.section>
  );
} 