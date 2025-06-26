interface SidebarProps {
    setActiveSection: (section: string) => void;
  }
  
  const Sidebar = ({ setActiveSection }: SidebarProps) => {
    return (
      <div className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <ul>
          <li><button onClick={() => setActiveSection("form")}>Create Entry</button></li>
          <li><button onClick={() => setActiveSection("entries")}>View Entries</button></li>
          <li><button onClick={() => setActiveSection("pie-chart")}>Pie Chart</button></li>
          <li><button onClick={() => setActiveSection("notes")}>Notes</button></li>
          <li><button onClick={() => setActiveSection("todo")}>To-Do List</button></li>
          <li><button onClick={() => setActiveSection("filters")}>Filters</button></li>
        </ul>
      </div>
    );
  };
  
  export default Sidebar;
  