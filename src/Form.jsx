import { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    age: '',
    isMarried: false
  });

  const formDataHandler = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            placeholder="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={formDataHandler}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={formDataHandler}
          />
        </div>
        <div>
          <select name="age" id="ageId" onChange={formDataHandler}>
            <option value="select your age">select your age</option>
            <option value="31">31</option>
            <option value="32">32</option>
            <option value="33">33</option>
          </select>
        </div>
        <div>
          <input type="checkbox" name="isMarried" checked={formData.isMarried} onChange={formDataHandler}/>
        </div>
      </form>
      <div>
        <h3>{formData.firstname}</h3>
        <h3>{formData.lastname}</h3>
        <h3>{formData.age}</h3>
        <h3>Is Married: {formData.isMarried ? "Yes" : "No"}</h3>
      </div>
    </div>
  );
};

export default Form;
