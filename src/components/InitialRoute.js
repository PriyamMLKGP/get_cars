import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const InitialRoute = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/page/1');
  }, [navigate]);

  return null;
};

export default InitialRoute;