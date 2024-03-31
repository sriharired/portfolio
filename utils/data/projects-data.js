import ayla from '/public/image/ayla.jpg';
import AQI from '/public/image/aqi.jpeg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'AIR POLLUTION PREDICTION',
        description: "Me and my team built an AI-powered Air pollution Predictor web application. I have developed API using React js, Python, Machine Learning. Used RFR (Random Forest Regression) model to predict air pollution. Built Model using Machine Learning and trained using our dataset. The app fetches data from Machine Learning Model  and generates results with Pollution Meter Value.",
        tools: ['React', 'Mysql', ' Python', 'Node Js', 'Bootstrap'],
        role: 'Project Leader And Front End Developer',
        code: '',
        demo: '',
        image: AQI,
    },
    {
        id: 2,
        name: 'CATCH ME',
        description: 'I have designed and developed a 2D Game as my mini project. I created this project using C++ and Opengl. This game has 3 levels with increase in difficulty level by level. For every hit on the moving block user can score 10 points, It is simple classic 2d game designed with opengl.',
        tools: ["C++", "OpenGls"],
        role: 'Game Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'METRO MANAGEMENT SYSTEM ',
        description: 'My team built an Metro Management Website. We used Html, Css, Java Script ,Java and Mysql to develop this API. We used bootstrap to make good UI. In this API there 2 panels one is for admin and other is for users. Admin can add/remove/update metro train details like fare,timings,routes,stations. user can check routes,ticket fares and can buy metro card online with unique id. Admin Approves metro card.',
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        code: '',
        role: 'Project Leader & Front End Developer',
        demo: '',
        image: realEstate,
    },
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },