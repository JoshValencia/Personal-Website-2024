import { ThemeProvider, createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    cold: Palette["primary"];
  }

  interface PaletteOptions {
    cold?: PaletteOptions["primary"];
  }
}

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const theme = createTheme({
  palette: {
    cold: {
      main: "#DCF2F1",
      light: "#7FC7D9",
      dark: "#0F1035",
      contrastText: "#365486",
    },
  },
});

export default function CustomThemeProvider({ children }: Props) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
