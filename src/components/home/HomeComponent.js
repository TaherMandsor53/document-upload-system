import { React } from 'react';

export default function HomeComponent() {
  return (
    <div className="home-main">
      <div className="document-progress-main">
        <div className="progress-container">
          <div className="progress-text">
            Welcome <span className="user-name">Micheal</span>, You are just
            <span className="field-value">114 fields</span> away
          </div>
          <div className="progress-fields">56/170 fields</div>
        </div>
      </div>
    </div>
  );
}
