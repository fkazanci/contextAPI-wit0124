import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Main() {
  const [formData, setFormData] = useState({
    firstName: "",
  });
  const { setUser } = useContext(UserContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUser(formData);
    setFormData({ firstName: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </label>
      <button>Giriş</button>
    </form>
  );
}
