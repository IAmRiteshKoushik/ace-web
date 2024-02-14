import "./profile.css";
const Profile = () => {
  return (
    <div className="prof">
      <i className="fa-solid fa-user" id="user"></i>
      <div className="sub-menu-wrap">
        <div className="sub-menu">
          <div className="user-info">
            <a href="#" className="view">
              <i className="fa-solid fa-eye"></i>
              <p>View Profile</p>
            </a>
            <a href="#" className="view">
              <i className="fa-solid fa-right-from-bracket"></i>
              <p>Logout</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
