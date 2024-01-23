import LoginForm from "../src/assets/images/Login form.png"
import Calculator from "../src/assets/images/Calculator.png"
import Portfolio from "../src/assets/images/Portfolio.png"
import ContactForm from "../src/assets/images/Contact Form.png"
import Netflix from "../src/assets/images/Netflix.png"
import ComingSoon from "../src/assets/images/coming-soon.avif"


const logotext = "Dinesh";
const meta = 
{
    title: "Dinesh Babu",
};

const introdata = 
{
    title: "I’m Dinesh Babu",
    animated:
     {
        first: "I love coding",
        second: "I code cool websites",
        third: "I Develop mobile apps",
    },
    description: "I intend to build a career with a leading corporation to fully explore myself and advance within the organization hierarchy through continuous learning and growth.",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",

}

const dataabout = {
    title: "I’m Dinesh",
    para1: "I love coding",
    para2: "I code cool websites",
    para3: "I Develop mobile apps",
    aboutme: "I intend to build a career with a leading corporation to fully explore myself and advance within the organizational hierarchy through continuous learning and growth. A team player, capable of working independently, I am a self-learner with strong verbal and written skills. Additionally, I excel in problem-solving and creative thinking.",
};

const skills = [
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "ReactJS",
        value: 85,
    },
    {
        name: "Python",
        value: 75,
    },
    {
        name: "MonogoDB",
        value: 70,
    },
    {
        name: "Sql",
        value: 75,
    },
    {
        name: "Css & Bootstrap",
        value: 76,
    },
    {
        name: "Html",
        value: 86,
    },
  
   
];

const education = [
    {
    title: "Ambal Professional Group of Institutions",
    where: "BE",
    date: "2017-2021",
    mark: "CGPA - 7.75%",
    },
    {
    title: "SUM Hr Sec School",
    where: "HSC",
    date: "2016-2017",
    mark: "78%",
    },
    {
    title: "SUM Hr Sce School",
    where: "SSLC",
    date: "2014-2015",
    mark: "76%",
    },
];


const dataportfolio = [
    {
        img: LoginForm,
        description: "User-Friendly Sign In and Sign Up Page.",
        link: "https://github.com/Dinesh-babu-M/login_form",
    },
    {
        img: Calculator,
        description: "responsive design, ensuring a seamless and visually appealing experience across desktops, tablets, and mobile devices",
        link: "https://github.com/Dinesh-babu-M/calculator",
    },
    {
        img: Portfolio,
        description: "Ensure the website is designed responsively to adapt to different screen sizes and devices. A responsive design enhances user experience and accessibility.",
        link: "https://github.com/Dinesh-babu-M/my-portfolio",
    },
    {
        img: ContactForm,
        description: "Develop a user-friendly contact form with clear labels, input fields, and validation to ensure a seamless and error-free experience for visitors.",
        link: "https://github.com/Dinesh-babu-M/my-portfolio-connect",
    },
    {
        img: Netflix,
        description: "Ensure a secure authentication system, allowing users to create accounts, log in securely, and manage their profiles",
        link: "https://github.com/Dinesh-babu-M/Netflix-Clone",
    },
    {
        img: ComingSoon,
        description: "In Progess",
        link: "https://github.com/Dinesh-babu-M",
    },
];

const contactConfig = {
    YOUR_EMAIL: "mpsdinesh1221@gmail.com",
    YOUR_FONE: "(+91) 9789325262",
    YOUR_SERVICE_ID: "service_ebct08g",
    YOUR_TEMPLATE_ID: "template_gm7r0g7",
    YOUR_USER_ID: "arXwqTctDAICqQhTq",
};

const socialprofils = {
    github: "https://github.com/Dinesh-babu-M",
    facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/dinesh-babu-m-330716211/",
    twitter: "https://twitter.com",
};

const services = [{
    title: "UI & UX Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
},
{
    title: "Mobile Apps",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
},
{
    title: "Wordpress Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
},
];


export {
    meta,
    dataabout,
    dataportfolio,
    education,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};