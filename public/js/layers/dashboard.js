export function createDashboardLayer(font) {
  return function drawDashboard(context) {
    font.draw('A', context, 0, 0);
  };
}
