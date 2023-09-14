import { IoMdCloseCircle } from "react-icons/io";
import './Sidebar.css';

const Sidebar = ({ close, selectedEntry, setSelectedEntry }) => {
  const tableOfContentsEntries = [
    { title: "Power On", url: "/PowerOn" },
    { title: "Loading the syringe", url: "/InsertSyringe" },
    { title: "Programming an infusion", url: "/Tabs" },
    { title: "Main Menu", url: "/Menu2" },
    { title: "Drug Database", url: "/DrugDatabase1" },
    { title: "Changing the infusion Rate", url: "/ChangeInfusionRate" },
    { title: "Administering a Bolus", url: "/bolus" },
    { title: "Changing the syringe", url: "/ChangeSyringe" },
    { title: "Pre-Alarm", url: "/PreAlarm" },
    { title: "Operating Alarm", url: "/OperatingAlarm" },
    { title: "Standby", url: "/Standby" },
    { title: "Turning Off", url: "/shutdown" },
    // Add more entries
  ];

  const handleEntryClick = (entry) => {
    setSelectedEntry(entry); // Set the selected entry in the parent component
    // Perform any navigation or other actions related to the clicked entry
  };

  return (
    <aside className="sidebar">
      <div onClick={() => close()}>
        <IoMdCloseCircle color="#097159" size={50} />
      </div>
      <div style={{ marginTop: "12vmin" }}>
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