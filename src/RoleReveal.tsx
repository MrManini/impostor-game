import { useState } from "react";

interface Props {
  role: string;
}

export default function RoleReveal({ role }: Props) {
  const [visible, setVisible] = useState(false);

  return (
    <div
      onTouchStart={() => setVisible(true)}
      onTouchEnd={() => setVisible(false)}
      onMouseDown={() => setVisible(true)}
      onMouseUp={() => setVisible(false)}
      className="role-card"
      style={{
        width: "240px",
        height: "140px",
        border: "2px solid #333",
        borderRadius: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.2rem",
        userSelect: "none",
        marginTop: "20px",
      }}
    >
      {visible ? role : "Presiona y mantén para ver tu palabra"}
    </div>
  );
}
