import React from 'react'
import Slider from '../components/Slider'
function Components() {
  return (
    <div>
    <Slider />
      
      
   {   /*
<section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Explore Common Questions
            </h2>
        </div>
        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
            <div
                className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
                <button type="button" id="question1" data-state="closed" className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
                    <span class="flex text-lg font-semibold text-black">How can I get started?</span>
                    <svg id="arrow1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        className="w-6 h-6 text-gray-400">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                <div id="answer1"  className="px-4 pb-5 sm:px-6 sm:pb-6">
                    <p>Getting started is easy! Sign up for an account, and you'll have access to our platform's
                        features. No credit card required for the initial signup.</p>
                </div>
            </div>
            <div
                className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
                <button type="button" id="question2" data-state="closed" className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
                    <span className="flex text-lg font-semibold text-black">What is the pricing structure?</span>
                    <svg id="arrow2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        className="w-6 h-6 text-gray-400">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                <div id="answer2" style="display:none" className="px-4 pb-5 sm:px-6 sm:pb-6">
                    <p>Our pricing structure is flexible. We offer both free and paid plans. You can choose the one
                        that
                        suits your needs and budget.</p>
                </div>
            </div>
            <div
                className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
                <button type="button" id="question3" data-state="closed" className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
                    <span className="flex text-lg font-semibold text-black">What kind of support do you provide?</span>
                    <svg id="arrow3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        className="w-6 h-6 text-gray-400">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                <div id="answer3" style="display:none" className="px-4 pb-5 sm:px-6 sm:pb-6">
                    <p>We offer comprehensive customer support. You can reach out to our support team through
                        various
                        channels, including email, chat, and a knowledge base.</p>
                </div>
            </div>
            <div
                className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
                <button type="button" id="question4" data-state="closed" className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
                    <span className="flex text-lg font-semibold text-black">Can I cancel my subscription anytime?</span>
                    <svg id="arrow4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        className="w-6 h-6 text-gray-400">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                <div id="answer4" style="display:none" className="px-4 pb-5 sm:px-6 sm:pb-6">
                    <p>Yes, you can cancel your subscription at any time without any hidden fees. We believe in
                        providing a hassle-free experience for our users.</p>
                </div>
            </div>
        </div>
        <p className="text-center text-gray-600 textbase mt-9">
            Still have questions?
            <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover-underline">Contact
                our support
            </span>
        </p>
    </div>
    {
       
        document.querySelectorAll('[id^="question"]').forEach(function(button, index) {
            button.addEventListener('click', function() {
                var answer = document.getElementById('answer' + (index + 1));
                var arrow = document.getElementById('arrow' + (index + 1));

                if (answer.style.display === 'none' || answer.style.display === '') {
                    answer.style.display = 'block';
                    arrow.style.transform = 'rotate(0deg)';
                } else {
                    answer.style.display = 'none';
                    arrow.style.transform = 'rotate(-180deg)';
                }
            })
        })
      }
</section>





    


  
</div>*/}
    </div>
  )
}

export default Components