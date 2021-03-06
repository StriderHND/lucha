import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div className="about-container">
        <div className="about-card">
          <div className="about-card-component">
            <div className="about-lucha">
              <h1 className="header-logo">
                <a href="#">LUCHA</a>
              </h1>
              <h2>Track your activities</h2>
              <p>
                <strong><a href="#">LUCHA</a></strong> allows you create GPS routes of your favorite runs or
                bike rides. You can also log your activities, either using your
                previously created routes or just your stats.
              </p>
            </div>
            <div className="about-myself">
              <h1>
                Learn more about the creator:
              </h1>
              <ul>
                <li className="github">
                  <a href="https://github.com/azuzunaga">
                    <i className="fab fa-github-square fa-2x"></i>
                  </a>
                </li>
                <li className="linkedin">
                  <a href="https://www.linkedin.com/in/americozuzunaga/">
                    <i className="fab fa-linkedin fa-2x"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
