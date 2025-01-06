import Image from "next/image";
import Link from "next/link";
import { 
  Linkedin, 
  Twitter, 
  Mail, 
  ArrowRight, 
  Award, 
  Target,
  Globe,
  Rocket,
  BookOpen,
  TreePine
} from "lucide-react";
import { teamMembers } from "../data/TeamData";
import { 
  FadeInScroll, 
  StaggerContainer, 
  ParallaxScroll, 
  HoverScale 
} from "@/components/FramerMotions";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-transparent pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Page Header */}
        <FadeInScroll>
          <div className="text-center mb-16 bg-transparent bg-white/10 backdrop-blur-md rounded-xl p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Our Company
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Transforming Spaces, Inspiring Lives Through Innovative Design
            </p>
          </div>
        </FadeInScroll>

        {/* Company Background Section */}
        <ParallaxScroll>
          <div className="max-w-4xl mx-auto mb-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <HoverScale>
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <Image
                    src="/company/company-founding.jpg"
                    alt="Company Founding Moment"
                    fill
                    className="object-cover"
                  />
                </div>
              </HoverScale>
              <div className="bg-transparent bg-white/10 backdrop-blur-md rounded-xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Our Story
                </h2>
                <p className="text-white/80 leading-relaxed mb-4">
                  Founded in 2015, our company emerged from a passionate vision to redefine interior and exterior design. What started as a small design studio has grown into a comprehensive design solutions provider, driven by creativity, innovation, and a commitment to transforming spaces.
                </p>
                <p className="text-white/80 leading-relaxed">
                  Our journey began with a simple belief: every space has a story waiting to be told. We've since worked with hundreds of clients, turning their dreams into tangible, breathtaking realities across residential, commercial, and public spaces.
                </p>
              </div>
            </div>
          </div>
        </ParallaxScroll>

        {/* Vision and Mission Section */}
        <StaggerContainer>
          <div className="max-w-4xl mx-auto mb-24">
            <div className="bg-transparent bg-white/10 backdrop-blur-md rounded-xl p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                    <Globe className="mr-4 text-white/80" /> Our Vision
                  </h2>
                  <p className="text-white/80 leading-relaxed">
                    To be the global leader in transformative design, creating spaces that not only meet functional needs but also inspire, heal, and elevate human experiences. We aim to push the boundaries of design, blending technology, sustainability, and artistic expression.
                  </p>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                    <Rocket className="mr-4 text-white/80" /> Our Mission
                  </h2>
                  <p className="text-white/80 leading-relaxed">
                    Empower individuals and organizations by crafting exceptional design solutions that reflect unique identities, enhance well-being, and create meaningful connections between people and their environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </StaggerContainer>

        {/* Future Plans Section */}
        <FadeInScroll>
          <div className="max-w-4xl mx-auto mb-24">
            <div className="bg-transparent bg-white/10 backdrop-blur-md rounded-xl p-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Our Future Roadmap
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <HoverScale>
                  <div className="text-center">
                    <BookOpen className="w-12 h-12 mx-auto text-white/80 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Sustainable Innovation
                    </h3>
                    <p className="text-white/70">
                      Invest in eco-friendly design technologies and sustainable material research
                    </p>
                  </div>
                </HoverScale>
                <HoverScale>
                  <div className="text-center">
                    <TreePine className="w-12 h-12 mx-auto text-white/80 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Global Expansion
                    </h3>
                    <p className="text-white/70">
                      Expand our design services to international markets and diverse cultural contexts
                    </p>
                  </div>
                </HoverScale>
                <HoverScale>
                  <div className="text-center">
                    <Rocket className="w-12 h-12 mx-auto text-white/80 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Digital Transformation
                    </h3>
                    <p className="text-white/70">
                      Integrate AI and virtual reality into our design process and client experiences
                    </p>
                  </div>
                </HoverScale>
              </div>
            </div>
          </div>
        </FadeInScroll>

        {/* Team Members Chain Layout */}
        <StaggerContainer>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/20"></div>

            {/* Team Members Grid */}
            <div className="grid gap-16 max-w-4xl mx-auto relative">
              {teamMembers
                .sort((a, b) => a.rank - b.rank)
                .map((member, index) => (
                  <FadeInScroll key={member.id}>
                    <div 
                      className={`flex items-center space-x-8 group 
                        ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}
                        relative`}
                    >
                      {/* Connecting Dot */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 
                        w-6 h-6 bg-white/30 rounded-full 
                        group-hover:bg-white/50 transition-all duration-300
                        -top-4"></div>

                      {/* Member Card */}
                      <div 
                        className={`flex-1 bg-transparent bg-white/10 backdrop-blur-md 
                        rounded-xl p-6 shadow-lg transition-all duration-300 
                        group-hover:shadow-xl 
                        ${index % 2 === 0 ? 'mr-16' : 'ml-16'}`}
                      >
                        <div className="flex items-center space-x-6">
                          {/* Profile Image */}
                          <HoverScale>
                            <div className="relative w-32 h-32 rounded-full overflow-hidden">
                              <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform"
                              />
                            </div>
                          </HoverScale>

                          {/* Member Details */}
                          <div className="flex-1">
                            <h2 className="text-2xl font-bold text-white mb-1">
                              {member.name}
                            </h2>
                            <p className="text-white/80 mb-2">{member.title}</p>
                            
                            {/* Expertise Chips */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {member.expertise.slice(0, 3).map((skill) => (
                                <span 
                                  key={skill}
                                  className="bg-white/20 text-white/80 
                                  px-2 py-1 rounded-full text-xs"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>

                            {/* Social Links */}
                            <div className="flex space-x-3">
                              {member.socialLinks?.linkedin && (
                                <Link 
                                  href={member.socialLinks.linkedin} 
                                  target="_blank"
                                  className="text-white/70 hover:text-white"
                                >
                                  <Linkedin className="w-5 h-5" />
                                </Link>
                              )}
                              {member.socialLinks?.twitter && (
                                <Link 
                                  href={member.socialLinks.twitter} 
                                  target="_blank"
                                  className="text-white/70 hover:text-white"
                                >
                                  <Twitter className="w-5 h-5" />
                                </Link>
                              )}
                              {member.socialLinks?.email && (
                                <Link 
                                  href={`mailto:${member.socialLinks.email}`}
                                  className="text-white/70 hover:text-white"
                                >
                                  <Mail className="w-5 h-5" />
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Bio */}
                        <p className="text-white/80 mt-4 text-sm leading-relaxed">
                          {member.bio}
                        </p>
                      </div>
                    </div>
                  </FadeInScroll>
                ))}
            </div>
          </div>
        </StaggerContainer>

        {/* Company Values Section */}
        <FadeInScroll>
          <div className="mt-24 max-w-4xl mx-auto">
            <div className="bg-transparent bg-white/10 backdrop-blur-md rounded-xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                Our Core Values
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <HoverScale>
                  <div className="text-center">
                    <Target className="w-12 h-12 mx-auto text-white/80 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Innovation
                    </h3>
                    <p className="text-white/70">
                      Constantly pushing boundaries and exploring new design frontiers
                    </p>
                  </div>
                </HoverScale>
                <HoverScale>
                  <div className="text-center">
                    <Award className="w-12 h-12 mx-auto text-white/80 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Excellence
                    </h3>
                    <p className="text-white/70">
                      Delivering exceptional quality in every project we undertake
                    </p>
                  </div>
                </HoverScale>
                <HoverScale>
                  <div className="text-center">
                    <ArrowRight className="w-12 h-12 mx-auto text-white/80 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Collaboration
                    </h3>
                    <p className="text-white/70">
                      Working together to create transformative design solutions
                    </p>
                  </div>
                </HoverScale>
              </div>
            </div>
          </div>
        </FadeInScroll>
      </div>
    </div>
  );
}
