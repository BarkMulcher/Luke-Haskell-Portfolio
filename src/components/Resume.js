import React from 'react';

const Resume = () => {

    return (
      <section className="resume-section">
        <a className="download-button" href="https://github.com/CIDoubleAgent/nz-portfolio-v3/blob/main/src/images/resume/----------------.pdf" target='_blank' rel="noreferrer" download="Nick Zabkar Resume">Click Here To Download</a>
        <article className='resume-pdf'>
          <iframe title="Resume" src="https://docs.google.com/document/d/e/2PACX-1vSqpYEMht1hhOle8rMKiuE_JT8c97KYkMscPMw85DvTlmFtwqPnNKn7f-0mNoQRVVvatsPjQgq_Meyc/pub?embedded=true"></iframe>
        </article>
      </section>
    )
  };

  export default Resume;