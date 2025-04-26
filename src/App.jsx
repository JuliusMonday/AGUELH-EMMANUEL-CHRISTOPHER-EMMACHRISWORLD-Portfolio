import React, { useState, useEffect } from 'react';
import "./App.css"
import aboutPhoto from "./assets/sitePic.png"
import cvPdf from './assets/eMMacHRisCv.pdf';
// import heroPhoto = "./assets/emmachrisPhoto2.jpg"
const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      {/* Header/Navigation */}
      <header className={`fixed w-full z-50 shadow-md transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-blue-600">
            Emma Chris
          </h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-purple-700 font-medium">Home</a>
            <a href="#about" className="hover:text-purple-700 font-medium">About</a>
            <a href="#services" className="hover:text-purple-700 font-medium">Services</a>
            <a href="#contact" className="hover:text-purple-700 font-medium">Contact</a>
            <a
                href={cvPdf}
                download="eMMacHRisCv.pdf"
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-purple-800 to-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 font-medium"
              >
                Download CV
              </a>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'} text-lg ${darkMode ? 'text-yellow-300' : 'text-gray-700'}`}></i>
            </button>
          </nav>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} aria-label="Toggle menu" className="text-2xl focus:outline-none">
              <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <nav className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-screen' : 'max-h-0'}`}>
          <div className={`flex flex-col px-4 py-4 space-y-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>            
            <a href="#home" className="hover:text-purple-700 font-medium">Home</a>
            <a href="#about" className="hover:text-purple-700 font-medium">About</a>
            <a href="#services" className="hover:text-purple-700 font-medium">Services</a>
            <a href="#contact" className="hover:text-purple-700 font-medium">Contact</a>
            <a
              href="./assets/eMMacHRisCv.pdf"
              className="bg-gradient-to-r from-purple-800 to-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 font-medium"
            >
              Download CV
            </a>
            <button
              onClick={toggleDarkMode}
              className="flex items-center p-2 rounded-lg bg-gray-200 dark:bg-gray-700 transition-colors w-max"
              aria-label="Toggle dark mode"
            >
              <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'} text-lg mr-2 ${darkMode ? 'text-yellow-300' : 'text-gray-700'}`}></i>
              <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-20 min-h-screen flex items-center">
        <div
          className="absolute inset-0 z-0" id='emmaPics'
          style={{
            opacity: 0.9
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-transparent z-10"></div>
       
        <div className="container mx-auto px-4 z-20 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              AGULEH EMMANUEL CHRISTOPHER
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-2">(Emma Chris)</h2>
            <h3 className="text-xl md:text-2xl font-medium mb-6 text-blue-200">
              Computer Engineering Graduate | Full-Stack Engineer
            </h3>
            <p className="text-lg mb-8 max-w-xl">
              Detail-oriented and analytical computer professional with expertise in software development,
              network management, and system troubleshooting. Committed to delivering optimized IT solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#portfolio"
                className="bg-white text-purple-800 px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-bold cursor-pointer !rounded-button whitespace-nowrap hover:bg-purple-600 hover:text-white"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg shadow-lg hover:bg-white hover:text-purple-800 transition-all duration-300 font-bold cursor-pointer !rounded-button whitespace-nowrap"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} transition-colors duration-300`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-800 to-blue-600 mx-auto"></div>
          </div>
         
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src={aboutPhoto}
                alt="Emma Chris Professional Portrait"
                className="rounded-lg shadow-xl w-full h-auto object-cover object-top "
                id='side-photo'
              />
            </div>
           
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-purple-800">Computer Engineering Professional</h3>
              <p className="text-lg mb-6">
                Detail-oriented and analytical computer professional with a strong foundation in software
                development (full-stack engineer), network management, and system troubleshooting. Eager to
                leverage technical expertise and problem-solving skills in a challenging IT role to enhance
                system efficiency, secure data management, and support organizational goals.
              </p>
              <p className="text-lg mb-8">
                Committed to continuous learning and innovation to drive technological advancements and
                deliver optimized IT solutions.
              </p>
             
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-bold mb-3 text-lg">Technical Skills</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <i className="fas fa-check-circle text-green-500 mr-2"></i>
                      WordPress Development
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check-circle text-green-500 mr-2"></i>
                      HTML, CSS, JavaScript
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check-circle text-green-500 mr-2"></i>
                      Python Programming
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check-circle text-green-500 mr-2"></i>
                      Computer Networking
                    </li>
                  </ul>
                </div>
               
                <div>
                  <h4 className="font-bold mb-3 text-lg">Professional Skills</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <i className="fas fa-check-circle text-green-500 mr-2"></i>
                      IT Troubleshooting
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check-circle text-green-500 mr-2"></i>
                      Academic Writing
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check-circle text-green-500 mr-2"></i>
                      Graphic Design
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check-circle text-green-500 mr-2"></i>
                      Social Media Marketing
                    </li>
                  </ul>
                </div>
              </div>
             
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Web Development</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-purple-800 to-blue-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
               
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Networking</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-purple-800 to-blue-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
               
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">IT Solutions</span>
                    <span>95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-purple-800 to-blue-600 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
               
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Academic Writing</span>
                    <span>80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-purple-800 to-blue-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-800 to-blue-600 mx-auto"></div>
            <p className="text-lg mt-6 max-w-2xl mx-auto">
              I offer a wide range of IT and creative services to help businesses and individuals achieve their goals.
            </p>
          </div>
         
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} transition-all duration-300 transform hover:-translate-y-2 cursor-pointer`}>
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-purple-100 text-purple-800">
                <i className="fas fa-code text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Web Development</h3>
              <p className="text-center">
                Full-stack web development using WordPress, HTML, CSS, JavaScript, and Python to create responsive and user-friendly websites.
              </p>
            </div>
           
            <div className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} transition-all duration-300 transform hover:-translate-y-2 cursor-pointer`}>
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100 text-blue-800">
                <i className="fas fa-network-wired text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Computer Networking</h3>
              <p className="text-center">
                Network design, implementation, and management services for businesses and organizations of all sizes.
              </p>
            </div>
           
            <div className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} transition-all duration-300 transform hover:-translate-y-2 cursor-pointer`}>
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-purple-100 text-purple-800">
                <i className="fas fa-tools text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">IT Troubleshooting</h3>
              <p className="text-center">
                Comprehensive IT support and troubleshooting services to resolve technical issues and optimize system performance.
              </p>
            </div>
           
            <div className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} transition-all duration-300 transform hover:-translate-y-2 cursor-pointer`}>
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100 text-blue-800">
                <i className="fas fa-pencil-alt text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Academic Writing</h3>
              <p className="text-center">
                Professional writing services for academic articles, journals, projects, and thesis/dissertations.
              </p>
            </div>
           
            <div className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} transition-all duration-300 transform hover:-translate-y-2 cursor-pointer`}>
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-purple-100 text-purple-800">
                <i className="fas fa-palette text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Graphics Design</h3>
              <p className="text-center">
                Creative graphic design services for logos, marketing materials, social media content, and more.
              </p>
            </div>
           
            <div className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} transition-all duration-300 transform hover:-translate-y-2 cursor-pointer`}>
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100 text-blue-800">
                <i className="fas fa-laptop-code text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Computer Training</h3>
              <p className="text-center">
                Hybrid computer training services for individuals and organizations, covering various IT skills and software.
              </p>
            </div>
           
            <div className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} transition-all duration-300 transform hover:-translate-y-2 cursor-pointer`}>
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-purple-100 text-purple-800">
                <i className="fas fa-hashtag text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Social Media Marketing</h3>
              <p className="text-center">
                Strategic social media marketing services to enhance online presence and engage with target audiences.
              </p>
            </div>
           
            <div className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} transition-all duration-300 transform hover:-translate-y-2 cursor-pointer`}>
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100 text-blue-800">
                <i className="fas fa-file-alt text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Resume Writing</h3>
              <p className="text-center">
                Professional resume writing and optimization services to help job seekers stand out in competitive markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} transition-colors duration-300`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-800 to-blue-600 mx-auto"></div>
            <p className="text-lg mt-6 max-w-2xl mx-auto">
              Have a project in mind or need my services? Feel free to contact me through any of the channels below.
            </p>
          </div>
         
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <form className={`p-8 rounded-lg shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className={`w-full px-4 py-3 rounded-lg border-none ${darkMode ? 'bg-gray-600 text-white' : 'bg-gray-100'} focus:ring-2 focus:ring-purple-500 outline-none text-sm`}
                    placeholder="John Doe"
                  />
                </div>
               
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    className={`w-full px-4 py-3 rounded-lg border-none ${darkMode ? 'bg-gray-600 text-white' : 'bg-gray-100'} focus:ring-2 focus:ring-purple-500 outline-none text-sm`}
                    placeholder="john@example.com"
                  />
                </div>
               
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className={`w-full px-4 py-3 rounded-lg border-none ${darkMode ? 'bg-gray-600 text-white' : 'bg-gray-100'} focus:ring-2 focus:ring-purple-500 outline-none text-sm`}
                    placeholder="Project Inquiry"
                  />
                </div>
               
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border-none ${darkMode ? 'bg-gray-600 text-white' : 'bg-gray-100'} focus:ring-2 focus:ring-purple-500 outline-none text-sm`}
                    placeholder="Hello, I would like to discuss a project..."
                  ></textarea>
                </div>
               
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-800 to-blue-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 cursor-pointer !rounded-button whitespace-nowrap"
                >
                  Send Message
                </button>
              </form>
            </div>
           
            <div className="md:w-1/2">
              <div className={`p-8 rounded-lg shadow-lg h-full ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
               
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-800 mr-4">
                      <i className="fas fa-map-marker-alt text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Location</h4>
                      <p>Awka, Anambra State, Nigeria</p>
                    </div>
                  </div>
                 
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-800 mr-4">
                      <i className="fas fa-phone-alt text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Phone/WhatsApp</h4>
                      <p>+234 901 405 0222</p>
                    </div>
                  </div>
                 
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-800 mr-4">
                      <i className="fas fa-envelope text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Email</h4>
                      <p>emmachrisworld@gmail.com</p>
                    </div>
                  </div>
                </div>
               
                <div className="mt-8">
                  <h4 className="font-bold text-lg mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://facebook.com/emmachrisworld"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
                    >
                      <i className="fab fa-facebook-f text-xl"></i>
                    </a>
                   
                    <a
                      href="https://twitter.com/emmachrisworld"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center text-white hover:bg-blue-500 transition-colors duration-300 cursor-pointer"
                    >
                      <i className="fab fa-twitter text-xl"></i>
                    </a>
                   
                    <a
                      href="https://instagram.com/emmachris.world"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white hover:from-purple-600 hover:to-pink-600 transition-colors duration-300 cursor-pointer"
                    >
                      <i className="fab fa-instagram text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-10 ${darkMode ? 'bg-gray-900' : 'bg-gray-800'} text-white`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center">
                <img
                  src="https://readdy.ai/api/search-image?query=Simple%20minimalist%20avatar%20of%20a%20young%20African%20man%20with%20a%20professional%20appearance%2C%20suitable%20for%20a%20small%20profile%20icon%2C%20clean%20background%2C%20high%20quality%20digital%20art%20in%20purple%20and%20blue%20tones&width=60&height=60&seq=3&orientation=squarish"
                  alt="Emma Chris"
                  className="w-12 h-12 rounded-full mr-3 object-cover object-top"
                />
                <div>
                  <h3 className="font-bold text-xl">Emma Chris</h3>
                  <p className="text-sm text-gray-300">Computer Engineering Professional</p>
                </div>
              </div>
            </div>
           
            <div className="text-center mb-6 md:mb-0">
              <p>&copy; {new Date().getFullYear()} Emma Chris. All rights reserved.</p>
            </div>
           
            <div className="flex space-x-4">
              <a
                href="#home"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300 cursor-pointer"
              >
                <i className="fas fa-home"></i>
              </a>
             
              <a
                href="#about"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300 cursor-pointer"
              >
                <i className="fas fa-user"></i>
              </a>
             
              <a
                href="#services"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300 cursor-pointer"
              >
                <i className="fas fa-briefcase"></i>
              </a>
             
              <a
                href="#contact"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300 cursor-pointer"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;