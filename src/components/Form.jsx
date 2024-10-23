import { useState } from 'react'
import { General } from './General';
import { Education } from './Education';
import { Practice } from './Practice';

export function MainForm() {
  

  const [submitted, setSubmitted] = useState(false);

  const [formInfo, setFormInfo] = useState({
    general: { name: '', surname: '', email: '', phone: '' },
    education: { school: '', titleStudy: '', dateStudy: '' },
    practice: { company: '', position: '', responsibilities: '', dateStart: '', dateEnd: '' },
  })
  
  const handleSubmitButton = (event) => {
    event.preventDefault();
    setSubmitted(true);
  }

  const handleEditButton = (event) => {
    event.preventDefault();
    setSubmitted(false);
  }

  return (
    <>
      {!submitted ? (
        <form action="" onSubmit={handleSubmitButton}>
          <General formInfo={formInfo} setFormInfo={setFormInfo}/>
          <Education formInfo={formInfo} setFormInfo={setFormInfo}/>
          <Practice formInfo={formInfo} setFormInfo={setFormInfo}/>
          <button type='submit'>Submit</button>
        </form>
      ) : (
        <div className='results'>
          <h3>{formInfo.general.name} {formInfo.general.surname}&apos;s Information</h3>
          <h4>General Information</h4>
            <div>Name: {formInfo.general.name}</div>
            <div>Surname: {formInfo.general.surname}</div>
            <div>E-mail: {formInfo.general.email}</div>
            <div>Phone Number: {formInfo.general.phone}</div>

          <h4>Education</h4>
            <div>School Name: {formInfo.education.school}</div>
            <div>Title of study: {formInfo.education.titleStudy}</div>
            <div>Date of study: {formInfo.education.dateStudy}</div>

          <h4>Practical Experience</h4>
            <div>Company Name: {formInfo.practice.company}</div>
            <div>Position Title: {formInfo.practice.position}</div>
            <div>Main Responsibilities: {formInfo.practice.responsibilities}</div>
            <div>Job started: {formInfo.practice.dateStart}</div>
            <div>Job quitted: {formInfo.practice.dateEnd}</div>
          <button onClick={handleEditButton}>Edit</button>
        </div>
      )}
    </>
  )
}