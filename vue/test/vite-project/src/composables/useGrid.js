export function useGrid() {
  let grid = null;

  function getGrid() {
    return grid;
  }

  return {
    getGrid
  }
}