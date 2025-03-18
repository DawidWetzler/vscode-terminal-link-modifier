# 🚀 Terminal Link Modifier

A VS Code extension that enhances terminal links by allowing you to modify and customize paths before opening files. This is particularly useful for adjusting file paths (e.g., removing `/var/www/html/` before searching in the editor).

## ✨ Features
- Automatically detects file paths in the terminal.
- Removes a configurable prefix before searching for files in VS Code.
- Works with both **Unix (`/var/www/html/file.js`)** and **Windows (`C:\Users\file.js`)** paths.
- Supports quick file searching via the command palette.

## 📦 Installation
1. Open VS Code.
2. Go to the **Extensions Marketplace** (`Ctrl+Shift+X` or `Cmd+Shift+X` on macOS).
3. Search for **"Terminal Link Modifier"**.
4. Click **Install**.

Alternatively, you can install it manually:
```sh
npx vsce install terminal-link-modifier
```

## 🚀 Usage

1. Open the **VS Code integrated terminal** (`Ctrl+``).
2. Run a command that outputs file paths, for example:

```sh
echo "/var/www/html/index.php"
```

3. Hold **Cmd (Mac) / Ctrl (Windows/Linux) + Click** on the file path.
4. The extension will automatically remove the configured prefix (e.g., /var/www/html/) and open the file search.


## ⚙️ Configuration Options
You can customize the extension in **VS Code settings** (`Ctrl+`, or `Cmd+`, on macOS).

| Setting |	Default |	Description
| --- | --- | --- |
| terminalLinkModifier.removalPrefix |	/var/www/html/	| The prefix to remove from terminal links before searching.

### Example: Changing the Removal Prefix
If your project uses `/app/` instead of `/var/www/html/`, update the setting in `settings.json`:

```json
{
  "terminalLinkModifier.removalPrefix": "/app/"
}
```

## 🛠 Development
Want to contribute or modify the extension? Follow these steps:

1. Clone the repository:
```
git clone https://github.com/DawidWetzler/vscode-terminal-link-modifier.git
```

2. Install dependencies
```
npm install
```
3. Run the extension in **development mode**:
- Open VS Code
- Press F5 to start a new VS Code window with the extension loaded.

## 📌 Notes
- This extension modifies links **before they are searched in the editor**, it does not change the actual terminal output.
- Works best with absolute file paths.

## 🤝 Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

## 📜 License
MIT License