function model() {
  const cloneValue = (value: any) => {
    return JSON.parse(JSON.stringify(value));
  };
  return {cloneValue};
}

export {model};