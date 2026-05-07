import { ShieldCheck, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
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
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">Privacy Policy</h1>
          </div>
          <p className="text-slate-500 text-sm font-medium uppercase tracking-widest">Last Updated: May 2026</p>
        </div>

        <div className="prose prose-invert prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-sky-400 hover:prose-a:text-sky-300">
          <h2>1. Introduction</h2>
          <p>
            Welcome to Sentrix Cargo (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy and ensuring 
            that your personal logistics data is handled securely. This Privacy Policy explains how we collect, use, 
            disclose, and safeguard your information when you use our intelligent operating system for global logistics.
          </p>

          <h2>2. Information We Collect</h2>
          <p>
            <strong>Personal Information:</strong> We may collect personal information such as your name, email address, 
            company details, and contact numbers when you register an account or interact with our system. Google Single Sign-On (SSO) collects your basic profile information (email, name, profile picture) according to Google&apos;s standard OAuth protocols.
          </p>
          <p>
            <strong>Logistics Data:</strong> To provide core services, we process shipping manifests, customs documents, 
            commercial invoices, Hs codes, destination details, and compliance risk factors uploaded to Sentrix Cargo.
          </p>
          <p>
            <strong>Usage Data:</strong> We automatically collect telemetry including IP address, browser type, device 
            characteristics, operating system, and system activity logs for security monitoring and platform improvement.
          </p>

          <h2>3. How We Use Information</h2>
          <ul>
            <li>To operate and maintain the Sentrix Cargo platform.</li>
            <li>To facilitate customs compliance checks, route calculations, and AI-driven risk scoring.</li>
            <li>To manage your account and communicate with you about service updates, alerts, and security notices.</li>
            <li>To enforce our terms, conditions, and policies.</li>
          </ul>

          <h2>4. Information Sharing and Disclosure</h2>
          <p>
            We do not sell or rent your personal data to third parties. We may share information with: 
          </p>
          <ul>
            <li>Third-party service providers (like Google Cloud Platform) performing hosting, storage, and AI inference on our behalf.</li>
            <li>Regulatory authorities and law enforcement when legally required to disclose compliance violations.</li>
          </ul>

          <h2>5. Data Security</h2>
          <p>
            We employ enterprise-grade security measures including at-rest encryption, TLS 1.3 transit encryption, and Zero-Trust network architecture to protect your data. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.
          </p>

          <h2>6. Third-Party Authentication</h2>
          <p>
            By using &quot;Sign in with Google&quot;, you understand that we will receive your Google profile information. We handle this data strictly under the terms of this policy. You can revoke our app&apos;s access at any time through your Google Account Security settings.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            If you have questions or concerns about this Privacy Policy, please contact our privacy compliance team at 
            <a href="mailto:privacy@sentrixcargo.com"> privacy@sentrixcargo.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
