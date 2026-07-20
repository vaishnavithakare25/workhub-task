import { useThemeStore } from "../store/theme.store";

export default function SettingsPage() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <div
      className={`min-h-screen p-6 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-white text-black"
      }`}
    >
      <h1 className="mb-6 text-2xl font-bold">
        Settings
      </h1>

      <div className="flex items-center justify-between rounded-lg border p-4">
        <span>Theme</span>

        <button
          onClick={toggleTheme}
          className="rounded-md bg-blue-500 px-4 py-2 text-white"
        >
          {theme === "dark"
            ? "Switch to Light"
            : "Switch to Dark"}
        </button>
      </div>
    </div>
  );
}