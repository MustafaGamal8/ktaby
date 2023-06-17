import React, { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'ما هو موقع كتابي ؟',
      answer: ' كتابي هو موقع تم انشائه بواسطة <a  href="https://www.facebook.com/mustafa.gamal.9231712/"target="blank" style="color: #60a4f9">مصطفي جمال</a>  لعرض الكتب وتحميلها ',
    },
    {
      question: 'من اين الكتب وهل تحميلها قانوني ؟',
      answer: 'بيانات الكتب من موقع <a  href="https://www.hindawi.org/" style="color: #60a4f9">هنداوي</a> هو موقع مشهور للكتب و تحميل الكتب كلها قانوني',
     },
     {
        question: 'هل يتطلب التسجيل للوصول إلى الكتب ؟',
        answer: 'لا، يمكنك تصفح وتحميل الكتب دون الحاجة للتسجيل , و يمكنك حفظ الكتب المفضلة ومزيد من المزايا',
      },
      {
        question: 'هل يمكنني تنزيل الكتب بصيغة  ( بي دي اف) ؟' ,
        answer: 'نعم، يمكنك تنزيل الكتب بصيغة ( بي دي اف) وحفظها على جهازك للوصول إليها في وقت لاحق',
      },
      {
        question: 'هل يمكنني المساهمة بكتابي الخاص على الموقع ؟',
        answer: 'نعم، يمكنك المساهمة بكتابك الخاص على الموقع. يرجى الاتصال بفريق الدعم للحصول على مزيد من التفاصيل حول كيفية المشاركة.',
      },
      {
        question: 'هل تتوفر خيارات لتصفح الكتب حسب التصنيفات ؟',
        answer: 'نعم، يمكنك تصفح الكتب حسب التصنيفات المختلفة مثل الأدب، العلوم، التاريخ، وغيرها. يتيح لك ذلك اكتشاف كتب جديدة ضمن المجالات التي تهتم بها.',
      },
    {
      question: 'هل يمكنني ان اتصفح الكتاب بدون تنزيله ؟',
      answer: 'نعم يمكنك , موقع كتابي يوفرلك هذه الخاصية بسرعة وسلاسة عالية',
    },
  ];

  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="container mx-auto">
        <h1 className='text-center text-xl text-green-500'>أسئلة شائعة</h1>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border-b py-4 "
        >
          <button
            className={`flex items-center flex-row-reverse justify-between w-full focus:outline-none px-4 py-2  ${
              activeIndex === index ? 'bg-green-400 text-white' : 'bg-gray-100 text-gray-700'
            } transition-all duration-300 ease-in-out`}
            onClick={() => toggleAccordion(index)}
          >
            <h3 className="text-lg font-medium text-right">
              {faq.question}
            </h3>
            <svg
              className={`w-4 h-4 transform ${
                activeIndex === index ? 'rotate-180' : ''
              } transition-transform duration-300 ease-in-out`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M7 10l5 5 5-5z" />
            </svg>
          </button>
          {activeIndex === index && (
            <div className="mt-4 pl-4 text-gray-600 text-right">
            <p dangerouslySetInnerHTML={{ __html: faq.answer }} />
          
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
