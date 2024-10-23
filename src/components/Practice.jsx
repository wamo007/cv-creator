export function Practice({ formInfo, setFormInfo }) {
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormInfo({ ...formInfo, 
        practice: { ...formInfo.practice, [name]: value }});
    };
  
  
    return (
      <>
        <h3>Practical experience</h3>
          <label htmlFor="company">Company Name: 
            <input type="text" name='company' id='company' value={formInfo.practice.company} onChange={ handleInputChange }/>
          </label>
          <label htmlFor="position">Position Title: 
            <input type="text" name='position' id='position' value={formInfo.practice.position} onChange={ handleInputChange }/>
          </label>
          <label htmlFor="responsibilities">Main Responsibilities: 
            <input type="text" name='responsibilities' id='responsibilities' value={formInfo.practice.responsibilities} onChange={ handleInputChange }/>
          </label>
          <label htmlFor="dateStart">When did you start to work? 
            <input type="date" name='dateStart' id='dateStart' value={formInfo.practice.dateStart} onChange={ handleInputChange }/>
          </label>
          <label htmlFor="dateEnd">When did you quit your work? 
            <input type="date" name='dateEnd' id='dateEnd' value={formInfo.practice.dateEnd} onChange={ handleInputChange }/>
          </label>
      </>
    )
  }