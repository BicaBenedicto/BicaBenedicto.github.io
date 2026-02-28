import React, { createContext, useState, useEffect } from 'react';

export const LanguageContext = createContext();

export const translations = {
  en: {
    header: {
      about: 'About',
      skills: 'Skills',
      chatbot: 'Chatbot Expertise',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      badge: 'Available for Opportunities',
      greeting: "Hello, I'm Gabriel a",
      role1: 'Full Stack Developer',
      role2: 'Chatbot Specialist',
      subheading: {
        part1: 'With',
        highlight1: '4 years of professional experience',
        part2: 'and a proven',
        highlight2: 'Tech Lead background',
        part3: ', I build innovative solutions and complex integrations that drive business success.'
      },
      ctaPrimary: "Let's Work Together",
      ctaSecondary: 'View My Work'
    },
    about: {
      title: 'About Me',
      journeyTitle: 'Professional Journey',
      bio: [
        {
          part1: 'As a',
          highlight1: 'Full Stack Developer',
          part2: 'with',
          highlight2: '4 years of professional experience',
          part3: ", I've evolved from crafting elegant code to leading technical teams and shaping product strategies."
        },
        {
          part1: 'My journey as a',
          highlight1: 'Tech Lead',
          part2: "has taught me that great software isn't just about clean code—it's about understanding business needs, mentoring team members, and delivering solutions that create real impact."
        },
        {
          part1: 'I specialize in building',
          highlight1: 'scalable web applications',
          part2: 'and',
          highlight2: 'intelligent chatbot systems',
          part3: ', with expertise in complex integrations that bridge multiple platforms and services seamlessly.'
        },
        {
          text: 'My passion lies in transforming challenging problems into elegant, user-centric solutions that drive business growth and enhance user experiences.'
        }
      ],
      achievements: [
        { title: 'Tech Lead Experience', description: 'Successfully led development teams and mentored junior developers' },
        { title: '4 Years Professional', description: 'Proven track record of delivering high-quality solutions' },
        { title: 'Problem Solver', description: 'Expert at architecting innovative solutions to complex challenges' },
        { title: 'Business Impact', description: 'Driven results through strategic technical leadership' }
      ],
      stats: {
        experience: 'Years Experience',
        projects: 'Projects Completed',
        stacks: 'Tech Stacks',
        satisfaction: 'Client Satisfaction'
      }
    },
    techStack: {
      title: 'Technical Stack',
      subtitle: 'Leveraging modern technologies to build scalable, performant, and maintainable solutions',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Databases',
        cloud: 'Cloud & Services',
        languages: 'Languages'
      },
      skills: {
        react: "Building modern, responsive user interfaces with component-based architecture",
        svelte: "Creating lightweight, reactive web components",
        typescript: "Ensuring type safety and code quality in large-scale applications",
        nodejs: "Developing scalable backend services and APIs",
        java: "Building enterprise-level applications and microservices",
        python: "Data processing and automation scripting",
        mysql: "Designing and managing relational databases",
        firebase: "Building real-time applications with cloud infrastructure",
        bigquery: "Analyzing large datasets and business intelligence"
      },
      levels: {
        expert: "Expert",
        advanced: "Advanced",
        intermediate: "Intermediate"
      },
      note: {
        part1: 'Constantly learning and adapting to new technologies.',
        highlight: 'Always exploring emerging tools',
        part2: 'to deliver cutting-edge solutions.'
      }
    },
    chatbot: {
      badge: 'Specialized Expertise',
      title: 'Chatbot Specialization',
      subtitle: {
        part1: 'Expert in creating intelligent virtual assistants on the',
        highlight: 'Blip platform',
        part2: ', with extensive experience in complex integrations'
      },
      features: [
        { title: 'Blip Platform Expert', description: 'Deep expertise in building sophisticated virtual assistants on the Blip platform' },
        { title: 'Complex Integrations', description: 'Seamlessly connect multiple third-party services and APIs' },
        { title: 'Custom Solutions', description: 'Tailored chatbot solutions that align with business objectives' },
        { title: 'Conversational AI', description: 'Natural, engaging user experiences with intelligent workflows' }
      ],
      integrationsTitle: 'Platform Integrations',
      integrationsSubtitle: 'Extensive experience integrating chatbots with enterprise-grade platforms and services',
      integrationList: [
        { name: 'RD Station', description: 'Marketing automation and CRM integration' },
        { name: 'Zendesk', description: 'Customer support and ticketing system' },
        { name: 'Hubspot', description: 'Sales and marketing platform integration' },
        { name: 'Clevertap', description: 'Customer engagement and analytics' },
        { name: 'Braze', description: 'Customer engagement platform' },
        { name: 'Bitrix', description: 'Business management and CRM' },
        { name: 'Tray', description: 'Integration platform as a service' },
        { name: 'Feegow', description: 'Health clinic management' },
        { name: 'Slack', description: 'Corporate communication and collaboration platform' },
        { name: 'Zapier', description: 'Automation platform' },
        { name: 'Imoview', description: 'CRM for property management' },
        { name: 'Clinica nas nuvens', description: 'Health clinic management' },
      ],
      ctaTitle: 'Ready to Build Your Chatbot?',
      ctaDesc: "Let's create an intelligent virtual assistant that seamlessly integrates with your business tools and delivers exceptional customer experiences.",
      ctaButton: 'Discuss Your Project'
    },
    projects: {
      badge: 'Featured Work',
      title: 'Projects & Portfolio',
      subtitle: 'A showcase of innovative solutions and successful implementations across various domains',
      ctaText: 'Interested in seeing more of my work or discussing a project?',
      ctaButton: 'Get In Touch',
      buttons: {
        details: 'View Details',
        code: 'Code'
      },
      list: [
        {
          title: 'Enterprise Chatbot Platform',
          description: 'Built a sophisticated virtual assistant on Blip platform with integrations to RD Station, Zendesk, and Hubspot. Handled 10k+ conversations monthly.',
          category: 'Chatbot'
        },
        {
          title: 'Real-Time Analytics Dashboard',
          description: 'Developed a comprehensive analytics platform using React and BigQuery for processing millions of data points with real-time visualization.',
          category: 'Full Stack'
        },
        {
          title: 'E-Commerce Integration Suite',
          description: 'Created a robust integration layer connecting multiple e-commerce platforms with marketing automation tools and CRM systems.',
          category: 'Backend'
        },
        {
          title: 'Customer Engagement Platform',
          description: 'Built a multi-channel customer engagement system with Clevertap and Braze integration, achieving 40% increase in user retention.',
          category: 'Full Stack'
        },
        {
          title: 'AI-Powered Support System',
          description: 'Designed intelligent routing and automated response system on Blip, reducing support ticket volume by 35% while improving satisfaction scores.',
          category: 'Chatbot'
        },
        {
          title: 'Marketing Automation Platform',
          description: 'Developed comprehensive marketing automation solution with seamless integration across RD Station, Hubspot, and custom analytics.',
          category: 'Full Stack'
        }
      ]
    },
    contact: {
      title: 'Get In Touch',
      subtitle: "Have a project in mind? Let's discuss how we can work together to bring your ideas to life.",
      form: {
        nameLabel: 'Your Name *',
        namePlaceholder: 'John Doe',
        emailLabel: 'Your Email *',
        emailPlaceholder: 'john@example.com',
        messageLabel: 'Your Message *',
        messagePlaceholder: 'Tell me about your project...',
        button: 'Send Message',
        successTitle: 'Message Received!',
        successDesc: "Thank you for reaching out! I'll get back to you soon.",
        errorTitle: 'Validation Error',
        errorDesc: 'Please check all fields and try again.'
      },
      infoTitle: 'Contact Information',
      connectTitle: 'Connect With Me',
      availableTitle: 'Available for',
      availableList: [
        'Full-time opportunities',
        'Freelance projects',
        'Technical consulting',
        'Chatbot development'
      ]
    },
    footer: {
      brandDesc: 'Full Stack Developer & Chatbot Specialist with 4 years of experience building innovative solutions.',
      quickLinks: 'Quick Links',
      connect: 'Connect',
      availability: 'Available for opportunities worldwide',
      rights: 'All rights reserved.',
      madeWith: 'Made with',
      and: 'and'
    }
  },
  pt: {
    header: {
      about: 'Sobre',
      skills: 'Habilidades',
      chatbot: 'Chatbots',
      projects: 'Projetos',
      contact: 'Contato'
    },
    hero: {
      badge: 'Disponível para Oportunidades',
      greeting: 'Olá, eu sou Gabriel',
      role1: 'Desenvolvedor Full Stack',
      role2: 'Especialista em Chatbots',
      subheading: {
        part1: 'Com',
        highlight1: '4 anos de experiência profissional',
        part2: 'e um histórico comprovado como',
        highlight2: 'Tech Lead',
        part3: ', construo soluções inovadoras e integrações complexas que impulsionam o sucesso dos negócios.'
      },
      ctaPrimary: 'Vamos Trabalhar Juntos',
      ctaSecondary: 'Ver Meu Trabalho'
    },
    about: {
      title: 'Sobre Mim',
      journeyTitle: 'Jornada Profissional',
      bio: [
        {
          part1: 'Como',
          highlight1: 'Desenvolvedor Full Stack',
          part2: 'com',
          highlight2: '4 anos de experiência profissional',
          part3: ', evoluí da criação de código elegante para liderança de equipes técnicas e definição de estratégias de produto.'
        },
        {
          part1: 'Minha jornada como',
          highlight1: 'Tech Lead',
          part2: 'me ensinou que um grande software não é apenas sobre código limpo—é sobre entender as necessidades do negócio, mentorar membros da equipe e entregar soluções que criam impacto real.'
        },
        {
          part1: 'Especializo-me na construção de',
          highlight1: 'aplicações web escaláveis',
          part2: 'e',
          highlight2: 'sistemas de chatbot inteligentes',
          part3: ', com expertise em integrações complexas que conectam múltiplas plataformas e serviços perfeitamente.'
        },
        {
          text: 'Minha paixão está em transformar problemas desafiadores em soluções elegantes e centradas no usuário que impulsionam o crescimento do negócio e melhoram as experiências dos usuários.'
        }
      ],
      achievements: [
        { title: 'Experiência como Tech Lead', description: 'Liderei com sucesso equipes de desenvolvimento e mentorei desenvolvedores juniores' },
        { title: '4 Anos Profissionais', description: 'Histórico comprovado de entrega de soluções de alta qualidade' },
        { title: 'Resolvedor de Problemas', description: 'Especialista em arquitetar soluções inovadoras para desafios complexos' },
        { title: 'Impacto nos Negócios', description: 'Resultados impulsionados através de liderança técnica estratégica' }
      ],
      stats: {
        experience: 'Anos de Experiência',
        projects: 'Projetos Concluídos',
        stacks: 'Tecnologias',
        satisfaction: 'Satisfação do Cliente'
      }
    },
    techStack: {
      title: 'Stack Tecnológico',
      subtitle: 'Aproveitando tecnologias modernas para construir soluções escaláveis, performáticas e sustentáveis',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Banco de Dados',
        cloud: 'Nuvem e Serviços',
        languages: 'Linguagens'
      },
      skills: {
        react: "Construindo interfaces de usuário modernas e responsivas com arquitetura baseada em componentes",
        svelte: "Criando componentes web leves e reativos",
        typescript: "Garantindo segurança de tipo e qualidade de código em aplicações em larga escala",
        nodejs: "Desenvolvendo serviços backend escaláveis e APIs",
        java: "Construindo aplicações de nível empresarial e microsserviços",
        python: "Processamento de dados e scripts de automação",
        mysql: "Projetando e gerenciando bancos de dados relacionais",
        firebase: "Construindo aplicações em tempo real com infraestrutura em nuvem",
        bigquery: "Analisando grandes conjuntos de dados e inteligência de negócios"
      },
      levels: {
        expert: "Especialista",
        advanced: "Avançado",
        intermediate: "Intermediário"
      },
      note: {
        part1: 'Constantemente aprendendo e me adaptando a novas tecnologias.',
        highlight: 'Sempre explorando ferramentas emergentes',
        part2: 'para entregar soluções de ponta.'
      }
    },
    chatbot: {
      badge: 'Expertise Especializada',
      title: 'Especialização em Chatbots',
      subtitle: {
        part1: 'Especialista na criação de assistentes virtuais inteligentes na',
        highlight: 'plataforma Blip',
        part2: ', com vasta experiência em integrações complexas'
      },
      features: [
        { title: 'Especialista Plataforma Blip', description: 'Profunda expertise na construção de assistentes virtuais sofisticados na plataforma Blip' },
        { title: 'Integrações Complexas', description: 'Conexão perfeita de múltiplos serviços de terceiros e APIs' },
        { title: 'Soluções Personalizadas', description: 'Soluções de chatbot sob medida alinhadas com objetivos de negócio' },
        { title: 'IA Conversacional', description: 'Experiências de usuário naturais e envolventes com fluxos de trabalho inteligentes' }
      ],
      integrationsTitle: 'Integrações de Plataforma',
      integrationsSubtitle: 'Vasta experiência integrando chatbots com plataformas e serviços de nível empresarial',
      integrationList: [
        { name: 'RD Station', description: 'Automação de marketing e integração de CRM' },
        { name: 'Zendesk', description: 'Suporte ao cliente e sistema de tickets' },
        { name: 'Hubspot', description: 'Integração de plataforma de vendas e marketing' },
        { name: 'Clevertap', description: 'Engajamento do cliente e analytics' },
        { name: 'Braze', description: 'Plataforma de engajamento do cliente' },
        { name: 'Bitrix', description: 'Gestão de negócios e CRM' },
        { name: 'Tray', description: 'Plataforma de e-commerce' },
        { name: 'Feegow', description: 'Gestão de clínicas de saude' },
        { name: 'Slack', description: 'Plataforma de comunicação e colaboração corporativa' },
        { name: 'Zapier', description: 'Plataforma de automação' },
        { name: 'Imoview', description: 'CRM de gestão de imoveis' },
        { name: 'Clinica nas nuvens', description: 'Gestão de clínicas de saude' },
      ],
      ctaTitle: 'Pronto para Construir seu Chatbot?',
      ctaDesc: 'Vamos criar um assistente virtual inteligente que se integre perfeitamente às suas ferramentas de negócios e entregue experiências excepcionais aos clientes.',
      ctaButton: 'Discutir Seu Projeto'
    },
    projects: {
      badge: 'Trabalhos em Destaque',
      title: 'Projetos e Portfólio',
      subtitle: 'Uma vitrine de soluções inovadoras e implementações bem-sucedidas em vários domínios',
      ctaText: 'Interessado em ver mais do meu trabalho ou discutir um projeto?',
      ctaButton: 'Entre em Contato',
      buttons: {
        details: 'Ver Detalhes',
        code: 'Código'
      },
      list: [
        {
          title: 'Plataforma de Chatbot Empresarial',
          description: 'Construí um assistente virtual sofisticado na plataforma Blip com integrações para RD Station, Zendesk e Hubspot. Gerenciei mais de 10k conversas mensais.',
          category: 'Chatbot'
        },
        {
          title: 'Dashboard de Analytics em Tempo Real',
          description: 'Desenvolvi uma plataforma abrangente de analytics usando React e BigQuery para processar milhões de pontos de dados com visualização em tempo real.',
          category: 'Full Stack'
        },
        {
          title: 'Suíte de Integração E-Commerce',
          description: 'Criei uma camada de integração robusta conectando múltiplas plataformas de e-commerce com ferramentas de automação de marketing e sistemas CRM.',
          category: 'Backend'
        },
        {
          title: 'Plataforma de Engajamento de Clientes',
          description: 'Construí um sistema multicanal de engajamento de clientes com integração Clevertap e Braze, alcançando aumento de 40% na retenção de usuários.',
          category: 'Full Stack'
        },
        {
          title: 'Sistema de Suporte com IA',
          description: 'Projetei roteamento inteligente e sistema de resposta automatizada no Blip, reduzindo o volume de tickets de suporte em 35% e melhorando a satisfação.',
          category: 'Chatbot'
        },
        {
          title: 'Plataforma de Automação de Marketing',
          description: 'Desenvolvi solução abrangente de automação de marketing com integração perfeita entre RD Station, Hubspot e analytics personalizados.',
          category: 'Full Stack'
        }
      ]
    },
    contact: {
      title: 'Entre em Contato',
      subtitle: 'Tem um projeto em mente? Vamos discutir como podemos trabalhar juntos para dar vida às suas ideias.',
      form: {
        nameLabel: 'Seu Nome *',
        namePlaceholder: 'João Silva',
        emailLabel: 'Seu Email *',
        emailPlaceholder: 'joao@exemplo.com',
        messageLabel: 'Sua Mensagem *',
        messagePlaceholder: 'Conte-me sobre seu projeto...',
        button: 'Enviar Mensagem',
        successTitle: 'Mensagem Recebida!',
        successDesc: 'Obrigado pelo contato! Responderei em breve.',
        errorTitle: 'Erro de Validação',
        errorDesc: 'Por favor, verifique todos os campos e tente novamente.'
      },
      infoTitle: 'Informações de Contato',
      connectTitle: 'Conecte-se Comigo',
      availableTitle: 'Disponível para',
      availableList: [
        'Oportunidades em tempo integral',
        'Projetos freelance',
        'Consultoria técnica',
        'Desenvolvimento de chatbots'
      ]
    },
    footer: {
      brandDesc: 'Desenvolvedor Full Stack e Especialista em Chatbots com 4 anos de experiência construindo soluções inovadoras.',
      quickLinks: 'Links Rápidos',
      connect: 'Conectar',
      availability: 'Disponível para oportunidades em todo o mundo',
      rights: 'Todos os direitos reservados.',
      madeWith: 'Feito com',
      and: 'e'
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const initializeLanguage = async () => {
      // Check localStorage first
      const savedLanguage = localStorage.getItem('language');
      
      if (savedLanguage) {
        setLanguage(savedLanguage);
      } else {
        // Try to detect Brazil location via IP
        try {
          const response = await fetch('https://ipwho.is/');
          const data = await response.json();
          
          if (data.success && data.country_code === 'BR') {
            setLanguage('pt');
            localStorage.setItem('language', 'pt');
          } else {
            // Default to English if not Brazil or API fails
            setLanguage('en');
            localStorage.setItem('language', 'en');
          }
        } catch (error) {
          console.error('Error detecting location:', error);
          setLanguage('en');
        }
      }
    };

    initializeLanguage();
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'pt' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const value = {
    language,
    toggleLanguage,
    t: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};