import React from 'react';
import './styles.scss';

const IntroSection = props => {
  const { data } = props;
  const { primary } = data;
  const { title, subtitle } = primary;
  return (
    <section className="intro-section">
      <div className="wrapper">
        <h1>{title.text}</h1>
        <p dangerouslySetInnerHTML={{ __html: subtitle.html }} />
      </div>
    </section>
  );
};

export default IntroSection;
