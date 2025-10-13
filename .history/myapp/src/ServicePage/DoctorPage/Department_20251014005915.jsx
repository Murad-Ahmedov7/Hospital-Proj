import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Department() {
  const navigate = useNavigate();
  const location = useLocation();


  return (
    <div>
      <h1>Department Page</h1>
    </div>
  );
}
