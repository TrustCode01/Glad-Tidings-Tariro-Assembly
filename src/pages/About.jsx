import React from 'react';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import AboutBanner from '../assets/aboutbanner.jpg'
import { motion, stagger, transform, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';




const values = [
   {
     title:"Passionate Evangelism",
     description:"We zealously share the good news of Jesus Christ with all people, driven by a deep love for the lost and a desire to see lives transformed. “How, then, can they call on the one they have not believed in? And how can they believe in the one of whom they have not heard? And how can they hear without someone preaching to them?” (Romans 10:14)"
   },
   {
    title:"Service and Compassion",
    description:"We are dedicated to serving others with the love and compassion of Christ, meeting both spiritual and practical needs within our communities. “Each of you should use whatever gift you have received to serve others, as faithful stewards of God’s grace in its various forms.” (1 Peter 4:10)"
   },
  {
    title: "Dedicated Discipleship",
    description: " We prioritize equipping and mentoring believers to grow in their faith, empowering them to disciple others and serve the Lord effectively. “Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.” (Matthew 28:19)"
  },
  {
    title: "Biblical Teaching",
    description: " We uphold the authority of Scripture, teaching and applying God’s Word faithfully to guide our lives and decisions. “All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness.” (2 Timothy 3:16)."
  },
  {
    title: "Prayer and Dependence on God",
    description: "We rely on prayer and the guidance of the Holy Spirit in all we do, seeking God’s will and direction for our lives and ministry. “Devote yourselves to prayer, being watchful and thankful.” (Colossians 4:2)."
  },
  {
    title: "Integrity and Accountability",
    description: "We strive to live with integrity, being accountable to God and one another in our personal and corporate conduct. “Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.” (Colossians 3:23)."
  }
];

export default function About() {
  
  return (
    <div className="pt-16">
      <PageHeader 
        title="About Us"
        image={AboutBanner}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="w-[80vw] mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Origins</h2>
          <p className="text-gray-600 mb-8">
          Glad Tidings Fellowship was birthed in 1982 through the divine vision given to Pastor Richmond Chiundiza while he was fervently serving at Christian Life Center in Harare and with Campus Crusade for Christ in Zimbabwe. Our journey began at Highfield Secondary School in Harare, where a passionate group of believers gathered for Sunday services, igniting a flame for the gospel.
          </p>

          <h2 className="text-3xl font-bold mb-6 text-center">Our Story as Tariro Assembly</h2>

          {/*
          Mission Statement of Glad Tidings Fellowship

Our mission at Glad Tidings Fellowship is to passionately spread the life-transforming gospel of Jesus Christ, making disciples of all nations as commanded in the Great Commission (Matthew 28:19-20). We are dedicated to:

Evangelism: Proclaiming the good news of Jesus Christ to every corner of the world, bringing His light to those in darkness. “Go into all the world and preach the gospel to all creation.” (Mark 16:15)
Discipleship: Equipping and grooming our disciples to grow in their faith and serve others, ensuring they are well-prepared to carry forward the mission of spreading God’s love and truth. “And the things you have heard me say in the presence of many witnesses entrust to reliable people who will also be qualified to teach others.” (2 Timothy 2:2)
Church Planting: Establishing vibrant churches across Zimbabwe and internationally, fostering communities where believers can grow and thrive in their faith. “So the churches were strengthened in the faith and grew daily in numbers.” (Acts 16:5)
Teaching: Instructing people to observe the commandments of the Lord, nurturing their spiritual growth and understanding of God’s Word. “Teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age.” (Matthew 28:20)
Service: Encouraging our members to serve others with love and compassion, reflecting the heart of Jesus in all we do. “For even the Son of Man did not come to be served, but to serve, and to give his life as a ransom for many.” (Mark 10:45)
Driven by the divine vision entrusted to us, we strive to bring His light to the nations, with hearts ablaze for His kingdom. */}

          <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
          <p className="text-gray-600 mb-8">
          Our mission, fueled by the Great Commission in Matthew 28:19-20, is to fervently spread the life-transforming gospel of Jesus Christ and make disciples of all nations. Over the years, our fellowship has experienced tremendous growth, planting vibrant churches across Zimbabwe in cities like Harare, Bulawayo, Gweru, Mutare, and Masvingo, as well as in rural areas. Our zeal for soul-winning has also led us to expand internationally, establishing congregations in South Africa, the United Kingdom, Botswana, Malawi, and Zambia.
          </p>

          <h2 className="text-3xl font-bold mb-6 text-center">Our Values</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <article key={index} className="bg-white p-6 rounded-lg shadow-md">
                      
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}