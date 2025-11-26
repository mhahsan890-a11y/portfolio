import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { RoboticBackground } from "./components/RoboticBackground";
import { RoboticNav } from "./components/RoboticNav";
import { GlitchText } from "./components/GlitchText";
import { HexagonCard } from "./components/HexagonCard";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { 
  Terminal, 
  Code2, 
  Database, 
  Cloud, 
  Mail, 
  Phone,
  MapPin,
  ExternalLink,
  Github,
  Linkedin,
  ChevronRight,
  Cpu,
  Zap,
  Shield,
  Layers,
  Loader2
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export default function App() {
  const [timeDisplay, setTimeDisplay] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeDisplay(
        `${now.getHours().toString().padStart(2, "0")}:${now
          .getMinutes()
          .toString()
          .padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}`
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);


  const skills = {
    core: ["Web Design", "Design Thinking", "Campaigns Setup", "Automated Flows", "Problem-Solving"],
    tools: ["GoHighLevel", "ActiveCampaign", "Mailchimp", "HubSpot", "Monday", "Asana", "ClickUp", "Slack"],
    design: ["Canva", "Figma", "Photopea"],
    other: ["Computer Literacy", "Project Management Tools", "Strong Communication", "CRM Optimization", "Funnel Building"]
  };

  const experience = [
    {
      company: "WINGMAN",
      position: "Tech Support",
      responsibilities: [
        "Account Setup",
        "Snapshot Creation",
        "Domain Setup",
        "Mailgun and Twilio Setup"
      ]
    },
    {
      company: "AUTO NURTURE",
      position: "GHL Expert",
      responsibilities: [
        "Website and Funnel Development",
        "Survey Integration",
        "System Integration"
      ]
    },
    {
      company: "TOP LION MARKETING",
      position: "GHL Tech Support",
      responsibilities: [
        "Account Setup",
        "Onboarding",
        "Snapshots",
        "Domain, Mailgun, and Twilio Setup",
        "Typeforms Integration",
        "Google Sheet Integration"
      ]
    },
    {
      company: "AUTO NURTURE SPEEDY.AI",
      position: "GHL SaaS Developer",
      responsibilities: [
        "Integration Development",
        "SaaS Developer",
        "Backend Automation and Workflows"
      ]
    },
    {
      company: "REMOTE CLEAN ACADEMY",
      position: "Onboarding Specialist",
      responsibilities: [
        "Onboarding",
        "Integrations",
        "Zapier",
        "Booking Kola",
        "QuickBooks",
        "Chatbot",
        "Chat Widgets",
        "Funnels"
      ]
    }
  ];

  return (
    <div className="min-h-screen text-white overflow-hidden">
      <RoboticBackground />
      <RoboticNav />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 relative">
        <div className="max-w-7xl mx-auto w-full py-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            {/* System Status */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8 flex items-center justify-center gap-4 font-mono text-sm"
            >
              <span className="text-cyan-400">SYSTEM STATUS:</span>
              <span className="text-green-400 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                ONLINE
              </span>
              <span className="text-cyan-400">|</span>
              <span className="text-cyan-400">{timeDisplay}</span>
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-4"
            >
              <h1 className="text-6xl md:text-8xl font-mono mb-2 bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                <GlitchText text="MUHAMMAD AHSAN" />
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mb-8"
            >
              <div className="font-mono text-xl md:text-2xl text-cyan-400 mb-6">
                {'>'} TECH_SUPPORT.exe | AUTOMATION.exe | WEB_DEVELOPER.exe
              </div>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                <Badge className="bg-cyan-500/20 border-cyan-500/50 text-cyan-400 font-mono">
                  <Terminal className="w-3 h-3 mr-1" />
                  GHL Developer
                </Badge>
                <Badge className="bg-emerald-500/20 border-emerald-500/50 text-emerald-400 font-mono">
                  <Zap className="w-3 h-3 mr-1" />
                  Automation Specialist
                </Badge>
                <Badge className="bg-blue-500/20 border-blue-500/50 text-blue-400 font-mono">
                  <Layers className="w-3 h-3 mr-1" />
                  Tech Support
                </Badge>
              </div>
            </motion.div>

            {/* Terminal Window */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="max-w-3xl mx-auto"
            >
              <div className="bg-slate-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg overflow-hidden">
                {/* Terminal Header */}
                <div className="bg-slate-800/50 border-b border-cyan-500/30 px-4 py-2 flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="font-mono text-xs text-cyan-400">terminal@ahsan:~</span>
                </div>

                {/* Terminal Content */}
                <div className="p-6 font-mono text-sm text-left space-y-2">
                  <TerminalLine delay={1.2}>$ whoami</TerminalLine>
                  <TerminalLine delay={1.4} isOutput>
                    GoHighLevel (GHL) specialist with expertise in CRM optimization and automation.
                  </TerminalLine>
                  <TerminalLine delay={1.6} isOutput>
                    Skilled in funnel building, SaaS platform management, and end-to-end marketing systems.
                  </TerminalLine>
                  <TerminalLine delay={1.8} isOutput>
                    Delivering streamlined solutions that reduce manual tasks and scale agency operations.
                  </TerminalLine>
                  <TerminalLine delay={2}>$ cat skills.json</TerminalLine>
                  <TerminalLine delay={2.2} isOutput>
                    {`{ "platforms": ["GoHighLevel", "ActiveCampaign", "HubSpot"], "tools": ["Zapier", "Monday", "Asana", "Figma"] }`}
                  </TerminalLine>
                  <TerminalLine delay={2.4}>
                    <span className="text-green-400">✓</span> System initialized | Ready for deployment
                  </TerminalLine>
                  <TerminalLine delay={2.6}>
                    <span className="text-cyan-400">{'>'}</span> <span className="animate-pulse">_</span>
                  </TerminalLine>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8 }}
              className="mt-8 flex flex-wrap justify-center gap-4"
            >
              <Button
                className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-mono group"
                onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
              >
                VIEW_EXPERIENCE
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-mono"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                INITIALIZE_CONTACT
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-mono mb-4 text-cyan-400">
              {'<'} PROFILE_DATA {'>'}
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-transparent" />
          </motion.div>

          {/* Profile Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <HexagonCard delay={0.1}>
              <h3 className="font-mono text-xl text-cyan-400 mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5" />
                PROFILE_SUMMARY
              </h3>
              <p className="text-slate-300 leading-relaxed">
                GoHighLevel (GHL) specialist with a strong background in CRM optimization, funnel building, and automation strategy. 
                Skilled in deploying end-to-end marketing systems, managing SaaS-mode platforms, and enhancing client acquisition and retention. 
                Known for delivering streamlined solutions that reduce manual tasks, improve lead flow, and scale agency operations.
              </p>
            </HexagonCard>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education & Contact */}
            <div className="space-y-6">
              <HexagonCard delay={0.2}>
                <h3 className="font-mono text-xl text-cyan-400 mb-4 flex items-center gap-2">
                  <Terminal className="w-5 h-5" />
                  CONTACT_INFO
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span className="font-mono">0328-4693727</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span className="font-mono">mhahsan890@gmail.com</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                    <div>
                      <div className="font-mono">Madni Garden Qasim Bela</div>
                      <div className="font-mono text-slate-400">Multan, Pakistan</div>
                    </div>
                  </div>
                </div>
              </HexagonCard>

              <HexagonCard delay={0.3}>
                <h3 className="font-mono text-xl text-cyan-400 mb-4 flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  EDUCATION_LOGS
                </h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-cyan-500/50 pl-4">
                    <div className="font-mono text-sm text-cyan-400 mb-1">2027</div>
                    <div className="font-semibold">Bachelor of Business Administration</div>
                    <div className="text-sm text-slate-400">Bahauddin Zakriya University</div>
                  </div>
                  <div className="border-l-2 border-cyan-500/30 pl-4">
                    <div className="font-mono text-sm text-cyan-400 mb-1">2023</div>
                    <div className="font-semibold">FSC Pre-Medical</div>
                    <div className="text-sm text-slate-400">Punjab Group of Colleges</div>
                  </div>
                </div>
              </HexagonCard>

              <HexagonCard delay={0.4}>
                <h3 className="font-mono text-xl text-cyan-400 mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  LANGUAGES
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-2 text-sm">
                      <span>English</span>
                      <span className="text-cyan-400 font-mono">Proficient</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-gradient-to-r from-cyan-500 to-blue-500" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2 text-sm">
                      <span>Urdu</span>
                      <span className="text-cyan-400 font-mono">Native</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-gradient-to-r from-cyan-500 to-blue-500" />
                    </div>
                  </div>
                </div>
              </HexagonCard>
            </div>

            {/* Stats */}
            <div className="space-y-6">
              <HexagonCard delay={0.5}>
                <h3 className="font-mono text-xl text-cyan-400 mb-4 flex items-center gap-2">
                  <Layers className="w-5 h-5" />
                  SYSTEM_METRICS
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-cyan-500/10 rounded border border-cyan-500/30">
                    <div className="text-3xl font-mono text-cyan-400 mb-1">5+</div>
                    <div className="text-xs text-slate-400">COMPANIES</div>
                  </div>
                  <div className="text-center p-4 bg-blue-500/10 rounded border border-blue-500/30">
                    <div className="text-3xl font-mono text-blue-400 mb-1">50+</div>
                    <div className="text-xs text-slate-400">PROJECTS</div>
                  </div>
                  <div className="text-center p-4 bg-emerald-500/10 rounded border border-emerald-500/30">
                    <div className="text-3xl font-mono text-emerald-400 mb-1">10+</div>
                    <div className="text-xs text-slate-400">PLATFORMS</div>
                  </div>
                  <div className="text-center p-4 bg-green-500/10 rounded border border-green-500/30">
                    <div className="text-3xl font-mono text-green-400 mb-1">100%</div>
                    <div className="text-xs text-slate-400">DEDICATION</div>
                  </div>
                </div>
              </HexagonCard>

              <HexagonCard delay={0.6}>
                <h3 className="font-mono text-xl text-cyan-400 mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  CORE_SKILLS
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-cyan-400 rounded-full" />
                    <span>Web Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-cyan-400 rounded-full" />
                    <span>Design Thinking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-cyan-400 rounded-full" />
                    <span>Campaigns Setup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-cyan-400 rounded-full" />
                    <span>Automated Flows</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-cyan-400 rounded-full" />
                    <span>Problem-Solving</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-cyan-400 rounded-full" />
                    <span>Strong Communication</span>
                  </div>
                </div>
              </HexagonCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-mono mb-4 text-cyan-400">
              {'<'} TECH_STACK {'>'}
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-transparent" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Core Skills */}
            <HexagonCard delay={0.1}>
              <div className="mb-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-mono text-lg text-cyan-400">CORE_SKILLS</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.core.map((skill) => (
                  <Badge key={skill} className="bg-slate-800 border-cyan-500/30 text-cyan-400 font-mono text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </HexagonCard>

            {/* Campaign Managers & CRMs */}
            <HexagonCard delay={0.2}>
              <div className="mb-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded flex items-center justify-center">
                  <Layers className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-mono text-lg text-cyan-400">CRMs & TOOLS</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <Badge key={skill} className="bg-slate-800 border-cyan-500/30 text-cyan-400 font-mono text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </HexagonCard>

            {/* Design Tools */}
            <HexagonCard delay={0.3}>
              <div className="mb-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-mono text-lg text-cyan-400">DESIGN_TOOLS</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.design.map((skill) => (
                  <Badge key={skill} className="bg-slate-800 border-emerald-500/30 text-emerald-400 font-mono text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </HexagonCard>

            {/* Additional Skills */}
            <HexagonCard delay={0.5} className="md:col-span-2 lg:col-span-3">
              <div className="mb-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-mono text-lg text-cyan-400">ADDITIONAL_SKILLS</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.other.map((skill) => (
                  <Badge key={skill} className="bg-slate-800 border-orange-500/30 text-orange-400 font-mono text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </HexagonCard>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-mono mb-4 text-cyan-400">
              {'<'} EXPERIENCE_LOGS {'>'}
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-transparent" />
          </motion.div>

          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={exp.company}>
                <HexagonCard delay={0.1 * (index + 1)}>
                <div className="mb-4 flex items-start justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="font-mono text-xl text-cyan-400 mb-1">
                      {exp.company}
                    </h3>
                    <Badge className="bg-emerald-500/20 border-emerald-500/50 text-emerald-400 font-mono text-xs">
                      {exp.position}
                    </Badge>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="font-mono text-sm text-cyan-400 mb-3">KEY_RESPONSIBILITIES:</h4>
                  <div className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                        <span className="text-cyan-400 mt-1">▸</span>
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </HexagonCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl md:text-6xl font-mono mb-4 text-cyan-400">
              {'<'} INITIALIZE_CONTACT {'>'}
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-transparent mx-auto mb-6" />
            <p className="text-slate-400 font-mono">
              Ready to build something amazing? Let's connect.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <HexagonCard delay={0.2}>
              <h3 className="font-mono text-xl text-cyan-400 mb-6">SEND_MESSAGE</h3>
              <form 
                className="space-y-4"
                onSubmit={async (e) => {
                  e.preventDefault();
                  
                  // Validate form
                  if (!formData.name || !formData.email || !formData.message) {
                    toast.error("Please fill in all fields");
                    return;
                  }

                  // Email validation
                  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                  if (!emailRegex.test(formData.email)) {
                    toast.error("Please enter a valid email address");
                    return;
                  }

                  setIsSubmitting(true);

                  try {
                    // EmailJS configuration
                    const serviceId = (import.meta as any).env?.VITE_EMAILJS_SERVICE_ID;
                    const templateId = (import.meta as any).env?.VITE_EMAILJS_TEMPLATE_ID;
                    const publicKey = (import.meta as any).env?.VITE_EMAILJS_PUBLIC_KEY;

                    // Check if EmailJS is configured
                    if (!serviceId || !templateId || !publicKey || 
                        serviceId === "YOUR_SERVICE_ID" || 
                        templateId === "YOUR_TEMPLATE_ID" || 
                        publicKey === "YOUR_PUBLIC_KEY") {
                      // Fallback: Open mailto link if EmailJS is not configured
                      const subject = encodeURIComponent(`Contact from ${formData.name}`);
                      const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.email}`);
                      window.location.href = `mailto:mhahsan890@gmail.com?subject=${subject}&body=${body}`;
                      toast.info("Opening your email client. If EmailJS is configured, messages will be sent automatically.");
                      setFormData({ name: "", email: "", message: "" });
                      setIsSubmitting(false);
                      return;
                    }

                    // Send email via EmailJS (v4+ requires public key in send method)
                    const result = await emailjs.send(
                      serviceId,
                      templateId,
                      {
                        from_name: formData.name,
                        from_email: formData.email,
                        message: formData.message,
                        to_email: "mhahsan890@gmail.com",
                        reply_to: formData.email,
                      },
                      publicKey
                    );

                    if (result.status === 200) {
                      toast.success("Message transmitted successfully! I'll get back to you soon.");
                      setFormData({ name: "", email: "", message: "" });
                    } else {
                      throw new Error(`Unexpected status: ${result.status}`);
                    }
                  } catch (error: any) {
                    console.error("EmailJS error:", error);
                    
                    // Show more specific error message
                    const errorMessage = error?.text || error?.message || String(error) || "Unknown error";
                    
                    // Check for specific error types
                    if (errorMessage.includes("insufficient authentication scopes") || errorMessage.includes("412")) {
                      toast.error("Gmail authentication error. Please reconnect your Gmail service in EmailJS dashboard.");
                    } else if (errorMessage.includes("Invalid") || errorMessage.includes("401") || errorMessage.includes("403")) {
                      toast.error("EmailJS configuration error. Please check your Service ID, Template ID, and Public Key.");
                    } else if (errorMessage.includes("Failed to fetch") || errorMessage.includes("Network")) {
                      toast.error("Network error. Please check your internet connection and try again.");
                    } else {
                      // Fallback to mailto if EmailJS fails
                      const subject = encodeURIComponent(`Contact from ${formData.name}`);
                      const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.email}`);
                      window.location.href = `mailto:mhahsan890@gmail.com?subject=${subject}&body=${body}`;
                      toast.warning(`EmailJS error: ${errorMessage}. Opening email client as fallback.`);
                    }
                  } finally {
                    setIsSubmitting(false);
                  }
                }}
              >
                <div>
                  <label className="font-mono text-xs text-cyan-400 mb-2 block">NAME</label>
                  <Input 
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-slate-800/50 border-cyan-500/30 text-white font-mono focus:border-cyan-400"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-cyan-400 mb-2 block">EMAIL</label>
                  <Input 
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-slate-800/50 border-cyan-500/30 text-white font-mono focus:border-cyan-400"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-cyan-400 mb-2 block">MESSAGE</label>
                  <Textarea 
                    placeholder="Your message..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-slate-800/50 border-cyan-500/30 text-white font-mono focus:border-cyan-400 resize-none"
                    disabled={isSubmitting}
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-mono disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      TRANSMITTING...
                    </>
                  ) : (
                    "TRANSMIT_MESSAGE"
                  )}
                </Button>
              </form>
            </HexagonCard>

            {/* Contact Info & Links */}
            <div className="space-y-6">
              <HexagonCard delay={0.3}>
                <h3 className="font-mono text-xl text-cyan-400 mb-4">DIRECT_CHANNELS</h3>
                <div className="space-y-3">
                  <a 
                    href="mailto:mhahsan890@gmail.com"
                    className="flex items-center gap-3 p-3 bg-slate-800/30 rounded border border-cyan-500/20 hover:border-cyan-500/50 transition-colors group"
                  >
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <div>
                      <div className="text-xs text-slate-400 font-mono">EMAIL</div>
                      <div className="text-sm group-hover:text-cyan-400 transition-colors">mhahsan890@gmail.com</div>
                    </div>
                  </a>
                  <a 
                    href="tel:03284693727"
                    className="flex items-center gap-3 p-3 bg-slate-800/30 rounded border border-cyan-500/20 hover:border-cyan-500/50 transition-colors group"
                  >
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <div>
                      <div className="text-xs text-slate-400 font-mono">PHONE</div>
                      <div className="text-sm group-hover:text-cyan-400 transition-colors">0328-4693727</div>
                    </div>
                  </a>
                  <a 
                    href="#"
                    className="flex items-start gap-3 p-3 bg-slate-800/30 rounded border border-cyan-500/20 hover:border-cyan-500/50 transition-colors group"
                  >
                    <MapPin className="w-5 h-5 text-cyan-400 mt-1" />
                    <div>
                      <div className="text-xs text-slate-400 font-mono">LOCATION</div>
                      <div className="text-sm group-hover:text-cyan-400 transition-colors">Madni Garden Qasim Bela, Multan</div>
                    </div>
                  </a>
                </div>
              </HexagonCard>

              <HexagonCard delay={0.4}>
                <h3 className="font-mono text-xl text-cyan-400 mb-4">PROFESSIONAL_LINKS</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-slate-800/30 rounded border border-cyan-500/20">
                    <div className="text-xs text-slate-400 font-mono mb-1">AVAILABLE FOR</div>
                    <div className="text-sm text-cyan-400">GHL Development & Automation Projects</div>
                  </div>
                </div>
              </HexagonCard>

              <HexagonCard delay={0.5}>
                <div className="text-center p-4">
                  <div className="font-mono text-sm text-cyan-400 mb-2">SYSTEM_STATUS</div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-400 font-mono">AVAILABLE FOR PROJECTS</span>
                  </div>
                </div>
              </HexagonCard>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-mono text-sm text-slate-400">
            © 2025 MUHAMMAD_AHSAN | GHL_DEVELOPER | POWERED_BY_INNOVATION
          </p>
          <p className="font-mono text-xs text-slate-500 mt-2">
            Built with React + TypeScript + Tailwind CSS + Motion
          </p>
        </div>
      </footer>
    </div>
  );
}

function TerminalLine({ 
  children, 
  delay = 0, 
  isOutput = false 
}: { 
  children?: React.ReactNode; 
  delay?: number; 
  isOutput?: boolean; 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.3 }}
      className={isOutput ? 'text-slate-400' : 'text-cyan-400'}
    >
      {children}
    </motion.div>
  );
}