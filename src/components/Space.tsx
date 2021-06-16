type Props = {
  height: number;
  background?: string
}

function Space(props: Props) {
  return (
    <div style={{height: props.height, background: props.background}}/>
  );
}

export {Space};