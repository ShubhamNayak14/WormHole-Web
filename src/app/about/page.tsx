import React from "react";
import Link from "next/link";
import {
  Shield,
  Zap,
  Eye,
  Rocket,
  XCircle,
  Globe,
  Upload,
  Key,
  Download,
  Lock,
} from "lucide-react";
import Image from "next/image";

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white dark:bg-[#1a1a1a] p-6 rounded-xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-1">
      <div className="flex items-center mb-4">
        <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-3" />
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-300">
          {title}
        </h3>
      </div>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}

function StepCard({
  number,
  icon: Icon,
  title,
  description,
}: {
  number: string;
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 bg-indigo-100 dark:bg-gray-800 rounded-full p-3">
        <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-300 mb-2">
          {number} {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-300">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <div className="flex justify-center items-center mb-6">
            <Lock className="w-12 h-12 mr-4" />
            <h1 className="text-4xl font-bold">SecureShare</h1>
          </div>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Privacy-first file sharing—no middlemen, no tracking, just secure
            transfers.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        {/* Story Section */}
        <section className="mb-16 bg-white dark:bg-[#1a1a1a] rounded-2xl p-8 shadow-lg">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-300 mb-6">
              Why We Built SecureShare
            </h2>
            <div className="prose text-gray-600 dark:text-gray-400 space-y-4">
              <p>
                Picture this: You&rsquo;re sitting next to a colleague, racing
                against a tight deadline. They need to share a large file with
                you—should be simple, right? But the file is too large for
                email. No USB stick in sight. Different operating systems rule
                out AirDrop. The only solution? Splitting the file and uploading
                it to a cloud service, sending your data on a journey across
                continents just to reach someone sitting right next to you.
              </p>
              <p>
                It&rsquo;s absurd when you think about it. You can share a
                coffee, pass a document, or offer a toffee to your colleague
                without any intermediary—why should digital file sharing be any
                different?
              </p>
              <p className="text-lg font-medium text-indigo-600 dark:text-indigo-400">
                That&rsquo;s why we created SecureShare: to make file sharing as
                simple as passing a note to the person next to you, but with
                bank-grade security built in.
              </p>
            </div>
          </div>
        </section>

        <div className=" rounded-xl p-6">
          <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-300  mb-4 text-center">
            Traditional File Sharing
          </h4>
          <Image
            src="img1.jpeg"
            alt="Traditional file sharing through third-party servers"
            className="w-full max-w-4xl mx-auto rounded-lg"
          />
          <p className="text-gray-800 dark:text-gray-300 mt-4 text-center">
            Your files take a long journey through third-party servers
          </p>
        </div>

        {/* Why SecureShare? */}
        <section className="mb-16 mt-10">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-300 mb-6 text-center">
            Why SecureShare?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={Shield}
              title="End-to-End Encryption"
              description="Your files are encrypted before they leave your device, ensuring only the intended recipient can access them."
            />
            <FeatureCard
              icon={Zap}
              title="Direct P2P Transfers"
              description="Files are never stored on a server—they go directly from sender to receiver, keeping your data private."
            />
            <FeatureCard
              icon={Eye}
              title="Zero-Knowledge Privacy"
              description="We don't track, log, or analyze your data. Your files remain your files, not ours."
            />
            <FeatureCard
              icon={Rocket}
              title="Fast & Efficient"
              description="No sign-ups, no waiting—just a one-time secure code for instant sharing."
            />
            <FeatureCard
              icon={XCircle}
              title="One-Time Transfers"
              description="Each file transfer is temporary—once completed, the session expires automatically."
            />
            <FeatureCard
              icon={Globe}
              title="Works Anywhere"
              description="Share files from any modern browser—no need for additional apps or accounts."
            />
          </div>
        </section>
        <div className=" rounded-xl p-6 mb-10">
          <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-300  mb-4 text-center">
            WormHole File Sharing
          </h4>
          <Image
            src="img.jpeg"
            alt="Traditional file sharing through third-party servers"
            className="w-full max-w-4xl mx-auto rounded-lg"
          />
          <p className="text-gray-800 dark:text-gray-300 mt-4 text-center">
            &quot;I like how we&rsquo;ve had the Internet for decades, yet
            &lsquo;sending files&rsquo; is something early adopters are still
            figuring out how to do.&quot;
          </p>
        </div>

        {/* How It Works */}
        <section className="bg-white dark:bg-[#1a1a1a] p-8 rounded-2xl shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
          <div className="space-y-8">
            <StepCard
              number="1."
              icon={Upload}
              title="Upload your file"
              description="SecureShare encrypts your data before transfer."
            />
            <StepCard
              number="2."
              icon={Key}
              title="Get a secure code"
              description="Share the unique code with your recipient."
            />
            <StepCard
              number="3."
              icon={Download}
              title="Transfer directly"
              description="Recipient enters the code and downloads securely."
            />
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <p className="text-lg mb-8">
            No storage. No tracking. Just private, secure file sharing.
          </p>
          <Link href={"/main"}>
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
              Try WormHole Now 🚀
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
}

export default App;
