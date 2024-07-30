import { ChevronRight, Home } from 'lucide-react';

const BreadCrumbs = () => {
  // create logic to dynamically render the correct breadcrumb trail
  return (
    <div className="flex flex-row items-center">
      <Home className="w-5 h-5" />
      <ChevronRight className="w-5 h-5" />
      <p>Users</p>
    </div>
  );
};

export default BreadCrumbs;
