export function Education({ formInfo, setFormInfo }) {
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormInfo({ ...formInfo, 
        education: { ...formInfo.education, [name]: value }});
    };
  
    return (
      <>
        <h3>Education</h3>
          <label htmlFor="school">School Name: 
            <input type="text" name='school' id='name' value={formInfo.education.school} onChange={ handleInputChange }/>
          </label>
          <label htmlFor="titleStudy">Title of study: 
            <input type="text" name='titleStudy' id='titleStudy' value={formInfo.education.titleStudy} onChange={ handleInputChange }/>
          </label>
          <label htmlFor="dateStudy">Date of study: 
            <input type="date" name='dateStudy' id='dateStudy' value={formInfo.education.dateStudy} onChange={ handleInputChange }/>
          </label>
      </>
    )
}