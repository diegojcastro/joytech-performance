import { useEffect } from "react";

export default function Navbar(props) {
  const { activeTab, setActiveTab} = props;

  const tabNames = [
    'Editor',
    'JSON',
    'Nexus',
    'Mudlet?',
  ]

  const parsedTabs = tabNames.map( (name, index) => {
    const classes = activeTab === name ? "nav-link active" : "nav-link";
    return (
      <li key={index} className="nav-item" onClick={() => setActiveTab(name)}>
        <div className={classes}>
          {name}
        </div>
      </li>
    );
  });

  return (
    <ul className="nav nav-tabs">
      {parsedTabs}
    </ul>
  )
}
