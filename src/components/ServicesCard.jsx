import { ArrowRight } from 'lucide-react';
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

export default function ServicesCard({index, title, description, icon }) {
  return (
    <motion.div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
    initial={{
      opacity: 0,
      x: 50,
    }}
    animate={{
      opacity:1,
      x:0
    }}
    tansition={{
      duration:1.5,
    }}>
      <div className="w-full  rounded-lg flex text-purple-800 mb-4">
       
       {icon}
      
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800 ">{title}</h3>
      <p className="text-gray-600 mb-4 ">{description}</p>
      <Link to='/services'>
      <button className="flex items-center text-purple-800 hover:text-purple-900 transition-colors">
        Learn More <ArrowRight className="ml-2 w-4 h-4" />
      </button></Link>
    </motion.div>
  );
  
}
