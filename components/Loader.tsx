import "./Loader.css";

const Loader = ({
  borderSize,
  size,
}: {
  borderSize?: "1px" | "2px" | "4px" | "6px" | "8px" | "10px";
  size?:
    | "10px"
    | "15px"
    | "20px"
    | "30px"
    | "50px"
    | "60px"
    | "70px"
    | "80px"
    | "90px"
    | "100px";
}) => {
  const style = {
    border: `${borderSize ? borderSize : "5px"} solid #d1d5db`,
    borderRadius: "50%",
    borderTop: `${borderSize ? borderSize : "5px"} solid #475569`,
    width: size ? size : `40px`,
    height: size ? size : `40px`,
  };
  return <div className="my_custom_loader" style={style}></div>;
};

export default Loader;
