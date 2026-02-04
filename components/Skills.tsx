import { 
  SiPhp, SiJavascript, SiTypescript, SiLaravel, SiCodeigniter,
  SiReact, SiNextdotjs, SiFlutter, SiKotlin, SiMysql,
  SiPostman, SiGit, SiGithub, SiGitlab, SiCisco,
  SiDart, SiHtml5, SiCss3, SiLinux
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';
import { VscCode } from 'react-icons/vsc'; // Import dari vsc

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Java", icon: FaJava, color: "#007396" },
      { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
      { name: "Dart", icon: SiDart, color: "#0175C2" },
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss3, color: "#1572B6" },
    ]
  },
  {
    title: "Frameworks",
    skills: [
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "CodeIgniter", icon: SiCodeigniter, color: "#EF4223" },
      { name: "React Native", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
    ]
  },
  {
    title: "Tools & Infrastructure",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "REST API", icon: TbApi, color: "#009688" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "GitLab", icon: SiGitlab, color: "#FC6D26" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "VS Code", icon: VscCode, color: "#007ACC" }, // Ganti dengan VscCode
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
      { name: "Cisco CCNA", icon: SiCisco, color: "#1BA0D7" },
    ]
  }
];

export default function Skills() {
  return (
    <section id='skills' className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-gray-900">Skills</h2>

        <div className="space-y-10">
          {skillCategories.map(category => (
            <div key={category.title}>
              <h3 className="text-lg font-semibold mb-4 text-gray-700">
                {category.title}
              </h3>
              <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                {category.skills.map(skill => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="border rounded-lg p-3 text-center bg-white hover:shadow-lg transition group"
                    >
                      <Icon 
                        className="w-8 h-8 mx-auto mb-1.5 transition-transform group-hover:scale-110" 
                        style={{ color: skill.color }}
                      />
                      <p className="text-xs font-medium text-gray-700">
                        {skill.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}