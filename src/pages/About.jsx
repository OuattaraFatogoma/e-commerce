import React from 'react'
import about from '../images/about.jpg'
function About() {
  return (
    <main>
      <div className='about'>
        <div className='image'><img src={about} alt='about' /></div>
        <div className='title'>
          <h2>Our Story</h2>
          <div className='underline'></div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Fugiat accusantium sapiente tempora sed dolore esse deserunt
             eaque excepturi, delectus error accusamus vel eligendi, omnis 
             beatae. Quisquam, dicta. Eos quod quisquam esse recusandae 
             vitae neque dolore, obcaecati incidunt sequi blanditiis est 
             exercitationem molestiae delectus saepe odio eligendi modi 
             porro eaque in libero minus unde sapiente consectetur 
             architecto. Ullam rerum, nemo iste ex, eaque perspiciatis
              nisi, eum totam velit saepe sed quos similique amet. 
              Ex, voluptate accusamus nesciunt totam vitae esse iste.
          </p>
        </div>
      </div>
    </main>
  )
}

export default About