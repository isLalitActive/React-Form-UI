import { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
  });

  const formDataHandler = (e) => {
    const { name, value } = e.target;
    setFormData({
      // ...formData,
      [name]: value,
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
      </form>
      <div>
        <h3>
          {formData.firstname}
          {formData.lastname}
        </h3>
      </div>
    </div>
  );
};

export default Form;
