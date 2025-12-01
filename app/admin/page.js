export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome to Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-white p-6 shadow rounded">
          <h2 className="text-xl font-medium">Total Users</h2>
          <p className="text-3xl mt-2 font-bold">124</p>
        </div>

        <div className="bg-white p-6 shadow rounded">
          <h2 className="text-xl font-medium">Media Files</h2>
          <p className="text-3xl mt-2 font-bold">87</p>
        </div>

        <div className="bg-white p-6 shadow rounded">
          <h2 className="text-xl font-medium">Articles</h2>
          <p className="text-3xl mt-2 font-bold">45</p>
        </div>

      </div>
    </div>
  );
}
