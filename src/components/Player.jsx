import { useState } from "react";

function Player({ initialName, symbol, isActive, onNameChange }) {
  const [playerName, setInitialPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((prev) => !prev);
    if (isEditing) {
      onNameChange(symbol, playerName);
    }
  };

  const handleChange = (event) => {
    setInitialPlayerName(event.target.value);
  };
  console.log(isActive);

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        <span className="player-name">{editablePlayerName}</span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;
