import * as React from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import LightIcon from "@mui/icons-material/LightMode";
import DarkIcon from "@mui/icons-material/DarkMode";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";

const actions = [
  {
    icon: <LightIcon sx={{ color: "color.main" }} />,
    name: "Light",
    buttonBgColor: "cold.light",
    buttonColor: "cold.main",
  },
  {
    icon: <DarkIcon sx={{ color: "cold.contrastText" }} />,
    name: "Dark",
    buttonBgColor: "cold.dark",
    buttonColor: "cold.contrastText",
  },
];

export default function ThemeChanger() {
  const [selectedTheme, setTheme] = React.useState(actions[0]);

  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{
        position: "absolute",
        bottom: 16,
        right: 16,
      }}
      FabProps={{
        sx: {
          bgcolor: selectedTheme.buttonBgColor,
          color: selectedTheme.buttonColor,
          "&:hover": {
            bgcolor: selectedTheme.buttonBgColor,
            color: selectedTheme.buttonColor,
          },
        },
      }}
      icon={<SpeedDialIcon icon={selectedTheme.icon} />}
    >
      {actions
        .filter((theme) => theme.name !== selectedTheme.name)
        .map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            sx={{
              bgcolor: action.buttonBgColor,
              color: action.buttonColor,
              "&:hover": {
                bgcolor: action.buttonBgColor,
                color: action.buttonColor,
              },
            }}
            tooltipTitle={action.name}
            onClick={() => setTheme(action)}
          />
        ))}
    </SpeedDial>
  );
}
