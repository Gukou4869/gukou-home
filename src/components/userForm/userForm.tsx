import React, { useState } from 'react';

interface UserFormProps {
  onSubmit: (userName: string) => void;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit }) => {
  const [userName, setUserName] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(userName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="userName">User Name:</label>
      <input id="userName" type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
