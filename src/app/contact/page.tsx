"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageTransition } from "@/components/layout/PageTransition";
import { Send, CheckCircle2, Github, Linkedin, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/app/actions/sendEmail";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";


export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = e.currentTarget; // ✅ store ref before any await
  const formData = new FormData(form);
  
  try {
    setSubmitting(true);
    const result = await sendEmail(formData);
    if (result?.error) {
      toast.error(result.error);
    } else {
      toast.success("Message sent successfully!");
      form.reset(); // ✅ now resets only on success
    }
  } catch (error) {
    toast.error("Something went wrong!");
  } finally {
    setSubmitting(false); // ✅ single place to clear loading state
  }
};

  return (
    <PageTransition>
      <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 text-center mt-10 mb-5">
              Let’s turn{" "}
              <span
                className="
                  bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600
                  dark:from-violet-500 dark:via-fuchsia-500 dark:to-cyan-400
                  bg-clip-text text-transparent
                "
              >
                ideas
              </span>{" "}
              into{" "}
              <span
                className="
                  bg-gradient-to-r from-cyan-600 to-sky-600
                  dark:from-cyan-400 dark:to-sky-500
                  bg-clip-text text-transparent
                "
              >
                real products
              </span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 mb-10">
              Whether it’s a question, collaboration, or feedback — feel free to
              reach out. 
            </p>
      <div className="flex justify-center items-center">
      <div className="w-full flex flex-col lg:flex-row items-start justify-center mt-12 gap-16 lg:gap-24 px-4 max-w-7xl">
        
        {/* Left Side: Contact Info */}
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.6 }}
           className="w-full lg:w-1/2 space-y-8"
        >

          <div className="space-y-4">
             <h2 className="text-xl md:text-3xl font-bold tracking-tight">
               Let's <span >Connect</span>
             </h2>
             <p className="text-neutral-400 text-lg leading-relaxed max-w-md">
               Always open to discussing new projects, scalable architectures, and full-stack opportunities.
             </p>
          </div>

          <div className="space-y-6">
             <a href="mailto:himanshu@example.com" className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors group w-fit">
                <div className="p-3 rounded-full glass group-hover:bg-blue-500/10 group-hover:border-blue-500/50 transition-colors">
                   <Mail className="w-5 h-5" />
                </div>
                <span className="font-medium text-lg border-b border-transparent group-hover:border-blue-500 transition-colors">himanshuazad05@gmail.com</span>
             </a>
             
             <a href="https://www.linkedin.com/in/himanshu-azad-5a97a3310/" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors group w-fit">
                <div className="p-3 rounded-full glass group-hover:bg-blue-500/10 group-hover:border-blue-500/50 transition-colors">
                   <Linkedin className="w-5 h-5" />
                </div>
                <span className="font-medium text-lg border-b border-transparent group-hover:border-blue-500 transition-colors">LinkedIn Profile</span>
             </a>

             <a href="https://github.com/Himanshuazad03" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors group w-fit">
                <div className="p-3 rounded-full glass group-hover:bg-blue-500/10 group-hover:border-blue-500/50 transition-colors">
                   <Github className="w-5 h-5" />
                </div>
                <span className="font-medium text-lg border-b border-transparent group-hover:border-blue-500 transition-colors">GitHub Profile</span>
             </a>
          </div>
        </motion.div>

        {/* Right Side: Animated Form */}
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="w-full lg:w-1/2 relative group"
        >
           {/* Soft background ambient glow */}
           <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-duration-1000 -z-10 rounded-3xl" />
           
           <form onSubmit={handleSubmit} className="glass p-8 md:p-10 rounded-3xl border border-white/5 space-y-6 relative overflow-hidden">
             
              {/* Floating Labels / Glow Inputs Area */}
              <div className="space-y-6">
                 <div className="relative">
                   <Input 
                      required 
                      id="name" 
                      name="name"
                      placeholder="Name" 
                      className="peer h-14 bg-black/40 border-white/10 text-white placeholder:text-transparent focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all rounded-xl"
                   />
                   <label htmlFor="name" className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-400 peer-focus:bg-black peer-focus:px-2 peer-valid:-top-2 peer-valid:text-xs peer-valid:text-blue-400 peer-valid:bg-black peer-valid:px-2 pointer-events-none">
                     YOUR NAME
                   </label>
                 </div>
                 
                 <div className="relative">
                   <Input 
                      required 
                      type="email" 
                      id="email" 
                      name="email"
                      placeholder="Email" 
                      className="peer h-14 bg-black/40 border-white/10 text-white placeholder:text-transparent focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all rounded-xl"
                   />
                   <label htmlFor="email" className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-400 peer-focus:bg-black peer-focus:px-2 peer-valid:-top-2 peer-valid:text-xs peer-valid:text-blue-400 peer-valid:bg-black peer-valid:px-2 pointer-events-none">
                     EMAIL ADDRESS
                   </label>
                 </div>
                 
                 <div className="relative pt-2">
                   <Textarea 
                      required 
                      id="message" 
                      name="message"
                      placeholder="Message" 
                      className="peer min-h-[150px] bg-black/40 border-white/10 text-white placeholder:text-transparent focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all rounded-xl resize-none pt-4"
                   />
                   <label htmlFor="message" className="absolute left-4 top-6 -translate-y-1/2 text-neutral-500 text-sm transition-all peer-focus:-top-0 peer-focus:text-xs peer-focus:text-blue-400 peer-focus:bg-black peer-focus:px-2 peer-valid:-top-0 peer-valid:text-xs peer-valid:text-blue-400 peer-valid:bg-black peer-valid:px-2 pointer-events-none">
                     YOUR MESSAGE
                   </label>
                 </div>
              </div>

              {/* Animated Submit Button */}
              <Button
                    type="submit"
                    disabled={submitting}
                    className="
                      w-full flex items-center justify-center gap-2 cursor-pointer
                      bg-slate-800 text-white hover:bg-slate-900
                      dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400
                      disabled:opacity-60
                    "
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
           </form>
        </motion.div>

      </div>
      </div>
    </PageTransition>
  );
}
