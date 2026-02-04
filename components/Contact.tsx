import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const contacts = [
  {
    name: "Email",
    link: "mailto:habilyakubarafah@gmail.com",
    icon: FaEnvelope,
    color: "#EA4335"
  },
  {
    name: "GitHub",
    link: "https://github.com/Skuylife",
    icon: FaGithub,
    color: "#181717"
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/habil-yakub-arapah-713514290/",
    icon: FaLinkedin,
    color: "#0A66C2"
  },
  {
    name: "WhatsApp",
    link: "https://wa.me/6282286191121",
    icon: FaWhatsapp,
    color: "#25D366"
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/arafah_habil",
    icon: FaInstagram,
    color: "#E4405F"
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Get In Touch</h2>
        <p className="text-gray-600 mb-12">
          Feel free to reach out for collaborations or just a friendly chat
        </p>

        <div className="flex justify-center gap-6">
          {contacts.map((contact) => {
            const Icon = contact.icon;
            return (
              <a
                key={contact.name}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 group"
              >
                <div 
                  className="p-4 rounded-full transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${contact.color}15` }}
                >
                  <Icon 
                    size={28} 
                    style={{ color: contact.color }}
                  />
                </div>
                <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                  {contact.name}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}