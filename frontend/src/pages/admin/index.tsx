import { useEffect } from 'react';
import { useRouter } from 'next/router';

const AdminIndex = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/admin/login');
  }, [router]);

  return null;
};

export default AdminIndex;
