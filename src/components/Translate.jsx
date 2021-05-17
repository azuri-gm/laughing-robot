const Translate = (props) => {
  const { ...dataProps } = props;
  const arrProps = Object.keys(dataProps).map((key) => ({
    [key]: dataProps[key],
  }));

  console.log(arrProps);
  return (
    <div>
      <h1>Translate component</h1>
      {/* {arrProps.map((dP) => (
        <span>{dP}</span>
      ))} */}
    </div>
  );
};

export default Translate;
