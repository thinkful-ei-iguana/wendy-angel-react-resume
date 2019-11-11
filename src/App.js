import React from 'react';
import logo from './logo.svg';
import './App.css';

function studentList() {
  // You can create more than one Person, changing its name
  return (
      <div className="studentList">
          <h3>Student List</h3>
          <Student name="Rich" />
          <Student name="Joe" />
          <Student name="Chris" />
          <Student name="Tauhida" />
      </div>
  );
}

function StudentList(props) {
  const studentData = [{
      id: 10,
      name: 'Rich'
  }, {
      id: 11,
      name: 'Joe'
  }, {
      id: 22,
      name: 'Chris'
  }, {
      id: 26,
      name: 'Tauhida'
  }];

  const students = studentData.map(student =>
      <Student key={student.id} name={student.name} />
      );
      return (
        <div className="studentList">
          <h3> Student List</h3>
            {students}
        </div>
      );
};

function App(props) {
  return (
    
    <div className='student-name'>
      
    <img src='https://ia.media-imdb.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_UX214_CR0,0,214,317_AL_.jpg' alt="sally student"></img>
    <header>Hello My Name is {props.name} and this is my Resume
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
