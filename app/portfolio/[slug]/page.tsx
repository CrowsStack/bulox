import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { portfolioData } from "../../data/PortfolioData";

export default function PortfolioProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = portfolioData[params.slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-transparent pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Back Button */}
        <Link
          href="/portfolio"
          className="inline-flex items-center text-white hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Portfolio
        </Link>

        {/* Hero Section */}
        <div className="relative h-[60vh] rounded-xl overflow-hidden mb-16">
          <Image
            src={project.images[0]}
            alt={project.title}
            width={1200}
            height={800}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <p className="text-sm uppercase tracking-wider mb-2">
                {project.category}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl">{project.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-12 ">
          {/* Left Column - Main Content */}
          <div className="md:col-span-2 space-y-12 bg-transparent bg-white/10 backdrop-blur-md  rounded-xl p-8">
            {/* Project Description */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Project Overview</h2>
              <p className="text-white leading-relaxed">
                {project.fullDescription}
              </p>
            </section>

            {/* Features */}
            <section>
              <h2 className="text-2xl text-white font-bold mb-4">Key Features</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-2 bg-gray-50/70 p-4 rounded-lg"
                  >
                    <Check className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <span className="text-white">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Challenges & Solutions */}
            <section className="grid sm:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl  text-white font-bold mb-4">Challenges</h2>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="text-white">
                      • {challenge}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">Solutions</h2>
                <ul className="space-y-3">
                  {project.solutions.map((solution, index) => (
                    <li key={index} className="text-white">
                      • {solution}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Project Gallery */}
            <section>
              <h2 className="text-2xl text-white font-bold mb-6">Project Gallery</h2>
              <div className="grid grid-cols-2 gap-4">
                {project.gallery.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-[4/3] rounded-lg overflow-hidden"
                  >
                    <Image
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      width={600}
                      height={400}
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Project Specifications */}
            <section className="bg-white/80 backdrop-blur-md p-6 rounded-xl">
              <h2 className="text-xl font-bold mb-4">Project Details</h2>
              <div className="space-y-4">
                {Object.entries(project.specifications).map(([key, value]) => (
                  <div key={key}>
                    <p className="text-sm text-gray-500">{key}</p>
                    <p className="font-medium">{value}</p>
                  </div>
                ))}
                <div>
                  <p className="text-sm text-gray-500">Timeline</p>
                  <p className="font-medium">{project.timeline}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">{project.location}</p>
                </div>
              </div>
            </section>

            {/* Client Testimonial */}
            {project.clientTestimonial && (
              <section className="bg-emerald-50/70 backdrop-blur-md p-6 rounded-xl">
                <h2 className="text-xl font-bold mb-4">Client Testimonial</h2>
                <blockquote className="text-gray-600 italic mb-4">
                  "{project.clientTestimonial.text}"
                </blockquote>
                <p className="font-medium">{project.clientTestimonial.author}</p>
                <p className="text-sm text-gray-500">
                  {project.clientTestimonial.role}
                </p>
              </section>
            )}

            {/* Related Services */}
            <section>
              <h2 className="text-xl font-bold mb-4">Related Services</h2>
              <div className="space-y-2">
                {project.relatedServices.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white/70 backdrop-blur-md px-4 py-2 rounded-lg text-gray-700"
                  >
                    {service}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
