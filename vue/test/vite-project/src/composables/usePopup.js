export function usePopup() {
  let grid = null;

  function getGrid() {
    return grid;
  }

  return {
    getGrid
  }
}