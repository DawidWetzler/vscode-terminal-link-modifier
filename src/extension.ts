import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  type CustomTerminalLink = vscode.TerminalLink & {
    data: string;
  };

  class TerminalLinkModifier
    implements vscode.TerminalLinkProvider<CustomTerminalLink>
  {
    provideTerminalLinks(
      context: vscode.TerminalLinkContext,
      _token: vscode.CancellationToken
    ) {
      const regex = /(?:\/|[a-zA-Z]:[\\/])[\w./\\-]+/g;
      const startIndex = context.line.search(regex);

      if (startIndex === -1) {
        return [];
      }

      const match = context.line.match(regex);

      if (match === null) {
        return [];
      }

      return [
        {
          startIndex,
          length: match[0].length,
          tooltip: "Search for file in editor",
          data: match[0],
        },
      ];
    }

    handleTerminalLink(link: CustomTerminalLink) {
      const config = vscode.workspace.getConfiguration("terminalLinkModifier");
      const removalPrefix: string = config.get(
        "removalPrefix",
        "/var/www/html/"
      );

      vscode.window.showInformationMessage(removalPrefix);

      let modifiedLink = link.data;
      if (modifiedLink.startsWith(removalPrefix)) {
        modifiedLink = modifiedLink.substring(removalPrefix.length);
      }

      console.log(modifiedLink);

      vscode.commands.executeCommand(
        "workbench.action.quickOpen",
        modifiedLink
      );
    }
  }

  context.subscriptions.push(
    vscode.window.registerTerminalLinkProvider(new TerminalLinkModifier())
  );
}
