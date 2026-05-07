import { ShieldCheck, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-sky-500/30">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 space-y-12">
        <div className="space-y-6">
          <Link href="/">
            <Button variant="ghost" className="text-slate-400 hover:text-white mb-4 -ml-4 rounded-xl">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </Link>
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-sky-500/10 flex items-center justify-center border border-sky-500/20">
              <ShieldCheck className="h-6 w-6 text-sky-400" />
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">Terms of Service</h1>
          </div>
          <p className="text-slate-500 text-sm font-medium uppercase tracking-widest">Last Updated: May 2026</p>
        </div>

        <div className="prose prose-invert prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-sky-400 hover:prose-a:text-sky-300">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Sentrix Cargo platform, you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our software or services.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            Sentrix Cargo is an intelligent logistics operating system providing AI-driven trade compliance analysis, document data extraction, supply chain tracking, and analytics designed to facilitate secure global trade.
          </p>

          <h2>3. User Responsibilities</h2>
          <ul>
            <li>You must provide accurate and complete registration information.</li>
            <li>You are responsible for safeguarding your login credentials and maintaining the security of your account.</li>
            <li>You must not use the platform to orchestrate illegal shipments, falsify customs data, or violate sanctions or trade embargoes.</li>
            <li>You are solely responsible for the accuracy of shipping data submitted to the system and acknowledge that AI-generated compliance analysis implies estimation and does not replace official legal customs counsel.</li>
          </ul>

          <h2>4. AI Outputs and Liability</h2>
          <p>
            Our platform uses Artificial Intelligence (AI) to parse documents and estimate compliance risks. While designed to be highly accurate, these outputs are advisory. Sentrix Cargo makes no warranties regarding the absolute accuracy of extracted fields or risk scores. Users are expected to employ human audit processes prior to formal customs submission.
          </p>

          <h2>5. Intellectual Property</h2>
          <p>
            The software, UI design, infrastructure, and underlying intellectual property are owned by Sentrix Cargo. You are granted a limited, non-exclusive, non-transferable license to use the system for intended business purposes.
          </p>

          <h2>6. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your account at any time, without prior notice or liability, if we determine that you have violated these Terms of Service, engaged in fraudulent trade practices, or posed a security risk to the platform.
          </p>

          <h2>7. Disclaimer of Warranties</h2>
          <p>
            The platform is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement.
          </p>

          <h2>8. Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with applicable international trade laws without regard to conflict of law principles.
          </p>

          <h2>9. Contact Informarion</h2>
          <p>
            For legal inquiries, please contact <a href="mailto:legal@sentrixcargo.com">legal@sentrixcargo.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
