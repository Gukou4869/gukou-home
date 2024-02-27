// UserProfile.tsx

interface UserProfileProps {
  age: number;
  name: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ name, age }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age} years old</p>
    </div>
  );
};

export default UserProfile;
