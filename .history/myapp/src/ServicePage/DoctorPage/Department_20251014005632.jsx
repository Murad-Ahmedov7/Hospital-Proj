import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Department() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      navigate('/services/doctor', { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <div>
      <h1>Department Page</h1>
    </div>
  );
}
