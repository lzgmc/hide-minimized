const isOverviewWindow = imports.ui.workspace.Workspace.prototype._isOverviewWindow;
const getWindows = imports.ui.altTab.getWindows;

function init() {
}

function enable() {
  imports.ui.workspace.Workspace.prototype._isOverviewWindow = (win) => {
    const show = isOverviewWindow(win);
    return show && !win.get_meta_window().minimized;
  };
}

function disable() {
  imports.ui.workspace.Workspace.prototype._isOverviewWindow = isOverviewWindow;
  imports.ui.altTab.getWindows = getWindows;
}
