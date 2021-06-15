let i: number = JSON.parse(window.localStorage.getItem('idMax') || '0') || 0;

function createId() {
  i++;
  window.localStorage.setItem('idMax', JSON.stringify(i));
  return i;
}

export {createId};