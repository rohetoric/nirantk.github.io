var suggestions=document.getElementById("suggestions"),search=document.getElementById("search");search!==null&&document.addEventListener("keydown",inputFocus);function inputFocus(e){e.ctrlKey&&e.key==="/"&&(e.preventDefault(),search.focus()),e.key==="Escape"&&(search.blur(),suggestions.classList.add("d-none"))}document.addEventListener("click",function(e){var t=suggestions.contains(e.target);t||suggestions.classList.add("d-none")}),document.addEventListener("keydown",suggestionFocus);function suggestionFocus(e){const s=suggestions.classList.contains("d-none");if(s)return;const t=[...suggestions.querySelectorAll("a")];if(t.length===0)return;const n=t.indexOf(document.activeElement);if(e.key==="ArrowUp"){e.preventDefault();const s=n>0?n-1:0;t[s].focus()}else if(e.key==="ArrowDown"){e.preventDefault();const s=n+1<t.length?n+1:n;t[s].focus()}}(function(){var e=new FlexSearch.Document({tokenize:"forward",cache:100,document:{id:"id",store:["href","title","description"],index:["title","description","content"]}});e.add({id:0,href:"/docs/prologue/introduction/",title:"Introduction",description:"Doks is a Hugo theme for building secure, fast, and SEO-ready documentation websites, which you can easily update and customize.",content:`Get started #There are two main ways to get started with Doks:
Tutorial #👉 The Tutorial is intended for novice to intermediate users. Step-by-step instructions on how to start a new Doks project. Tutorial →
Quick Start #👉 The Quick Start is intended for intermediate to advanced users. One page summary of how to start a new Doks project. Quick Start →
Go further #Recipes, Reference Guides, Extensions, and Showcase.
Recipes #Get instructions on how to accomplish common tasks with Doks. Recipes →
Reference Guides #Learn how to customize Doks to fully make it your own. Reference Guides →
Extensions #Get instructions on how to add even more to Doks. Extensions →
Showcase #See what others have build with Doks. Showcase →
Contributing #Find out how to contribute to Doks. Contributing →
Help #Get help on Doks. Help →
`}),e.add({id:1,href:"/docs/prologue/",title:"Prologue",description:"Prologue Doks.",content:""}),e.add({id:2,href:"/docs/prologue/quick-start/",title:"Quick Start",description:"One page summary of how to start a new Doks project.",content:`Requirements #Git — latest source release Node.js — latest LTS version or newer Why Node.js?Doks uses npm (included with Node.js) to centralize dependency management, making it easy to update resources, build tooling, plugins, and build scripts. Start a new Doks project #Create a new site, change directories, install dependencies, and start development server.
Create a new site #Doks is available as a child theme and a starter theme.
Child theme #Intended for novice to intermediate users Intended for minor customizations Easily update npm packages — including Doks git clone https://github.com/h-enk/doks-child-theme.git my-doks-site Starter theme #Intended for intermediate to advanced users Intended for major customizations Easily update npm packages git clone https://github.com/h-enk/doks.git my-doks-site Help me chooseNot sure which one is for you? Pick the child theme. Change directories #cd my-doks-site Install dependencies #npm install Start development server #npm run start Doks will start the Hugo development webserver accessible by default at http://localhost:1313. Saved changes will live reload in the browser.
Other commands #Doks comes with commands for common tasks. Commands →
`}),e.add({id:3,href:"/docs/prologue/commands/",title:"Commands",description:"Doks comes with commands for common tasks.",content:`💡 You can change the commands in the scripts section of \`./package.json\`. create #Create new content for your site:
npm run create [path] [flags] See also the Hugo docs: hugo new.
Docs based tree #Create a docs based tree — with a single command:
npm run create -- --kind docs [section] For example, create a docs based tree named guides:
npm run create -- --kind docs guides lint #Check scripts, styles, and markdown for errors:
npm run lint scripts #Check scripts for errors:
npm run lint:scripts [-- --fix] styles #Check styles for errors:
npm run lint:styles [-- --fix] markdown #Check markdown for errors:
npm run lint:markdown [-- --fix] clean #Delete temporary directories:
npm run clean start #Start local development server:
npm run start build #Build production website:
npm run build functions #Build Lambda functions:
npm run build:functions preview #Build production website including draft and future content:
npm run build:preview `}),e.add({id:4,href:"/docs/summaries/",title:"Summary",description:"Help Doks.",content:""}),e.add({id:5,href:"/docs/summaries/how-to-update/",title:"How to Update",description:"Regularly update the installed npm packages to keep your Doks website stable, usable, and secure.",content:`💡 Learn more about semantic versioning and advanced range syntax. Check for outdated packages #The npm outdated command will check the registry to see if any (or, specific) installed packages are currently outdated:
npm outdated [[\u0026lt;@scope\u0026gt;/]\u0026lt;pkg\u0026gt; ...] Update packages #The npm update command will update all the packages listed to the latest version (specified by the tag config), respecting semver:
npm update [\u0026lt;pkg\u0026gt;...] `}),e.add({id:6,href:"/docs/summaries/troubleshooting/",title:"Troubleshooting",description:"Solutions to common problems.",content:`Problems updating npm packages #Delete the ./node_modules folder, and run again:
npm install Problems with cache #Delete the temporary directories:
npm run clean `}),e.add({id:7,href:"/docs/summaries/faq/",title:"FAQ",description:"Answers to frequently asked questions.",content:`Hyas? #Doks is a Hyas theme build by the creator of Hyas.
Footer notice? #Please keep it in place.
Keyboard shortcuts for search? #focus: Ctrl + / select: ↓ and ↑ open: Enter close: Esc `}),e.add({id:8,href:"/docs/summaries/deephackdemos/",title:"Generative AI Hack Demos",description:"Collection of Demos from Deep Hack on Generative AI",content:`👋 You\u0026rsquo;ve landed at the perfect spot to check out all the coolest demos from the #GenerativeAIHack.
🧑‍🤝‍🧑 90+ hackers on Day 1, 150+ folks at Demo day
⚡️ 43 submissions, 32 in-person, 11 remote from 6 cities
🙏 13 sponsors from 3 countries, 2 Open Source Software companies: Weaviate, AppSmith
🤗 20% raised from individual donors or collectives of them
💰 5 Lakh INR in Prizes
I\u0026rsquo;m super stoked to share these mind-blowing projects with you—created by some seriously talented folks from all corners of the world. 🌍 Whether you\u0026rsquo;re into art, gaming, or just love a good tech innovation, we\u0026rsquo;ve got something for everyone.
All demos have been shared with creator\u0026rsquo;s permission! 🚀
Links #Livestream: https://www.youtube.com/live/E5gpisqhwJc?feature=share Hackathon Website: https://has.gy/gpt4hack Prize Winners #Best Tooling for Media: Multimode: Text to Pixel Animation using Stable Diffusion #Demo Video
Multimode helps you generate game assets like sprite animations, tilable textures and more from a text prompt so that you can build you game faster.
AI For Good: Sens.AI: Learning Redefined #Demo Video
Sens.AI redefines learning by providing personalized experiences for young people from underserved backgrounds. The platform creates small batches of learners and pairs them with mentors to bridge skill gaps, develop professional communication and critical thinking skills, and offer tailored guidance.
Best GPT Powered App: YouTalk: Search and Discover Your YouTube Snippets #Demo Video
Best AI Devtool: osh: LLM based helper and assistant for command line #GitHub: https://github.com/harshalbhatia/osh Pitch Deck: https://pitch.com/public/2a735687-436f-4af6-99a7-ffcc6c0666d9 Demo Video: https://youtu.be/PiEJ5S071xk osh revolutionizes the command line experience by providing LLM-based assistance for developers. The tool simplifies workflows and enhances overall productivity, allowing users to navigate errors, and debug complex programs with ease and confidence.
Tale of Dattā: Short Comic about the Mythology of Data \u0026amp; AI #Demo Video | Process from the Artist
Tale of Dattā is a short comic exploring the mythology of data and AI, offering a creative and engaging perspective on the world of technology.
Jury\u0026rsquo;s Choice #Inspir: Accessible and Engaging Learning for All #Demo Video
Inspir is a learning app designed to make education accessible and engaging for learners of all ages and backgrounds. It uses natural language processing (NLP) technology to enable users to ask questions and receive detailed, informative responses in real-time. Inspir aims to revolutionize education by democratizing learning and making it accessible to everyone.
Apne App #Demo link with multiple demos
Nishant Nikhil and his teammate built a micro-app generator/builder with a fully featured front end and backend which adapted to developer requests. Think of disposable workflows, but mostly for development since errors in code still need technical skill.
Nirant\u0026rsquo;s Picks #ViewsAct #JS library which can interface with (almost) any SaaS and Consumer application to expose a new JS component of user\u0026rsquo;s desire. Think of Cmd+K on steroids with disposable software. No dev skills required. No demo video.
Genie Paint: Stunning Artwork from a Sketch! #Demo Video
Genie Paint inspires kids by showcasing the capabilities of AI in amplifying their creativity, transforming sketches into stunning artwork.
BlindVisAidGPT: An Interactive Aid for the Visually Impaired #GitHub | Demo Video
BlindVisAidGPT aims to provide a helpful interface for visually impaired individuals by using a Wi-Fi enabled camera mounted on glasses. The project is built on Microsoft\u0026rsquo;s Visual-ChatGPT, and it provides an interactive platform for users to ask questions about the environment in front of them. With multiple avenues for improvement, this project is open for contributions from the open-source community.
All Demos #Consumable.AI: Personalized Learning Made Easy #Demo Video
Consumable.AI is an educational tool designed to make learning more accessible and efficient. By generating short, personalized notes based on keywords, users can quickly consume information tailored to their interests. This innovative approach to education streamlines the learning process and promotes a more engaging experience for students.
CodeAU: Adding and Updating code base. #Demo Video
CodeAU, an innovative and robust coding assistant framework designed to empower developers by seamlessly updating and expanding their existing code base. As libraries evolve and new versions are released, it becomes increasingly challenging for developers to keep up with the changes and ensure their code remains functional and efficient. CodeAU is here to bridge the gap and effortlessly maintain the code\u0026rsquo;s compatibility with the latest library versions.
Parable: Turning Text into Insight #GitHub | Demo Video
Parable is a text-to-insight tool designed to uncover the hidden stories within large volumes of text. By analyzing and interpreting text data, Parable provides valuable insights and understanding to users. This powerful tool has the potential to revolutionize industries that rely heavily on text-based information, such as journalism, research, and business analytics.
AICombinator: Your Personal AI Assistant for Complex Online Tasks #GitHub | Demo Video
AICombinator is an open-source project that aims to give AI identity, memory, and agency. This bot can log in as you and perform complex operations across multiple websites in a real browser, including filling in OTPs, making payments, and accessing cloud services. With its ability to run locally, AICombinator can provide file-system access, native app usage, and more, making it an indispensable tool for end-users.
Hiring Assistant: Streamlining the Recruitment Process #GitHub | Demo Video
Hiring Assistant is an AI-powered solution designed to streamline the recruitment process. By using WhatsApp as a digital channel for resume submission, the AI extracts resume data and processes it through ChatGPT to assess skills, compatibility scores, and job description matches. The platform also generates sample interview questions and sends email notifications to HR personnel and candidates. This reduces the time-consuming and error-prone manual recruitment process to mere minutes.
Edden: Effortlessly Create Landing Pages #Website | Demo Video
Edden is an AI-driven tool that enables users to create landing pages within minutes. By simplifying the design process, Edden allows users to focus on their core business objectives while still achieving professional and visually appealing landing pages.
Shakalaka Boom Boom: Jo ye banaye sach ho jaye! #Website | Demo Video
Discover \u0026ldquo;Shakalaka Boom Boom\u0026rdquo;: Inspired by the nostalgic Indian TV show, this innovative entertainment tool transforms your doodles into realistic images using advanced AI. Shakalaka Boom Boom also suggests e-commerce products resembling your creations, making it the perfect fusion of imagination and shopping. Relive the magic of your childhood and watch your artistic dreams come to life with Shakalaka Boom Boom!
DiagramGenie🔮: Text to Software Engineering Diagrams #Website | Github | Demo Video
DiagramGenie is an innovative tool that allows users to create software engineering diagrams by just describing it in a few simple words. This AI-powered solution simplifies the process of creating complex diagrams and streamlines the workflow for software engineers and developers.
Student Mentor: Medical, Literature Analysis, and Career Guidance #GitHub | Demo Video
Student Mentor is an AI-powered platform designed to assist students in various aspects of their academic and professional lives. With features like medical, literature, and career question answering, summary generation, and chat facilities, Student Mentor provides comprehensive support for students seeking guidance and assistance.
Debate-Bot: An AI-Powered Tool for Rational Discussions #Debate-Bot is an AI-powered tool that analyzes online arguments and points out logical fallacies. By providing users with a deeper understanding of the arguments they encounter, Debate-Bot encourages more informed and rational discussions.
Anti-ChatGPT: An Antivirus for Your Brain #GitHub | Demo Video
Anti-ChatGPT is a Chrome plugin designed to combat the manipulation of AI-generated content. Users can specify what content they don\u0026rsquo;t want to see, and the plugin removes it from their browser, empowering individuals to take control of their digital experiences.
Anywhere GPT: Unleashing ChatGPT\u0026rsquo;s Superpowers on the Web #Demo Video
Anywhere GPT is a powerful tool that brings ChatGPT\u0026rsquo;s capabilities to any website, providing real-time writing assistance, language translation, chatbot and virtual assistant support, and more. By integrating AI functionality into everyday browsing, Anywhere GPT enhances the overall user experience.
Wingman: AI-Enhanced Dating Profiles #Demo Video
Wingman is an AI-powered app that helps users create compelling dating profiles. By leveraging AI\u0026rsquo;s language generation capabilities, Wingman ensures users present their best selves in their online dating endeavors.
CODEWIZ: Effortless Coding with AI Superpowers #GitHub | Demo Video
CODEWIZ is an AI-driven tool that simplifies the coding process for developers. By integrating AI capabilities directly into a code editor, CODEWIZ empowers developers to write more efficient and accurate code with ease.
Zima Blue: Unlimited Data at Your Fingertips #Zima Blue provides unlimited data access to underprivileged individuals, enabling them to utilize their resources effectively and create new opportunities for learning and development.
Sambhash: Your AI Tutor to Practice English #Sambhash is an AI tutor designed to help rural individuals improve their English speaking skills. By offering suggestions, translations, and feedback, the AI tutor helps users enhance their language proficiency and gain confidence.
TARS: Personal AI Helping Hands #Demo Video
TARS is a personal AI assistant that can help with tasks such as doing your taxes or even providing some entertainment. By automating these tasks, TARS makes life easier and more enjoyable for its users.
ReinforceLLM: Train Your Own ChatGPT #Demo Video
ReinforceLLM is a platform that allows users to train their own ChatGPT models based on their personal preferences, providing a customized AI experience.
AI Tele Agent: Smarter Support with AI #Demo Video
AI Tele Agent is an AI-based support agent capable of answering customer queries efficiently. By synthesizing user queries and generating informed responses, AI Tele Agent offers instant, efficient customer support.
Selene: A Platform to Build and Deploy Video AI Applications at Scale #Demo Video
Selene is a platform that allows developers to build and deploy video AI applications at scale. It offers an SDK and workflow creation tools, enabling developers to run their models on the cloud without worrying about infrastructure.
MEME Fake: Self Meme Generator #Demo Video
MEME Fake is a self meme generator that allows users to create personalized, humorous content using AI technology.
Mission Impossible: Silicon Deception #Demo Video Mission Impossible: Silicon Deception is a fan-fiction comic where Ethan Hunt is recruited by Sam Altman to find stolen AI technology, offering an exciting and imaginative narrative.
Text 2 Reel: Create Your Instagram Reel Without Any Efforts #Demo Video
Text 2 Reel simplifies the creation of Instagram reels, allowing users to generate engaging content with minimal effort using AI technology.
Glaze AI: Langchain for Images #Glaze AI is an open-source library that enables users to chat with multiple image models and perform various tasks on images while also providing post-editing functions.
Gully AI: Mere Gully AI Main #Demo Video
Gully AI offers a creative and engaging platform for users to generate and share AI-assisted content, enhancing the user experience and promoting collaboration.
Explore and Search for Any Website: GPT for Advanced Browser Search and Exploration #Demo Video
This Chrome extension allows users to ask questions and receive personalized search results based on their preferences, mood, or requirements, simplifying the search and exploration process.
Sneaker Studio: Canva for Sneakers #Demo Video
Sneaker Studio is a platform that allows users to design and customize their own sneakers, offering a creative and personalized experience.
Bookgist.in #Demo Video
Bookgist.in is an AI-powered platform that aims to promote social impact by providing users with easy access to book summaries, facilitating learning and personal growth.
Video Ad Generator: Make a Video Ad of Your Product by Just Entering a Prompt #Demo Video
Video Ad Generator enables users to create full video ads using just a text prompt, streamlining the ad creation process and saving time.
Handmade with AI: A Series of Surreal Artworks Focused on Human Hands #Handmade with AI is a series of surreal artworks created with the assistance of Stable Diffusion and Midjourney AI tools, highlighting the potential of AI in artistic expression.
`}),e.add({id:9,href:"/docs/",title:"Docs",description:"Docs Doks.",content:""}),search.addEventListener("input",t,!0);function t(){const s=5;var n=this.value,o=e.search(n,{limit:s,enrich:!0});const t=new Map;for(const e of o.flatMap(e=>e.result)){if(t.has(e.doc.href))continue;t.set(e.doc.href,e.doc)}if(suggestions.innerHTML="",suggestions.classList.remove("d-none"),t.size===0&&n){const e=document.createElement("div");e.innerHTML=`No results for "<strong>${n}</strong>"`,e.classList.add("suggestion__no-results"),suggestions.appendChild(e);return}for(const[r,a]of t){const n=document.createElement("div");suggestions.appendChild(n);const e=document.createElement("a");e.href=r,n.appendChild(e);const o=document.createElement("span");o.textContent=a.title,o.classList.add("suggestion__title"),e.appendChild(o);const i=document.createElement("span");if(i.textContent=a.description,i.classList.add("suggestion__description"),e.appendChild(i),suggestions.appendChild(n),suggestions.childElementCount==s)break}}})()