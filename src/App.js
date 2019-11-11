import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <header>Hello My Name is Sally and this is my Resume
    </header>
      
    <main>
      <section><h4><u>Contact Information:</u></h4>
        <address>
          Email:<a href = 'mailto:jim@rock.com' target='_blank'> jim@rock.com</a><br/>
          Cell Phone Number:<a href = 'tel:+13235451222' target='_blank'>(323) 545-1222</a>
        </address>
      </section>
      <section><h4><u>Education:</u></h4>
        <ul>
          <li><b>Hoboken High School:</b> 2003-2007</li>
          <li><b>Rutgers University:</b> 2007-2011</li>
          <li><b>Rider University:</b> 2013-2015</li>
        </ul>
      </section>  
        <section><h4><u>Employment History:</u></h4>
          <div><b>Apple, Software Engineer:</b> September 2015 - January 2019</div>
            <p>Developed and maintained applications. Collaborated with other developers on solving problems.</p><br/>
          <div><b>Lawrenceville Police Department, Police Officer:</b> April 2010 - May 2014</div>
            <p>Preformed active patrol of the community. Responded to all police related emrgencies.</p>
        </section>
      </main> 
      </div>
  );
};

export default App;
