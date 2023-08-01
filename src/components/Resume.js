import React from 'react';

const Resume = () => {

    return (
      <section className="resume-section">
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
        <a className="download-button" href="https://raw.githubusercontent.com/BarkMulcher/luke-haskell-portfolio/src/data/Lucas_Haskell_Resume_7.31.23" target='_blank' rel="noreferrer" download="Nick Zabkar Resume">Click Here To Download</a>
        <article className='resume-pdf'>
          <iframe title="Resume" src="https://docs.google.com/document/d/e/2PACX-1vSqpYEMht1hhOle8rMKiuE_JT8c97KYkMscPMw85DvTlmFtwqPnNKn7f-0mNoQRVVvatsPjQgq_Meyc/pub?embedded=true"></iframe>
        </article>
      </section>
    )
  };

  export default Resume;