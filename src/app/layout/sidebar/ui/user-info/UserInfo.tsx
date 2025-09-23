import './styles.css';

export function UserInfo() {
  return (
    <div className="user-info">
      <div className="user-photo-container">
        <img
          className="user-photo"
          src="/images/September_2305099_2.jpg"
          alt="photo"
          width={60}
          height={60}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <p className="user-name">Виолетта</p>
    </div>
  );
}
