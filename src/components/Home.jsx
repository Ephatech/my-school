import React from 'react';
import Banner from './Banner';
import ImgCont from './ImgCont';
import eco from '../assets/eco.jpg';
import award from '../assets/award.jpg';
import science from '../assets/science.jpg';

const Home = () => {
var t = "Exciting Science Fair Inspires Young Minds";
var d = "The annual science fair held at our school last week proved to be a tremendous success, showcasing the remarkable scientific talents of our students. The event featured a wide range of innovative projects, from biology experiments to physics demonstrations. Students eagerly presented their findings to judges, parents, and fellow classmates, highlighting their dedication and passion for scientific exploration. The fair not only fostered a deeper understanding of scientific concepts but also encouraged critical thinking, teamwork, and effective communication skills. It was a remarkable display of the incredible potential our students possess. Congratulations to all participants!";

    return (
        <>
            <Banner/>
            <ImgCont ord={false} title={t} desc={d} img={science}/>
            <ImgCont ord={true} title={"New Eco-Friendly Initiative Promotes Sustainability at Our School"} desc={"In an effort to create a greener and more sustainable environment, our school has launched an exciting new initiative. The project aims to reduce waste and promote eco-friendly practices among students and staff. Recycling bins have been strategically placed throughout the campus, making it easier for everyone to dispose of recyclable materials responsibly. Additionally, water refill stations have been installed to encourage the use of reusable water bottles and reduce plastic waste. The initiative also includes educational programs and workshops on topics such as renewable energy, composting, and conservation. By fostering a culture of sustainability, our school is taking a proactive step towards creating a better future for our community and the planet."} img={eco}/>
            <ImgCont ord={false} title={"Outstanding Achievement"} desc={"Student Receives National Recognition for Academic Excellence: We are proud to announce that one of our students has been recognized at the national level for their exceptional academic achievements. John Doe, a senior at our school, has been awarded the prestigious National Academic Excellence Scholarship. This highly competitive scholarship is awarded to students who have demonstrated outstanding academic performance, leadership skills, and community involvement. John's dedication, hard work, and intellectual curiosity have set him apart as a remarkable scholar. His achievement not only reflects his personal commitment to education but also highlights the quality of education provided by our school. Congratulations to John Doe for this remarkable honor!"} img={award}/>
        </>
    );
}

export default Home;
