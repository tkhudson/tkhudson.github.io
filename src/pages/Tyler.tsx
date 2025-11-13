import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import GlitchText from '../components/GlitchText';
import Articles from '../components/Articles';

const Tyler = () => {
  const [selectedArticle, setSelectedArticle] = useState<string>('');

  const experience = [
    {
      title: 'Network Administrator',
      company: 'Global Evangelism Inc',
      period: 'August 2023 – Present',
      location: 'San Antonio, TX',
      achievements: [
        'Manages a Windows-based network for 3,000+ users, leveraging Cisco ISE, Cisco Umbrella, and Cisco Catalyst Center to ensure secure access and optimal performance',
        'Implements system imaging, patching, and backup strategies using Cisco Firewalls and Cisco IOS, reducing downtime by 25% and ensuring compliance with NIST SP 800-53',
        'Configures and troubleshoots Cisco Switches, APs, and WLCs, integrating Microsoft 365 and Active Directory for seamless user management'
      ]
    },
    {
      title: 'Solutions Engineer',
      company: 'Hudson I.T. Consulting LLC',
      period: '2019 – Present',
      location: 'San Antonio, TX',
      achievements: [
        'Designs secure IT solutions for 8+ clients using Ubiquiti UDM, Switches, and APs, focusing on network architecture and cloud integration with Azure and AWS',
        'Builds frontend interfaces with Vue.js, JavaScript, HTML5, and CSS, connecting to APIs for seamless user experiences; in addition to building business-friendly Wordpress websites using Elementor',
        'Manages projects with JIRA and Confluence in Agile workflows, utilizing Git for version control and Office 365/Entra admin centers for client management',
        'Performs risk assessments and drafts security policies, reducing vulnerabilities by NIST and HIPAA standards'
      ]
    },
    {
      title: 'Site Reliability Engineer',
      company: 'Microsoft',
      period: 'August 2022 – May 2023',
      location: 'Redmond, WA',
      achievements: [
        'Conducted vulnerability assessments using Cisco Orbital and Azure tools, aligning systems with FISMA and NIST cybersecurity frameworks',
        'Developed Terraform scripts to automate Azure resource provisioning',
        'Monitored performance with Zenoss and Azure Monitor, creating dashboards that achieved 99.9% uptime by mitigating risks across multi-region systems',
        'Managed CI/CD pipelines with Azure DevOps and Git, streamlining deployments and ensuring consistent code delivery for development teams',
        'Participated in on-call rotations using PagerDuty, documenting runbooks and postmortem analyses to standardize incident responses and minimize downtime'
      ]
    },
    {
      title: 'IT Helpdesk Specialist',
      company: 'Nutrabolt',
      period: 'January 2022 – August 2022',
      location: 'Austin, TX',
      achievements: [
        'Supported 200+ Windows workstations with Office 365, performing updates, patch management, and OS imaging for operational continuity',
        'Administered Active Directory and Group Policies for a 200-user environment, enhancing network security and access efficiency',
        'Documented backup and recovery procedures, reducing incident response times by 20%',
        'Provided Tier 1 support, resolving 100+ tickets monthly and ensuring user satisfaction through clear communication'
      ]
    }
  ];

  const skills = [
    {
      category: 'Technologies',
      items: ['Azure', 'AWS', 'PowerShell', 'Python', 'Git', 'CI/CD', 'Infrastructure as Code', 'Cisco ISE', 'Cisco XDR', 'Ubiquiti Networking', 'Azure DevOps', 'Zenoss', 'JIRA', 'Confluence', 'Office 365', 'Active Directory']
    },
    {
      category: 'Cybersecurity',
      items: ['Cisco AMP for Endpoints', 'Cisco Umbrella', 'Cisco Firewalls', 'XDR', 'EDR', 'SIEM', 'IAM', 'NIST SP 800-53', 'FISMA', 'HIPAA']
    },
    {
      category: 'Networking',
      items: ['Cisco Switches (IOS)', 'Cisco WLCs', 'Fiber', 'Ethernet', 'Ubiquiti UDM', 'Ubiquiti Switches', 'Ubiquiti Aps', 'DNS']
    },
    {
      category: 'Cloud Computing',
      items: ['Azure Virtual Networking', 'AWS Web Apps', 'Terraform', 'Docker']
    },
    {
      category: 'Frontend Development',
      items: ['Vue.js', 'JavaScript', 'HTML5', 'CSS', 'Wordpress', 'Elementor']
    },
    {
      category: 'Project Management',
      items: ['JIRA', 'Confluence', 'Agile Workflows']
    },
    {
      category: 'Systems Management',
      items: ['Windows Server', 'Log Analysis', 'System Hardening', 'OS Imaging']
    },
    {
      category: 'Analytical & Documentation',
      items: ['Incident Reporting', 'Runbooks', 'Playbooks', 'Root Cause Analysis']
    }
  ];

  const certifications = [
    { name: 'AZ-900: Microsoft Azure Fundamentals', issuer: 'Microsoft', date: 'February 2024', id: '6CADL4-5730A2' },
    { name: 'CompTIA Security+', issuer: 'CompTIA', date: 'April 2025', id: 'COMP001022568724' }
  ];

  return (
    <div className="min-h-screen bg-tech-bg text-white">
      {/* Matrix-style background effect */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-tech-accent/20 to-transparent"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300FF41' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
              className="text-5xl md:text-7xl font-tech mb-6"
            >
              <GlitchText
                text="Tyler Hudson:"
                className="text-tech-accent block"
              />
              <span className="text-white">Network & CyberSecurity Administrator</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Dedicated IT Professional with over 3 years of experience in cybersecurity, cloud solutions engineering, and network administration.
              Proven track record of designing secure, scalable solutions using Cisco, Azure, and Ubiquiti technologies.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="#experience"
                className="bg-tech-accent text-black px-8 py-3 rounded font-semibold hover:bg-tech-accent/80 transition-colors"
              >
                View Experience
              </a>
              <a
                href="/assets/tyler_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-tech-accent text-tech-accent px-8 py-3 rounded font-semibold hover:bg-tech-accent hover:text-black transition-colors"
              >
                Download Resume
              </a>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <AnimatedSection id="experience" className="px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-tech-accent">
              Professional Experience
            </h2>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <motion.div
                  key={`${job.company}-${job.title}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-surface p-6 rounded-lg border border-tech-accent/30 hover:border-tech-accent transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-1 text-tech-accent">
                        {job.title}
                      </h3>
                      <p className="text-gray-300 mb-2">{job.company} • {job.location}</p>
                    </div>
                    <span className="text-tech-accent font-mono text-sm">{job.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start">
                        <span className="text-tech-accent mr-2 mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection className="px-4 bg-surface/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-tech-accent">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-surface p-6 rounded-lg border border-tech-accent/30"
                >
                  <h3 className="text-lg font-semibold mb-4 text-tech-accent">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="bg-tech-accent/20 text-tech-accent px-2 py-1 rounded text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Certifications & Education Section */}
        <AnimatedSection className="px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-tech-accent">
              Certifications & Education
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-surface p-6 rounded-lg border border-tech-accent/30">
                <h3 className="text-xl font-semibold mb-4 text-tech-accent">
                  Certifications
                </h3>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="border-l-4 border-tech-accent pl-4">
                      <h4 className="font-semibold text-white">{cert.name}</h4>
                      <p className="text-gray-300 text-sm">{cert.issuer} • {cert.date}</p>
                      <p className="text-tech-accent text-xs font-mono">ID: {cert.id}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-surface p-6 rounded-lg border border-tech-accent/30">
                <h3 className="text-xl font-semibold mb-4 text-tech-accent">
                  Education
                </h3>
                <div className="border-l-4 border-tech-accent pl-4">
                  <h4 className="font-semibold text-white">Bachelor of Science in Computer Information Systems</h4>
                  <p className="text-gray-300">Texas State University, San Antonio, TX</p>
                  <p className="text-tech-accent text-sm">August 2022 • GPA: 3.4</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Articles Section */}
        <AnimatedSection className="px-4 bg-surface/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-tech-accent">
              Technical Articles & Projects
            </h2>
            <Articles
              selectedArticle={selectedArticle}
              onArticleSelect={setSelectedArticle}
            />
          </div>
        </AnimatedSection>

        {/* Resume Download Section */}
        <AnimatedSection className="px-4 bg-surface/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-tech-accent">
              Download Full Resume
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the complete details of my experience, skills, and achievements in cybersecurity and network administration.
            </p>
            <div className="bg-surface p-8 rounded-lg border border-tech-accent/30">
              <p className="text-gray-300 mb-6">
                Download my comprehensive resume with detailed work history, technical skills, and professional achievements.
              </p>
              <a
                href="/assets/tyler_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-tech-accent text-black px-8 py-3 rounded font-semibold hover:bg-tech-accent/80 transition-colors"
              >
                Download PDF Resume
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Tyler;
