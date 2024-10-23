// import './styles/App.css';

export function General({ formInfo, setFormInfo }) {
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormInfo({ ...formInfo, 
        general: { ...formInfo.general, [name]: value }});
    };
  
    return (
      <>
        <h3>Fill in general information</h3>
          <label htmlFor="name">Name: 
            <input type="text" name='name' id='name' value={formInfo.general.name} onChange={ handleInputChange }/>
          </label>
          <label htmlFor="surname">Surname: 
            <input type="text" name='surname' id='surname' value={formInfo.general.surname} onChange={ handleInputChange }/>
          </label>
          <label htmlFor="email">E-Mail: 
            <input type="email" name='email' id='email' value={formInfo.general.email} onChange={ handleInputChange }/>
          </label>
          <label htmlFor="phone">Phone Number: 
            <input type="number" name='phone' id='phone' value={formInfo.general.phone} onChange={ handleInputChange }/>
          </label>
      </>
    )
}