import "./ChartBar.css";

const ChartBar = (props) => {
  let fillHeight = "%";

  if(props.maxValue!==0 ) fillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  else fillHeight = '0%';

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: fillHeight }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;