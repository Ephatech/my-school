import React from 'react';
import Banner from './Banner';
import ImgCont from './ImgCont';
import eco from '../assets/eco.jpg';
import award from '../assets/award.jpg';
import science from '../assets/science.jpg';
import Slider from './Slider';
import Video from './Video';
import Galary from './Galary';
import TextCont from './TextCont';
import gall1 from '../assets/gall1.jpg';
import gall2 from '../assets/gall2.jpg';
import gall3 from '../assets/gall3.jpg';
import gall4 from '../assets/gall4.jpg';
import gall5 from '../assets/gall5.jpg';

const photos = [
    { id: 1, url: gall1, caption: 'Back-to-School Night' },
    { id: 2, url: gall2, caption: 'Parent-Teacher Conferences' },
    { id: 3, url: gall3, caption: 'Science Fair' },
    { id: 4, url: gall4, caption: 'Sports Day' },
    { id: 5, url: gall2, caption: 'Cultural Festival' },
    { id: 6, url: gall3, caption: 'Career Day' },
    { id: 7, url: gall4, caption: 'School Play' },
    { id: 8, url: gall3, caption: 'Field Trip' },
    { id: 9, url: gall4, caption: 'Graduation Ceremony' },
    { id: 10, url: gall2, caption: 'Book Fair' },
    { id: 11, url: gall3, caption: 'Talent Show' },
    { id: 12, url: gall4, caption: 'Community Service Day' },
  ];

const Home = () => {
var t = "Exciting Science Fair Inspires Young Minds";
var d = "The annual science fair held at our school last week proved to be a tremendous success, showcasing the remarkable scientific talents of our students. The event featured a wide range of innovative projects, from biology experiments to physics demonstrations. Students eagerly presented their findings to judges, parents, and fellow classmates, highlighting their dedication and passion for scientific exploration. The fair not only fostered a deeper understanding of scientific concepts but also encouraged critical thinking, teamwork, and effective communication skills. It was a remarkable display of the incredible potential our students possess. Congratulations to all participants!";

    return (
        <>
            <Banner/>
            <ImgCont ord={false} title={t} desc={d} img={science}/>
            <ImgCont ord={true} title={"New Eco-Friendly Initiative Promotes Sustainability at Our School"} desc={"In an effort to create a greener and more sustainable environment, our school has launched an exciting new initiative. The project aims to reduce waste and promote eco-friendly practices among students and staff. Recycling bins have been strategically placed throughout the campus, making it easier for everyone to dispose of recyclable materials responsibly. Additionally, water refill stations have been installed to encourage the use of reusable water bottles and reduce plastic waste. The initiative also includes educational programs and workshops on topics such as renewable energy, composting, and conservation. By fostering a culture of sustainability, our school is taking a proactive step towards creating a better future for our community and the planet."} img={eco}/>
            <ImgCont ord={false} title={"Outstanding Achievement"} desc={"Student Receives National Recognition for Academic Excellence: We are proud to announce that one of our students has been recognized at the national level for their exceptional academic achievements. John Doe, a senior at our school, has been awarded the prestigious National Academic Excellence Scholarship. This highly competitive scholarship is awarded to students who have demonstrated outstanding academic performance, leadership skills, and community involvement. John's dedication, hard work, and intellectual curiosity have set him apart as a remarkable scholar. His achievement not only reflects his personal commitment to education but also highlights the quality of education provided by our school. Congratulations to John Doe for this remarkable honor!"} img={award}/>
            <Video/>
            <TextCont head={"Parental Follow Up"} body={"Our website is designed to efficiently facilitate parental follow-up for students, recognizing the crucial role parents play in their children's education. We provide a user-friendly platform that allows parents to easily access and monitor their child's academic progress. From viewing grades and attendance records to tracking assignments and upcoming assessments, our comprehensive system provides real-time information to keep parents actively involved in their child's learning journey.Effective communication is a priority, which is why our website offers seamless channels for parents, teachers, and administrators to connect. Parents can easily reach out to teachers, inquire about their child's performance, and discuss any concerns. Teachers, in turn, can provide timely feedback, share important announcements, and collaborate with parents to ensure the best possible support and guidance for each student. By fostering strong partnerships between parents and educators, we create a cohesive and supportive environment for student success.In summary, our website is dedicated to efficiently facilitating parental follow-up for students. Through easy access to academic records and effective communication channels, we empower parents to actively participate in their child's education. By fostering collaboration and involvement, we strive to create a nurturing educational ecosystem that maximizes student potential and supports their overall growth and development."}/>
            <Galary photos={photos}/>
            <TextCont head={"Buiding Community"} body={"Building a strong and inclusive community is at the heart of our school's mission. We believe that a thriving educational institution is not just about academic excellence but also about fostering a sense of belonging and togetherness among students, parents, teachers, and staff. Our school actively promotes community-building initiatives and provides a welcoming environment where everyone feels valued and connected. Through various events, activities, and programs, we encourage collaboration and interaction among members of our school community. Whether it's parent-teacher meetings, open houses, cultural celebrations, or volunteer opportunities, we create opportunities for meaningful engagement that goes beyond the classroom. These events not only allow parents to actively participate in their child's education but also foster connections among families and build lasting relationships. Our dedicated staff and faculty play a vital role in nurturing a sense of community within the school. They prioritize open communication, encourage dialogue, and create a supportive atmosphere where students feel safe to express themselves and explore their passions. By fostering a culture of inclusivity, respect, and understanding, we strive to create an environment where every individual feels heard and appreciated. In conclusion, our school is committed to building a vibrant and inclusive community. By fostering strong relationships, promoting collaboration, and providing a nurturing environment, we aim to create a sense of belonging for all members of our school community. Together, we work towards creating an enriching educational experience that prepares students for success in both academics and life, while also fostering a strong sense of unity and shared purpose."}/>
            <Slider/>
            
        </>
        
    );
}

export default Home;
