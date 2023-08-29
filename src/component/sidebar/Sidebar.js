import { IoMdCloseCircle } from "react-icons/io";
import './Sidebar.css';

const Sidebar = ({ close, selectedEntry, setSelectedEntry }) => {
  const tableOfContentsEntries = [
    { title: "Power On", url: "/PowerOn" },
    { title: "Loading the syringe", url: "/entry2" },
    { title: "Programming an infusion", url: "/entry2" },
    { title: "Main Menu", url: "/entry2" },
    { title: "Drug Database", url: "/entry2" },
    { title: "Changing the infusion Rate", url: "/entry2" },
    { title: "Administering a Bolus", url: "/entry2" },
    { title: "Changing the syringe", url: "/entry2" },
    { title: "Pre-Alarm", url: "/entry2" },
    { title: "Operating Alarm", url: "/entry2" },
    { title: "Standby", url: "/entry2" },
    { title: "Turning Off", url: "/entry2" },
    // Add more entries
  ];

  const handleEntryClick = (entry) => {
    setSelectedEntry(entry); // Set the selected entry in the parent component
    // Perform any navigation or other actions related to the clicked entry
  };

  return (
    <aside className="sidebar">
      <div onClick={() => close()}>
        <IoMdCloseCircle color="#05b18b" size={50} />
      </div>
      <div style={{ marginTop: "100px" }}>
        <ul>
          {tableOfContentsEntries.map((entry, index) => (
            <li
              key={index}
              className={selectedEntry === entry.title ? "selected" : ""}
              onClick={() => handleEntryClick(entry.title)}
            >
              <a href={entry.url}>{entry.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
